const express = require('express');
const path = require('path');

const overview = require('./routes/overview');
const productDetail = require('./routes/product-detail');
const errorPage = require('./routes/404');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(overview);
app.use('/productdetail', productDetail);
app.use(errorPage);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
