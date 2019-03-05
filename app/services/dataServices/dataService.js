module.exports = function(app){
   app.service("dataService", dataService);
function dataService() {
   this.mas = [];
   this.check = function () {
      this.mas.forEach(function(element){
         var timeCheckConclusion = (new Date() - element.time)/1000;
         if(timeCheckConclusion < 30){
            element.color = "green";
         }
         else if(timeCheckConclusion >=30 && timeCheckConclusion<=60){
             element.color = "yellow";
         }
         else if(timeCheckConclusion >  60){
             element.color = "red";
         }; 
      })
   }
   this.push = function (input) {
      var object = {
         text : input,
         time : new Date(),
         color : 'green'
      }
      this.mas.push(object);
   };
   this.remove = function (index) {
     this.mas.splice(index, 1);
   }
}
}