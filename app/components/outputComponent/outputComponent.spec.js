describe("Output controller test", function () {
    let ctrl, $componentController;
    beforeEach(() => {
        module('firstApp');
    });

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should call onDelete function of main controller', function () {
        let onDeleteSpy = jasmine.createSpy('onDelete');
        let bindings = {myString: {}, onDelete: onDeleteSpy};
        ctrl = $componentController('outputComponent', null, bindings);
        ctrl.delete(3);

        expect(onDeleteSpy).toHaveBeenCalledWith({index : 3});
    });


    it('should call onReset function of main controller', function () {
        let onResetSpy = jasmine.createSpy('onReset');
        let bindings = {myString: {}, onReset: onResetSpy};
        ctrl = $componentController('outputComponent', null, bindings);
        ctrl.reset(3);

        expect(onResetSpy).toHaveBeenCalledWith({index : 3});
    });
});