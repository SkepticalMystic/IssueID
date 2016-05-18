var app = angular.module('IssueID', ['ngMaterial','ngRoute','angular.filter'])

app.controller('issueCtrl', function($scope, $http) {
    $http.get("/issues").then(function(response) {
	$scope.myIssues = response.data.issues;
    });
});

app.config(['$routeProvider', '$locationProvider',
	    function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider.
		    when('/issuelist/:id', {
			templateUrl: 'partials/issuelist.jade',
			controller: 'listIssues'
		    }).
		    when('/addissues', {
			templateUrl: 'partials/addissues.jade'
		    });
	    }]);

app.controller("listIssues", function($scope, $routeParams, Team){
    $scope.team = Team.show({ id: $routeParams.id });
});
