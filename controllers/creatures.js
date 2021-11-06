import { Creature } from '../models/creature.js'
import { isLoggedIn } from '../middleware/middleware.js'

function index(req, res) {
  res.render('creatures/index', {
    title: "Creatures"
  })
}

function newCreature(req, res) {
  res.render('creatures/new', {
    title: "Create Creature"
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.wings = !!req.body.wings
  req.body.flight = !!req.body.flight
  Creature.create(req.body)
  .then(creature => {
    res.redirect('/creatures')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/creatures')
  })
}

function show(req, res) {
  Creature.findById(req.params.id)
  .populate("owner")
  .then(creature => {
    res.render('creatures/show', {
      creature,
      title: "Creature Name"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/creatures')
  })
}

export {
  index,
  newCreature as new,
  create,
  show
}