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
   function listCtrl(dataService,$interval) {
      this.textList = dataService.mas;
      this.remove = function (index) {
         dataService.remove(index);
      }
      this.reset = function (index) {
         dataService.reset(index);
         dataService.redMarker = false;
         if (!angular.isDefined(dataService.interval)) {
            dataService.interval = $interval(function () {
               dataService.check();
               if (dataService.redMarker) {
                  $interval.cancel(dataService.interval);
                  dataService.interval = undefined;
               }
               console.log("interval started");
            }, 1000);
         }
      }
   }
};