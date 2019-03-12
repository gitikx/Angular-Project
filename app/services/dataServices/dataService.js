module.exports = function (app) {
   app.service("dataService", dataService);
   function dataService() {
      this.redMarker = true;
      this.mas = [];
      this.check = function () {
         let redMarker = true;
         this.mas.forEach(function (element) {
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
      this.push = function (input) {
         var object = {
            text: input,
            time: new Date(),
            color: 'green'
         }
         this.mas.push(object);
      };
      this.remove = function (index) {
         this.mas.splice(index, 1);
      }
   }
}
