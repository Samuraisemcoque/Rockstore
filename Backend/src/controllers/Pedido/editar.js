const { Pedido } = require('../../database/models/');

const editarPedido = async (req, resp, next) => {
  try {
    const { id } = req.params;
    const dados = req.body;
    let result;
    try {
      result = await Pedido.update(dados, { where: { id } });
    } catch (error) {
      const msg = 'Erro ao tentar editar!';
      const erro = error?.message;
      return resp.status(400).json({ msg, erro });
    }
    return resp.status(200).json({ msg: 'Editado com Sucesso', data: result });
  } catch (error) {
    const msg = 'Erro ao tentar editar (generic).';
    const erro = error?.message;
    return resp.status(400).json({ msg, erro });
  }
};

module.exports = editarPedido;