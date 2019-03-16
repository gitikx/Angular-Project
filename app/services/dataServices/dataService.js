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
   function dataService($translate) {
      this.redMarker = true;
      this.mas = [];
      /**
       * Функция проверки массива на время создания и изменение его цвета.
       */
      this.check = function () {
         let redMarker = true;
         this.mas.forEach(function (element) {
            if (element.color === "red") {
               return;
            };
            console.log("cycle");
            var timeOfExisting = (new Date() - element.time) / 1000;
            if (timeOfExisting < 30) {
               element.color = "green";
               redMarker = false;
            }
            else if (timeOfExisting >= 30 && timeOfExisting <= 60) {
               element.color = "yellow";
               redMarker = false;
            }
            else if (timeOfExisting > 60) {
               element.color = "red";
            };
         })
         this.redMarker = redMarker;
      }
      this.test = function (){
         console($translate.proposedLanguage());
      }
      /**
       * Функция для добавления данных(обьекта) в массив. Генерирует обьект с текстом, который приходит параметром, с зеленым цветом и текущим временем.
       * 
       * @param {string} - текст обьекта 
       */
      this.push = function (input) {
         var object = {
            text: input,
            time: new Date(),
            color: 'green'
         }
         this.mas.push(object);
      };
      this.reset = function(index){
         this.mas[index].color = "green";
         this.mas[index].time = new Date();
      }
      /**
       * Функция удаления обьекта из массива по id
       * 
       * @param {number} - id обьекта в массиве
       */
      this.remove = function (index) {
         this.mas.splice(index, 1);
      }
   }
}
