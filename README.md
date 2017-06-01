
# Initial Setup
1. Clone this repo onto your machine. 
1. `cd` into the `/lib` folder and run `npm install`
2. Create a new firebase project
2. Rename `AppConstants-example.js` to `AppConstants.js` and fill in with info from your own firebase database. 
3. If not already installed, run ` npm install http-server -g` to install local http server then run `hs` in root directory of project to launch local server. 


## Requirements

In this exercise, you'll be requiring users to register and log into your application before they can use it. The user interface is very simple once they log in, because this is a basic application that will allow them to enter notes, and then view all notes.

### Firebase

Create a Firebase collection named notes
Use the basic Firebase email/password authentication to register users for your application.
Application

1. Create an Angular application module.
1. Create 4 partials for views.
    1. A registration view
    1. A login view
    1. A new note form
    1. A note list form
1. Configure your application to support the following routes.
    1. /register
    1. /login
    1. /notes
    1. /new
1. Write a controller for each of the partials
1. New Note Form

Display a text field labeled Enter note: and a button labeled Save. When the button is clicked, save a new item in the Firebase notes collection, along with the current user's unique id.

### Note List

When the user visits the /notes URL, the user should see all of the notes that were entered by that user, and no others. Use the orderBy and equalTo parameters in the $http request to only return notes created by the current user.
