/*
    Objetivo 1 - quando passar o mouse em cima do personagem temos que: 

    - colocar a classe: selecionado no personagem que passamos o mouse em cima para adicionar a animação nele. 

    - retirar a class selecionado do personagem que foi selecionado
*/

/*QuerySelector vai buscar todos os personagens que estão no meu HTML*/
const personagens = document.querySelectorAll('.personagem');

/*forEach para cada personagem dentro da lista vamos fazer algo*/
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;

        /*aqui estamos removendo a classe selecionado*/
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');


        /*  Objetivo 2 - quando passar o mouse em cima de outro personagem da listagem, trocar a imagem e nome do personagem grande

            - alterar a imagem do jogador 1
            - alterar o nome do jogador 1
        */

        /*vamos acessar a variável personagem e pegar apenas atributos com ID*/
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/image/${idSelecionado}.png`;


        /*agora precisamos mudar o nome do personagem toda vez que trocarmos*/
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;

    });
});




