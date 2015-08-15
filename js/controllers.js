var dcApp = angular.module('dcApp', []);

dcApp.controller('TemplatesListCtrl', function($scope, $http) {
	$http.get('data/templates.json').success(function(data){
		$scope.templates = data;
	});
	
	$scope.orderProp = 'id';
});