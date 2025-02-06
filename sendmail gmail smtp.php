<?php

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST)) {
    //echo "<pre>".print_r($_POST['email'])."</pre>";die();
    $mail = new PHPMailer(true);

    try {
        // SMTP Settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'pranavbhawsar29@gmail.com'; // Change this
        $mail->Password = '900400500'; // Use App Password (not Gmail password)
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Email Content
        $mail->setFrom($_POST['email']);
        $mail->addAddress('pranav.bhawsar24@st.niituniversity.in'); // Change to your email
        $mail->Subject = "Subscription Confirmation";
        $mail->Body = "Thank you for subscribing to our newsletter!";

        $mail->send();
        echo "Message sent successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Error: {$mail->ErrorInfo}";
    }
}
?>