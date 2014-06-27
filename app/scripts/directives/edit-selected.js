'use strict';

/**
 * @ngdoc directive
 * @name impaqApp.directive:editSelected
 * @description
 * # editSelected
 */
angular.module('impaqApp')
    .directive('editSelected', ['$location', function ($location) {
        return {
            restrict: 'A',
            scope: {
                contacts: "="
            },
            link: function ($scope, element, attrs) {
                element.bind('click', function () {
                    var selectedContacts = [];
                    angular.forEach($scope.contacts, function(contact) {
                        if (contact.checked) {
                            selectedContacts.push(contact.id);
                        }
                    });

                    if (selectedContacts.length) {
                        $location.path(attrs.editSelected + '/' + selectedContacts.join(','));
                    }
                    $scope.$apply();

                    return false;
                });
            }
        };
    }]);
