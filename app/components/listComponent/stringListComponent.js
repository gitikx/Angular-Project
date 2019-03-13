module.exports = function (app) {
   /**
    * Регистрация компонента для отображения строк.
    */
   app.component("stringListComponent", {
      templateUrl: './components/listComponent/stringList.html',
      controller: listCtrl,
   });
   /**
    * 
    * 
    * @param {object} dataService - сервис для работы с данными
    * @param {*} $interval - angular сервис для работы с интервалом
    */
   function listCtrl(dataService, $interval) {
      this.textList = dataService.mas;
      this.remove = function (index) {
         dataService.remove(index);
      }
      $interval(function () {
         if(!dataService.redMarker){
            dataService.check();
         }
      }, 1000);
   }
}