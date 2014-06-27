'use strict';

/**
 * @ngdoc service
 * @name impaqApp.Contact
 * @description
 * # Contact
 * Factory in the impaqApp.
 */
angular.module('impaqApp')
    .factory('Contact', ['$resource', function ($resource) {
        return $resource('http://users.impaqgroup.com' + '/:id', {id: '@id'}, {
            query: {method: 'GET', url: 'data/contacts.json', isArray: true},
            get: {method: 'GET', url: 'data/contact:id.json'},
            save: {method: 'GET', url: 'data/contact:id.json'},
//            save: {method: 'POST'},
            create: {method: 'POST'},
            remove: {method: 'POST'},
            updateMultiple: {method: 'POST', url: 'data/contact/update/:id'}
        });
    }]);
