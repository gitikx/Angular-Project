module.exports = function (app) {
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
   function addController($translate, dataService, $interval) {
      this.lang = "ru";
      this.input = "";
      this.push = function () {
         dataService.push(this.input);
         dataService.redMarker = false;
         console.log(angular.isDefined(dataService.interval));
         if (!angular.isDefined(dataService.interval)) {
            dataService.interval = $interval(function () {
               dataService.check();
               if (dataService.redMarker) {
                  $interval.cancel(dataService.interval);
                  dataService.interval = undefined;
               }
               console.log("interval started");
            }, 1000)
         }
      }
      this.changeLang = function () {
         $translate.use(this.lang);
      };
      this.test = function () {
         dataService.test();
      };
   }
};