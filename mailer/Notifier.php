<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require "Config.php";

class Notifier
{

    public function sendEmail($content = "") {
        $config = new Config();
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host       = $config->getHost();
            $mail->SMTPAuth   = true;
            $mail->Username   = $config->getUsername();
            $mail->Password   = $config->getPassword();
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465;

            $mail->setFrom($config->getMailerEmail(), 'kerames.ru');
            $mail->addAddress($config->getMailerRecipient());


            $mail->isHTML(false);
            $mail->Subject = 'Вам поступил новый заказ с сайта kerames.ru';
            $mail->Body    = $content;
            $mail->AltBody = $content;

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}