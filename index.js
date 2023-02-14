import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js'
import proyectoRoutes from './routes/proyectoRoutes.js'
import tareaRoutes from './routes/tareaRoutes.js'

const app=express()
app.use(express.json())

dotenv.config()

conectarDB()

// Configurar CORS
const whitelist =[process.env.FRONTEND_URL,process.env.FRONTEND_URL2]

const corsOption={
    origin:function(origin,callback){
        if(whitelist.includes(origin)){
            //Puede Consultar API
            callback(null,true)
        }else{
            //No esta permitido el Request
            callback(new Error("Error de Cors"))
        }
    }
}

app.use(cors(corsOption))

//Routing
app.use("/api/usuarios",usuarioRoutes)
app.use("/api/proyectos",proyectoRoutes)
app.use("/api/tareas",tareaRoutes)

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})