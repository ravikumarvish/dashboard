'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar', 'headerModule' , 'projectsModule', 'sidebarModule','sidebarSearchModule' ,'statsModule'
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/projects');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html'
    }).
      state('dashboard.project', {
        url:'/project/:id/:mode',
        controller: 'projectController',
        templateUrl: 'views/dashboard/home.html'       
    }).state('dashboard.home',{
        url:'/home',
        controller: 'projectController',
        templateUrl:'views/dashboard/home.html'
      })
      .state('dashboard.projects',{
        templateUrl:'modules/projects/views/projects.html',
        controller: 'projectController',
        url:'/projects'       
    }).state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
      
      
  }]);

    
