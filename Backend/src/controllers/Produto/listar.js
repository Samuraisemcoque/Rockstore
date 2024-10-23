const { Carrinho } = require('../../database/models/');

const listarCarrinho = async (req, resp, next) => {
  try {
    const result = await Carrinho.findAll();
    return resp.status(200).json({ data: result });
  } catch (error) {
    const msg = 'Erro ao listar itens do carrinho.';
    const erro = error?.message;
    return resp.status(400).json({ msg, erro });
  }
};

module.exports = listarCarrinho;
