<?php
    include 'dbconnect.inc.php';
    $updateEmail = $updatePassword = $updateFirstName = $updateLastName = "";

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $updateEmail = test_input($_POST['uEmail']);
        $updatePassword = test_input($_POST['uPassword']);
        $updateFirstName = test_input($_POST['uFirstName']);
        $updateLastName = test_input($_POST['uLastName']);
    }

    //validation against XSS
    function test_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $hashedPassword = password_hash($updatePassword, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("SELECT email FROM users WHERE email = ?");
    $stmt->bind_param("s", $updateEmail);
    $stmt->execute();

    $result = $stmt->get_result();
    if($result->num_rows == 1){
        $stmt = $conn->prepare("UPDATE users SET password=?, firstName=?, lastName=?"); 
        $stmt->bind_param("sss", $hashedPassword, $updateFirstName, $updateLastName);
        $stmt->execute();
        $_SESSION['currentUser'] = $updateFirstName;
        $_SESSION['currentUserEmail'] = $updateEmail;
        echo "Update successful!";
        $stmt->close();
    } else {
        echo "Unable to update, email address does not exist!"; 
        $stmt->close();
    }
    $conn->close();

?>