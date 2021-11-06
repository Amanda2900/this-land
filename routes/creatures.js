import { Router } from 'express'
import * as creaturesCtrl from '../controllers/creatures.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', creaturesCtrl.index)
router.get('/:id', creaturesCtrl.show)
router.get('/new', creaturesCtrl.new)

router.post('/:id', creaturesCtrl.create)

export {
  router
}