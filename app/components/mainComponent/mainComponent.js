module.exports = function (app) {
    /**
     * Компонент, содржащий компоненты добавления и отображения строк.
     */
    app.component("mainComponent", {
        templateUrl: "./components/mainComponent/main.html",
        controller: mainCtrl
    })

    function mainCtrl(dataService, $interval) {
        let ctrl = this;
        this.textlist = dataService.array;
        ctrl.interval;

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
        this.changeLanguage = () => {
            languageService.changeLanguage(this.language);
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
        * Функция запуска интервала.
        */
        let startInterval = () => {
            if (!angular.isDefined(ctrl.interval)) {
                dataService.isAllRed = false;
                ctrl.interval = $interval(() => {
                    dataService.checkColors();
                    if (dataService.isAllRed) {
                        $interval.cancel(ctrl.interval);
                        ctrl.interval = undefined;
                    }
                }, 1000)
            }
        }
    }
}