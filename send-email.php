<?php

    $name = $_POST["course-form--name"];
    $email = $_POST["course-form--email"];
    $subject = "Nowe zapytanie o kurs";
    $message = 'Zapytanie od '.$email.' Prośba o konsultację: '.$_POST["course-form--type"];


    // PHPMailer classes into the global namespace
    use PHPMailer\PHPMailer\PHPMailer; 
    use PHPMailer\PHPMailer\Exception;
    // Base files 
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
    // create object of PHPMailer class with boolean parameter which sets/unsets exception.
    $mail = new PHPMailer(true);                              
    try {
        $mail->isSMTP(); // using SMTP protocol                                     
        $mail->Host = 'smtp.gmail.com'; // SMTP host as gmail 
        $mail->SMTPAuth = true;  // enable smtp authentication                             
        $mail->Username = '************';  // sender gmail host              
        $mail->Password = '**************'; // sender gmail host password                          
        $mail->SMTPSecure = 'tls';  // for encrypted connection                           
        $mail->Port = 587;   // port for SMTP     
    
        $mail->setFrom($email, 'Kurs'); // sender's email and name
        $mail->AddReplyTo($email, $name);
        $mail->addAddress('********@gmail.com', "Name");  // receiver's email and name
    
        $mail->Subject = $subject;
        $mail->Body    = $message;
    
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) { // handle error.
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
    ?>
