const express = require('express')
const routerApi = require('./routes')
const app = express();
const port = 3000;
const {logErrors, errorHandler, boomErrorHandler} = require("./middlewares/errorHandler")
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hola mi server en express')
})

app.get('/nueva-ruta', (req, res)=>{
    res.send('Esta es una nueva ruta')
})


app.listen(port,()=>{
    console.log('Mi port '+ port)
})

routerApi(app)

// Hay que tener en cuenta el orden en que se ejecutna ya que es la parte secuancial mas impotante
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler)
