var app = angular.module('IssueID', ['ngMaterial'])

app.controller('issueCtrl', function($scope, $http) {
    $http.get("/issues").then(function(response) {
	$scope.myIssues = response.data.issues;
    });
});

