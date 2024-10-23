const { Carrinho } = require('../../database/models/');

const excluirCarrinho = async (req, resp, next) => {
  try {
    const { id } = req.params;
    let result;
    try {
      result = await Carrinho.destroy({ where: { id } });
    } catch (error) {
      const msg = 'Erro ao tentar excluir!';
      const erro = error?.message;
      return resp.status(400).json({ msg, erro });
    }
    return resp.status(200).json({ msg: 'Excluído com Sucesso', data: result });
  } catch (error) {
    const msg = 'Erro ao tentar excluir (generic).';
    const erro = error?.message;
    return resp.status(400).json({ msg, erro });
  }
};

module.exports = excluirCarrinho;