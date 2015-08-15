'use strict';

var dcApp = angular.module('dcApp', ['ngRoute', 'dcControllers']);

dcApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/home.html',
			controller: 'TemplatesListCtrl'
		}).
		when('/templates/:templateId', {
			templateUrl: 'partials/templates.html',
			controller: 'TemplateDetailsCtrl'
		});

		
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});

}]);