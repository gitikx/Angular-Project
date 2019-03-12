module.exports = function (app) {
   app.component("stringListComponent", {
      templateUrl: './components/listComponent/stringList.html',
      controller: listCtrl,
   });
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