'use strict';

describe('Directive: confirm', function () {

    // load the directive's module
    beforeEach(module('impaqApp'));

    var element;
    var scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should assign click handler to the element', inject(function ($compile) {
        scope.clicked = false;
        scope.handler = function() {
            scope.clicked = true;
        };
        element = angular.element('<a confirm="handler" confirm-message="message">link</a>');
        element = $compile(element)(scope);

//        element[0].click();
//        browserTrigger(element, 'click');

        expect(scope.clicked).toBeTruthy();
    }));
});
