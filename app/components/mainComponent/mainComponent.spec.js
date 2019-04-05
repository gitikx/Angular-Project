describe("Main controller test", function () {
    let ctrl, $componentController;
    beforeEach(() => {
        module('firstApp');
    });

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

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