'use strict';

var app = angular.module("projectsModule");

app.factory("projectFactory",['$http',function($http) {
	var service = {};

	service.getProjects = function() {	
		var url = BASE_URL+"/applications";
		console.log("url : "+url);
		var config = {};
	       $http.get(url,config)
	   			.then(function(response){
	   				console.log("scuccess:"+response);
	         	return response.data;
	       }, 
	       function(response){
	         console.log("error : "+response);
	       }
       );
		
	}

	service.getProjectById = function(id) {
		var url = BASE_URL+"/application/"+id;
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
		var url = BASE_URL+"/application/"+id;
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
		var url = BASE_URL+"/application";
		var config = {
                headers : {
                    'Content-Type': 'application/json;'
                }
            }
		var id = project.id;
		console.log("")
		if(id === undefined) {
			$http.post(url,project, config).then(function(response){
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

