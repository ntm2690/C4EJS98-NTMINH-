// 1.1
// const product = {
//     name: `Xiaomi rice cooker`,
//     price: 1700,
//     brand: `Xiaomi`,
//     color: `white,`
//     };
//     for (let x in product) {
//     console.log(x);
//     };
// x is properties

// 1.2
// for ( let x in product){
//     console.log(x + `:` + product[x])
// }

// 2
// const task = {
//     subject: `Implement login feature`,
//     createdBy: `Hoang Ngoc Duc`,
//     assignTo: `Nguyen Phuong Nam`,
//     dueDate: `2019-10-08T18:00:24+0000`,
//     expectedHours: 0.5,
//     };

// const {subject,dueDate,assignTo} = task;

// console.log(subject);
// console.log(dueDate);
// console.log(assignTo)

// 3
// 3.1 What is the data type of the outermost layer
// --> object

// 3.2 The hits property is where the job results are stored, is it a Number, String, Array, Object or something else?
//  --> object

//3.3 In each hit of hits, how to find the job’s title, locations, salary, benefits, skills and requirements

// for(let hits of jobSearch.hits)
// console.log(hits.alias, hits.locations, hits.jobSalary, hits.benefits, hits.skills, hits.jobRequirement);

// 4
// let x= prompt("enter your keyword");
// let dictionary = {
//     debug : `The process of figuring out why your program has a certain error and how to fix it`,
//     done : `When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)`,
//     defect : `The formal word for ‘error’`,
//     pm : `The short version of Project Manager, the person in charge of the final result of a project`,
//     uiux : `UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels`,};
// }
// user = prompt(`Hi there, this is dev dictionary`);
// if (user == `debug`){
//     alert(dictionary.debug)
// }else if(user == `done`){
//     alert(dictionary.done)
// }else if(user == `defect`){
//     alert(dictionary.defect)
// }else if(user == `pm`){
//     alert(dictionary.pm)
// }else if(user == `uiux`){
//     alert(dictionary.uiux)
// }else{
//     alert(`We could not find your word : ${user} `)
// }
// 4.2
// user = prompt(`Hi there, this is dev dictionary`);
// if (user == `debug`){
//     alert(dictionary.debug)
// }else if(user == `done`){
//     alert(dictionary.done)
// }else if(user == `defect`){
//     alert(dictionary.defect)
// }else if(user == `pm`){
//     alert(dictionary.pm)
// }else if(user == `uiux`){
//     alert(dictionary.uiux)
// }else{
//     let a = prompt(`we could not find your word : ${user} , please leaves your explaination`);
//     dictionary[user]= a
//     let b = prompt(`Enter a keyword`);
//     alert(`${b} 
//      ${dictionary[b]}`)
// }

// 5
// let phone1 = {
//     name : `Xiaomi portable charger 20000mah`,
//     brand : `Xiaomi`,
//     price : 428,
//     color :`White`,
//     category : `Charger`
// };

// let phone2 = {
//     name : `VSmart Active 1`,
//     brand : `Vsmart`,
//     price : 5487,
//     color :`Black`,
//     category : `Phone`
// };

// let phone3 = {
//     name : `Iphone X`,
//     brand : `Apple`,
//     price : 21490,
//     color :`Gray`,
//     category : `Phone`
// }

// let phone4 = {
//     name : `Samsung Galaxy A9`,
//     brand : `Samsung`,
//     price : 8490,
//     color :`Blue`,
//     category : `Phone`
// };

// let phone = [];
// phone.push(phone1);
// phone.push(phone2);
// phone.push(phone3);
// phone.push(phone4);

// //5.1
// for (let i = 0; i < phone.length; i++){
//     console.log(`Name: ${phone[i].name}`);
//     console.log(`Price: ${phone[i].price}`);
//     console.log(`------------------------`);
// }

//5.2
// let a = Number(prompt(`Enter product position`));
// a = a -1 
// for (let i = 0; i < phone.length ; i++){
//     if (i == a){
//         for (let x in phone[i]){
//             console.log(`${x}: ${phone[i][x]}`);
//         }
//     }
// }
//5.3

// let a = prompt(`Enter your category`);
// for (let i = 0; i < phone.length; i++){
//     if (a == phone[i].category){
//         console.log(`Name: ${phone[i].name}`);
//         console.log(`Price: ${phone[i].price}`);
//         console.log(`--------------`);
//     }
// }
//5.4

// phone1.providers = ['Phukienzero Dientuccc']
// phone2.providers = ['Tgdd Ddghn VhStore'];
// phone3.providers = ['Tgdd'];
// phone4.providers = ['Tgdd'];

// for (let i = 0; i < phone.length; i++){
//             console.log(`Name: ${phone[i].name}`);
//             console.log(`Price: ${phone[i].price}`);
//             console.log(`Providers: ${phone[i].providers}`);
//             console.log(`------------------------`);
//         }