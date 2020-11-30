angular.module("myApp").factory("LawwaService", function ($http) {

	/*
		Registry Operations
	*/
  var listRegistry = function (cb) {
    $http({
      method: "GET",
      url: "http://localhost:8761/registry/list",
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

  var addRegistry = function (data, cb) {
    $http({
      method: "POST",
      url: "http://localhost:8761/registry/login",
      data: data,
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

  var updateRegistry = function (data, cb) {
    $http({
      method: "PUT",
      url: "http://localhost:8080/registry/" + data.registryId,
      data: data,
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

  /*
	Employee Operations
*/
  var listEmployees = function (cb) {
    $http({
      method: "GET",
      url: "http://localhost:8761/employee/list",
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

    var getEmployeeAccount = function (username, password, cb) {
    $http({
      method: "GET",
      url: "http://localhost:8761/employee/" + username + '/' + password,
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };


//   var getRecipes = function (cb) {
//     $http({
//       method: "GET",
//       url: "http://localhost:8080/cookrecipe/category",
//     })
//       .success(function (data, status, headers, config) {
//         // this callback will be called asynchronously
//         // when the response is available
//         cb(null, data);
//       })
//       .error(function (data, status, headers, config) {
//         // called asynchronously if an error occurs
//         // or server returns response with an error status.
//         cb(data);
//       });
//   };

//   var postRecipe = function (cb, data) {
//     $http({
//       method: "POST",
//       url: "http://localhost:8080/cookrecipe/recipe",
//       data: data,
//     })
//       .success(function (data, status, headers, config) {
//         // this callback will be called asynchronously
//         // when the response is available
//         cb(null, data);
//       })
//       .error(function (data, status, headers, config) {
//         cb(data);
//       });
//   };

//   var putRecipe = function (data, cb) {
//     $http({
//       method: "PUT",
//       url: "http://localhost:8080/cookrecipe/recipe",
//       data: data,
//     })
//       .success(function (data, status, headers, config) {
//         // this callback will be called asynchronously
//         // when the response is available
//         cb(null, data);
//       })
//       .error(function (data, status, headers, config) {
//         // called asynchronously if an error occurs
//         // or server returns response with an error status.
//         cb(data);
//       });
//   };

//   var deleteRecipe = function (id, cb) {
//     $http({
//       method: "DELETE",
//       url: "http://localhost:8080/cookrecipe/recipe/" + id,
//     })
//       .success(function (data, status, headers, config) {
//         // this callback will be called asynchronously
//         // when the response is available
//         cb(null, data);
//       })
//       .error(function (data, status, headers, config) {
//         // called asynchronously if an error occurs
//         // or server returns response with an error status.
//         cb(data);
//       });
//   };

//   var deleteIngs = function (iid, cb) {
//     $http({
//       method: "DELETE",
//       url: "http://localhost:8080/cookrecipe/recipe/ingredient/" + iid,
//     })
//       .success(function (data, status, headers, config) {
//         // this callback will be called asynchronously
//         // when the response is available
//         cb(null, data);
//       })
//       .error(function (data, status, headers, config) {
//         // called asynchronously if an error occurs
//         // or server returns response with an error status.
//         cb(data);
//       });
//   };

//   var deleteSteps = function (sid, cb) {
//     $http({
//       method: "DELETE",
//       url: "http://localhost:8080/cookrecipe/recipe/step/" + sid,
//     })
//       .success(function (data, status, headers, config) {
//         // this callback will be called asynchronously
//         // when the response is available
//         cb(null, data);
//       })
//       .error(function (data, status, headers, config) {
//         // called asynchronously if an error occurs
//         // or server returns response with an error status.
//         cb(data);
//       });
//   };

  return {
    listRegistry: listRegistry,
    addRegistry: addRegistry,
    updateRegistry: updateRegistry,

	listEmployees: listEmployees,
	getEmployeeAccount: getEmployeeAccount,

    // getRecipes: getRecipes,
    // postRecipe: postRecipe,
    // putRecipe: putRecipe,
    // deleteRecipe: deleteRecipe,
    // deleteIngs: deleteIngs,
    // deleteSteps: deleteSteps,
  };
});
