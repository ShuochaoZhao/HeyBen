/**
 * Created by ShuochaoZhao on 1/5/16.
 */
var HBDashBoardApp = angular.module('HBDashBoardApp', []);

HBDashBoardApp.controller('HBDashBoardCtrl', function($scope) {
    $scope.sysNotes = [
        {say: 'I am still awake yet'},
        {say: 'Wake up, Ben! You need to make money'}
    ];

    $scope.courses = [
        {name: 'English', teacher: 'Jie Wang', startDate: '09/01/2015', endDate:'11/31/2015'},
        {name: 'Economics', teacher: 'Yao Li', startDate: '09/01/2015', endDate:'11/31/2015'},
    ];
});