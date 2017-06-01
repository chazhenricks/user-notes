"use strict";

app.controller("ListCtrl", function($scope,$location, FirebaseFactory){

FirebaseFactory.getNoteList()

FirebaseFactory.removeNote()
.then(()=>{
    FirebaseFactory.getNoteList()
});


});
