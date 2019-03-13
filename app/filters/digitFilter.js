module.exports = function (app) {
    /**
     * Регистрация фильтра, удаляющего символы из строки
     */
    app.filter("digitFilter", digitFilter);
    /**
     * 
     * @param {object} $translate -- angular сервис для работы с переводом текста 
     */
    function digitFilter($translate) {
        /**
         * Принимает строку, убирает все символы из строки и возвращает числовую строку либо предупреждение, что в строке только символы
         * 
         * @param {string} input - строка для форматирования
         * @returns {string} - отформатированная строка без символов
         */
        return function (input) {
            var string = input.replace(/[^\d]/gi, '');
            if (string == '') {
                return $translate.instant("onlystrings");
            }
            return string;
        }
    };
}