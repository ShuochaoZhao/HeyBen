/**
 * Created by ShuochaoZhao on 1/7/16.
 */

angular.module('countryDirective', [])
    .directive('country', function(){
        return {
            scope: { course: '=' },
            restrict: 'A',
            templateUrl: 'HeyBenCourse.html',
            controller: function($scope, courses){
                countries.find($scope.country.id, function(country) {
                    $scope.flagURL = country.flagURL;
                });
            }
        };
    });