module.exports = function (app) {
    /**
     * Компонент, содржащий компоненты добавления и отображения строк.
     */
    app.component("mainComponent", {
        template: require('./mainComponent.html'),
        controller: mainCtrl
    })

    function mainCtrl(dataService, $timeout, languageService) {
        let ctrl = this;
        ctrl.interval;
        this.textlist = dataService.array;
        this.welcome = "Anomym";
        this.languages = languageService.languages;
        this.currentLanguage = this.languages[0];

        this.display = () => {
            this.settingDisplay = true;
        }

        /**
        * Функция добавления элемента в массив.
        */
        this.createObject = (input) => {
            if (typeof input != "undefined") {
                dataService.push(input);
                startInterval();
            }
        }

        /**
        * Функция изменения языка.
        */
        this.changeSettings = (lang, name) => {
            this.currentLanguage = lang;
            languageService.changeLanguage(lang);
            this.welcome = name;
        }

        /** 
        * Функция удаления элемента из массива по индексу.
        * 
        * @param {Number} index - индекс элемента
        */
        this.removeObject = (index) => {
            dataService.remove(index);
        }

        /**
        * Функция обновления даты создания обьекта по индексу. Вызывает интервал для проверки состояния обьектов, если он еще не запущен.
        * 
        * @param {Number} index - индекс элемента
        */
        this.resetObject = (index) => {
            dataService.reset(index);
            startInterval();
        }

        /**
         * Запуск функции проверки элементов в массиве
         */
        let startInterval = () => {
            if (!angular.isDefined(ctrl.interval)) {
                intervalFunction();
            };
        };

        /**
         * Функция проверки элементов в массиве
         */
        let intervalFunction = () => {
            dataService.allElementsRed = false;
            dataService.checkColors();
            ctrl.interval = $timeout(() => {
                if (dataService.allElementsRed) {
                    $timeout.cancel(ctrl.interval);
                    ctrl.interval = undefined;
                }
                else intervalFunction();
            }, 1000)
        };
    }
}