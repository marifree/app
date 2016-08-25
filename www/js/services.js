var appService = angular.module('AppService', []);

appService.service('Service', ['$http', 'SERVICE_URL', function($http, SERVICE_URL){
	this.call = function(service, parameters){
		var opt = {
            method : method,
            url : SERVICE_URL+service,            
            headers : [{
                'Content-type' : 'application/json'
            }]
        }

        return $http(opt).then(function(response){  
        	return response;
        });
	} 
}]);