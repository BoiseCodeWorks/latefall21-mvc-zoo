// NOTE the model is the blue print of what makes a Gorilla a Gorilla, organization through predictable objects
export class Gorilla{

  // constructor takes in values/parameters (name, weight, eyeColor)
constructor(name, weight, eyeColor){
//Assigns it to this instance
// this is the object that is instantiated (created) 
this.name = name //assigns value to this specific instance of a gorilla
this.weight = weight
this.isAlive = true // a default can also be set
this.eyeColor = eyeColor
this.bananasEaten = 0
console.log(('you built a gorilla'));

}

eatBanana(){
this.bananasEaten++
console.log(this.name + ' has eaten a banana');
}


}