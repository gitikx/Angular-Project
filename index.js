var angular = require("angular");
require("angular-translate");
require("angular-translate-loader-static-files");
var app = angular.module("firstApp", ['pascalprecht.translate']);
app.config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: './languages/',
        suffix: '.json'
    }).preferredLanguage('ru');
})
require('./app/services/dataServices/dataService')(app);
require('./app/components/mainComponent/mainComponent')(app);
require('./app/components/adderComponent/addListComponent')(app);
require('./app/components/listComponent/stringListComponent')(app);
require('./app/filters/digitFilter')(app);