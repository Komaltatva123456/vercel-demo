const express = require('express');
const http = require('http');
const cors = require('cors')

const app = express();

const server = http.createServer(app);

const port = process.env.PORT || 3000;
app.use(cors());
app.use(
  cors({
    origin: 'http://localhost:4200',
    methods: 'GET,POST,PUT,DELETE,OPTIONS, PATCH',

  })
);

app.get('/', (req, res) => {
    return res.status(200).json({message: "hello"})
});

app.get('/health-check', (req, res) => {
    return res.status(200).json({message: "health-check"})

});

server.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});