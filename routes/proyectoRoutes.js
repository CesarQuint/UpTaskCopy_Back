import express from 'express'
import { obtenerProyecto,
    obtenerProyectos,
    editarProyecto,
    nuevoProyecto,
    eliminarColaborador,
    agregarColaborador,
    eliminarProyecto} from "../controllers/proyectoController.js";
import checkAuth from '../middleware/checkAuth.js'

const router =express.Router()
router.get("/",checkAuth,obtenerProyectos)
router.post("/",checkAuth,nuevoProyecto)

router
    .route("/:id")
    .get(checkAuth,obtenerProyecto)
    .put(checkAuth,editarProyecto)
    .delete(checkAuth,eliminarProyecto)

router.post('/agregar-colaborador/:id',checkAuth,agregarColaborador)
router.post('/eliminar-colaborador/:id',checkAuth,eliminarColaborador)

export default router