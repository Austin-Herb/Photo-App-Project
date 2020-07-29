<?php 
    $title = "Gamma: Contact";
    include 'includes/header.inc.php'
?>

    <section id="contact">
        <div id="container" style="padding-left: 75px; padding-right:   75px;">
            <form name="contactForm" method="get" onSubmit="return validateForm();" action="xxx.php" novalidate>
                <div class="form-group">
                    <label for="firstname">First Name</label>
                    <input type="text" class="form-control" id="firstname" placeholder="First Name" required>
                <div id="errorFirstName"></div>
                </div>

                <div class="form-group">
                    <label for="lastname">Last Name</label>
                    <input type="text" class="form-control" id="lastname" placeholder="Last Name" required>
                <div id="errorLastName"></div>
                </div>

                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"
                        placeholder="Enter email" required>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                <div id="errorEmail"></div>
                </div>

                <div class="form-group">
                    <label for="comments">Comments</label>
                    <textarea class="form-control" id="comments" rows="3" required></textarea>
                <div id="errorComments"></div>  
                </div>
                <button type="submit" id="submit" class="btn mybtn">Submit</button>
                <button type="reset" class="btn mybtn">Clear</button>

            </form>
            <!-- End of Container -->
        </div>

    </section>

<?php 
    include 'includes/footer.inc.php'
?>