module.exports = function (app) {
    /**
     * Компонент, содржащий компоненты добавления и отображения строк.
     */
    app.component("settingComponent", {
        bindings: {
            langs: '<',
            display: '=',
            name: '=',
            onChange: '&',
            current: '='
        },
        template: require('./settingComponent.html'),
        controller: settingCtrl
    })

    function settingCtrl() {
        this.display = false;
        this.input;
        /**
        * Функция закрытия диалога.
        */
        this.hide = () => {
            if (this.input != "" && !_.isUndefined(this.input)) {
                this.name = this.input;
                this.onChange({ lang: this.current });
                this.display = false;
            }
        
        }

        /**
       * Функция закрытия диалога.
       */
        this.exit = () => {
            this.display = false;
        }
    }
}