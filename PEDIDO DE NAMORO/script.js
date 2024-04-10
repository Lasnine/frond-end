function notificarErro() {
    alert("ERRO 4004: Impossível clicar nesta opção. Tente novamente usando outra opção!!!");
  }
  
  function responder(resposta) {
    if (resposta === 'sim') {
      document.getElementById('mensagem').style.display = 'block';
    }
  }
  