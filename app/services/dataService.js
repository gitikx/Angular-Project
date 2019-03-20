module.exports = function (app) {
   /**
    * Регистрация сервиса dataService
    * dataService предназначен для хранения и обработки необходимых данных
    */
   app.service("dataService", dataService);

   /**
    * Функция сервиса
    * @constructor
    */
   function dataService($interval) {
      let array = [];
      let interval;
      let isAllRed = true;
      let checkColors = function () {
         let allRed = true;
         let time = new Date();
         _.forEach(array, function (element) {
            if (element.color === "red") {
               return;
            }
            else {
               let timeOfExisting = (time - element.time) / 1000;
               if (timeOfExisting >= 30 && timeOfExisting <= 60) {
                  element.color = "yellow";
                  allRed = false;
               }
               else if (timeOfExisting > 60) element.color = "red";
               else allRed = false;
            }
         });
         isAllRed = allRed;
      }
      this.getArray = function () {
         return array;
      }
      /**
       * Функция для добавления обьекта в массив. Генерирует обьект с текстом, который приходит параметром, с зеленым цветом и текущим временем.
       * 
       * @param {string} - текст обьекта 
       */
      this.push = function (input) {
         var object = {
            text: input,
            time: new Date(),
            color: 'green'
         }
         array.push(object);
         start();
      };
      /**
      * Функция сброса времени создания элемента
      */
      this.reset = function (index) {
         array[index].color = "green";
         array[index].time = new Date();
         start();
      }
      /**
       * Функция удаления обьекта из массива по id
       * 
       * @param {number} - id обьекта в массиве
       */
      this.remove = function (index) {
         array.splice(index, 1);
      }
      /**
       * Возвращает текущее 
       */
      this.getRedMarker = function () {
         return isAllRed;
      }
      /**
       * Функция старта интервала с функцией проверки массива
       */
      let start = function () {
         if (!angular.isDefined(interval)) {
            isAllRed = false;
            interval = $interval(function () {
               checkColors();
               if (isAllRed) {
                  $interval.cancel(interval);
                  interval = undefined;
               }
            }, 1000)
         }
      }
   }
}
