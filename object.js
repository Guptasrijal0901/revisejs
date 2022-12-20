// const family_member = {
// mother :"archana gupta" ,
// father : "vinod kumar gupta" ,
// sister1 : "shreya gupta" ,
// sister2 : "deepti gupta" 
// }

// console.log(family_member);
// console.log(family_member["mother"]);
// console.log(family_member["father"]);


// console.log(family_member.sister1);
// console.log(family_member.sister2);

// process of calling data is 

const resultModels = [
    {
      name: "Ashutosh Mishra 1",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 2",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 3",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 4",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 5",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 6",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 7",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 7",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
  ];

// console.log(resultModels[4].name);
// new("age", 50);
// for ( let a of resultModels){
//     console.log(a.age=50);
// }
// console.log(resultModels);


// for ( let a of resultModels){
//     console.log(a[2].rollno = 1000);
// }
// console.log(resultModels);

for (
    let a of  resultModels){
        if (a.name === "Ashutosh Mishra 5"){
            a["college name"] = "IIT bombay";
        }
    }
    console.log(resultModels);