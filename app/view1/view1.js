'use strict';

angular.module('myApp.view1', ['ngRoute', ])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', function ($scope, $http) {
    $scope.jedi = [];
    $scope.myChartObject = {};

    $scope.myChartObject.type = "PieChart";
    $scope.onions = [{
        v: "Onions"
      },
      {
        v: 3
      },
    ];
    
    // $scope.gethit = gethit($scope, $http);
    gethit($scope, $http);
    gethit($scope, $http);
    gethit($scope, $http);

    $scope.myChartObject.data = {
      "cols": [{
          id: "t",
          label: "Topping",
          type: "string"
        },
        {
          id: "s",
          label: "Slices",
          type: "number"
        }
      ],
      "rows": [{
          c: [{
              v: "Mushrooms"
            },
            {
              v: 3
            },
          ]
        },
        {
          c: [{
              v: "Olives"
            },
            {
              v: 31
            }
          ]
        },
        {
          c: [{
              v: "Olives"
            },
            {
              v: 31
            }
          ]
        },
      ]
    };

    $scope.myChartObject.options = {
      'title': 'How Much Pizza I Ate Last Night'
    };

    console.log($scope.myChartObject.data.rows);

  });


  function gethit($scope, $http){
    // GET request to remote server
    $http({
      method: 'GET',
      url: 'https://api.backendless.com/3E3823F6-FE81-7852-FF2E-E18C0BADEC00/9D5A1B92-A2C9-F0C2-FF81-BA5546052400/data/jedi'
    }).then(function successCallback(response) {
      // console.log(response);
      // $scope.jedi = response.data;
      // console.log($scope.jedi);
      // console.log(response);
      response.data.forEach(element => {
        $scope.jedi.push(element);
      });
    }, function errorCallback(response) {
      console.log(response);
    });
  }
