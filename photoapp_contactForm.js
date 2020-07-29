//Global Variables
var elEmail = document.getElementById('email');
var elErrorEmail = document.getElementById('errorEmail');

var elFirstName = document.getElementById('firstname');
var elErrorFirstName = document.getElementById('errorFirstName');

var elLastName = document.getElementById('lastname');
var elErrorLastName = document.getElementById('errorLastName');

var elComments = document.getElementById('comments');
var elErrorComments = document.getElementById('errorComments')

var elSubmit = document.getElementById('submit');


//Event Listener
elEmail.addEventListener('blur', validateEmail, false);
elFirstName.addEventListener('blur', validateFirstName, false);
elLastName.addEventListener('blur', validateLastName, false);
elComments.addEventListener('blur', validateComments, false);
elSubmit.addEventListener('click', validateForm, false);

//Email Validation Function
function validateEmail(){
    var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(elEmail.value == ""){
        //alert("Missing Email Address");
        elErrorEmail.innerHTML = "<p class=\"alert alert-danger\">You must enter a valid Email address.</p>"
        return false;
    } else if(!elEmail.value.match(regEmail)){
        elErrorEmail.innerHTML = "<p class=\"alert alert-danger\">This is not a valid Email address.</p>"

    } else {

        elErrorEmail.innerHTML = "";
        return true;
    }
}

//First Name Validation Function
function validateFirstName(){
    if(elFirstName.value == ""){
        //alert("Missing Email Address");
        elErrorFirstName.innerHTML = "<p class=\"alert alert-danger\">You must enter a first name.</p>"
        return false;
    } else {
        elErrorFirstName.innerHTML = "";
        return true;
    }
}

//Last Name Validation Function
function validateLastName(){
    if(elLastName.value == ""){
        //alert("Missing Email Address");
        elErrorLastName.innerHTML = "<p class=\"alert alert-danger\">You must enter a last name.</p>"
        return false;
    } else {
        elErrorLastName.innerHTML = "";
        return true;
    }
}

//Comments Validation Function
function validateComments(){
    if(elComments.value == ""){
        //alert("Missing Email Address");
        elErrorComments.innerHTML = "<p class=\"alert alert-danger\">This field cannot be left blank.</p>"
        return false;
    } else {
        elErrorComments.innerHTML = "";
        return true;
    }
}

//Form Validation Function
function validateForm(){
    if(validateEmail() && validateFirstName() && validateLastName() && validateComments()){
        return true;
    } else {
        return false;
    }
}