/**
 * Created by ShuochaoZhao on 1/5/16.
 */

var HeyBenApp = angular.module('HeyBenApp',
    [
        'ngRoute',
        'HeyBenControllers',
        'HeyBenFactories'
    ]);

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
        when('/:Id', {
            templateUrl: '../UI/HeyBenCourse.html',
            controller: 'HBCourseCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});

HeyBenApp.controller('HeyBenCtrl', function($scope, $rootScope) {

});