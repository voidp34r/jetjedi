'use strict';

angular.module('myApp.view2', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', function ($scope, $http) {
    $scope.jedi = [];
    // GET request to remote server
    // $scope.
    let header = ['Nome', 'Planeta', 'Status', 'Mestre', '       '];
    // $scope.jedi.push(header);
    $scope.hit = hit($scope, $http);
    $scope.hit = hit($scope, $http);
    // $scope.hit = hit($scope, $http);
    setTimeout(function () {
      console.log($scope.jedi)
      $scope.sort = sort();
      // $scope.sort = sort();

    }, 3000);
  });

function hit($scope, $http) {
  $http({
    method: 'GET',
    url: 'https://api.backendless.com/3E3823F6-FE81-7852-FF2E-E18C0BADEC00/9D5A1B92-A2C9-F0C2-FF81-BA5546052400/data/jedi'
  }).then(function successCallback(response) {
    // console.log(response);
    response.data.forEach(element => {
      $scope.jedi.push(element);
      // $scope.sort = sort();
    });
  }, function errorCallback(response) {
    console.log(response);
  })


}

function sort() {
  let arr = [3, 2, 4, 5, 1];
  let i, j, temp;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}