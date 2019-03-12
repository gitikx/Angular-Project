module.exports = function(app){
   app.component("addStringComponent", {
    templateUrl: './components/adderComponent/add.html',
    controller: addController
 });
 function addController($translate, dataService) {
    this.lang = "ru";
    this.input = "";
    this.push = function (){
       dataService.push(this.input);
       dataService.redMarker = false;
    }
    this.changeLang = function(){
      $translate.use(this.lang);
    }
 }; 
}