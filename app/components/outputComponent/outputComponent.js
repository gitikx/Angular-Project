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

   function outputCtrl($scope) {

      /**
      * Функция сброса таймера элемента
      * 
      * @param {Number} index - индекс элемента
      */
      this.reset = (index) => this.onReset({ index });

      this.search;
      /**
       * Функция удаления элемента из массива
       * 
       * @param {Number} index - индекс элемента
       */

      this.delete = (index) => this.onDelete({ index });

      $scope.myFilter = function (item) {
         if (item.color == "red") {
            return item;
         }
      };
   }
};