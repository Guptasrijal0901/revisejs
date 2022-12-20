// array of  an object 
const arr1= [1,2,3,4,5,6,7,8,9]; //array of numbers 
const arr2= ["s", "r", "i", "j", "a", "l"]; //array of string 
const arr3= [true, false, true, false, true, false]; //array of boolean 

const data = [ 
    {
        name: "srijal",
        school: "afs",
        contact: 987654321,
        rollno: 21,
        "location name" : "gkp"
    },
    {
        name: "janhvi",
        school: "afs",
        contact: 987654321,
        rollno: 21,
        "location name" : "gkp"
    },
    {
        name: "anjali",
        school: "afs",
        contact: 987654321,
        rollno: 21,
        "location name" : "gkp"
    },
    {
        name: "arya",
        school: "afs",
        contact: 987654321,
        rollno: 23,
        "location name" : "gkp"
    },
    {
        name: "priya",
        school: "afs",
        contact: 987654321,
        rollno: 21,
        "location name" : "gkp"
    },
 ];
//  console.log(data);

//  print any particular object 
// console.log(data[3]);

// //  print name of all data
// for(let x of data ){
//     console.log(x.name);
// }

// print name priya
// for( let x of data){
//     console.log(x[3].name);
// }
// upar wale code se nhi chalega 
// console.log(data[3].name);

// rollno change karo sabka by 34
// for ( let x of  data){
//     if (x.rollno === 21){
//         x.rollno = 34;
//     }
// }
// console.log(data);

// now we have to change data of one index only 
// for(x of data ){
//     if (x.name ==="arya"){
//         x.school = "private";
//     }
// }
// console.log(data);
 
// as per rule key word do not start with letters and special character also it should be in 
//one line no space if we have space then we have to change or call by this process
// for(x of data){
//     if (x.rollno === 21){
//      x["location name"] = "lucknow";
//     }
// }
// console.log(data);