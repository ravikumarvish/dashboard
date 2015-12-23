'use strict';

var app = angular.module('projectsModule');


app.controller('projectController', ['$scope','$state','projectFactory','$stateParams',function($scope,$state, projectFactory,$stateParams) {
  
  
  var id = $stateParams.id;
  console.log("mode: "+$stateParams.mode);

  if($stateParams.mode === undefined) {
    $stateParams.mode = 'true';
  }

  $scope.disableMode = $stateParams.mode == 'true' ? false : true;
  
  if(id != null) {
    projectFactory.getProjectById(id).then(function(data) {
      $scope.project = data;
    } );    
  }

  $scope.saveProject = function() {
  	var project = $scope.project;
  	projectFactory.save(project);
  	$scope.project = {};
  }

  $scope.getListOfProjects = function() {
  	projectFactory.getProjects().then(function(data) {
      console.log("data : "+data);
      $scope.projects = data;
    });
    
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
