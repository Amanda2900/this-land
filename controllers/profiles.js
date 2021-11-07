import { Profile } from '../models/profile.js'
import { Creature } from '../models/creature.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
			title: "Users"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    Creature.find({profile: profile.id}, function(err, creatures) {
      res.render("profiles/show", {
        title: `${profile.name}'s profile`, 
        profile,
        creatures
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/`)
  })
}

export {
  index,
  show
}