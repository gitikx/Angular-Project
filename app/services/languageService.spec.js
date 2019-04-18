describe('Language service test:', function () {
    let service;

    beforeEach(function () {
        module('firstApp');
        inject(function (languageService) {
            service = languageService;
        })
    });
    
    it('languages should be initialized', function () {
        expect(service.languages).toEqual([{title:"Русский",name:"ru"},{title:"English",name:"en"},{title:"Deutsch",name:"de"}]);
    });

});