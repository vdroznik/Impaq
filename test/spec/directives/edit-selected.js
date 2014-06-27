'use strict';

describe('Directive: editSelected', function () {

  // load the directive's module
  beforeEach(module('impaqApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-selected></edit-selected>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editSelected directive');
  }));
});
