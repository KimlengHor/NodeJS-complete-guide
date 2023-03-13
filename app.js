const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const path = require('path');
const rootDir = require('./util/path');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

//handle 404 pages
app.use((req, res, next) => {
    res.render('404', { pageTitle: 'Page Not Found!'});
});

app.listen(3000);


// const routes = require('./routes');