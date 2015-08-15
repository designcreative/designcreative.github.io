var dcControllers = angular.module('dcControllers', []);

dcControllers.controller('TemplatesListCtrl', ['$scope','$http',function($scope, $http) {
	$http.get('data/templates.json').success(function(data){
		$scope.templates = data;
	});
	
	$scope.orderProp = 'id';
}]);

dcControllers.controller('TemplateDetailsCtrl', ['$scope', '$routeParams', 
	function($scope, $routeParams){
		$scope.templateId = $routeParams.templateId;
	}]);