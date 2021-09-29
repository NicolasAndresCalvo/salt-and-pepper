const listaPlatos = require('../database/productList');
const about = require('../database/about');

const mainController = {
  index: (req, res) => res.render('index', {about: about, listaPlatos: listaPlatos})
}

module.exports = mainController;