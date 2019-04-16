describe("Main controller test", function () {
    let ctrl, $componentController, $rootScope, $compile, element, $scope;

    beforeEach(() => {
        module('firstApp');
        inject(function (_$componentController_, _$rootScope_, _$compile_, _$httpBackend_) {
            _$httpBackend_.whenGET("./languages/en.json").respond({
            });
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new()
            $componentController = _$componentController_;
            element = $compile("<main-component></main-component>")($scope);
            $scope.$digest();
            ctrl = $componentController('mainComponent');
        })
    });

    it('interval shouldnt be defined', function () {
        expect(ctrl.interval).toBeUndefined();
    });

    it('should define textlist from data service', function () {
        expect(ctrl.textlist).toBeDefined();
    });

    it('should start interval while calling create function', function () {
        ctrl.createObject("333");

        expect(ctrl.interval).toBeDefined();
    });

    it('should call service method while using method create', function () {
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