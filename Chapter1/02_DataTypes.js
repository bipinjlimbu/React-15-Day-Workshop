//Primitive
console.log(typeof 1);
console.log(typeof "Bipin");
console.log(typeof true);
console.log(typeof null); //Bug shows Object instead of Null
console.log(typeof undefined);
//Non Primitive
//Object
const obj = {
    name:"Bipin",
    age:19,
    language:"Python",
    faculty:"BCA",
    semester:"3rd"
};
console.log(obj);
console.log("After Changing Semester:");
obj.semester = "4th";
console.log(obj);

//Array
const arr = [1,2,3,4,5,6,7];