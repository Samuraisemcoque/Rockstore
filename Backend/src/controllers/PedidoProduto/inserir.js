const { PedidoProduto } = require('../../database/models/');

const inserirPedidoProduto = async (req, resp, next) => {
  try {
    const dados = req.body;
    let result;
    try {
      result = await PedidoProduto.create(dados);
    } catch (error) {
      const msg = 'Erro ao tentar gravar!';
      const erro = error?.message;
      return resp.status(400).json({ msg, erro });
    }
    return resp.status(200).json({ msg: 'Gravado com Sucesso', data: result.dataValues });
  } catch (error) {
    const msg = 'Teste. Erro ao tentar inserir (generic).';
    const erro = error?.message;
    return resp.status(400).json({ msg, erro });
  }
};

module.exports = inserirPedidoProduto;