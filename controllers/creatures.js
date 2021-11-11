import { Creature } from '../models/creature.js'
import { isLoggedIn } from '../middleware/middleware.js'

function index(req, res) {
  Creature.find({})
  .then(creatures => {
    res.render('creatures/index', {
      creatures,
			title: "Creatures"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/creatures')
  })
}

function newCreature(req, res) {
  res.render('creatures/new', {
    title: "Create Creature"
  })
}

function create(req, res) {
  req.body.profile = req.user.profile._id
  Creature.create(req.body)
  .then(creature => {
    if (creature.animalClass === 'Reptile' && creature.size === 'Extra Large' 
      && creature.food === 'Carnivore' && creature.defense === 'Claws' 
      && creature.walking === 'Quadruped' && creature.bodyCovering === 'Scales' 
      && creature.wings === 'Yes' && creature.flight === 'Yes') {
      creature.dragon = true
      creature.save()
    }
    if (creature.dragon) {
      res.render('creatures/dragon', {
        creature,
        title: 'Complete Dragon'
      })
    } else {
      creature.save()
      res.redirect(`/creatures/${creature._id}`)
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/creatures/')
  })
}

function show(req, res) {
  Creature.findById(req.params.id)
  .populate("profile")
  .then(creature => {
    const profileKilled = creature.kills.some(kill => {
      return kill._id.equals(req.user.profile._id)

    })
    res.render('creatures/show', {
      creature,
      profileKilled,
      title: "Creature Name"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/creatures')
  })
}

function edit(req, res) {
  Creature.findById(req.params.id)
  .then(creature => {
      res.render('creatures/edit', {
        creature,
        title: `edit ${creature.name}`
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/creatures')
  })
}

function update(req, res) {
  Creature.findById(req.params.id)
  .then(creature => {
    if (creature.profile.equals(req.user.profile._id)) {
      creature.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/creatures/${creature._id}`)
      })
    } else {
      throw new Error ('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/creatures')
  })
}

function deleteCreature(req, res) {
  Creature.findById(req.params.id)
  .then(creature => {
    if (creature.profile.equals(req.user.profile._id)) {
      creature.delete()
      .then(() => {
        res.redirect('/creatures')
      })
    } else {
      throw new Error ('Not authorized')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/creatures')
  })
}

function createComment(req, res) {
  req.body.profile = req.user.profile._id
  req.body.author = req.user.profile.name
  Creature.findById(req.params.id)
  .then(creature => {
    creature.comments.push(req.body)
    if (req.body.dragonChoice === 'wants to fight the dragon.' 
      || req.body.dragonChoice === 'wants to domesticate the dragon.') {
        creature.kills.push(req.user.profile._id)
    }
    creature.save()

    res.redirect(`/creatures/${creature._id}`)
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
  show,
  edit,
  update,
  deleteCreature as delete,
  createComment

}