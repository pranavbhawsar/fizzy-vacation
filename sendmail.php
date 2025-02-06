<?php

// require 'PHPMailer/src/PHPMailer.php';
// require 'PHPMailer/src/SMTP.php';
// require 'PHPMailer/src/Exception.php';

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// if(isset($_POST)) {
//     //echo "<pre>".print_r($_POST['email'])."</pre>";die();
//     $mail = new PHPMailer(true);

//     try {
//         // SMTP Settings
//         $mail->isSMTP();
//         $mail->Host = 'smtp.gmail.com';
//         $mail->SMTPAuth = true;
//         $mail->Username = 'pranavbhawsar29@gmail.com'; // Change this
//         $mail->Password = '900400500'; // Use App Password (not Gmail password)
//         $mail->SMTPSecure = 'tls';
//         $mail->Port = 587;

//         // Email Content
//         $mail->setFrom($_POST['email']);
//         $mail->addAddress('pranav.bhawsar24@st.niituniversity.in'); // Change to your email
//         $mail->Subject = "Subscription Confirmation";
//         $mail->Body = "Thank you for subscribing to our newsletter!";

//         $mail->send();
//         echo "Message sent successfully!";
//     } catch (Exception $e) {
//         echo "Message could not be sent. Error: {$mail->ErrorInfo}";
//     }
// }
?>

<?php
// require 'mailgun/src/Mailgun.php';
// use Mailgun\Mailgun;

// $apiKey = '0d5b1f12216ca714ef069ee57608e280-667818f5-fa909160'; // Replace with your Mailgun API Key
// $domain = 'sandbox238e630590c340b7ae32a28150147621.mailgun.org'; // Replace with your Mailgun domain (e.g., sandboxXXXXXX.mailgun.org)

// $mailgun = Mailgun::create($apiKey);

// $response = $mailgun->messages()->send($domain, [
//     'from'    => 'No Reply <ramoxow467@rykone.com>', // Replace with your verified Mailgun sender email
//     'to'      => 'pranav.bhawsar24@st.niituniversity.in', // Replace with recipient's email
//     'subject' => 'Subscription Confirmation',
//     'text'    => 'Thank you for subscribing to our newsletter!',
// ]);

// echo "Email sent successfully! Message ID: " . $response->getId();



// Include the Autoloader (see "Libraries" for install instructions)
// require 'mailgun/src/Mailgun.php';
// use Mailgun\Mailgun;

// // First, instantiate the SDK with your API credentials
// $mg = Mailgun::create('0d5b1f12216ca714ef069ee57608e280-667818f5-fa909160'); // For US servers

// // Now, compose and send your message.
// // $mg->messages()->send($domain, $params);
// $mg->messages()->send('sandbox238e630590c340b7ae32a28150147621.mailgun.org', [
//     'from'		=> 'ramoxow467@rykone.com',
//     'to'			=> 'pranav.bhawsar24@st.niituniversity.in',
//     'subject' => 'Subscription Confirmation',
//     'text'		=> 'Thank you for subscribing to our newsletter!'
// ]);
?>


<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.mailgun.org';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'postmaster@sandbox238e630590c340b7ae32a28150147621.mailgun.org';
    $mail->Password   = 'e0b3a2782076035769b309c994e6e930-667818f5-5c4f805a';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom('ramoxow467@rykone.com', 'No Reply');
    $mail->addAddress('ramoxow467@rykone.com');

    $mail->isHTML(true);
    $mail->Subject = 'Hello from Mailgun!';
    $mail->Body    = 'This is a test email sent using Mailgun SMTP and PHPMailer.';

    $mail->send();
    echo 'Email sent successfully!';
} catch (Exception $e) {
    echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
