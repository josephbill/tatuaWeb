

//this module defines our application 
var myApp = angular.module('myApp' ,[])
//this intializes controller
//$scope is the owner of all variables and functions in a given controller 

myApp.controller('myCtrl' ,function($scope)
{
//to define objects controlled by the controller
$scope.phone = "0734724283";
$scope.email = "josephbill00@gmail.com";
$scope.city = "Nairobi";
$scope.state = "kenya";

});

//scope aids the controller to access the  files and view them in the html access page
myApp.controller('myCars' ,function($scope)

{
//table for cars on sale
$scope.cars = [

{brand: "BRAND", model: "MODEL", type:"TYPE",year: "YEAR"},
{brand: "Nissan", model: "Nissan titan", type:"pickup",year: "2015", images: "images/nissan.jpg"},
{brand: "Jeep", model: "Jeep Patriot", type:"truck",year: "2010", images: "images/ford.png"},
{brand: "Mitsubishi", model: "outlander sports", type:"sports car",year: "2012", images: "images/mits.jpg"},
{brand: "Ford", model: "Ford escape", type:"sports car",year: "2015", images: "images/ford.png"},
{brand: "chevrolet", model: "traks", type:"double cabin",year: "2015", images: "images/chevy.jpg"},
{brand: "chevrolet", model: "x11", type:"sports car",year: "2015", images: "images/chevy.png" }



];

});

//interacting with json data
myApp.controller('blogsController' ,function($scope,$http)
   {
    var url = "http://jsonplaceholder.typicode.com/posts/1/comments";
      //get takes the url if successful a callback function  .success(function(response)) is run
      //response gets data from the url
              $http.post(url).success(function(response) 
              {
               $scope.posts = response; 

               });



   });
              
//syntax for controller 
 myApp.controller('userController', function($scope, $http){

   //create an empty object
   //the code below creates an empty form and when user clicks submit it posts the data
   $scope.user = {};
   //communicate/call your NODE API
     //pass your 'user object' to the API

   $http.post('http://127.0.0.1:8080/introduction-to-bootsrap' , $scope.user).success(function (response)
   {
  
   console.log("server found");

   })

   .error(function(response){

  console.log("create server:server not found");

   })
 
   $scope.formSubmit = function()
   {
     console.log($scope.user);    


   }


 });

