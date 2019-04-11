describe("Input component test", function () {
  var $compile, $rootScope, $scope, langService;
  var ctrl, element;

  beforeEach(() => {
    module('firstApp');
  });

  beforeEach(() => {
    module('components/inputComponent/input.html');
  });

  beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_, languageService) {
    langService = languageService;
    _$httpBackend_.whenGET("./languages/en.json").respond({
      "title": "English",
      "noelements": "Array is empty!",
      "add": "Add",
      "onlystrings": "String contains only symbols.",
      "green": "Fresh",
      "yellow": "Lain",
      "red": "Rotten",
      "remove": "Remove",
      "reset": "Reset"
    });
    _$httpBackend_.whenGET("./languages/ru.json").respond({
      "title": "Русский",
      "noelements": "Список пуст!",
      "add": "Добавить",
      "onlystrings": "Строка содержит только символы.",
      "green": "Свежий",
      "yellow": "Полежавший",
      "red": "Тухлый",
      "remove": "Удалить",
      "reset": "Сбросить"
    });
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $scope = $rootScope.$new();
    element = $compile('<input-component></input-component>')($scope);
    $scope.$digest();
    ctrl = element.controller('inputComponent');
  }));

  it('button add should call onCreate method', function () {
    var spy = jasmine.createSpy();
    element.find("input").controller("ngModel").$setViewValue('test');
    ctrl.onCreate = spy;
    var button = element.find("button");
    button.triggerHandler('click');

    expect(spy).toHaveBeenCalledWith({ input: "test" });
  });

  it('should call languageService function on select changed', function () {
    var spy = jasmine.createSpy("spy");
    langService.changeLanguage = spy;
    element.find("select").controller("ngModel").$setViewValue({ title: 'Русский', name: 'ru' });

    expect(spy).toHaveBeenCalledWith({ title: 'Русский', name: 'ru' });
  })

});