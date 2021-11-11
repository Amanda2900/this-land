import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId, 
    'ref': 'Profile'},
  author: String,
  rating: {
    type: String,
    enum: ['is the king and rules This Land!', 
      'will live long and prosper.', 
      'is a great conversationalist, but has weak DNA.',
      'smells nice and looks tasty.', 
      'will quickly get stuck in a tar pit.']
    },
  content: {
    type: String,
    enum: ['will own the world!', 
      'will still be intimidating, but be given a silly name.', 
      'will be cute and domesticated.',
      'will freeze in a glacier during the ice age.', 
      'will never survive the meteor.']
    },
  dragonChoice: {
    type: String,
    enum: ['wants to leave an offering.', 
      'wants to fight the dragon.', 
      'wants to domesticate the dragon.',]
  }
  }, {
    timestamps: true
  })

const creatureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 12
  },
  sciName: {
    type: String,
    required: true,
    maxLength: 20
  },
  animalClass: {
    type: String,
    enum: ['Mammal', 'Reptile', 'Bird', 'Insect', 'Amphibian']
  },
  size: {
    type: String,
    enum: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large']
  },
  habitat: {
    type: String,
    enum: ['Forest', 'Ocean', 'Jungle', 'Grasslands', 'Desert', 'Tundra']
  },
  food: {
    type: String,
    enum: ['Omnivore', 'Herbivore', 'Carnivore']
  },
  defense: {
    type: String,
    enum: ['Spikes', 'Claws', 'Shell', 'Poison', 'Fangs', 'Horns']
  },
  walking: {
    type: String,
    enum: ['Biped', 'Quadruped', 'Hexaped', 'Octoped', 'Myriapoda', "Limbless"]
  },
  bodyCovering: {
    type: String,
    enum: ['Feathers', 'Thick Fur', 'Thin Hair','Scales', 'Mucous', 'Exoskeleton']
  },
  wings: {
    type: String,
    enum: ['No', 'Yes']
  },
  flight: {
    type: String,
    enum: ['No', 'Yes']
  },
  element: {
    type: String,
    enum: ['Ice', 'Electricity', 'Fire', 'Water', 'Earth', 'Psychic']
  },
  dragon: {
    type: Boolean,
    default: false
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId, 
    'ref': 'Profile'},
  comments: [commentSchema],
  kills: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      'ref': 'Profile'},
  ]
    
}, {
  timestamps: true
})

const Creature = mongoose.model('Creature', creatureSchema)

export {
  Creature
}