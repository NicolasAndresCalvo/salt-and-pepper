const listaPlatos = require('../database/productList');

const menuController = {
  index: (req, res) => {
    let product = listaPlatos.find( product => product.id == req.params.id);
    res.render('detalleMenu', {product: product})
  }
}

module.exports = menuController;