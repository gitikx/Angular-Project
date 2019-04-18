describe('Data service test', function () {
    let service;

    beforeEach(function () {
        module('firstApp');
        inject(function (dataService) {
            service = dataService;
        })
    });

    it('dataService should be defined', function () {
        expect(service).toBeDefined();
    });

    it('should initialize array', function () {
        expect(service.array).toBeDefined();
        expect(service.array.length).toBe(0);
    });

    it('should add element', function () {
        service.push('333');
        expect(service.array.length).toBe(1);
    });

    it('should delete element', function () {
        service.push('333');
        service.remove(0);

        expect(service.array.length).toBe(0);
    });

    it('should reset the element', function () {
        service.push('333');
        service.array[0].color = "red";
        service.reset(0);

        expect(service.array[0].color).toBe("green");
    });

    it('should change color to yellow', function () {
        service.push('333');
        let time = new Date();
        time.setSeconds(time.getSeconds() - 30);
        service.array[0].time = time;
        service.checkColors();

        expect(service.array[0].color).toBe("yellow");
    });

    it('should change color to red', function () {
        let time = new Date();
        time.setSeconds(time.getSeconds() - 65);
        service.push('333');
        service.array[0].time = time;
        service.checkColors();
        
        expect(service.array[0].color).toBe("red");
    });
});