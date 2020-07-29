$(document).ready(function () {
    $(document).on('click', '#rSubmit', function (e) {
        //stops the submit from functioning normal
        e.preventDefault();
        //Global variables

        var elrEmail = document.getElementById('rEmail');
        var elErrorREmail = document.getElementById('errorREmail');

        var elrPassword = document.getElementById('rPassword');
        var elErrorRPassword = document.getElementById('errorRPassword');

        var elrConfirmPassword = document.getElementById('rConfirmPassword');
        var elErrorRConfirmPassword = document.getElementById('errorRConfirmPassword');

        var elrFirstName = document.getElementById('rFirstName');
        var elErrorRFirstName = document.getElementById('errorRFirstName');

        var elrLastName = document.getElementById('rLastName');
        var elErrorRLastName = document.getElementById('errorRLastName');

        var elError = document.getElementById('rError');
        var elSubmit = document.getElementById('rSubmit');

        //Event Listeners
        elrEmail.addEventListener('blur', validateREmail, false);
        elrPassword.addEventListener('blur', validateRPassword, false);
        elrConfirmPassword.addEventListener('blur', validateRConfirmPassword, false);
        elrFirstName.addEventListener('blur', validateRFirstName, false);
        elrLastName.addEventListener('blur', validateRLastName, false);
        elSubmit.addEventListener('click', validateRegisterForm, false);


        //Email validation function
        function validateREmail() {
            var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (elrEmail.value == "") {
                elErrorREmail.innerHTML = "<p class=\"alert alert-danger\">You must enter an email address.</p>";
                return false;
            } else if (!elrEmail.value.match(regEmail)) {
                elErrorREmail.innerHTML = "<p class=\"alert alert-danger\">You must enter a valid email address.</p>";
                return false;
            } else {
                elErrorREmail.innerHTML = "";
            }
        }
        
        //Password validation function
        function validateRPassword() {
            var regPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;

            if (elrPassword.value == "") {
                elErrorRPassword.innerHTML = "<p class=\"alert alert-danger\">You must enter a password.</p>";
                return false;
            } else {
                elErrorRPassword.innerHTML = "";
            }
        }

        //Confirm password validation function
        function validateRConfirmPassword() {
            if (elrConfirmPassword.value == "") {
                elErrorRConfirmPassword.innerHTML = "<p class=\"alert alert-danger\">You must enter a confirm password.</p>";
                return false;
            } else if (elrPassword.value !== elrConfirmPassword.value) {
                elErrorRConfirmPassword.innerHTML = "<p class=\"alert alert-danger\">Confirm password must match password.</p>";
                return false;
            } else {
                elErrorRConfirmPassword.innerHTML = "";
            }
        }

        //First name validation function
        function validateRFirstName() {
            if (elrFirstName.value == "") {
                elErrorRFirstName.innerHTML = "<p class=\"alert alert-danger\">You must enter a first name.</p>";
                return false;
            } else {
                elErrorRFirstName.innerHTML = "";
            }
        }

        //Last name validation function
        function validateRLastName() {
            if (elrLastName.value == "") {
                elErrorRLastName.innerHTML = "<p class=\"alert alert-danger\">You must enter a last name.</p>";
                return false;
            } else {
                elErrorRLastName.innerHTML = "";
            }
        }

        //Register form validation function
        function validateRegisterForm() {
            if (elrEmail.value == "" || elrPassword.value == "" || elrConfirmPassword.value == "" || elrFirstName.value == "" || elrLastName.value == "") {
                elError.innerHTML = "<p class=\"alert alert-danger\">All fields are required!</p>";
                return false;
            } else {
                elError.innerHTML = "";
                $.ajax({
                    url: 'includes/register.inc.php',
                    type: 'POST',
                    data: $('#registerForm').serialize(),
                    success: function (response) {
                        if (response == 'Registration successful!') {
                            $('#rSubmit').html('Sending...'); //changes the value of the button
                            $('#rError').html('<div class="alert alert-success">' + response + '</div>');
                            setTimeout('window.location.href="index.php";', 4000);
                        } else {
                            $('#rError').fadeIn(1000, function () {
                                $('#rError').html('<div class="alert alert-danger">' + response + '</div>');
                                $('#rSubmit').html('Register');
                            });
                        }
                    }

                }); //end ajax function
                return false;
            }
        }

    }); // end onclick submit
}); //end ready function