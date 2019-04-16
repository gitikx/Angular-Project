module.exports = function (app) {
   app.component("outputComponent", {
      bindings: {
         textlist: '<',
         onDelete: '&',
         onReset: '&'
      },
      template: require('./outputComponent.html'),
      controller: outputCtrl
   });

   /**
    * Регистрация контроллера для вывода обьектов.
    * 
    * @constructor
    */

   function outputCtrl() {

      /**
      * Функция сброса таймера элемента
      * 
      * @param {Number} index - индекс элемента
      */
      this.reset = (index) => this.onReset({ index });

      /**
       * Функция удаления элемента из массива
       * 
       * @param {Number} index - индекс элемента
       */
      
      this.delete = (index) => this.onDelete({ index });
   }
};