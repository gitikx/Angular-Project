module.exports = function (app) {
    app.filter("digitFilter", digitFilter);
    /**
     *
     * @param {object} $translate -- angular сервис для работы с переводом текста 
     */
    function digitFilter() {
        /**
         * Принимает строку, убирает все символы из строки и возвращает числовую строку либо предупреждение, что в строке только символы.
         * 
         * @param {string} input - строка для форматирования
         * @returns {string} - отформатированная строка без символов
         */
        return function (input) {
            var string = _.replace(input, /[^\d]/gi, '');
            if (string == '') {
                return "onlystrings";
            }
            return string;
        }
    };
}