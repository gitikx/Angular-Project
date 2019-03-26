module.exports = function (app) {
    /**
     * Регистрация сервиса для управления локализацией.
     */
    app.service("languageService", langService);

    function langService($translate) {
        this.languages = require('./resources/langs');
        this.currentLang;
        /**
        * Функция изменения языка.
        * 
        * @param {languageObject} - обьект, содержащий значения языка(name, title) 
        */
        this.changeLanguage = (languageObject) => {
            $translate.use(languageObject.name);
            this.currentLang = languageObject.name;
        }
    }
}