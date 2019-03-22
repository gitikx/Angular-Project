module.exports = function (app) {
   app.component("stringListComponent", {
      bindings: {
         textlist: '<',
         remove: '&',
         reset: '&'
      },
      templateUrl: './components/listComponent/stringList.html',
      controller: listCtrl
   });
   /**
    * Регистрация контроллера для вывода обьектов.
    * 
    * @constructor
    */
   function listCtrl() {
      /**
      * Функция сброса таймера элемента
      * 
      * @param {Number} index - индекс элемента
      */
      this.resetEl = (index) => {
         this.reset({ index: index });
      }
      /**
       * Функция удаления элемента из массива
       * 
       * @param {Number} index - индекс элемента
       */
      this.removeEl = (index) => {
         this.remove({ index: index });
      }
   }
};