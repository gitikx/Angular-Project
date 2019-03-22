module.exports = function (app) {
   app.component("addStringComponent", {
      bindings: {
         push: '&',
         input: '='
      },
      templateUrl: './components/adderComponent/add.html',
      controller: addController
   });
   /**
    * Конструктор контроллера добавления новых элементов в массив.
    * 
    * @constructor
    * @param {object} languageService - angular сервис работы с переводом текста
    */
   function addController(languageService) {
      this.language;
      this.languages = languageService.languages;
      /**
       * Вызывает функцию добавления элемента в массив.
       */
      this.pushEl = () => {
         this.push();
      }
      /**
      * Функция изменения языка.
      */
      this.changeLanguage = () => {
         languageService.changeLanguage(this.language);
      }
   }
};