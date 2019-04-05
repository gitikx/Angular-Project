describe("Input component test", function () {
  var ctrl, $componentController;
  beforeEach(() => {
    module('firstApp');
  });

  beforeEach(inject(function (_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should call onCreate() function of main controller', function () {
    let onCreateSpy = jasmine.createSpy('onCreate');
    let bindings = { myString: {}, onCreate: onCreateSpy };
    ctrl = $componentController('inputComponent', null, bindings);
    ctrl.input = "345";
    ctrl.create(3);

    expect(onCreateSpy).toHaveBeenCalledWith({ input: "345" });
  });
});