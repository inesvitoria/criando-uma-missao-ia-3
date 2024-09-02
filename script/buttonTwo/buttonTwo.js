// Pegar o botão assustador
const buttonTwo = document.querySelector(".buttonTwo");

buttonTwo.addEventListener('click', function (event) {

    contador++;
    switch (contador) {
        case 1:
            pContainerIA.innerHTML = "Correto pois a gamificação é um processo mais atraente  e estimula mudanças comportamentais ao integrar a aprendizagem com a aplicação prática do cotidiano do aluno e o uso de tecnologias."
            buttonOne.innerHTML = "Como a IA aprende?"
            buttonTwo.innerHTML = "Quais as desvantagens da inteligência artificial";
            break;
        case 2:
            pContainerIA.innerHTML = "A IA frequentemente requer grandes quantidades de dados pessoais para funcionar efetivamente. Isso levanta preocupações sobre privacidade e segurança, especialmente se esses dados forem mal geridos ou caírem em mãos erradas.Por exemplo, as postagens públicas no Facebook e Instagram são usadas para treinar modelos de IA da Meta, de acordo com a própria plataforma. Isso inclui postagens, fotos e suas legendas. A Meta coleta essas informações para melhorar suas ferramentas de IA, mas isso levanta sérias questões sobre privacidade, já que os usuários não têm controle sobre como seus dados são usados.";
            buttonTwo.innerHTML = 'Entendi...'
            buttonOne.style.display = "none"
            break;
        case 3:
            pContainerIA.innerHTML = "Voce gostaria de um exemplo sobre inteligencia artificial?"
            buttonOne.style.display = "block"
            buttonOne.innerHTML = "Sim Por Favor";
            buttonTwo.innerHTML = "Não obrigada!";
            break
        case 4:
            pContainerIA.innerHTML = ""
            buttonOne.innerHTML = "Voltar ao inicio"
            buttonTwo.style.display = "block"
            buttonTwo.innerHTML = "Finalizar"
            break;
        case 5:
            pContainerIA.innerHTML = "FIM"
            pContainerIA.style.display = "flex"
            pContainerIA.style.justifyContent = "center"
            pContainerIA.style.alignItems = "center"
            buttonOne.style.display = "none"
            buttonTwo.style.display = "none"
            break
        default:
            pContainerIA.innerHTML = "FIM"
            pContainerIA.style.display = "flex"
            pContainerIA.style.justifyContent = "center"
            pContainerIA.style.alignItems = "center"
            buttonOne.style.display = "none"
            buttonTwo.style.display = "none"
            
    }
});