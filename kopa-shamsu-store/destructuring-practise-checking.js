const personObject = {
    firstName: "Arnob",
    lastName: "Tarafder",
    address: { country: "Uganda", capital: "Kampala" },
  };
  
  const cart = { abc: 1, def: 2, ghi: 1 };
  
  const personArray = ["Arnob", "Tarafder"];
  
  //* Object Dot Notation and Square Bracket notation
  
  //Dot Notation
  //? const firstName = personObject.firstName;
  
  //Square Bracket Notation
  //? const lastName = personObject["lastName"];
  
  //* Simple Object Destructuring
  
  // const { firstName } = personObject;
  
  // const { lastName } = personObject;
  
  // const { lastName, firstName } = personObject;
  
  //* Array index
  
  //? const firstName = personArray[0];
  
  //* Array Destructuring
  
  // const [firstName] = ["Arnob", "Tarafder"];
  
  //const [firstName, lastName] = ["Arnob", "Tarafder"]
  
  // const [, lastName] = ["Arnob", "Tarafder"];
  
  //! Object Destructuring Pro tricks
  
  //* Multi-level Destructuring
  
  // const { address: { capital } } = personObject;
  
  //* Default Value
  
  // const { age = "Not Available" } = personObject;
  
  //* re-assigning
  
  // const { firstName: fatherFirstName } = personObject;