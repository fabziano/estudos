const perguntaInput = document.getElementById('pergunta');
const respostaCorretaSelect = document.getElementById('respostaCorreta');
const opcaoAInput = document.getElementById('opcaoA');
const opcaoBInput = document.getElementById('opcaoB');
const opcaoCInput = document.getElementById('opcaoC');
const opcaoDInput = document.getElementById('opcaoD');
const opcaoEInput = document.getElementById('opcaoE');
const explicacaoInput = document.getElementById('explicacao');
const quizOutputPre = document.getElementById('quizOutput');
const perguntasAdicionadasOutputPre = document.getElementById('perguntasAdicionadasOutput');

const quizPerguntas = [];
let perguntaCounter = 1;

function gerarQuizBlocoUnico() {
    const pergunta = perguntaInput.value.trim();
    const respostaCorreta = respostaCorretaSelect.value;
    const opcaoA = opcaoAInput.value.trim();
    const opcaoB = opcaoBInput.value.trim();
    const opcaoC = opcaoCInput.value.trim();
    const opcaoD = opcaoDInput.value.trim();
    const opcaoE = opcaoEInput.value.trim();
    const explicacao = explicacaoInput.value.trim();

    let output = '';
    if (pergunta) {
        output += '<?quiz?>\n';
        output += `question: ${perguntaCounter}. ${pergunta.replace(/\n/g, '<br>')}\n`;
        output += `answer${respostaCorreta === 'A' ? '-correct' : ''}: A. ${opcaoA}\n`;
        output += `answer${respostaCorreta === 'B' ? '-correct' : ''}: B. ${opcaoB}\n`;
        output += `answer${respostaCorreta === 'C' ? '-correct' : ''}: C. ${opcaoC}\n`;
        output += `answer${respostaCorreta === 'D' ? '-correct' : ''}: D. ${opcaoD}\n`;
        output += `answer${respostaCorreta === 'E' ? '-correct' : ''}: E. ${opcaoE}\n`;
        output += `content:\n${explicacao.replace(/\n/g, '<br>')}\n`;
        output += '<?/quiz?>\n';
    }
    quizOutputPre.textContent = output;
    return output;
}

function adicionarPergunta() {
    const perguntaGerada = gerarQuizBlocoUnico();
    if (perguntaGerada) {
        quizPerguntas.push(perguntaGerada);
        atualizarListaPerguntasAdicionadas();
        limparFormulario();
        perguntaCounter++;
        quizOutputPre.textContent = '';
    } else {
        alert('Preencha os campos para adicionar a pergunta.');
    }
    console.log('Perguntas adicionadas:', quizPerguntas);
}

function atualizarListaPerguntasAdicionadas() {
    perguntasAdicionadasOutputPre.textContent = quizPerguntas.join('\n\n');
}

function limparFormulario() {
    perguntaInput.value = '';
    respostaCorretaSelect.value = 'A';
    opcaoAInput.value = '';
    opcaoBInput.value = '';
    opcaoCInput.value = '';
    opcaoDInput.value = '';
    opcaoEInput.value = '';
    explicacaoInput.value = '';
}

perguntaInput.addEventListener('input', gerarQuizBlocoUnico);
respostaCorretaSelect.addEventListener('change', gerarQuizBlocoUnico);
opcaoAInput.addEventListener('input', gerarQuizBlocoUnico);
opcaoBInput.addEventListener('input', gerarQuizBlocoUnico);
opcaoCInput.addEventListener('input', gerarQuizBlocoUnico);
opcaoDInput.addEventListener('input', gerarQuizBlocoUnico);
opcaoEInput.addEventListener('input', gerarQuizBlocoUnico);
explicacaoInput.addEventListener('input', gerarQuizBlocoUnico);

gerarQuizBlocoUnico();