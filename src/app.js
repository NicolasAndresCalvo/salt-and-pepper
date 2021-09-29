const express =  require ('express');
const path = require ('path');
const morgan = require('morgan');
const mainRoute = require('./routes/main');
const menuRoute = require('./routes/menu');

const app = express();
const PORT = 3000
const publicPath =  path.join(__dirname,'../public');

app.set('view engine', 'ejs');

app.set('views', './src/views')

app.use(express.static(publicPath));

app.use(morgan('tiny'));

app.listen(process.env.PORT || PORT, () => console.log ('server up at: http://localhost:3000/'));

app.use('/', mainRoute);

app.use('/detalle', menuRoute);