const  express = require('express')
const bodyParser = require('body-parser')
const port = 2000
const app = express()


//middlewares
//usamos el metodo bodyparser para que se pueda usar el req.body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/login/:username',(req,res,next)=>{
    if(req.params.username =="pcana"){
        //res.send(`Bienvenido ${req.params.username}`)
        res.redirect('/') //redirecciona al endpoint /
        next()
    }
    else{
        next(new Error("Usuario invalido..."))
    }
})
//endpoints o rutas
app.get('/',(req,res)=>{
    res.sendFile('views/index.html',{root:__dirname}) //llama el archivo html para mostrar la pagina
})

app.post('/addprod',(req,res)=>{
    //desestructurar el objeto req.body
    const {ref,desc} =req.body
    //res.send(`Producto agregado satisfactoriamente: ${desc} y con referencia: ${ref}`)
    res.json(req.body)
})
app.listen(port,()=> console.log(`server in http://localhost:${port}`))