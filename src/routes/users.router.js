import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    try {
        let users = await userModel.find
        res.send({ result: "succes", payload: uers })
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    let { nombre, apellido, email } = req.body
    if (!nombre || !apellido || !email) {
        res.send({ status: "error", error: "Faltan parametros" })
    }
    let result = await userModel.create({ nombre, apellido, email })
    res.send({ result: "success", payload: result })
}
);
router.put('/'), (req, res) => {
    let { uid } = req.params

    let userToreplace = req.body

    if (!userToReplace.nombre || !userToReplace.apellido || !userToRoPlace.email)
        res.send({ status: "error", error: "Parametros no definidos" })

    async (dispatch) => {
        let result = await userModel.updateOne({ _id: uid }, userToReplace)

        res.send({ result: "success", payload: result })
    }
    router.delete('/:uid', async (req, res) => {
        let { uid } = req.params
        let result = await userModel.deleteOne({ _id: uid })
        res.send({ result: "success", payload: result })
        //res.send('Delete request to the homepage');
    }
    )
}
    export default router.js;
