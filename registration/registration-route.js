angular.module('school.registration').config(function($routeProvider) {

	$routeProvider.when('/registration', {
		templateUrl : 'registration/registration.html',
        controller:'RegistrationController',
        controllerAs:'registrationController'
		});	
});