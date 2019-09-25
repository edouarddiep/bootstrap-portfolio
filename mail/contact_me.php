<!--

@author Edouard Diep
 -->

<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "Aucun argument fourni !";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$phoneTrimmed = str_replace(' ', '', trim($phone));
   
// Create the email and send the message
$to = 'edouard.diep@gmail.com'; // This is where the form will send a message to.
$email_from = "Portfolio Contact";
$email_subject = "Nouveau message sur le Portfolio :  $name";
$email_body = "Nouveau message reçu depuis le formulaire de contact sur le Portfolio.\n\n"."Voici les détails du contact : \n\nNom: $name\n\nE-mail: $email_address\n\nNuméro de téléphone: $phoneTrimmed\n\nMessage:\n$message";
$headers = "From: $email_from \r\n"; // This is the email address the generated message will be from.
$headers .= "Répondre à: $email_address \r\n";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>