$(document).ready(function () {
    $(document).on('click', '#uSubmit', function (e) {
        //stops the submit from functioning normal
        e.preventDefault();
        //Global variables

        var eluEmail = document.getElementById('uEmail');
        var elErrorUEmail = document.getElementById('errorUEmail');
        var eluPassword = document.getElementById('uPassword');
        var elErrorUPassword = document.getElementById('errorUPassword');
        var eluConfirmPassword = document.getElementById('uConfirmPassword');
        var elErrorUConfirmPassword = document.getElementById('errorUConfirmPassword');
        var eluFirstName = document.getElementById('uFirstName');
        var elErrorUFirstName = document.getElementById('errorUFirstName');
        var eluLastName = document.getElementById('uLastName');
        var elErrorULastName = document.getElementById('errorULastName');
        var elError = document.getElementById('uError');
        var elSubmit = document.getElementById('uSubmit');

        //Event Listeners
        eluEmail.addEventListener('blur', validateUEmail, false);
        eluPassword.addEventListener('blur', validateUPassword, false);
        eluConfirmPassword.addEventListener('blur', validateUConfirmPassword, false);
        eluFirstName.addEventListener('blur', validateUFirstName, false);
        eluLastName.addEventListener('blur', validateULastName, false);
        elSubmit.addEventListener('click', validateUpdateForm, false);


        //Email validation function
        function validateUEmail() {
            var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (eluEmail.value == "") {
                elErrorUEmail.innerHTML = "<p class=\"alert alert-danger\">You must enter an email address.</p>";
                return false;
            } else if (!eluEmail.value.match(regEmail)) {
                elErrorUEmail.innerHTML = "<p class=\"alert alert-danger\">You must enter a valid email address.</p>";
                return false;
            } else {
                elErrorUEmail.innerHTML = "";
            }
        }

        function validateUPassword() {
            var regPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;

            if (eluPassword.value == "") {
                elErrorUPassword.innerHTML = "<p class=\"alert alert-danger\">You must enter a password.</p>";
                return false;
            } else {
                elErrorUPassword.innerHTML = "";
            }
        }

        function validateUConfirmPassword() {
            if (eluConfirmPassword.value == "") {
                elErrorUConfirmPassword.innerHTML = "<p class=\"alert alert-danger\">You must enter a confirm password.</p>";
                return false;
            } else if (eluPassword.value !== eluConfirmPassword.value) {
                elErrorUConfirmPassword.innerHTML = "<p class=\"alert alert-danger\">Confirm password must match password.</p>";
                return false;
            } else {
                elErrorUConfirmPassword.innerHTML = "";
            }
        }

        function validateUFirstName() {
            if (eluFirstName.value == "") {
                elErrorUFirstName.innerHTML = "<p class=\"alert alert-danger\">You must enter a first name.</p>";
                return false;
            } else {
                elErrorUFirstName.innerHTML = "";
            }
        }

        function validateULastName() {
            if (eluLastName.value == "") {
                elErrorULastName.innerHTML = "<p class=\"alert alert-danger\">You must enter a last name.</p>";
                return false;
            } else {
                elErrorULastName.innerHTML = "";
            }
        }

        function validateUpdateForm() {
            if (eluEmail.value == "" && eluPassword.value == "" && eluConfirmPassword.value == "" && eluFirstName.value == "" && eluLastName.value == "") {
                elError.innerHTML = "<p class=\"alert alert-danger\">You must change at least one field!</p>";
                return false;
            } else {
                elError.innerHTML = "";
                $.ajax({
                    url: 'includes/update.inc.php',
                    type: 'POST',
                    data: $('#updateForm').serialize(),
                    success: function (response) {
                        if (response == 'Update successful!') {
                            $('#uSubmit').html('Updating...'); //changes the value of the button
                            $('#uError').html('<div class="alert alert-success">' + response + '</div>');
                            setTimeout('window.location.href="index.php";', 4000);
                        } else {
                            $('#uError').fadeIn(1000, function () {
                                $('#uError').html('<div class="alert alert-danger">' + response + '</div>');
                                $('#uSubmit').html('Update');
                            });
                        }
                    }

                }); //end ajax function
                return false;
            }
        }

    }); // end onclick submit
}); //end ready function