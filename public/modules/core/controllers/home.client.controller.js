'use strict';


angular.module('core').controller('HomeController', [
    '$scope',
    '$rootScope',
    '$location',
    'Authentication',
    'Menus',
	function($scope, $rootScope, $location, Authentication, Menus) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

            $scope.menu = Menus.getMenu('categories');

        if(!$scope.authentication.user){
            $location.path('/signin');
        }

        $scope.url = '/';

        $scope.$watch('$root.url', function(value){
            $location.path(value);
        });
	}
]);