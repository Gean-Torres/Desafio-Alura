// Cheio de comentario porque não sei o que estou fazendo.
let inputNome = document.getElementById('nome-amigo');
let btnAdicionar = document.getElementById('btn-adicionar');
let btnSortear = document.getElementById('btn-sortear');
let btnReiniciar = document.getElementById('btn-reiniciar');
let listaAmigosUl = document.getElementById('lista-amigos');
let listaVaziaP = document.getElementById('lista-vazia');
let resultadoP = document.getElementById('resultado');

// Array para armazenar os nomes dos amigos
let amigos = [];

// Adiciona um evento de clique no botão "Adicionar"
btnAdicionar.addEventListener('click', adicionarNome);

// Adiciona um evento de clique no botão "Sortear Amigo"
btnSortear.addEventListener('click', sortearAmigo);

// Adiciona um evento de clique no botão "Reiniciar"
btnReiniciar.addEventListener('click', reiniciar);

// Função para adicionar um nome à lista
function adicionarNome() {
    let nome = inputNome.value.trim(); // Pega o valor do input e remove espaços em branco

    // Valida a entrada: se o campo estiver vazio, exibe um alerta
    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return; // Sai da função
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    
    // Atualiza a visualização da lista na página
    atualizarLista();
    
    // Limpa o campo de texto após adicionar o nome
    inputNome.value = '';
    inputNome.focus(); // Coloca o foco de volta no campo
}

// Função para atualizar a lista visível na página
function atualizarLista() {
    listaAmigosUl.innerHTML = ''; // Limpa a lista para evitar duplicatas
    
    // Esconde ou mostra a mensagem "Adicione nomes..."
    if (amigos.length > 0) {
        listaVaziaP.style.display = 'none';
    } else {
        listaVaziaP.style.display = 'block';
    }

    // Cria um item de lista (li) para cada nome no array e adiciona à ul
    amigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigosUl.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Valida se há pelo menos 2 nomes para o sorteio
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio!');
        return; // Sai da função
    }

    // Gera um índice aleatório no array de amigos
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    // Pega o nome do amigo sorteado usando o índice
    const amigoSorteado = amigos[indiceSorteado];
    
    // Exibe o nome do amigo sorteado na tela
    resultadoP.textContent = `O amigo sorteado é: ${amigoSorteado}`;
}

// Função para reiniciar o site, limpando todas as informações
function reiniciar() {
    amigos = []; // Esvazia o array de amigos
    atualizarLista(); // Atualiza a lista na tela, que agora estará vazia
    resultadoP.textContent = ''; // Limpa o resultado
    inputNome.value = ''; // Limpa o campo de entrada
    inputNome.focus(); // Coloca o foco de volta no campo
    alert('A lista foi reiniciada!');
}