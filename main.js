var app = angular.module('myApp', ['myApp.controllers', 'ngRoute', 'ngResource']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/task1', {
        templateUrl: 'views/task1.html',
        controller: 'task1Controller'
    })
    .when('/task2', {
        templateUrl: 'views/task2.html',
        controller: 'task2Controller'
    })
    .when('/task3', {
        templateUrl: 'views/task3.html',
        controller: 'task3Controller'
    })
    .when('/task4', {
        templateUrl: 'views/task4.html',
        controller: 'task4Controller'
    })
    .when('/task5', {
        templateUrl: 'views/task5.html',
        controller: 'task5Controller'
    })
    .when('/task6', {
        templateUrl: 'views/task6.html',
        controller: 'task6Controller'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);