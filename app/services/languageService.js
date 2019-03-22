module.exports = function(app){
    app.service("languageService", langService);

    function langService($translate){
        this.languages = require('./langs');
        this.changeLanguage = (languageObject) => {
            $translate.use(languageObject.name);
        }
    }
}