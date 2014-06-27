'use strict';

/**
 * @ngdoc overview
 * @name impaqApp
 * @description
 * # impaqApp
 *
 * Main module of the application.
 */
angular
    .module('impaqApp', [
        'ngResource',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/contacts', {
                templateUrl: 'views/contacts.html',
                controller: 'ContactCtrl'
            })
            .when('/contact/edit/:id', {
                templateUrl: 'views/contact_edit.html',
                controller: 'ContactEditCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
