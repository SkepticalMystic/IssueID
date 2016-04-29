var app = angular.module('IssueID', ['ngMaterial'])
    app.controller('issueCtrl', function($scope) {
	$scope.myIssues = JSON.stringify(issues);
});
