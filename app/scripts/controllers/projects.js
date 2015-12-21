'use strict';

var app = angular.module('sbAdminApp');
app.controller('projectController', function($scope,$position) {
  
  $scope.addProject = function() {
  	// calling rest api to add project into db.
  	alert("Adding Project");
  	$scope.project = { id : '222',name :'dummy Project'};
  	$scope.projects.push($scope.project);
  	$scope.project = {};
  }

  $scope.getListOfProjects = function() {
  	$scope.projects = [ { id : '111',name :'dummy Project'}];
  	alert("projects : "+ $scope.projects);  
  }

 });
