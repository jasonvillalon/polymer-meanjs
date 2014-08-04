'use strict';

angular.module('core').controller('SocialController', [
    '$scope',
    '$rootScope',
    '$location',
    'Authentication',
    'Menus',
    function($scope, $rootScope, $location, Authentication, Menus) {
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