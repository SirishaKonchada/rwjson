'use strict';

const fs = require('fs');

let student1 = { 
    name: 'Mike3',
    age: 24, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(student1, null, 2);

// Writing data to JSON file
fs.writeFile('student.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');

// Reading JSON File

let rawdata = fs.readFileSync('student.json');
let student = JSON.parse(rawdata);
//console.log(student);
