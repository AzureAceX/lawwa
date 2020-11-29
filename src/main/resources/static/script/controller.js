angular
	.module('myApp')
	.controller(
		'RecipeController',
		[
			'$scope',
			'RecipeList',
			function ($scope, RecipeList, $window) {

				RecipeList.getRecipes(function (err, data) {
					if (!err) {
						$scope.categoryList = data;
						$scope.recipeList = data;
						console.log(data);
					}
					;
				});

				$scope.selectCategory = function (category) {
					$scope.selectedCategory = category;
				}

				$scope.selectRecipe = function (recipe) {
					$scope.selectedRecipe = recipe;
				}

				$scope.ingredients = [];

				$scope.steps = [];

				$scope.selectedingregients = [];

				$scope.keep_ings = {};

				$scope.selectedsteps = [];

				$scope.keep_steps = {};

				$scope.addRecipeIngredient = function () {
					$scope.ingredients
						.push({
							ingredientName: $scope.ingredients.ingredient
						});

					$scope.ingredients.ingredient = "";
				};

				$scope.deleteRecipeIngredient = function (index) {
					$scope.ingredients.splice(index, 1);
				}

				$scope.addRecipeStep = function () {
					$scope.steps.push({
						stepDescription: $scope.steps.step
					});

					$scope.steps.step = "";
				};

				$scope.deleteRecipeStep = function (index) {
					$scope.steps.splice(index, 1);
				}

				$scope.addIngredient = function () {

					$scope.selectedRecipe.ingredients.push({
						ingredientName: $scope.ingredientName
					});
					$scope.ingredientName = "";
				};

				$scope.keepIngredient = function (ingredient) {
					angular.copy(ingredient, $scope.keep_ings);

					$scope.selectedingregients
						.push($scope.keep_ings.iID);

					console.log($scope.selectedingregients);
				}

				$scope.deleteIngredient = function (index) {
					$scope.selectedRecipe.ingredients.splice(index,
						1);
				}

				$scope.addStep = function () {

					$scope.selectedRecipe.steps.push({
						stepDescription: $scope.stepDescription
					});
					$scope.stepDescription = "";
				};

				$scope.keepStep = function (step) {
					angular.copy(step, $scope.keep_steps);

					$scope.selectedsteps
						.push($scope.keep_steps.sID);

					console.log($scope.selectedsteps);
				}

				$scope.deleteStep = function (index) {
					$scope.selectedRecipe.steps.splice(index, 1);
				}

				$scope.addRecipe = function () {
					if ($scope.categoryList.selectedOption.categoryTitle != undefined
						&& $scope.recipeTitle != undefined
						&& $scope.recipeDescription != undefined
						&& $scope.cookTime != undefined
						&& $scope.ingredients != undefined
						&& $scope.steps != undefined) {
						var recipe = {
							categoryTitle: $scope.categoryList.selectedOption.categoryTitle,
							recipeTitle: $scope.recipeTitle,
							description: $scope.recipeDescription,
							cookTime: $scope.cookTime,
							ingredients: $scope.ingredients,
							steps: $scope.steps,
						};

						RecipeList
							.postRecipe(
								function (data, err) {
									if (!err) {
										RecipeList
											.getRecipes(function (
												err,
												data) {
												if (!err) {
													$scope.categoryList = data;
													$scope.recipeList = data;
													console
														.log(data);
												}
												;
											});
										$(
											'#confirmCreateModel')
											.modal(
												'hide');
										$('#addRecipeModal')
											.modal(
												'show');
										$scope.categoryList.selectedOption.categoryTitle = "";
										$scope.recipeTitle = "";
										$scope.recipeDescription = "";
										$scope.cookTime = "";
										$scope.ingredients = "";
										$scope.steps = "";
										$scope.ingredients = [];
										$scope.steps = [];
									}
								}, recipe);
					} else {
						alert("please complete you recipe form!");
						$('#confirmCreateModel').modal('hide');
						$('#addRecipeModal').modal('show');
					}
				}

				$scope.updateRecipe = function (selectedsteps,
					selectedingregients) {

					if (selectedsteps != null
						|| selectedingregients != null) {
						RecipeList
							.putRecipe(
								$scope.selectedRecipe,
								function (err, data) {
									if (!err) {
										RecipeList
											.getRecipes(function (
												err,
												data) {
												if (!err) {
													$scope.categoryList = data;
													$scope.recipeList = data;
													console
														.log(data);
												}
												;
											});
									}

								});

						var s = 0;
						while (s < selectedsteps.length) {
							var sid;
							sid = selectedsteps[s];

							RecipeList.deleteSteps(sid, function (
								err, data) {
								if (!err) {
									$scope.msg = 'success';
								}
							});
							s++
							if (s > selectedsteps.length)
								break;
						}

						var i = 0;
						while (i < selectedingregients.length) {
							var iid;
							iid = selectedingregients[i];

							RecipeList.deleteIngs(iid, function (
								err, data) {
								if (!err) {
									$scope.msg = 'success';
								}
							});
							i++
							if (i > selectedingregients.length)
								break;
						}
					} else {
						RecipeList
							.putRecipe(
								$scope.selectedRecipe,
								function (err, data) {
									if (!err) {
										RecipeList
											.getRecipes(function (
												err,
												data) {
												if (!err) {
													$scope.categoryList = data;
													$scope.recipeList = data;
													console
														.log(data);
												}
												;
											});
									}

								});
					}
					$('#confirmUpdateModel').modal('hide');
				}

				$scope.deleteRStep = function (selectedsteps) {

					if (selectedsteps != null) {
						var i = 0;
						while (i < selectedsteps.length) {
							var id;
							id = selectedsteps[i];

							RecipeList.deleteSteps(id, function (
								err, data) {
								if (!err) {
									$scope.msg = 'success';
								}
							});
							i++
							if (i > selectedsteps.length)
								break;
						}

					} else {
						alert("please complete you recipe form!");
					}

				}

				$scope.pushRID = function (rid) {
					$scope.id = rid;
				}

				$scope.deleteRecipe = function (id) {
					var id;
					id = $scope.id;
					RecipeList.deleteRecipe(id,
						function (err, data) {
							if (!err) {
								$scope.msg = 'success';
							}
							RecipeList.getRecipes(function (err,
								data) {
								if (!err) {
									$scope.categoryList = data;
									$scope.recipeList = data;
									console.log(data);
								}
								;
							});
						});
					$('#confirmDeleteModel').modal('hide');
				}

				$scope.click_Close = function () {

					RecipeList.getRecipes(function (err, data) {
						if (!err) {
							$scope.categoryList = data;
							$scope.recipeList = data;
							console.log(data);
						}
						;
					});

					$scope.selectedsteps = [];
				}

				$scope.goEdit = function () {
					$('#readRecipeModal').modal('hide');
				}

				$scope.check = function () {
					$('#updateRecipeModal').modal('hide');
				}

				$scope.uncheck = function () {
					$('#updateRecipeModal').modal('show');
				}

				$scope.create = function () {
					$('#addRecipeModal').modal('hide');
				}

				$scope.uncreate = function () {
					$('#addRecipeModal').modal('show');
				}

			}]);
