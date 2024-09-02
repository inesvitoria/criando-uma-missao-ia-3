// pegar o botao assustador
const buttonOne = document.querySelector(".buttonOne")

// pegar o h1 e p do containerIA
const h1ContainerIA = document.querySelector(".h1ContainerIA")
const pContainerIA = document.querySelector(".pContainerIA")

let contador = 0


buttonOne.addEventListener('click', function (event) {
    contador++
    switch (contador) {
        case 1:
            pContainerIA.innerHTML = "Errado pois a gamificação é um processo mais atraente e estimula mudanças comportamentais ao integrar a aprendizagem com a aplicação prática do cotidiano do aluno e o uso de tecnologias."
            buttonOne.innerHTML = 'Entendi...E como você pode ajudar na gamificação?'
            buttonTwo.innerHTML = "Como a IA pode ajudar no dia a dia?"
            break;
        case 2:
            pContainerIA.innerHTML = "Com o auxílio da IA, é possível desenvolver sistemas de gamificação que se ajustam às necessidades de cada aluno, oferecendo desafios e atividades adequadas ao seu nível de conhecimento e habilidades."
            buttonOne.innerHTML = 'Entendi...'
            buttonTwo.style.display = "none"
            break;
        case 3:
            pContainerIA.innerHTML = "Voce gostaria de um exemplo sobre inteligencia artificial?"
            buttonTwo.style.display = "block"
            buttonOne.innerHTML = "Sim Por Favor";
            buttonTwo.innerHTML = "Não obrigada!";
            break;
        case 4:
            pContainerIA.innerHTML = "Um exemplo é os assistentes de voz marcam presença em smartphones e em certos dispositivos (caixas de som inteligentes, por exemplo, também chamadas de smart speakers).Outro Exemplo...O reconhecimento facial é usado para confirmar a identidade de um usuário que acessa seus próprios dispositivos (celulares, tablets) ou aplicativos financeiros (bancos virtuais, entre outros).";
            buttonOne.innerHTML = "Voltar ao inicio";
            buttonTwo.style.display = "block";
            buttonTwo.innerHTML = "Finalizar"
            break;
        case 5:
            location.reload(); // Recarrega a página
            break
        default:
            location.reload(); // Recarrega a página
    }
})