<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    //print_r($_POST);die();
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $contact_email = htmlspecialchars($_POST['contact_email']);
    $phone_number = htmlspecialchars($_POST['phone_number']);
    $subject = htmlspecialchars($_POST['subject']);

    // Send email
    $to = $email;
    $subject = "Subscription Confirmation";
    $message = "Thank you for subscribing to our newsletter!";
    $headers = "From: webmaster@example.com"; // Replace with your domain email
    
    //$headers = "From: webmaster@example.com" . "\r\n"; // Replace with your domain email
    //$headers .= "Cc: webmastercc@example.com" . "\r\n";
    // echo "Email sending failed...";
    if (mail($to, $subject, $message, $headers)) {
        echo "Confirmation email sent to $to...";
    } else {
        echo "Email sending failed...";
    }
}
?>


<?php
/* For future aspects database code start
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST['email']);

    
    // Save to database
    $servername = "localhost";
    $username = "your_username"; // Replace with your database username
    $password = "your_password"; // Replace with your database password
    $dbname = "your_database"; // Replace with your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO subscribers (email) VALUES ('$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Subscription successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    

    // Send email
    $to = $email;
    $subject = "Subscription Confirmation";
    $message = "Thank you for subscribing to our newsletter!";
    $headers = "From: webmaster@example.com"; // Replace with your domain email

    if (mail($to, $subject, $message, $headers)) {
        echo "Confirmation email sent to $to...";
    } else {
        echo "Email sending failed...";
    }
}
// For future aspects database code ends*/
?>