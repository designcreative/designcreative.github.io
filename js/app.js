'use strict';

var dcApp = angular.module('dcApp', ['ngRoute', 'dcControllers']);

dcApp.config(['$routeProvider', '$locationProvider'], function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'MainCtrl'
		}).when('/show', {
			templateUrl: 'partials/show.html',
			controller: 'ShowCtrl'
		});
});