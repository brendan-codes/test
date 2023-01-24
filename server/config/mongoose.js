const mongoose = require('mongoose');

const dbName = process.env.DB;
const user = process.env.USER;
const pw = process.env.PASSWORD;

const uri = `mongodb+srv://${user}:${pw}@cluster0.pbl5e83.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));