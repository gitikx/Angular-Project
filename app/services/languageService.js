module.exports = function (app) {
    /**
     * Регистрация сервиса для управления локализацией.
     */
    app.service("languageService", langService);

    function langService($translate, dataService) {
        this.languages = require('./resources/langs');

        /**
        * Функция изменения языка.
        * 
        * @param {languageObject} - обьект, содержащий значения языка(name, title) 
        */
        this.changeLanguage = (languageObject) => {
            $translate.use(languageObject.name).then(() => { dataService.changeLanguage() });
        }
    }
}