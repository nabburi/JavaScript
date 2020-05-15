function createPerson(){
    var firstName = "Nava";
    var lastName = "Abburi";

    var returnObj = {
        "getFirstName": function(){
            return firstName;
        },
        "getLastName": function(){
            return lastName;
        },
        "setFirstName": function(name){
            firstName = name;
        },
        "setLastName": function(){
            lastName = name;
        }
    };
    return returnObj;
}

var person = createPerson();
