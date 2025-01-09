import * as tabela from './tabela.js';

document.addEventListener('DOMContentLoaded', function () {
    tabela.gerarTabela();
});

document.addEventListener('input', function (event) {
    if (event.target.tagName === 'INPUT') {
        const input = event.target;
        const resultadoCorreto = parseInt(input.dataset.resultado);

        if (input.value) {
            if (parseInt(input.value) === resultadoCorreto) {
                input.style.backgroundColor = '#50fa7b';
                input.style.color = '#282a36';
            } else {
                input.style.backgroundColor = '#ff5555';
                input.style.color = '#282a36';
            }
        } else {
            input.style.backgroundColor = '';
        }
    }
});