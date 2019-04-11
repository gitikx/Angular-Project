describe("Main controller test", function () {
    let ctrl, $componentController, $rootScope, $compile, element;
    beforeEach(() => {
        module('firstApp');
    });

    beforeEach(() => {
        module('components/mainComponent/main.html');
        module('components/inputComponent/input.html');
        module('components/outputComponent/output.html');
    });

    beforeEach(inject(function (_$componentController_, _$rootScope_, _$compile_, _$httpBackend_) {
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
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $componentController = _$componentController_;
        element = $compile("<main-component></main-component>")($rootScope.$new());
        $rootScope.$digest();
    }));

    it('should show added element', function () {
        element.find("input").controller("ngModel").$setViewValue('test3');
        var button = element.find("button");
        button.triggerHandler('click');
        expect(element.html()).toContain('background-color');
    });

    it('interval shouldnt be defined', function () {
        ctrl = $componentController('mainComponent');

        expect(ctrl.interval).toBeUndefined();
    });

    it('should define textlist from data service', function () {
        ctrl = $componentController('mainComponent');

        expect(ctrl.textlist).toBeDefined();
    });

    it('should start interval while calling create function', function () {
        ctrl = $componentController('mainComponent');
        ctrl.createObject("333");

        expect(ctrl.interval).toBeDefined();
    });

    it('should call service method while using method create', function () {
        ctrl = $componentController('mainComponent');

        expect(ctrl.textlist.length).toBe(0);
        ctrl.createObject("333");
        expect(ctrl.textlist.length).toBe(1);
    });

    it('should call reset function of data service', function () {
        ctrl = $componentController('mainComponent');
        ctrl.createObject("333");
        ctrl.textlist[0].color = "red";
        ctrl.resetObject(0);

        expect(ctrl.textlist[0].color).toBe("green");
    });
});