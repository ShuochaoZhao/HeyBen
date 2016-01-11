/**
 * Created by ShuochaoZhao on 1/10/16.
 */

var HeyBenFactories = angular.module('HeyBenFactories', []);

HeyBenFactories.factory('coursesFactory', function($http) {
    return {
        find: function(id, callback){
            $http({
                method: 'GET',
                url: '../json/course_' + id + '.json',
                cache: true
            }).success(callback);
        }
    };

});
