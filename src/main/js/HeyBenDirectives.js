/**
 * Created by ShuochaoZhao on 1/7/16.
 */

var HeyBenDirectives = angular.module('HeyBenDirectives', []);

HeyBenDirectives.directive('course', function(){
        return {
            scope: { course: '=' },
            restrict: 'A',
            templateUrl: 'HeyBenCourse.html'
        };
    });