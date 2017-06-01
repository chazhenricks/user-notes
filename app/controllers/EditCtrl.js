"use strict";

app.controller("EditCtrl", function($scope, FirebaseFactory){
    FirebaseFactory.editTask()
});
