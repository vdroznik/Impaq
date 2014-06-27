'use strict';

describe('Controller: ContactCtrl', function () {

    // load the controller's module
    beforeEach(module('impaqApp'));

    var contactCtrl,
        scope,
        contactMock;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        contactMock = {
            query: function () {
            }
        };

        spyOn(contactMock, 'query');

        contactCtrl = $controller('ContactCtrl', {
            $scope: scope,
            Contact: contactMock
        });
    }));

    it('should load contacts', function () {
        expect(contactMock.query).toHaveBeenCalled();
    });
});
