module.exports = function (app) {
    app.filter("digitFilter", digitFilter);
    function digitFilter($translate) {
        return function (input) {
            var string = input.replace(/[^\d]/gi, '');
            if (string == '') {
                return $translate.instant("onlystrings");
            }
            return string;
        }
    };
}