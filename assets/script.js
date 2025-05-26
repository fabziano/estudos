let perguntas = [];

function createElement(tag, properties = {}, children = []) {
    const element = document.createElement(tag);
    for (const prop in properties) {
        if (prop === 'dataset') {
            for (const dataKey in properties[prop]) {
                element.dataset[dataKey] = properties[prop][dataKey];
            }
        } else if (prop === 'className') {
            element.className = properties[prop];
        } else {
            element[prop] = properties[prop];
        }
    }
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    return element;
}

async function loadQuestions(containerElement) {
    try {
        const jsonUrl = containerElement.dataset.foguetinho;
        if (!jsonUrl) {
            console.error("URL do JSON não especificada para o elemento:", containerElement);
            return;
        }

        const response = await fetch(jsonUrl);
        if (!response.ok) {
            console.error(`Erro HTTP ao carregar ${jsonUrl}: ${response.status} - ${response.statusText}`);
            return;
        }
        const quizData = await response.json();
        renderQuestionario(containerElement, quizData);
    } catch (error) {
        console.error("Erro ao carregar ou parsear JSON:", error);
    }
}

function renderQuestionario(containerElement, quizData) {
    containerElement.innerHTML = "";
    
    if (quizData.titulo) {
        const titleElement = createElement('h2', { textContent: quizData.titulo });
        containerElement.appendChild(titleElement);
    }

    const perguntasData = quizData.perguntas;
    
    if (!perguntasData || perguntasData.length === 0) {
        return;
    }

    perguntasData.forEach((perguntaData, index) => {
        const fieldset = createElement('fieldset');

        const formattedQuestion = `${index + 1}. ${perguntaData.pergunta.replace(/\n/g, '<br>')}`;

        const questionParagraph = createElement('p', {
            innerHTML: formattedQuestion
        });
        fieldset.appendChild(questionParagraph);

        fieldset.appendChild(createElement('hr'));

        Object.entries(perguntaData.opcoes).forEach(([optionKey, optionText]) => {
            const label = createElement('label');
            const input = createElement('input', {
                type: 'radio',
                name: `questao_${containerElement.dataset.foguetinho.replace('.', '_')}_${index + 1}`,
                value: optionKey
            });
            label.appendChild(input);
            label.appendChild(document.createTextNode(`${optionKey}. ${optionText}`));
            fieldset.appendChild(label);
        });

        const checkButton = createElement('button', {
            textContent: "Conferir",
            onclick: () => conferir(`questao_${containerElement.dataset.foguetinho.replace('.', '_')}_${index + 1}`, perguntaData.correta, containerElement)
        });
        fieldset.appendChild(checkButton);

        const responseParagraph = createElement('p', {
            className: "response",
            id: `response-questao_${containerElement.dataset.foguetinho.replace('.', '_')}_${index + 1}`
        });
        fieldset.appendChild(responseParagraph);

        containerElement.appendChild(fieldset);
    });
}

function conferir(questionName, correctAnswer, containerElement) {
    const selectedOption = containerElement.querySelector(`input[name="${questionName}"]:checked`);
    const responseDisplay = containerElement.querySelector(`#response-${questionName}`);
    responseDisplay.style.textAlign = "center";

    if (selectedOption) {
        if (selectedOption.value === correctAnswer) {
            responseDisplay.textContent = "Você acertou!";
            responseDisplay.style.color = "#7fff00";
        } else {
            responseDisplay.textContent = "Você errou!";
            responseDisplay.style.color = "#ff4500";
        }
    } else {
        responseDisplay.textContent = "Selecione uma opção!";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const foguetinhoContainers = document.querySelectorAll(".foguetinho");
    foguetinhoContainers.forEach(container => {
        loadQuestions(container);
    });
});