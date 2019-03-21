module.exports = function (app) {
   app.component("stringListComponent", {
      templateUrl: './components/listComponent/stringList.html',
      controller: listCtrl,
   });
   /**
    * Сервис для операций с элементами массива
    * 
    * @constructor
    * @param {object} dataService - сервис для работы с данными
    * @param {*} $interval - angular сервис для работы с интервалом
    */
   function listCtrl(dataService,) {
      this.textList = dataService.getArray();
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
};