import { Router } from 'express'
import * as creaturesCtrl from '../controllers/creatures.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', creaturesCtrl.index)
router.get('/new', isLoggedIn, creaturesCtrl.new)
router.get('/:id', isLoggedIn, creaturesCtrl.show)
router.get('/:id/edit', isLoggedIn, creaturesCtrl.edit)

router.post('/', isLoggedIn, creaturesCtrl.create)
router.post('/:id/comments', isLoggedIn, creaturesCtrl.createComment)

router.put('/:id', isLoggedIn, creaturesCtrl.update)

router.delete('/:id', isLoggedIn, creaturesCtrl.delete)

export {
  router
}