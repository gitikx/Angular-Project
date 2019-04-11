describe("Output controller test", function () {
    let ctrl, $scope, $componentController;
    beforeEach(() => {
        module('firstApp');
    });

    beforeEach(() => {
        module('components/outputComponent/output.html');
    });

    beforeEach(inject(function (_$componentController_, _$rootScope_, _$compile_, dataService) {
        service = dataService;
        $componentController = _$componentController_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $scope = $rootScope.$new();
        element = $compile('<output-component></output-component>')($scope);
        $rootScope.$digest();
        ctrl = element.controller('outputComponent');
    }));


    it('should show elements if they exist', function () {
        ctrl.textlist = { text: "23123123" };
        $rootScope.$digest();
        expect(element.html()).toContain("title");
    });

    it('should not show elements if they exist', function () {
        expect(element.html()).not.toContain("title");
    });

    it('should call onDelete function of main controller', function () {
        let onDeleteSpy = jasmine.createSpy('onDelete');
        let bindings = { myString: {}, onDelete: onDeleteSpy };
        ctrl = $componentController('outputComponent', null, bindings);
        ctrl.delete(3);

        expect(onDeleteSpy).toHaveBeenCalledWith({ index: 3 });
    });


    it('should call onReset function of main controller', function () {
        let onResetSpy = jasmine.createSpy('onReset');
        let bindings = { myString: {}, onReset: onResetSpy };
        ctrl = $componentController('outputComponent', null, bindings);
        ctrl.reset(3);

        expect(onResetSpy).toHaveBeenCalledWith({ index: 3 });
    });
});