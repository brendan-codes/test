const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

require("./config/mongoose");
app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors());


require('./routes/routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );