const { Pedido } = require('../../database/models/');

const listarPedido = async (req, resp, next) => {
  try {
    const result = await Pedido.findAll();
    return resp.status(200).json({ data: result });
  } catch (error) {
    const msg = 'Erro ao listar pedidos.';
    const erro = error?.message;
    return resp.status(400).json({ msg, erro });
  }
};

module.exports = listarPedido;