<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;1,400&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <title>Emanuel Kulesza</title>
    <style>
        * {
            font-family: 'Lora', serif;
            margin: 0;
        }
        #logo {
            width: 300px;
            padding-bottom: 20px;
        }
        header {
            display: flex;
            flex-direction: column;
            padding: 20px;
        }
        h1 {
            color: black;
            padding-bottom: 20px;
        }
        body {
            background-color: #CFB49D;
        }
        div {
            padding: 20px;
        }
        a {
            color: black;
        }
        p {
            padding: 10px 0px; 
        }
    </style>
</head>
<body>
    <header>
        <img id="logo" src="./images/logo-light.png" alt="logo">
        <a href="http://emanuelkulesza.pl">Wróć na stronę główną</a>
    </header>

</body>
</html>


<?php

    $name = $_POST["course-form--name"];
    $email = $_POST["course-form--email"];
    $topic = $_POST["course-form--type"];

    $subject = "Nowe zapytanie o kurs";
    $message = "
    <h1>Masz nowe zapytanie o kurs</h1>
    <h2>Dane do kontaktu: </h2>
    <p>Imię i nazwisko: $name</p> 
    <p>E-mail: $email </p> 
    <p>Temat: $topic </p>
    ";


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
        $mail->Username = '**********@gmail.com';  // sender gmail host              
        $mail->Password = '************'; // sender gmail host password                          
        $mail->SMTPSecure = 'tls';  // for encrypted connection                           
        $mail->Port = 587;   // port for SMTP     
        $mail->CharSet = 'UTF-8';

        $mail->setFrom($email, 'Strefa Kursu E.Kulesza'); // sender's email and name
        $mail->AddReplyTo($email, $name);
        $mail->addAddress('***********@gmail.com', "Name");  // receiver's email and name
        $mail->isHTML(true);

        $mail->Subject = $subject;
        $mail->Body    = $message;
    
        $mail->send();
        echo "
        <div>
            <h1>Dziękuję, że zapisałeś się na kurs</h1>
            <p>Twój e-mail: $email</p>
            <p>Skontaktuję się z Tobą na podanego emaila w ciągu 7 dni roboczych w celu ustalenia szczegółów.</p>
            <p>Jeśli nie dostaniesz żadnej informacji w tym czasie proszę napisz do mnie na kontakt@emanuelkulesza.pl</p>
        </div>
            ";;
        
    } catch (Exception $e) { // handle error.
        echo 'Wiadomość nie mogła zostać wysłana.', $mail->ErrorInfo;
    }

?>
