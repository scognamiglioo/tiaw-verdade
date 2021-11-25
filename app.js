// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Instituto Casa",
            "telefone": "31-35786-3856",
            "user": "casainsti",
            "senha": "1234",
            "cidade": "R. Padre, 22 - Santa Efigênia, Belo Horizonte - MG, 30130-090",
            "categoria": "Dinheiro",
            "sobre": "Instituição de apoio às pessoas com Câncer. Vivem de doações, inclusive o salário dos funcionários são providos por doações. Promovem bazares para angariar fundos e sempre precisam de ajuda.",
            "imagem": "exemplo.jpg"
        },
        {
            "id": 2,
            "nome": "Army Project",
            "telefone": "31-8433-3563",
            "user": "salvação_army",
            "senha": "1234",
            "cidade": "R. André Luís, 412 - Canelas II, Montes Claros - MG",
            "categoria": "Cesta básica",
            "sobre": "Instituição online que visa arrecadação de dinheiro para situações que necessitam de arrecadação e para projetos que ajudam diversos campos da sociedade.",
            "imagem": "exemplo.jpg"
        },
        {
            "id": 3,
            "nome": "Fundação da Terceira Idade",
            "telefone": "73-99819-0151",
            "user": "doce_lar",
            "senha": "1234",
            "cidade": "Rua do Campo- Agrovila, Porto Seguro - BA",
            "categoria": "Materiais de higiene",
            "sobre": "Casa de acolhimento da terceira idade, que vive de doações e sempre realiza campanhas para o recebimento de doações e divulgação do projeto.",
            "imagem": "exemplo.jpg"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
}

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "telefone": contato.telefone,
        "user" : contato.user,
        "senha": contato.senha,
        "cidade" : contato.cidade,
        "categoria": contato.categoria,
        "sobre": contato.sobre,
        "imagem": contato.imagem
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
        db.data[index].telefone = contato.telefone,
        db.data[index].user = contato.user,
        db.data[index].senha = contato.senha,
        db.data[index].cidade = contato.cidade,
        db.data[index].categoria = contato.categoria,
        db.data[index].sobre = contato.sobre,
        db.data[index].imagem = contato.imagem

    displayMessage("Instituição alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Instituição removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}