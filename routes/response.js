const express = require('express')

const routes = express.Router();

routes.get('/', (req, resp) => {
    resp.send("Response sent!")
})


module.exports = routes;
