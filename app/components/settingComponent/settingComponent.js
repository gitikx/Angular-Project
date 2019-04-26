module.exports = function (app) {
    /**
     * Компонент, содржащий компоненты добавления и отображения строк.
     */
    app.component("settingComponent", {
        bindings: {
            config: '<',
            onResolve: '&',
            onCancel: '&'
        },
        template: require('./settingComponent.html'),
        controller: settingCtrl
    })

    function settingCtrl() {

        /**
        * Функция применения настроек.
        */
        this.submit = () => {
            this.onResolve({config : this.config});
        }

    }
}