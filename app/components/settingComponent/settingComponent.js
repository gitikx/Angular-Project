module.exports = function (app) {
    /**
     * Компонент, содржащий компоненты добавления и отображения строк.
     */
    app.component("settingComponent", {
        bindings: {
            display: '=',
            name: '='
        },
        template: require('./settingComponent.html'),
        controller: settingCtrl
    })

    function settingCtrl(languageService) {
        this.display = "none";
        this.languages = languageService.languages;
        this.currentLanguage = this.languages[1];
        languageService.changeLanguage(this.currentLanguage);
        this.input;

        /**
        * Функция закрытия диалога.
        */
        this.hide = () => {
            if (this.input != "" && !_.isUndefined(this.input)) {
                this.name = this.input;
                this.display = "none";
            }
        }

        /**
        * Функция изменения языка.
        */
        this.changeLanguage = () => {
            languageService.changeLanguage(this.currentLanguage);
        }
    }
}