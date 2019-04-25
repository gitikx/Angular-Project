module.exports = function (app) {
    /**
     * Компонент, содржащий компоненты добавления и отображения строк.
     */
    app.component("settingComponent", {
        bindings: {
            langs: '<',
            display: '=',
            name: '<',
            onChange: '&',
            current: '<'
        },
        template: require('./settingComponent.html'),
        controller: settingCtrl
    })

    function settingCtrl() {
        this.display = false;

        /**
        * Функция закрытия диалога.
        */
        this.hide = () => {
            if (this.name != "" && !_.isUndefined(this.name)) {
                this.onChange({ lang: this.current, name: this.name });
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