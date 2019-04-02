describe("Output controller test", function () {
    var ctrl;
    beforeEach(() => {
        module('firstApp');
    });

    beforeEach(inject(function (_$componentController_) {
        ctrl = _$componentController_('outputComponent', null, {
            onDelete: (index) => {
                return index.index;
            },
            onReset: (index) => {
               return index.index;
            }
        });
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
      });

    it('should call onDelete function', function () {
        expect(ctrl.delete(3)).toBe(3);
    });


    it('should call onReset function', function () {
        expect(ctrl.reset(3)).toBe(3);
    });
});