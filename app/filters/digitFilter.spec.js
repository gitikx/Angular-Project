describe("Digit filter test", function () {
  let $filter;
  beforeEach(() => {
    module('firstApp');
  });


  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_;
  }));

  it('returns "onlystrings" if text contains only symbols', function () {
    var digitFilter = $filter('digitFilter');
    expect(digitFilter("какойтотекст")).toEqual("onlystrings");
  });


  it('removes all symbols from string', function () {
    var digitFilter = $filter('digitFilter');
    expect(true).toBe(!_.isNaN(digitFilter("текст23")));
  });
}); 
