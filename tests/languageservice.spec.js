describe('my service test:', function () {
    var service;
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
        expect(service.languages).toBeDefined();
        expect(service.languages.length).not.toBe(0);
    });
});