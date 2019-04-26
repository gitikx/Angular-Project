describe("List filter component test", function () {
  var $compile, $rootScope, $scope;
  var element;

  beforeEach(() => {
    module('firstApp');
    inject(function (_$compile_, _$rootScope_, _$httpBackend_, languageService, _$componentController_) {
      langService = languageService;
      _$httpBackend_.whenGET("./languages/ru.json").respond({
      });
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      $compile = _$compile_;
      element = $compile('<list-filter-component text="searchText" color="searchColor"></list-filter-component>')($scope);
      $scope.$digest();
      var controller =  element.controller("listFilterComponent");
    });
  });

  it('should change color on select', function () {
    element.find("select").controller("ngModel").$setViewValue({label: "green", text: 'green'});

    expect($scope.searchColor).toEqual("green");
  });
});