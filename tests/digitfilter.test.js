describe("тест числового фильтра", function () {
  var $filter;
  beforeEach(() => {
    module('firstApp');
  });


  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_;
  }));

  it('возвращает "onlystrings" если в строке только символы', function () {
    var digitFilter = $filter('digitFilter');
    expect(digitFilter("какойтотекст")).toEqual("onlystrings");
  });


  it('убирает символы из строки', function () {
    var digitFilter = $filter('digitFilter');
    expect(true).toBe(!_.isNaN(digitFilter("текст23")));
  });
}); 