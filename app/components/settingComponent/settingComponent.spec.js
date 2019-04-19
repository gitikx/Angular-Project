describe("Setting component test", function () {
    let ctrl, $rootScope, $compile, element, $scope, langService;

    beforeEach(() => {
        module('firstApp');
        inject(function (_$rootScope_, _$compile_, _$httpBackend_, languageService) {
            langService = languageService;
            _$httpBackend_.whenGET("./languages/en.json").respond({
            });
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new()
            element = $compile("<setting-component></setting-component>")($scope);
            $scope.$digest();
            ctrl = element.controller('settingComponent');
        })
    });


    it('should call languageService function on select changed', function () {
        spyOn(langService, "changeLanguage");
        element.find("select").controller("ngModel").$setViewValue({ title: 'Русский', name: 'ru' });

        expect(langService.changeLanguage).toHaveBeenCalled();
    })
});