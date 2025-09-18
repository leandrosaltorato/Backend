const pedidos = require ("../data/pedidos.data");

const listar = (req, res) => {
    res.send(pedidos).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var user = "";

    pedidos.forEach((pedido, index) => {
        if(pedido.id == id) {
            user = pedido;
        }
    });

    if(user === "") user = "Não encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    if (data.quantidade <= 0) {
    return res.status(400).send("Numero invalido");
  }
    pedidos.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
};

const alterar = (req, res) => {
    const id = req.params.id;
    const userUpdate = req.body;

    var indice = -1;
    pedidos.forEach((pedido, index) => {
        if(pedido.id === id) {
            indice = index;
        }
    });

    if(indice === 1) {
        res.status(404).end();
    } else {
    Object.keys(userUpdate).forEach((chave) => {
        pedidos[indice][chave] = userUpdate[chave] 
    });

    res.status(200).end();
   }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    alterar
}