var controllers = angular.module('myApp.controllers', []);

controllers.controller('task1Controller', ['$scope', '$location', function($scope, $location) {    
    $scope.task1Alert = function() {
        alert('Hello, How are you?');
    }
}]);

controllers.controller('task2Controller', ['$scope', '$location', function($scope, $location) {
    
    $scope.task2Alert = function() {
        var checkText = $scope.usertext;
        alert(checkText);
    }
}]);

controllers.controller('task3Controller', ['$scope', '$location', function($scope, $location) {
    
}]);

controllers.controller('task4Controller', ['$scope', '$location', function($scope, $location) {


    $scope.customStyle = {};
    $scope.chgColor = function (){
        //what to do here?
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            // $scope.customStyle.style = {"color": "#" + "00ff00"};
            $scope.customStyle.style = {"color": color};
        // $scope.customStyle.style = {"color":"green"};
    }

    $scope.turnBlue = function() {
        $scope.customStyle.style = {"color":"blue"};
    }

}]);

controllers.controller('task5Controller', ['$scope', '$location', function($scope, $location) {
    
    $scope.task5 = function() {
        $scope.myName = "Brian Caskey";
    }
}]);

controllers.controller('task6Controller', ['$scope', '$location', function($scope, $location) {
    $scope.task6 = function(){
        $scope.friends = [
            {
                name: 'Mickey'
            },
            {
                name: 'Pluto'
            },
            {
                name: 'Donald'
            },
            {
                name: 'Goofy'
            },
            {
                name: 'Grumpy'
            },
            {
                name: 'Doc'
            },
            {
                name: 'Woody'
            },
            {
                name: 'Buzz'
            },
            {
                name: 'Rex'
            },
            {
                name: 'Mater'
            }
        ]    
    }
}]);