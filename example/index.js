
var compose = require('../index')

function Duck() {
  this.bird = true
}
Duck.prototype.beak = function() {
  return 'quack'
}

function Beaver() {
  this.mammal = true
}
Beaver.prototype.tail = function() {
  return 'slap'
}

var Platypus = compose(Duck, Beaver)


module.exports.animal = Platypus

var API = compose.dir(__dirname, __filename)

module.exports.API = API