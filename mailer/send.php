<?php
require '../vendor/autoload.php';
require 'Notifier.php';

if ($_SERVER['REQUEST_METHOD'] == "POST"
    && isset($_POST['sendEmail'])
    && isset($_POST['productName'])
    && isset($_POST['productCount'])
    && isset($_POST['deliveryAddress'])
    && isset($_POST['email'])
) {
    $request = $_POST;

    $content = "
    •	Наименование товара: " . $request["productName"] . "
    •	Количество товара: " . $request["productCount"] . "
    •	Адрес доставки/самовывоз: " . $request["deliveryAddress"] . "
    •	Желательная дата поставки: " . $request["deliveryDate"] . "
    •	Эл почта для ответа: " . $request["email"];

    $notifier = new Notifier();
    $notifier->sendEmail($content);
}

header('Location: ' . $_SERVER['HTTP_REFERER']);