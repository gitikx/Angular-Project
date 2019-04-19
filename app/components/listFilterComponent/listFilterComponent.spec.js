describe("List filter component test", function () {
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
      element = $compile(' <list-filter-component color="color"></list-filter-component>')($scope);
      $scope.$digest();
    });
  });

  it('should change color on select', function () {
    element.find("select").controller("ngModel").$setViewValue({ label: "green", text: 'green' });

    expect($scope.color).toEqual("green");
  });
});