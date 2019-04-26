describe("Input component test", function () {
  var $compile, $rootScope, $scope, langService;
  var ctrl, element;

  beforeEach(() => {
    module('firstApp');
    inject(function (_$compile_, _$rootScope_, _$httpBackend_, languageService) {
      langService = languageService;
      _$httpBackend_.whenGET("./languages/ru.json").respond({
      });
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      $compile = _$compile_;
      element = $compile('<input-component class="inputline" on-create="$ctrl.createObject(input)"></input-component>')($scope);
      $rootScope.$digest();
      ctrl = element.controller('inputComponent');
    });
  });

  it('button add should call createObject method', function () {
    var spy = jasmine.createSpy("createObject spy");
    element.find("input").controller("ngModel").$setViewValue('test');
    $scope.$ctrl = { createObject: spy };
    var button = element.find("button");
    button.triggerHandler('click');

    expect(spy).toHaveBeenCalledWith("test");
  });

});