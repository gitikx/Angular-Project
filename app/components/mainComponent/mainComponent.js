module.exports = function (app) {
    /**
     * Компонент, содржащий компоненты добавления и отображения строк.
     */
    app.component("mainComponent", {
        templateUrl: "./components/mainComponent/mainComponent.html",
        controller: mainController
    })
    function mainController(dataService){
        this.input;
        this.textlist = dataService.getArray();
        this.push = () => {
            dataService.push(this.input);
        }
        this.changeLanguage = () => {
            languageService.changeLanguage(this.language);
         }
             /**
       * Функция удаления элемента из массива по индексу.
       * 
       * @param {Number} index - индекс элемента
       */
      this.remove = (index) => {
        dataService.remove(index);
     }
      /**
      * Функция обновления даты создания обьекта по индексу. Вызывает интервал для проверки состояния обьектов, если он еще не запущен.
      * 
      * @param {Number} index - индекс элемента
      */
     this.reset = (index) => {
        dataService.reset(index);
     }
    }
}