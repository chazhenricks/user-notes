"use strict";

app.controller("AddCtrl", function($scope, $location, FirebaseFactory){

    $scope.newNote = {
        "note": {{note}},
        "assigned-to": {{assignedTo}},
        "date": {{date}},
        "location": {{location}},
        "urgency": {{urgency}},
        "dependencies": {{dependencies}},
        "isCompleted": false
    };

    FirebaseFactory.addNote($scope.newTask)
    .then(()=>{
        FirebaseFactory.getNoteList();
    });

});
