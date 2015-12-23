'use strict';

var app = angular.module("projectsModule");

app.factory("projectFactory",['$http',function($http) {
	var service = {};

	service.getProjects = function() {	
		var url = BASE_URL+"/";
		var config = {
                headers : {
                    'Content-Type': 'application/json;'
                }
            }
	       $http.get(url,config)
	   			.then(function(response){
	         	return response;
	       }, 
	       function(response){
	         console.log("response : "+response);
	       }
       );
		
	}

	service.getProjectById = function(id) {
		var url = BASE_URL+"/"+id;
		var config = {
                headers : {
                    'Content-Type': 'application/json;'
                }
            }

       $http.get(url,config)
   			.then(function(response){
         	return response;
       }, 
       function(response){
         console.log("response : "+response);
       }
       );
	}

	service.delete = function(id) {
		var url = BASE_URL+"/"+id;
		var config = {
                headers : {
                    'Content-Type': 'application/json;'
                }
            }
       $http.delete(url,config)
   			.then(function(response){
         	return response;
       }, 
       function(response){
         console.log("response : "+response);
       }
       );
	}

	service.save = function(project) {
		var url = BASE_URL+"/";
		var config = {
                headers : {
                    'Content-Type': 'application/json;'
                }
            }
		var id = project.id;
		if(id === undefined) {
			$http.put(url,project, config).then(function(response){
         		console.log("response : "+response);
       		}, 
       		function(response){
         		console.log("response : "+response);
       		}
    	);
		} else {
			$http.post(url,project, config).then(function(response){
         		console.log("response : "+response);
       		}, 
       		function(response){
         		console.log("response : "+response);
       		}
    	);
	   }
	}


	return service;

}]);

