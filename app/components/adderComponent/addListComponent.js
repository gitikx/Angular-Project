
module.exports = function(app){
   app.component("addStringComponent", {
    templateUrl: './components/adderComponent/add.html',
    controller: addController
 });
 function addController(dataService) {
    this.input = "";
    this.push = function (){
       dataService.push(this.input);
    }
 }; 
}