var bicycle1 = createBicycle(50, 20,4);
var bicycle2 = createBicycle(20, 5,1);

function createBicycle(cadence, speed, gear){
	var newBicycle = {};
  newBicycle.cadence = cadence;
  newBicycle.speed = speed;
  newBicycle.gear = gear;
  return newBicycle;
}


function Bicycle(cadence, speed, gear){
  //var this = {};
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  //return this;
}
 var bicycle3 = new Bicycle(50, 20, 4);