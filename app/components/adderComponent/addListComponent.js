module.exports = function (app) {
   app.component("addStringComponent", {
      templateUrl: './components/adderComponent/add.html',
      controller: addController
   });
   /**
    * Конструктор контроллера добавления новых элементов в массив.
    * 
    * @constructor
    * @param {object} $translate - angular сервис работы с переводом текста
    * @param {object} dataService - сервис работы с данными
    */
   function addController(dataService,languageService, $scope) {
      this.language;
      this.languages = languageService.languages;
      this.input;
      /**
       * Функция добавления элемента в массив. Добавляет элемент в массив и запускает интервал для проверки состояния обьектов, если он еще не запущен.
       */
      this.push = () => {
         if (typeof this.input === "undefined" || this.input.length < 3) return;
         dataService.push(this.input);
      }
      /**
      * Функция для изменения языка.
      */
      this.changeLanguage = () => {
         languageService.changeLanguage(this.language);
      }
   }
};