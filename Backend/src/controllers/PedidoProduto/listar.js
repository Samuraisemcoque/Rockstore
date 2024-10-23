const { PedidoProduto } = require('../../database/models/');

const listarPedidoProduto = async (req, resp, next) => {
  try {
    const result = await PedidoProduto.findAll();
    return resp.status(200).json({ data: result });
  } catch (error) {
    const msg = 'Erro ao listar pedidos de produtos.';
    const erro = error?.message;
    return resp.status(400).json({ msg, erro });
  }
};

module.exports = listarPedidoProduto;