app.controller("LawwaController", function ($scope, LawwaService, $location) {
  //Details to be filled for user to log in
  $scope.username;
  $scope.password;
  $scope.isRemote = false;
  $scope.location = "UNKNOWN"; // Until i add location library in backend

  $scope.registryList = {};

  //Details to be filled on log in
  $scope.logInObj = {};
  $scope.logInObj.employee = {};
  $scope.logInObj.registry = {};
  $scope.logInObj.employee.firstName;

  $scope.sessionInfo = {};
  $scope.sessionInfo.employeeId;

  //List Registry for registry view page - runs on app load
  LawwaService.listRegistry(function (err, data) {
    if (!err) {
      $scope.registryList = data;
    }
  });

  //List Employees for employee view page - runs on app load
  LawwaService.listEmployees(function (err, data) {
    if (!err) {
      $scope.employeesList = data;
    }
  });

  $scope.validateEmployee = function (){
    //get employee using username/pass
    if (!$scope.username || !$scope.password) {
      alert("Please Enter Your Login Details");
      return;
    }

    LawwaService.getEmployeeAccount(
      $scope.username,
      $scope.password,
      function (err, data) {
        if (!err) {
          $scope.logInObj.employee = data;
          $scope.sessionInfo.employeeId = $scope.logInObj.employee.employeeId;
          console.log("i have it -" + $scope.sessionInfo.employeeId);
        }
        // $location.url('/login')
      }
    );
  }

  // Log in functionality
  $scope.login = function () {

    $scope.resetRegistryObj();

    $scope.validateEmployee();

    //creates registry record for the sign in operation
    if ($scope.logInObj.employee.employeeId) {
      console.log("person exists");
      $scope.logInObj.registry = {
        // registryId: null,
        employeeId: $scope.sessionInfo.employeeId,
        isRemote: $scope.isRemote,
        location: $scope.location,
        signIn: $scope.getDateTime().toString(),
        signOut: null,
      };
    }

    console.log($scope.logInObj.registry);
    console.log($scope.logInObj.registry.isRemote);
    console.log($scope.logInObj.employee.username);
    console.log($scope.sessionInfo);

    //REST For the registry creation using the object above
    LawwaService.addRegistry($scope.logInObj.registry, function (err, data) {
      if (!err) {
        alert("Sign In Completed");
      }
    });

    // location.url("#/loggedIn");
  };

  $scope.logout = function () {
    //find reisgtry from user sign in, and update that

    //find using sign in time and with eID?
    LawwaService.getRegistry(function (err, data) {
      if (!err) {
        $scope.loggedInAs = data;
      }
    });

    console.log("Employee Clocking Out At: " + $scope.getDateTime);
    LawwaService.updateRegistry(function (err, data) {});
  };

  //   $scope.createEmployee = function() {
  //     LawwaService.createEmployee(function (err, data){
  //         if (!err) {
  //             $scope.employees = data;
  //             console.log(data);
  //        }
  //     })
  //   };

  //   $scope.updateEmployee = function() {
  //     LawwaService.updateEmployee(function (err, data){
  //         if (!err) {
  //             $scope.employees = data;
  //             console.log(data);
  //        }
  //     })
  //   };



  /*
  Generate DATE / TIME for today
*/
  $scope.getDateTime = function () {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    return dateTime;
  };

  $scope.resetRegistryObj = function () {
    $scope.logInObj.registry = {}
  };

});


