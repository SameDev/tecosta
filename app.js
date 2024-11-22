const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');

const indexRoutes = require('./routes/indexRoutes');
const userRoutes = require('./routes/usuariosRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const atendimentoRoutes = require('./routes/atendimentoRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/', indexRoutes);
app.use('/usuarios', userRoutes);
app.use('/produtos', produtoRoutes);
app.use('/atendimentos', atendimentoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
