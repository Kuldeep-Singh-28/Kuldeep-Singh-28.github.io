<?php
include_once("index.html");

// get data from form
if (isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $email= $_POST['email'];
    $phone= $_POST['phone'];
    $subject= $_POST['subject'];
    $message= $_POST['message'];
    $to = "alphadevcafeteria@gmail.com";
    
    $txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n subject =" . $subject "\r\n Message =" . $message;
    $headers = "From: $name <$email>";
    
    if( mail($to,$subject,$txt,$headers)){
        echo "{"success":"<p class=\"alert alert-success w-100 m-0 mt-4\">Thank you for your message. It has been sent.<\/p>"}";
        exit;
    }
    else
    {
        echo "{"success":"<p class=\"alert alert-danger w-100 m-0 mt-4\">Please try again!!<\/p>"}";
        exit;
    }

}



?>