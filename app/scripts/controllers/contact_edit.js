'use strict';

/**
 * @ngdoc function
 * @name impaqApp.controller:ContactEditCtrl
 * @description
 * # ContactEditCtrl
 * Controller of the impaqApp
 */
angular.module('impaqApp')
    .controller('ContactEditCtrl', ['$scope', '$routeParams', '$location', 'Contact',
        function ($scope, $routeParams, $location, contacts) {
            $scope.contact = null;
            $scope.multiple = false;
            $scope.errors = {};

            if ($routeParams.id && $routeParams.id.indexOf(',') === -1) {
                $scope.contact = contacts.get({'id': $routeParams.id});
            } else {
                $scope.contact = {id: $routeParams.id};
                $scope.multiple = true;
            }

            $scope.save = function () {
                if (!this.multiple) {
                    this.contact.$save().then(this.saveSuccess, this.saveError);
                } else {
                    contacts.updateMultiple(this.contact);
                }
            };

            $scope.saveSuccess = function () {
                $location.path('/contacts');
            };

            $scope.saveError = function (response) {
                $scope.submitted = true;
                if (response.data.code === 400) {
                    $scope.errors = response.data;
                } else {
                    $scope.errors = {message: 'Ooops. Something bad happened.'};
                }
            };
        }]);
