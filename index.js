var angular = require("angular");
var app = angular.module("firstApp", []);
require('./app/services/dataServices/dataService.js')(app);
require('./app/components/mainComponent/mainComponent.js')(app);
require('./app/components/adderComponent/addListComponent.js')(app);
require('./app/components/listComponent/stringListComponent.js')(app);
require('./app/filters/digitFilter.js')(app);