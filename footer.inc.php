<footer>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <ul>
          <li><a href="index.php">Home</a></li>
          <li><a href="about.php">About</a></li>
          <li><a href="gallery.php">Gallery</a></li>
          <li><a href="contact.php">Contact</a></li>
        </ul>
      </div>
      <div class="col-md-6">
        <p>Copyright &copy; 2019, All Rights Reserved</p>
      </div>
    </div> <!-- .end row -->
  </div> <!-- .end container-->
</footer>

<!-- Register Modal -->
<div class="modal" id="registerModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Complete Registration Form below: </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form name="registerForm" id="registerForm" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" novalidate>
            <div id="rError"></div>
            <div class="form-group">
                <label for="rEmail">Email Address</label>
                <input type="email" name="rEmail" class="form-control" id="rEmail" aria-describedby="emailHelp" placeholder="Enter email address" required>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                <div id="errorREmail"></div>
            </div>
            <div class="form-group">
                <label for="rPassword">Password</label>
                <input type="password" name="rPassword" class="form-control" id="rPassword" placeholder="Enter password" required>
                <div id="errorRPassword"></div>
            </div>
            <div class="form-group">
                <label for="rConfirmPassword">Confirm Password</label>
                <input type="password" name="rConfirmPassword" class="form-control" id="rConfirmPassword" placeholder="Enter confirm password" required>
                <div id="errorRConfirmPassword"></div>
            </div>
            <div class="form-group">
                <label for="rFirstName">First Name</label>
                <input type="text" name="rFirstName" class="form-control" id="rFirstName" placeholder="Enter first name" required>
                <div id="errorRFirstName"></div>
            </div>
            <div class="form-group">
                <label for="rLastName">LastName</label>
                <input type="text" name="rLastName" class="form-control" id="rLastName" placeholder="Enter last name" required>
                <div id="errorRLastName"></div>
            </div>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn mybtn" data-dismiss="modal">Close</button>
        <button type="submit" id="rSubmit" class="btn mybtn">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Login modal -->
<div class="modal" id="loginModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Login:</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form name="loginForm" id="loginForm" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" novalidate>
            <div id="lError"></div>
            <div class="form-group">
                <label for="lEmail">Email Address</label>
                <input type="email" name="lEmail" class="form-control" id="lEmail" placeholder="Enter email address" required>
                <div id="errorLEmail"></div>
            </div>
            <div class="form-group">
                <label for="lPassword">Password</label>
                <input type="password" name="lPassword" class="form-control" id="lPassword" placeholder="Enter password" required>
                <div id="errorLPassword"></div>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn mybtn" data-dismiss="modal">Close</button>
        <button type="submit" id="lSubmit" class="btn mybtn">Login</button>
        </form>

      </div>
    </div>
  </div>
</div>

<!-- Update Account modal -->
<div class="modal" id="updateModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Change account information below: </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <?php
              include 'dbconnect.inc.php';
              // session_start();
              if(isset($_SESSION['currentUserEmail'])){
                $currentUserEmail = $_SESSION['currentUserEmail'];
                $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
                $stmt->bind_param("s", $currentUserEmail);
                $stmt->execute();
                
                $result = $stmt->get_result();
                if($result->num_rows == 1){
                  $row = $result->fetch_row();
                    $updateEmail = $row[0];
                    $updateFirstName = $row[2];
                    $updateLastName = $row[3];


                echo '<form name="updateForm" id="updateForm" method="post" novalidate>
                <div id="uError"></div>
            <div class="form-group">    
                <label for="uEmail">Email Address</label>
                <input type="email" name="uEmail" class="form-control" id="uEmail" value="'.$updateEmail.'" aria-describedby="emailHelp" placeholder="Enter email address" readonly>
                <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>
                <div id="errorUEmail"></div>
            </div>
            <div class="form-group">
                <label for="uPassword">Password</label>
                <input type="password" name="uPassword" class="form-control" id="uPassword" placeholder="Enter password" required>
                <div id="errorUPassword"></div>
            </div>
            <div class="form-group">
                <label for="uConfirmPassword">Confirm Password</label>
                <input type="password" name="uConfirmPassword" class="form-control" id="uConfirmPassword" placeholder="Enter confirm password" required>
                <div id="errorUConfirmPassword"></div>
            </div>
            <div class="form-group">
                <label for="uFirstName">First Name</label>
                <input type="text" name="uFirstName" class="form-control" id="uFirstName" placeholder="Enter first name" value="'.$updateFirstName.'"required>
                <div id="errorUFirstName"></div>
            </div>
            <div class="form-group">
                <label for="uLastName">LastName</label>
                <input type="text" name="uLastName" class="form-control" id="uLastName" placeholder="Enter last name" value="'.$updateLastName.'"required>
                <div id="errorULastName"></div>
            </div>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn mybtn" data-dismiss="modal">Close</button>
        <button type="submit" id="uSubmit" class="btn mybtn">Update Account</button>
        </form>
      </div>';
                } else {
                  echo "Unable to update!";
                }
              }
      ?>
    </div>
  </div>
</div>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script
  src="https://code.jquery.com/jquery-3.4.0.min.js"
  integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg="
  crossorigin="anonymous">
</script>

<!-- this is the no AJAX version of jQuery -->
<!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
</script> -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
  integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
</script>

<!-- Custom JavaScript -->
<script src="js/contactForm.js"></script>
<script src="js/registerForm.js"></script>
<script src="js/loginForm.js"></script>
<script src="js/updateForm.js"></script>

</body>

</html>