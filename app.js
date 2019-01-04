const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const path = require('path');
const schema = require('./server/schema');

const app = express();
const buildPath = path.join(__dirname, 'build');
const PORT = process.env.PORT || 5000;

const server = new ApolloServer(schema);
server.applyMiddleware({ app });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(buildPath));

app.get('*', (req, res) => res.sendFile(path.join(buildPath, 'index.html')));
app.listen(PORT);
