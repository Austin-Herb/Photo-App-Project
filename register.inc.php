<?php
    include 'dbconnect.inc.php';
    
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $email = test_input($_POST['rEmail']);
        $password = test_input($_POST['rPassword']);
        $firstName = test_input($_POST['rFirstName']);
        $lastName = test_input($_POST['rLastName']);
    }

    //validation against XSS
    function test_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("SELECT email FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();
    if($result->num_rows == 1){
        echo "Email address already exists - please login!"; 
        $stmt->close();
    }else{
        $stmt = $conn->prepare("INSERT INTO users (email, password, firstName, lastName) VALUES (?,?,?,?)");
        $stmt->bind_param("ssss", $email, $hashedPassword, $firstName, $lastName);
        $stmt->execute();
        $_SESSION['currentUser'] = $firstName;
        $_SESSION['currentUserEmail'] = $email;
        echo "Registration successful!";
        $stmt->close();
    }
    
    $conn->close();
?>