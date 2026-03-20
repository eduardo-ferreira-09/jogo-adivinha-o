function jogar() {
    let nomeElemento = document.getElementById('nomeJogador');
    let nome = String(nomeElemento?.value || '').trim();
    if (!nome) {
        nome = prompt('Digite seu nome antes de começar:') || 'Jogador';
        nome = String(nome).trim() || 'Jogador';
    }

    const palavras = ['CAMALEAO', 'PALMEIRAS', 'TONY STARK', 'EIFFEL', 'STROGONOFF'];
    const dicas = [
        'Animal que muda de cor',
        'Alviverde Imponente',
        'Gênio, Bilionário, Playboy e Filantropo',
        'Torre conhecida na europa',
        'Prato russo adotado no Brasil'
    ];

    let pontuacao = 0;

    for (let i = 0; i < palavras.length; i++) {
        let acertou = false;

        for (let tentativa = 1; tentativa <= 3; tentativa++) {
            let entrada = prompt('DICA ' + (i + 1) + ': ' + dicas[i] + '\nTentativa ' + tentativa + ' de 3');
            if (entrada === null) {
                alert('Jogo cancelado.');
                return;
            }

            let chute = String(entrada || '').trim().toUpperCase();
            if (chute === palavras[i]) {
                alert('Correto! Próxima pergunta.');
                pontuacao++;
                acertou = true;
                break;
            }

            if (tentativa < 3) {
                alert('Resposta errada. Tente novamente.');
            } else {
                alert('Chances esgotadas. A resposta era: ' + palavras[i]);
            }
        }

        if (!acertou) {
          
        }
    }

    let textoFinal = 'Parabéns, ' + nome + '!\nSua pontuação: ' + pontuacao + ' de ' + palavras.length + '.\n\nGabarito final:\n';
    for (let j = 0; j < palavras.length; j++) {
        textoFinal += (j + 1) + '. ' + palavras[j] + '\n';
    }
    alert(textoFinal);
}