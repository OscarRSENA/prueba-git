const express = require('express')
const routerApi = require('./routes')
const cors = require('cors')
const path = require('path')


const app = express();
const port = process.env.PORT||3000;
const {logErrors, errorHandler, boomErrorHandler} = require("./middlewares/errorHandler")
app.use(express.json());
// const whitelist = ['http://localhost:4321', 'https://myapp.co'];
// const options = {
//     origin:(origin, callback)=>{
//         if  (whitelist.includes(origin)){
//             callback(null, true);
//         }else{
//             callback(new Error('no permitido'))
//         }
//     }
// }
app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hola mi server en express')
})

app.listen(port,()=>{
    console.log('Mi port '+ port)
})

routerApi(app)

// Hay que tener en cuenta el orden en que se ejecutna ya que es la parte secuancial mas impotante
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler)
