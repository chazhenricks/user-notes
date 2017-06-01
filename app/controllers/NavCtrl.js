"use strict";

app.controller("NavCtrl", function($scope, AuthFactory){
    //if user is logged in, switch login to logout

    $scope.user = AuthFactory.getUser()
    if($scope.user === null){
        {{login}}
    }else{
        {{logout}}
    }
});
