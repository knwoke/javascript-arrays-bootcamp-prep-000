var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = [1, 2, 3]
  var element = array.unshift(0)
  return array
}
function addElementToBeginningOfArray(array, element){
  var cars = ["BMW", "HONDA", "Toyota"]
  var moreCars = ["Range Rover"...cars]
}
function addElementToEndOfArray (array, element){
  var array = ["ripple", "bitcoin", "litecoin"]
  var element = [array..."ethereum"]
  return element
}
function destructivelyAddElementToEndOfArray(array, element){
  var array = ["ripple", "bitcoin", "litecoin"]
  array.push = "ethereum"
  return array
}
function accessElementInArray(array, index){
var array = ["WashU", "UChicagao", "Northwestern"]
var index = array[0];
return index
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  var Africa = ["Nigeria", "South Africa", "Egypt"]
  Africa.shift()
}
function destructivelyRemoveElementFromEndOfArray(array){
  var array = ["Machida", "Jones", "McGregor"]
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  var array = ["Dell", "HP", "Lenovo"]
  array.slice()
  return array
}
