angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.addLink = Links.addOne;
  $scope.link = {url: ''};
});
