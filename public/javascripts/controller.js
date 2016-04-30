var app = angular.module('IssueID', ['ngMaterial'])
<<<<<<< HEAD
app.controller('issueCtrl', function($scope, $http) {
    $http.get("/issues").then(function(response) {
	$scope.myIssues = response.data.issues;
    });
});



=======
    app.controller('issueCtrl', function($scope) {
	$scope.myIssues = JSON.stringify(issues);
});
>>>>>>> 393786544b1c31f9eabcbc98462d78bb2ae07bb1
