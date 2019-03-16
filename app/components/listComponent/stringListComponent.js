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
         $interval.cancel(this.inter); //пример остановки интервала. Почитай пожалуйста про это.
      }
      this.reset = function(index){
         dataService.reset(index);
         dataService.redMarker = false;
      }
      this.inter = $interval(function () {
         if(!dataService.redMarker){
            console.log("interval");
            dataService.check();
         }
      }, 1000);
   }
}