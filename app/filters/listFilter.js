module.exports = function (app) {

    app.filter("listFilter", listFilter);

    /**
     *
     * @param {object} $translate -- angular сервис для работы с переводом текста 
     */
    function listFilter() {

        /**
         * Принимает строку, убирает все символы из строки и возвращает числовую строку либо предупреждение, что в строке только символы.
         * 
         * @param {string} input - строка для форматирования
         * @returns {string} - отформатированная строка без символов
         */
        return (object) => {
            return false;
        }
    };
}