angular.module('school.registration').controller('RegistrationController',registrationController);
function registrationController($scope, $http,$routeParams,$location){
var registrationController=this;
    
    
    registrationController.saveData= function(registrationFormData){
  
        alert(registrationFormData.name);
        
    };
    
    registrationController.rest=function(){
    $location.absUrl() = 'registration.html';
    };
    
};