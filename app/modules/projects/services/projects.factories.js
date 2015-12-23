'use strict';

var app = angular.module("projectsModule");

app.factory("projectFactory",['$http',function('$http') {
	var service = {};

	service.getProjects = function() {
		console.log("calling ajax service to get the list of projects");
		return [ { id : '111',name :'dummy Project'}];
	}

	service.getProjectById = function(id) {
		console.log("calling ajax service to get the project by id");
		return { id : '111',name :'dummy Project'};
	}

	service.save = function(project) {
		alert(BASE_URL);
		return [ { id : '111',name :'dummy Project'}];
	}


	return service;

}]);

