'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('headerModule')
	.directive('header',function(){
		return {
        templateUrl:'modules/header/views/header.html',
        restrict: 'E',
        replace: true,
    	}
	});


