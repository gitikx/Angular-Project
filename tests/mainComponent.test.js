describe("Main controller test", function () {
    var ctrl;
    beforeEach(() => {
        module('firstApp');
    });

    beforeEach(inject(function (_$componentController_) {
        ctrl = _$componentController_('mainComponent');
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
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

    it('should create object calling create function of data service', function () {
        expect(ctrl.textlist.length).toBe(0);
        ctrl.createObject("333");
        expect(ctrl.textlist.length).toBe(1);
    });

    it('should add element while calling create function', function () {
        ctrl.createObject("333");
        ctrl.textlist[0].color = "red";
        ctrl.resetObject(0);
        expect(ctrl.textlist[0].color).toBe("green");
    });

    it('should call reset function of data service', function () {
        ctrl.createObject("333");
        ctrl.textlist[0].color = "red";
        ctrl.resetObject(0);
        expect(ctrl.textlist[0].color).toBe("green");
    });
});