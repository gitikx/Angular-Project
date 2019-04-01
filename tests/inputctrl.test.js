describe("Тест компонента ввода", function () {
  var ctrl;
  beforeEach(() => {
    module('firstApp');
  });

  beforeEach(inject(function (_$componentController_) {
    var main = _$componentController_("mainComponent");
    ctrl = _$componentController_('inputComponent', null, {
      onCreate: (text) => {
        
        if (typeof text === "undefined") throw "text is undefined";
      }
    });
  }));

  it('не должен позволять добавлять пустой элемент', function () {
    ctrl.create();
  });
});