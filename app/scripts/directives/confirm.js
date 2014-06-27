'use strict';

/**
 * @ngdoc directive
 * @name impaqApp.directive:confirm
 * @description
 * # Usage: <button confirm-message="Are you sure"? confirm-action="takeAction()">delete</button>
 */
angular.module('impaqApp')
    .directive('confirm', function () {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                element.bind('click', function () {
                        var message = attrs.confirmMessage;
                        if (message && window.confirm(message)) {
                            $scope.$apply(attrs.confirm);
                        }
                    }
                );
            }
        };
    });
