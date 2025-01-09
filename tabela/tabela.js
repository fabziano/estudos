function gerarTabela() {
    const tabela = document.querySelector('table');
    tabela.innerHTML = '';
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    tbody.id = 'tabela';

    const headerRow = document.createElement('tr');
    const cornerCell = document.createElement('th');
    cornerCell.textContent = 'X';
    headerRow.appendChild(cornerCell);

    for (let i = 1; i <= 10; i++) {
        const th = document.createElement('th');
        th.textContent = i;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);

    for (let i = 1; i <= 10; i++) {
        const novaLinha = document.createElement('tr');
        const cabecalho = document.createElement('td');
        cabecalho.textContent = i;
        novaLinha.appendChild(cabecalho);

        for (let j = 1; j <= 10; j++) {
            const celula = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 3;
            input.dataset.linha = i;
            input.dataset.coluna = j;
            input.dataset.resultado = i * j;
            input.addEventListener('focus', destacarOperacao);
            input.addEventListener('blur', removerDestaques);

            if (i === j) {
                input.classList.add('quadrado-perfeito');
            }

            celula.appendChild(input);
            novaLinha.appendChild(celula);
        }

        tbody.appendChild(novaLinha);
    }

    tabela.appendChild(thead);
    tabela.appendChild(tbody);
}

function destacarOperacao(event) {
    const input = event.target;
    const linha = parseInt(input.dataset.linha);
    const coluna = parseInt(input.dataset.coluna);

    document.querySelectorAll('th, td').forEach(cell => cell.style.backgroundColor = '');

    const rows = document.querySelectorAll('tr');
    rows[linha].firstElementChild.style.backgroundColor = '#ff79c6';
    rows[linha].firstElementChild.style.color = '#44475a';

    const headerCells = document.querySelectorAll('th');
    headerCells[coluna].style.backgroundColor = '#ff79c6';
    headerCells[coluna].style.color = '#44475a';
}

function removerDestaques() {
    document.querySelectorAll('th, td').forEach(cell => {
        cell.style.backgroundColor = '';
        cell.style.color = '';
    });
}

export { gerarTabela, destacarOperacao, removerDestaques };