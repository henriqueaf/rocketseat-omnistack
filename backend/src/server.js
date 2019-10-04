const express = require('express');
const mongooseConfig = require('./config/mongooseConfig');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();
mongooseConfig.configure();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
