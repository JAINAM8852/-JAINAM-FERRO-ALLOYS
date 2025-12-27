<?php

require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load .env file from root
$env = parse_ini_file(__DIR__ . "/../../.env");

// Create PHPMailer object FIRST
$mail = new PHPMailer(true);

try {

    // Form data
    $name       = $_POST["name"];
    $email      = $_POST["email"];
    $company    = $_POST["company"];
    $country    = $_POST["country"];
    $quantity   = $_POST["quantity"];
    $message    = $_POST["message"];
    $product    = $_POST["productName"];

    // SMTP SETTINGS
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;

    // Values from .env
    $mail->Username   = $env["SMTP_USER"];
    $mail->Password   = $env["SMTP_PASS"];

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // FROM + TO
    $mail->setFrom($env["SMTP_USER"], 'Website Enquiry');
    $mail->addAddress('ragnarmetals@gmail.com');

    // FILE ATTACHMENT
    if (!empty($_FILES["drawing"]["name"])) {
        $mail->addAttachment($_FILES["drawing"]["tmp_name"], $_FILES["drawing"]["name"]);
    }

    // EMAIL CONTENT
    $mail->isHTML(true);
    $mail->Subject = 'New Product Enquiry';

    $mail->Body = "
        <h3>New Enquiry Received</h3>
        <table border='1' cellpadding='10'>
            <tr><td><b>Product</b></td><td>$product</td></tr>
            <tr><td><b>Name</b></td><td>$name</td></tr>
            <tr><td><b>Email</b></td><td>$email</td></tr>
            <tr><td><b>Company</b></td><td>$company</td></tr>
            <tr><td><b>Country</b></td><td>$country</td></tr>
            <tr><td><b>Quantity</b></td><td>$quantity</td></tr>
            <tr><td><b>Message</b></td><td>$message</td></tr>
        </table>
    ";

    // SEND + REDIRECT
    if ($mail->send()) {
        header("Location: success.html");
        exit;
    } else {
        header("Location: error.html");
        exit;
    }

} catch (Exception $e) {
    header("Location: error.html");
    exit;
}

