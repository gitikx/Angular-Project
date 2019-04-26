describe("Output controller test", function () {
    let ctrl, $scope, $rootScope;
    beforeEach(() => {
        module('firstApp');
        inject(function (_$componentController_, _$rootScope_, _$compile_, dataService) {
            service = dataService;
            $componentController = _$componentController_;
            $rootScope = _$rootScope_;
            $compile = _$compile_;
            $scope = $rootScope.$new();
            element = $compile('<output-component class="output" textlist="textlist" on-delete="removeObject(index)" on-reset="resetObject(index)"></output-component>')($scope);
            $scope.$digest();
        }
        )
    });

    it('should call onDelete function of main controller', function () {
        var spy = jasmine.createSpy("removeObject");
        $scope.removeObject = spy;
        $scope.textlist = [{
            text: "dwadwadw",
            time: new Date(),
            color: 'green',
            label: "123"
         }];
        $scope.$digest();
        var button = element.find('button');
        button.triggerHandler('click');

        expect(spy).toHaveBeenCalledWith(0);
    });


    it('should call onReset function of main controller', function () {
        $scope.textlist =[{
            text: "dwadwadw",
            time: new Date(),
            color: 'green',
            label: "123"
         }];
        $scope.resetObject = jasmine.createSpy("resetObject");
        $scope.$digest();
        var button = element.find('button');
        button.triggerHandler('click');

        expect($scope.resetObject).toHaveBeenCalledWith(0);
    });
});