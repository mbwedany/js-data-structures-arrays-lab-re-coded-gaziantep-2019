// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

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
  let allDrivers = [...drivers, 'Broom']
  return allDrivers;
}

function prependDriver(Arnold){
  let allDrivers = ['Arnold', ...drivers]
  return allDrivers;
}

function removeLastDriver(){
  
}
