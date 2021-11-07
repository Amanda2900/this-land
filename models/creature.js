import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId, 
    'ref': 'Profile'},
  author: String,
  rating: {
    type: String,
    enum: ['is the king of the dinosaurs and rules This Land!', 
      'will live long and prosper.', 
      'is a great conversationalist, but weak DNA.',
      'smells nice and looks tasty.', 
      'will make it 10 feet and get stuck in a tar pit.'],
      default: 'is the king of the dinosaurs and rules This Land!'
    },
  content: {
    type: String,
    enum: ['will own the world!', 
      'will still be strong and ferocious, but half the size with a silly name.', 
      'will evolve to be cute and domesticated.',
      'will get to the ice age and freeze in a glacier.', 
      'will never survive the meteor.'],
    default: 'will own the world!'
    } 
  }, {
    timestamps: true
  })

const creatureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sciName: {
    type: String,
    required: true
  },
  animalClass: {
    type: String,
    enum: ['Mammal', 'Reptile', 'Bird', 'Insect', 'Amphibian'],
    default: 'Mammal'
  },
  size: {
    type: String,
    enum: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
    default: 'Extra Small'
  },
  habitat: {
    type: String,
    enum: ['Forest', 'Ocean', 'Jungle', 'Grasslands', 'Dessert', 'Tundra'],
    default: 'Forest'
  },
  food: {
    type: String,
    enum: ['Omnivore', 'Herbivore', 'Carnivore'],
    default: 'Omnivore'
  },
  defense: {
    type: String,
    enum: ['Spikes', 'Claws', 'Shell', 'Poison', 'Fangs', 'Horns'],
    default: 'Spikes'
  },
  walking: {
    type: String,
    enum: ['Biped', 'Quadruped', 'Hexaped', 'Octoped', 'Myriapoda', "Limbless"],
    default: 'Biped'
  },
  bodyCovering: {
    type: String,
    enum: ['Feathers', 'Thick Fur', 'Thin Hair','Scales', 'Mucous', 'Exoskeleton'],
    default: 'Feathers'
  },
  wings: {
    type: Boolean,
    default: false
  },
  flight: {
    type: Boolean,
    default: false
  },
  element: {
    type: String,
    enum: ['Ice', 'Electricity', 'Fire', 'Water', 'Earth', 'Psychic']
  },
  dragon: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId, 
    'ref': 'Profile'},
  comments: [commentSchema]
    
}, {
  timestamps: true
})

const Creature = mongoose.model('Creature', creatureSchema)

export {
  Creature
}