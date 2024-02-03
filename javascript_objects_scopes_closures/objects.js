const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
person.bio
person.introduceSelf
//objects practice
const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
  
  // Put your code here
  
  const dog = {
    name: "Rusty",
    age: 12,
    breed: "labrador",
    bio: function () {
      console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old, and I'm a friendly neighbouhood s${this.breed}.`);
    }
  };
  
  dog.bio();