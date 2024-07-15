<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Boas-vindas</title>
</head>
<body>
  <script>
    function boasVindas(nome) {
      document.write(`<h1>Bem vindo, ${nome}!</h1>`);
    }

    // Exemplo de uso
    const nomeUsuario = prompt("Digite seu nome:");
    boasVindas(nomeUsuario);
  </script>
</body>
</html>