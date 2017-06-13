'use strict';

// routing for view 5 (newsletter page)
angular.module('myApp.view5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view5', {
		templateUrl: 'view5/view5.html',
		controller: 'View5Ctrl'
	});
}])

.controller('View5Ctrl', function($scope) {

	// function to submit the form after all validation has occurred            
	$scope.submit = function() {

		// check to make sure the form is completely valid and alert user if successful
		if ($scope.signUpForm.$valid) {
			alert('We hope you are ready to receive emails full of pissyness! GO!');
		}
	};	
});