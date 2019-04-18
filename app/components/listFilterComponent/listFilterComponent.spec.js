describe("Input component test", function () {
  var $compile, $rootScope, $scope, langService;
  var ctrl, element;

  beforeEach(() => {
    module('firstApp');
    inject(function (_$compile_, _$rootScope_, _$httpBackend_, languageService) {
      langService = languageService;
      _$httpBackend_.whenGET("./languages/en.json").respond({
      });
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      $compile = _$compile_;
      element = $compile(' <input-component class="inputline" on-create="$ctrl.createObject(input)"></input-component>')($scope);
      $rootScope.$digest();
      ctrl = element.controller('inputComponent');
    });
  });
});