const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + 'index.html');
});

//app.get('Main.ts', (req, res) => {
//    res.sendFile('./Main.ts');
//});

app.listen(port, '127.0.0.1',() => {
    console.log(`Example app listening on port ${port}`)
})
  