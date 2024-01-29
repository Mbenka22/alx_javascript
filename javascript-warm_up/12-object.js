
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  myObject.value=89;/**You can use the const keyword to declare a 
  * constant, but the properties of an 
  * object declared within const 
  * can still be modified.   */
  console.log(myObject);