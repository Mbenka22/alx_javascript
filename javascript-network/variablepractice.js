function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }

    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
  
  }