const produtos = require ("../data/produtos.data");


const buscar = (req, res) => {
    const id = req.params.id;

    var user = "";

    produtos.forEach((produto, index) => {
        if(produto.id == id) {
            user = produto;
        }
    });

    if(user === "") user = "Não encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    produtos.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
};

const atualizar = (req, res) => {
    const user = req.body;

    var encontrei = false;

    produtos.forEach((produto, index) => {
        if(produto.id === user.id) {
            produtos[index] = user; 
            encontrei = true;
        }
    });

    if(encontrei == false) {
        res.status(404).end();
    }else{
        res.status(201).end(); 

    }
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if(produto.id === id) {
            indice = index;
        }
    });

    if(indice === -1) {
        res.status(404).end();
    }else{
        produtos.splice(indice, 1);
        res.status(200).end();
    }
};

module.exports = {
    buscar,
    cadastrar,
    atualizar,
    apagar
}