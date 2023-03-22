var validator = require('validator');


const first = validator.isEmail('test@test.com'); 
const second = validator.isEmail('abcDE123'); 

console.log(first,second)
