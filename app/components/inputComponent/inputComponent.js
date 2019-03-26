module.exports = function (app) {
   app.component("inputComponent", {
      bindings: {
         onCreate: '&'
      },
      templateUrl: './components/inputComponent/input.html',
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
      this.languages = languageService.languages;
      this.currentLanguage = this.languages[1];
      languageService.changeLanguage(this.currentLanguage);
      
      /**
       * Вызывает функцию добавления элемента в массив.
       */
      this.create = () => {
         if(this.input != 0 && typeof this.input !== "undefined") this.onCreate({input : this.input});
      }

      /**
      * Функция изменения языка.
      */
      this.changeLanguage = () => {
         languageService.changeLanguage(this.currentLanguage);
      }
   }
};