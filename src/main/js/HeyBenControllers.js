/**
 * Created by ShuochaoZhao on 1/5/16.
 */
var HeyBenControllers = angular.module('HeyBenControllers', []);

HeyBenControllers.controller('HBDashBoardCtrl', function($scope) {
    $scope.sysNotes = [
        {say: 'I am still awake yet'},
        {say: 'Wake up, Ben! You need to make money'}
    ];

    $scope.courses = [
        {Id:'1', name: 'English', teacher: 'Jie Wang', startDate: '09/01/2015', endDate:'11/31/2015'},
        {Id:'2', name: 'Economics', teacher: 'Yao Li', startDate: '09/01/2015', endDate:'11/31/2015'}
    ];
});

HeyBenControllers.controller('HBCourseCtrl', function($scope, $routeParams, coursesFactory) {
    coursesFactory.find($routeParams.Id, function(course) {
        $scope.course = course;
        console.log(course);
    });
});
