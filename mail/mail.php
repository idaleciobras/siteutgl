<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];

$destinatario = "idaleciobraz399@gmail.com";
$assunto = "Clientes UTGL";

$corpo = "Nome: ".$nome."\n".Email: ".$email."\n"."Telefone: ".$telefone."\n"."mensagem: ",$mensagem;

$cabeca = "from: idaleciobraz399@gmail.com" ."\n"."Reply-to: ".$email."\n"."X-Mailer:PHP/" .phpversion();

if(mail($destino,$assunto,$corpo,$cabeca)){
  echo("Email enviado com sucesso");
}else{
  echo("Houve um erro a enviar o email");


?>


