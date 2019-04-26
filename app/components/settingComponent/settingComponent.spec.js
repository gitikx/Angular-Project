describe("Setting component test", function () {
    let ctrl, $rootScope, $compile, element, $scope, langService;

    beforeEach(() => {
        module('firstApp');
        inject(function (_$rootScope_, _$compile_, _$httpBackend_, languageService) {
            langService = languageService;
            _$httpBackend_.whenGET("./languages/ru.json").respond({
            });
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new()
            element = $compile('<setting-component display="settingDisplay" name="welcome" on-change="changeSettings(lang, name)" langs="languages" current="currentLanguage"></setting-component>')($scope);
            $scope.$digest();
            ctrl = element.controller('settingComponent');
        })
    });


    it('should call change language function', function () {
        $scope.changeSettings = jasmine.createSpy("changeLanguage");
        element.find("select").controller("ngModel").$setViewValue({title: "Engilsh", name: "en"});
        let button = element.find("button", "okbutton");
        button.triggerHandler("click");

        expect($scope.changeSettings).toHaveBeenCalledWith({title: "Engilsh", name: "en"});
    });

    it("initialize russian language", function () {
        expect(ctrl.current).toEqual({title: "Русский", name: "ru"});
    });

    it("should close window on button exit", function () {
        let close = element.find("button", "exit");
        ctrl.exit = jasmine.createSpy("exit()");
        close.triggerHandler("click");

        expect(ctrl.display).toBeFalsy();
    });

});