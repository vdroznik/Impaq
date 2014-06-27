'use strict';

describe('Controller: ContactEditCtrl', function () {

    // load the controller's module
    beforeEach(module('impaqApp'));

    var contactEditCtrl,
        scope,
        contactMock,
        contactId = 5;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        contactMock = {
            get: function() {}
        };

        spyOn(contactMock, 'get');

        contactEditCtrl = $controller('ContactEditCtrl', {
            $scope: scope,
            $routeParams: { id: contactId },
            Contact: contactMock
        });
    }));

    it('should load contact for editing', function () {
        expect(contactMock.get).toHaveBeenCalledWith({id: contactId});
    });
});
