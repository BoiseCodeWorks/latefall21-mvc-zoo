import { Gorilla } from "../models/Gorilla.js"
// NOTE controller is what interfaces with the DOM (user interface) the waiter in the restaurant analogy


// private
function _draw(){
  let template = ''
  for(let key in _gorillaEnclosure){
    let gorilla = _gorillaEnclosure[key]
    template += `<li>${gorilla.name} - ${gorilla.isAlive ? '🦍🛹' : '🦍☠'}</li>`
  }
  document.getElementById('gorillas').innerHTML = template
}

let _bananas = 10

let _gorillaEnclosure = {
  // NOTE 'new' creates an instance of a 'Gorilla'
  koko2 :new Gorilla('koko2', 500, 'brown'),
  harambe2: new Gorilla('harambe2', 1000, 'blue'),
  grod2: new Gorilla('grod2', 5000, 'blue'),
  kong2 :new Gorilla('kong2', 10000, 'brown')
}


// public
export class ZooController{
constructor(){
  console.log('you have my zoo controller')
  _draw()
}

testZoo(){
  console.log('ayo, it\'s me your zoo controller test method')
  // console.log('you have my gorilla ', koko2, harambe2, grod2, kong2)
}

eatBanana(gorillaName){
  console.log('the gorrilaName is',gorillaName)

  let gorillaToFeed = _gorillaEnclosure[gorillaName]
  if(_bananas > 0){
    gorillaToFeed.bananasEaten++
    _bananas--
    console.log('you fed', gorillaToFeed );
    console.log('Bananas left', _bananas );
  } else {
    if(window.confirm('you are out of bananas, are you sure you want to open the enclosure?')){
      gorillaToFeed.isAlive = false
      console.log( gorillaToFeed.name, 'has perished' );
    }

  }
  _draw()

  // _bananas--
  // console.log(_bananas)
}



}
