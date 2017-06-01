"use strict";

app.controller("DetailCtrl", function($scope, FirebaseFactory){
    FirebaseFactory.getNote();
});
