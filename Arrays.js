var myArray = [10, 20, "Hello", {}]
console.log(myArray);
myArray.push(10);
console.log(myArray);
myArray.pop(10);
console.log(myArray);
var myFunction = function(item) {
	console.log("for an element " +item);
};

myArray.forEach(myFunction);

