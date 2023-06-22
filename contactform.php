<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = 'Camping Inquiry';
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $date1 = $_POST['date1'];
    $date2 = $_POST['date2'];
    $site = $_POST['size'];
    $message = $_POST['message'];

    $mailTo = "kec1993@hotmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$email.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}

?>