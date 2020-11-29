app.controller('LawwaController', function($scope, LawwaService) {

  $scope.username = "meeeeeeeeeeeee";
  $scope.password = "";
  $scope.registry = {};

  console.log("asdasd");

  LawwaService.listRegistry(function (err, data) {
    if (!err) {
        $scope.registry = data;
        console.log(data);
   }
});

// $scope.login = function() {
//     //get time, get empId, getIsRemote
//     LawwaService.addRegistry(function (err, data){
        
//     })
//   };



$scope.listEmployees = function() {
    LawwaService.listEmployees(function (err, data){
        if (!err) {
            $scope.employees = data;
            console.log(data);
       }
    })
  };

  $scope.createEmployee = function() {
    LawwaService.listEmployees(function (err, data){
        if (!err) {
            $scope.employees = data;
            console.log(data);
       }
    })
  };


  $scope.listEmployees = function() {
    LawwaService.listEmployees(function (err, data){
        if (!err) {
            $scope.employees = data;
            console.log(data);
       }
    })
  };
  





});

