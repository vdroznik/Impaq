'use strict';

/**
 * @ngdoc function
 * @name impaqApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the impaqApp
 */
angular.module('impaqApp')
    .controller('ContactCtrl', ['$scope', 'Contact', function ($scope, contacts) {
        $scope.contacts = contacts.query();

        $scope.removeContact = function (contact) {
            contact.$remove();
        };
    }]);
