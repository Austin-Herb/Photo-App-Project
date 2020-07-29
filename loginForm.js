$(document).ready(function () {
    $(document).on('click', '#lSubmit', function (e) {
        //stops the submit from functioning normal
        e.preventDefault();
        //Global variables

        var elLEmail = document.getElementById('lEmail');
        var elErrorLEmail = document.getElementById('errorLEmail');
        var elLPassword = document.getElementById('lPassword');
        var elErrorLPassword = document.getElementById('errorLPassword');
        // var elLConfirmPassword = document.getElementById('lConfirmPassword');
        // var elErrorLConfirmPassword = document.getElementById('errorLConfirmPassword');
        // var elLFirstName = document.getElementById('lFirstName');
        // var elErrorLFirstName = document.getElementById('errorLFirstName');
        // var elLLastName = document.getElementById('lLastName');
        // var elErrorLLastName = document.getElementById('errorLLastName');
        var elError = document.getElementById('lError');
        var elSubmit = document.getElementById('lSubmit');

        //Event Listeners
        elLEmail.addEventListener('blur', validateLEmail, false);
        elLPassword.addEventListener('blur', validateLPassword, false);
        // elLConfirmPassword.addEventListener('blur', validateRConfirmPassword, false);
        // elLFirstName.addEventListener('blur', validateRFirstName, false);
        // elLLastName.addEventListener('blur', validateRLastName, false);
        elSubmit.addEventListener('click', validateRegisterForm, false);


        //Email validation function
        function validateLEmail() {
            var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (elLEmail.value == "") {
                elErrorLEmail.innerHTML = "<p class=\"alert alert-danger\">You must enter an email address.</p>";
                return false;
            } else if (!elLEmail.value.match(regEmail)) {
                elErrorLEmail.innerHTML = "<p class=\"alert alert-danger\">You must enter a valid email address.</p>";
                return false;
            } else {
                elErrorLEmail.innerHTML = "";
            }
        }

        function validateLPassword() {
            var regPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;

            if (elLPassword.value == "") {
                elErrorLPassword.innerHTML = "<p class=\"alert alert-danger\">You must enter a password.</p>";
                return false;
            } else {
                elErrorLPassword.innerHTML = "";
            }
        }


        function validateRegisterForm() {
            if (elLEmail.value == "" || elLPassword.value == "") {
                elError.innerHTML = "<p class=\"alert alert-danger\">All fields are required!</p>";
                return false;
            } else {
                elError.innerHTML = "";
                $.ajax({
                    url: 'includes/login.inc.php',
                    type: 'POST',
                    data: $('#loginForm').serialize(),
                    success: function (response) {
                        if (response == 'Login successful!') {
                            $('#lSubmit').html('Sending...'); //changes the value of the button
                            $('#lError').html('<div class="alert alert-success">' + response + '</div>');
                            setTimeout('window.location.href="index.php";', 4000);
                        } else {
                            $('#lError').fadeIn(1000, function () {
                                $('#lError').html('<div class="alert alert-danger">' + response + '</div>');
                                $('#lSubmit').html('Login');
                            });
                        }
                    }

                }); //end ajax function
                return false;
            }
        }

    }); // end onclick submit
}); //end ready function