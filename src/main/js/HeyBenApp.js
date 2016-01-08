/**
 * Created by ShuochaoZhao on 1/5/16.
 */

var HeyBenApp = angular.module('HeyBenApp', ['ngRoute', 'HBDashBoardApp']);

HeyBenApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '../UI/DashBoard.html',
            controller: 'HBDashBoardCtrl'
        }).
        when('/MyTools', {
            templateUrl: '../UI/MyTools.html',
            controller: 'HeyBenCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});

HeyBenApp.controller('HeyBenCtrl', function($scope, $rootScope) {

});