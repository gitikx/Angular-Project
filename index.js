var angular = require("angular");
var app = angular.module("firstApp", []);
require('./app/services/dataServices/dataService')(app);
require('./app/components/mainComponent/mainComponent')(app);
require('./app/components/adderComponent/addListComponent')(app);
require('./app/components/listComponent/stringListComponent')(app);
require('./app/filters/digitFilter')(app);