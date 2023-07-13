var corVermelho = window.document.querySelectorAll('td.vermelho');
var corAzul = window.document.querySelectorAll('td.azul');
var corMarrom = window.document.querySelectorAll('td.marrom');
var corSimbolo = window.document.querySelectorAll('td.simbolo');
var corNariz = window.document.querySelectorAll('td.nariz');

function luigi() {
  for (var i = 0; i < corVermelho.length; i++) {
    corVermelho[i].style.background = 'green';
  }
  for (var i = 0; i < corAzul.length; i++) {
    corAzul[i].style.background = 'blue';
  }
  for (var i = 0; i < corSimbolo.length; i++) {
    corSimbolo[i].style.background = 'white';
  }
  for (var i = 0; i < corNariz.length; i++) {
    corNariz[i].style.background = 'peachpuff';
  }
  for (var i = 0; i < corMarrom.length; i++) {
    corMarrom[i].style.background = 'saddlebrown';
  }
}

function fire() {
    for (var i = 0; i < corVermelho.length; i++) {
      corVermelho[i].style.background = 'white';
    }
    for (var i = 0; i < corAzul.length; i++) {
      corAzul[i].style.background = 'red';
    }
    for (var i = 0; i < corSimbolo.length; i++) {
      corSimbolo[i].style.background = 'red';
    }
    for (var i = 0; i < corMarrom.length; i++) {
      corMarrom[i].style.background = 'saddlebrown';
    }
  }

  function wario() {
    for (var i = 0; i < corVermelho.length; i++) {
      corVermelho[i].style.background = 'yellow';
    }
    for (var i = 0; i < corAzul.length; i++) {
      corAzul[i].style.background = 'blueviolet';
    }
    for (var i = 0; i < corMarrom.length; i++) {
      corMarrom[i].style.background = 'green';
    }
    for (var i = 0; i < corSimbolo.length; i++) {
      corSimbolo[i].style.background = 'white';
    }
    for (var i = 0; i < corNariz.length; i++) {
      corNariz[i].style.background = 'pink';
    }
  }