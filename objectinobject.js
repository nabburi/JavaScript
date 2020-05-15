var person = {
  "firstName":"Nava",
  "lastName" : "Abburi",
  "getFullName": function(){
    return this.firstName + " " + this.lastName;
  },
    "address":{
      "street": "945 S Mesa Hills Dr",
      "city":"JS",
       "state":"JS"
    },
    "isFromState" : function(state){
      return (state === this.address.state);
    }
      
};
console.log(person.);