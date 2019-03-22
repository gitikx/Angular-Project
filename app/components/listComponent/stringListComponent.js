module.exports = function (app) {
   app.component("stringListComponent", {
      bindings:{
         textlist : '<',
         remove : '&',
         reset : '&'
      },
      templateUrl: './components/listComponent/stringList.html',
      controller: listCtrl
   });
   /**
    * Сервис для операций с элементами массива
    * 
    * @constructor
    * @param {object} dataService - сервис для работы с данными
    * @param {*} $interval - angular сервис для работы с интервалом
    */
   function listCtrl(dataService) {
      // this.textList = dataService.getArray();
  
   }
};