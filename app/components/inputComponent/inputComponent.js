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
    * @param {object} languageService - angular сервис работы с переводом текста
    */
   function inputCtrl(languageService) {
      this.input;
      var ctrl = this;
      this.languages = languageService.languages;
      this.currentLanguage = this.languages[1];
      languageService.changeLanguage(this.currentLanguage);

      /**
       * Вызывает функцию добавления элемента в массив.
       */
      this.create = () => ctrl.onCreate({ input: this.input });

      /**
      * Функция изменения языка.
      */
      this.changeLanguage = () => {
         languageService.changeLanguage(this.currentLanguage);
      }
   }
};