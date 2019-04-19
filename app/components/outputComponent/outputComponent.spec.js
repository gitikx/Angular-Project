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
            $rootScope.$digest();
            ctrl = element.controller('outputComponent');
        }
        )
    });

    it('should not show elements if they exist', function () {
        expect(element.html()).not.toContain("title");
    });

    // it('should show elements if they exist', function () {
    //     $scope.textlist = "2";
    //     $scope.$digest();

    //     expect(element.html()).toContain("title");
    // });

    // it('should call onDelete function of main controller', function () {
    //     $scope.$ctrl = {
    //         searchColor : "",
    //         searchText : ""
    //     };
    //     $scope.removeObject = jasmine.createSpy("removeObject");
    //     $scope.textlist = "234";
    //     $scope.$digest();
    //     var button = element.find('button');
    //     button.triggerHandler('click');
    //     console.log(element);

    //     expect($scope.removeObject).toHaveBeenCalledWith(0);
    // });


    // it('should call onReset function of main controller', function () {
    //     $scope.textlist = "2";
    //     $scope.resetObject = jasmine.createSpy("resetObject");
    //     $scope.$digest();
    //     var button = element.find('button');
    //     button.triggerHandler('click');

    //     expect($scope.resetObject).toHaveBeenCalledWith(0);
    // });
});