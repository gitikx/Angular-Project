module.exports = function (app) {
   app.component("inputComponent", {
      bindings: {
         onCreate: '&'
      },
      template: require('./inputComponent.html'),
      controller: inputCtrl

   });

   /**
    * Конструктор контроллера добавления новых элементов в массив.
    * 
    * @constructor
    */
   function inputCtrl() {
      this.input;
      var ctrl = this;

      /**
       * Вызывает функцию добавления элемента в массив.
       */
      this.create = () => ctrl.onCreate({ input: this.input });
   }
};