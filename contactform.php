<?php

if (isset($_POST['submit'])) {
    $name = $_POST['form_name'];
    $subject = 'Camping Inquiry';
    $email = $_POST['form-email'];
    $phone = $_POST['form-phone'];
    $date1 = $_POST['form-date1'];
    $date2 = $_POST['form-date2'];
    $site = $_POST['form-size'];
    $message = $_POST['form-msg'];

    $mailTo = "kec1993@hotmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$email.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}