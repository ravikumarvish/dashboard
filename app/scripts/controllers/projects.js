'use strict';

var app = angular.module('sbAdminApp');


app.controller('projectController', ['$scope','$state','projectFactory','$stateParams',function($scope,$state, projectFactory,$stateParams) {
  
  
  var id = $stateParams.id;
  $scope.disableMode = $stateParams.mode == 'true' ? false : true;
  
  if(id != null) {
    $scope.project = projectFactory.getProjectById(id);     
  }

  $scope.saveProject = function() {
  	var project = $scope.project;
  	$scope.projects.push($scope.project);
  	$scope.project = {};
  }

  $scope.getListOfProjects = function() {
  	var listOfProjects = projectFactory.getProjects();
    console.log("listOfProjects : "+listOfProjects);
    $scope.projects = listOfProjects;
  }


  $scope.editProject = function(id) {
   $scope.editMode = true;
   var project = projectFactory.getProjectById(id);
   $scope.project = project;
   $state.go('dashboard.project',{id:id,mode:true});
  }

  $scope.viewProject = function(id) {
   $state.go('dashboard.project',{id:id,mode:false});
  }

  $scope.deleteProject = function(id) {
    alert("id: "+id);
  }

  
 }]);
