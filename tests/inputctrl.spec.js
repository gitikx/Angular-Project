describe("Input component test", function () {
  var ctrl;
  beforeEach(() => {
    module('firstApp');
  });

  beforeEach(inject(function (_$componentController_) {
    ctrl = _$componentController_('inputComponent', null, {
      onCreate: (text) => {
        return true;
      }
    });
  }));

  it('should be defined', function () {
    expect(ctrl).toBeDefined();
  });

  it('should call onCreate function', function () {
    expect(ctrl.create()).toBe(true);
  });
});