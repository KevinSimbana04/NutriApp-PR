import {Router} from 'express'
import { registro } from '../controllers/estudianteController.js'
const router = Router()


router.post('/registro',registro)
router.get('/confirmar/:token',registro)

export default router