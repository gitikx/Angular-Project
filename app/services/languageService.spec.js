describe('Language service test:', function () {
    let service;

    beforeEach(function () {
        module('firstApp');
    });
    
    beforeEach(inject(function (languageService) {
        service = languageService;
    }));

    it('serice should be defined', function () {
        expect(service).toBeDefined();
    });

    it('languages should be initialized', function () {
        expect(service.languages).toEqual([{title:"Русский",name:"ru"},{title:"English",name:"en"},{title:"Deutsch",name:"de"}]);
    });
});