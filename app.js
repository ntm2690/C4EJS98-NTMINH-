// const arr = [1,2,3,5,7];
// // map()
// console.log(arr);
// const arr2 =arr.map(function(item, index){
// return item +1;
// })
// console.log(arr2);

// // filter
// const arr3=arr.filter(function(item,index){
// return item>2;}
// )
// console.log(arr3);

// 1.//let person{};   //object rỗng
// // console.log(person);
// 2.//let person= {
//     name: "Nam"
// };
// console.log(person);
//3.// let person= {
//         name: "Nam",
//            age: "19",
//     };
//     console.log(person);
// console.log(person.age);
// console.log(person["name"]);
// person["name"]="Nguyen Phuong Nam"; //update
// person.location= "ha noi";      //cap nhật thêm trạng thái
// delete person.age;      //xóa cặp prop và value
//init 
// let movie ={
//     title:"the dark night rises",
//     year:2012,
//     rate:8.4,

// };
// console.log(movie);

// read 
// let x;
// x=prompt('what you want to know');
// if (x == 'title'){
//     alert('attack on titan');
    
// } else {
//     alert('does not exist ');
// }
 


// update
// let x;
// let b;
// let movie ={
//     title:"the dark night rises",
//     year:2012,
//     rate:8.4,
// };
// movie.rate=8.7;
// console.log(movie.rate);
// movie["rate"]+=0.5;
// console.log(movie["rate"]);
// x= prompt("what you want to update");
// if(x="title"){b=prompt("what is update");
//     movie.title=b;
//     movie.rate="8.8";
//     movie.year="2013"
//     console.log(movie)}

//create
// let x;
// let b;
// x=prompt("what do you want to update")
// if (x!=`title`|| x!=`rate`|| x!=`year)
//     alert(`${x} does not exist `);
//     (b=prompt('enter the new data'));
//     movie.x=b;
// console.log(movie)};


// array of object

// let movies = [];
// let movie_1 = {
//     title: 'Attack on Titan',
//     year: 2013,
//     rate: 9,
//     casts: ['Aren Armin Mikasa'],
// };

// let movie_2 = {
//     title: 'Mind hunter',
//     year: 2017,
//     rate: 8.6,
//     casts: ['Hoden Bill'],
// };

// let movie_3 = {
//     title: 'Unabomber',
//     year: 2017,
//     rate: 8.1,
//     casts: ['Ted'],
// };

// movies.push(movie_1);
// movies.push(movie_2);
// movies.push(movie_3);

// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title);
//     console.log('Year: ' + movies[i].year);
//     console.log('Rate: ' + movies[i].rate);
//     let casts = movies[i].casts.join(' ');
//     console.log('Casts: ' + casts);
//     console.log('---------------------');
// }

