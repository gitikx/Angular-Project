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
   function dataService($translate, $filter, languageService) {
      this.array = [];
      let isAllRed = true;
      let digitFilter = $filter("digitFilter");
       /**
        * Функция обновления цветов элементов в массиве.
        */
      this.checkColors = () => {
         let allRed = true;
         let time = new Date();
         _.forEach(this.array, function (element) {
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
