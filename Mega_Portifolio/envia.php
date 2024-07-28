<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $celular = addslashes($_POST['celular']);
    $complemento = addslashes($_POST['complemento']);

    $para = "matheusparizoti00@gmail.com";

    $assunto = "Contato - Potifólio";

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Celular: ".$celular."\n"."Complemento: ".$complemento;

    $cabeca = "From: teste@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if (mail($para,$assunto,$corpo,$cabeca)) {
        echo("E-mail enviado com sucesso");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>