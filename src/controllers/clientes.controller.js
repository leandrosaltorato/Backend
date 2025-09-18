const clientes = require ("../data/clientes.data");

const buscar = (req, res) => {
    const cpf = req.params.cpf;

    var user = "";

    clientes.forEach((cliente, index) => {
        if(cliente.cpf == cpf) {
            user = cliente;
        }
    });

    if(user === "") user = "Não encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) => {
  const data = req.body;
  if (!data.cpf) {
    return res.status(400).send("CPF é obrigatório");
  }
  
  clientes.push(data);
  res.status(201).send("Cadastro com Sucesso").end();
};

module.exports = {
    buscar,
    cadastrar
};