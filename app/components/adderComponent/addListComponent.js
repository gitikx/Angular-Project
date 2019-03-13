module.exports = function(app){
   /**
    * Регистрация компонента добавления строк
    */
   app.component("addStringComponent", {
    templateUrl: './components/adderComponent/add.html',
    controller: addController
 });
   /**
    * Конструктор контроллера
    * 
    * @constructor
    * @param {object} $translate - angular сервис работы с переводом текста
    * @param {object} dataService - сервис работы с данными
    */
 function addController($translate, dataService) {
    this.lang = "ru";
    this.input = "";
    this.push = function (){
       dataService.push(this.input);
       dataService.redMarker = false;
    }
    this.changeLang = function(){
      $translate.use(this.lang);
    }
 }; 
}