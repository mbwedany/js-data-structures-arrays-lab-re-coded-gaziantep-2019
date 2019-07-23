// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(Ralph){
  drivers.push('Ralph')
}

function destructivelyPrependDriver(Bob){
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(Broom){
  const allDrivers = [...drivers, 'Broom']
}