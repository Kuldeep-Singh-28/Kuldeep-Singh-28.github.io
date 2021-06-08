<?php

// get data from form
if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $email= $_POST['email'];
    $phone= $_POST['phone'];
    $subject= $_POST['subject'];
    $message= $_POST['message'];
    $to = "alphadevcafeteria@gmail.com";

    $txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n subject =" . $subject "\r\n Message =" . $message;
    $email_from = "noreply@kuldeepsingh28.com"
    $headers = "From: $email_from \r\n";
    $headers = "Reply-To: $email \r\n";

    if( mail($to,$subject,$txt,$headers)){
  $result = array("success"=>"<p class=\"alert alert-success w-100 m-0 mt-4\">Thank you for your message. It has been sent.</p>");
        echo json_encode($result);
    }
    else
    {
        $result = array("success"=>"<p class=\"alert alert-danger w-100 m-0 mt-4\">Please try again!!</p>");
        echo json_encode($result);

    }

}

?>


