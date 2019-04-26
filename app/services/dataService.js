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
   function dataService($filter) {
      this.colors = require('./resources/colors')
      this.array = [];
      this.allElementsRed = true;
      let digitFilter = $filter("digitFilter");

      /**
       * Смена языков обьектов
       */
      this.changeLanguage = () => {
         _.forEach(this.array, function (element) {
            element.label = digitFilter(element.text);
         });
      }

      /**
       * Функция обновления цветов элементов в массиве.
       */
      this.checkColors = () => {
         let allRed = true;
         let time = new Date();
         _.forEach(this.array, function (element) {
            if (element.color === colors[3].colorCode) {
               return;
            }
            else {
               let timeOfExisting = (time - element.time) / 1000;
               if (timeOfExisting >= 30 && timeOfExisting <= 60) {
                  element.color = colors[2].colorCode;
                  allRed = false;
               }
               else if (timeOfExisting > 60) element.color = colors[3].colorCode;
               else allRed = false;
            }
         });
         this.allElementsRed = allRed;
      }

      /**
       * Функция для добавления обьекта в массив. Генерирует обьект с текстом, который приходит параметром, с зеленым цветом и текущим временем.
       * 
       * @param {string} - текст обьекта 
       */
      this.push = (input) => {
         var object = {
            text: input,
            time: new Date(),
            color: 'green',
            label: digitFilter(input)
         }
         this.array.push(object);
      };

      /**
      * Функция сброса времени создания элемента
      * 
      * @param {number} - id обьекта в массиве
      */
      this.reset = (index) => {
         this.array[index].color = "green";
         this.array[index].time = new Date();
      }

      /**
       * Функция удаления обьекта из массива по id
       * 
       * @param {number} - id обьекта в массиве
       */
      this.remove = (index) => {
         this.array.splice(index, 1);
      }
   }
}
