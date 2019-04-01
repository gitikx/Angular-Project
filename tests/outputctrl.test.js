describe("Тест компонента вывода", function () {
    var ctrl;
    beforeEach(() => {
        module('firstApp');
    });

    beforeEach(inject(function (_$componentController_) {
        ctrl = _$componentController_('outputComponent', null, {
            onDelete: (index) => {
                if (_.isNaN(index.index)) throw "не является числом";
            },
            onReset: (index) => {
                if (_.isNaN(index.index)) throw "не является числом";
            }
        });
    }));

    it('должен вернуть обьект с числовым значением поля index', function () {
        ctrl.delete(123);
    });


    it('должен вернуть обьект с числовым значением поля index', function () {
        ctrl.reset(123);
    });
});