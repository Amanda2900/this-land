import mongoose from 'mongoose'

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
    enum: ['Mammal', 'Reptile', 'Bird', 'Insect', 'Amphibian']
  },
  size: {
    type: String,
    enum: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large']
  },
  habitat: {
    type: String,
    enum: ['Forest', 'Ocean', 'Jungle', 'Grasslands','Dessert', 'Tundra']
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
    enum: ['Biped', 'Quardaped', 'Hexaped', 'Octoped', 'Myriapoda', "Limbless"]
  },
  bodyCovering: {
    type: String,
    enum: ['Feathers', 'Thick Fur', 'Thin Hair','Dry Scales', 'Mucous', 'Exoskeleton']
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
    'ref': 'Profile'}
}, {
  timestamps: true
})

const Creature = mongoose.model('Creature', creatureSchema)

export {
  Creature
}