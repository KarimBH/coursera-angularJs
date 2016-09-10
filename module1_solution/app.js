(function() {
    'use strict';

    angular.module("LunchCheck", [])
        .controller('LunchCheckController', LaunchChekerController);

    LaunchChekerController.$inject = ['$scope'];

    function LaunchChekerController($scope) {

        $scope.dishes = "";
        $scope.message = "";

        $scope.checkDishes = function() {
            var checkMsg = ""
            if ($scope.dishes.trim() == '') {
                checkMsg = "Please enter data first";
            } else {
                var dishesArray = $scope.dishes.split(',');
                if (dishesArray.length <= 3) {
                    checkMsg = "Enjoy!";
                } else {
                    checkMsg = "Too much!";
                }
            }
            $scope.message = checkMsg;

        };
    }

}());
