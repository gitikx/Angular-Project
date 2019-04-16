describe("Output controller test", function () {
    let ctrl, $scope;
    beforeEach(() => {
        module('firstApp');
        inject(function (_$componentController_, _$rootScope_, _$compile_, dataService) {
            service = dataService;
            $componentController = _$componentController_;
            $rootScope = _$rootScope_;
            $compile = _$compile_;
            $scope = $rootScope.$new();
            element = $compile('<output-component class="output" textlist="$ctrl.textlist" on-delete="$ctrl.removeObject(index)" on-reset="$ctrl.resetObject(index)"></output-component>')($scope);
            $rootScope.$digest();
            ctrl = element.controller('outputComponent');
        }
        )
    });

    it('should not show elements if they exist', function () {
        expect(element.html()).not.toContain("title");
    });

    it('should show elements if they exist', function () {
        $scope.$ctrl = { textlist: "2" };
        $scope.$digest();

        expect(element.html()).toContain("title");
    });

    it('should call onDelete function of main controller', function () {
        var spy = jasmine.createSpy("removeObject");
        $scope.$ctrl = { textlist: "2", removeObject: spy };
        $scope.$digest();
        var button = element.find('button');
        button.triggerHandler('click');

        expect(spy).toHaveBeenCalledWith(0);
    });


    it('should call onReset function of main controller', function () {
        var spy = jasmine.createSpy("removeObject");
        $scope.$ctrl = { textlist: "2", resetObject: spy };
        $scope.$digest();
        var button = element.find('button');
        button.triggerHandler('click');

        expect(spy).toHaveBeenCalledWith(0);
    });
});