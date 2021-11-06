import { Router } from 'express'
import * as creaturesCtrl from '../controllers/creatures.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', creaturesCtrl.index)
router.get('/new', isLoggedIn, creaturesCtrl.new)
router.get('/:id', isLoggedIn, creaturesCtrl.show)

router.post('/', isLoggedIn, creaturesCtrl.create)

export {
  router
}