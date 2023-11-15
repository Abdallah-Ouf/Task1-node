
const fs = require('fs');




// 1) create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex )

const person = {
    fname: "ahmed",
    lname: "hossam",
    age: 20,
    city: "alex",
}
// ------------------------------------------------------------------------------------------------
// 2) change obj to Json 

const personJSON = JSON.stringify(person);

// ------------------------------------------------------------------------------------------------
// 3) store in file

fs.writeFileSync('person.json', personJSON);

// ------------------------------------------------------------------------------------------------

// 4) read file (json)

const readDataJSON = fs.readFileSync('person.json').toString();
// ------------------------------------------------------------------------------------------------

// 5) Convert to obj
const personObject = JSON.parse(readDataJSON);
// ------------------------------------------------------------------------------------------------

// 6) Update data to ( adel ahmed , 40 , cairo)
personObject.fname = "adel";
personObject.lname = "ahmed";
personObject.age = "40";
personObject.city = "cairo";
// ------------------------------------------------------------------------------------------------

// 7) convert obj to Json
const updateDataJSON = JSON.stringify(personObject);
// ------------------------------------------------------------------------------------------------

// 8) store in file (writeFileSync)
fs.writeFileSync("updateDataJSON.json" , updateDataJSON);

