angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  
  $scope.data = {};

  Links.getAll(function(response) {
    $scope.data.links = response;
  });

});
