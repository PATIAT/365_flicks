'use strict';

// routing for view 6 (contact page)
angular.module('myApp.view6', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view6', {
		templateUrl: 'view6/view6.html',
		controller: 'View6Ctrl'
	});
}])

.controller('View6Ctrl', function($scope) {

	// function to submit the form after all validation has occurred            
	$scope.submit = function() {

		// check to make sure the form is completely valid and alert user if successful
		if ($scope.contactForm.$valid) {
			alert('You have been added to our database. Thanks for getting in touch!');
		}
	};	
});