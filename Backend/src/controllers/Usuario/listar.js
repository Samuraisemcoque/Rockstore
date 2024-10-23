const { Usuario } = require('../../database/models/');

const listarUsuario = async (req, resp, next) => {
  try {
    const result = await Usuario.findAll();
    return resp.status(200).json({ data: result });
  } catch (error) {
    const msg = 'Erro ao listar usuários.';
    const erro = error?.message;
    return resp.status(400).json({ msg, erro });
  }
};

module.exports = listarUsuario;
