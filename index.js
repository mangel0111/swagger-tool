const express = require('express');
const path = require('path');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

const app = express();

app.use(express.static(pathToSwaggerUi));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);