const express = require('express');
const morgan = require('morgan');
const { PORT } = require('./constants');
const router = require('./routers/rootRouter');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('combined'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(router);

app.set('port', PORT);

app.listen(app.get('port'), () => {
  console.info( `express app running on port: ${app.get('port')}`);
});
