
// 1
// let  user = {
//     firstname: 'giorgi',
//     lastname: 'smith',
//     age: 25,
//    studentstatus: 'active'
//   };
//  console.log(user.studentstatus);
// 2
// let x =[4,45,180,2013];
// for (let y of x){
//     console.log(y);
// }

// let i = 0;
// while (i < x.length) {
//     console.log(x[i]);
//     i++;
// }
// 3.
// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
//   for(let y of numbers){
//      if(y>5) {
//         console.log(y);
//     }
   
// }
// 4.
// let user = {
// 	name: "giorgi",
// 	age:  20,
// 	studentstatus: "active"
// }

//     if (user.age <18 && user.studentstatus=="active"){
//         console.log("hello"); 
//     } else if (user.name == "giorgi"){
//         console.log("hello giorgi");
//     } else if (user.studentstatus == "action" || user.age <25 ) {
//         console.log("hello world");
//      } else {console.log("error");
//     }

// 5.

// let array = [ "watermelon", "pear", 10, 45, 50, "apple", "ananas" ] ;
//  for(let x of array){
//      if (typeof x == "string"){
//         console.log(x);
//      }
    
//  }
// 6.
// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
// for(x of array){
//     for(y of x){
//       if (y>0){
//         console.log(y);
//       }
//     }
    
// }
// 7.
// let array = [32, 10, "hello", null,"hello2", 50 ];

// for(let x of array){
//     if( typeof x== "number" && x % 5 == 0 ){
//         console.log(x);
//     }
// }



// let x =[4,45,180,2013];
// for(let y of x){
//     if( y % 5 == 0){
//         console.log(y);
//     }
// }

// function
// 1)
// function sum(...argus){
//     let numbersum=0;
//     for(let items of argus){
//         if (items>0){
//             numbersum+=items
//         }      
//     }
//     return numbersum
// }
// let z = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
//  console.log(z);
// 2.
// function sum(...argus){
//     let numberssum=0;
//     for (let items of argus ){
//         numberssum+=items
//     }
//     return numberssum;
// }
// let retur= sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
// console.log(retur);
// 3.
// let item = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//   }

//   function names(item){
//       if(item.isloggedin==true){
//       return item.firstname + " "+ item.lastname;
//     } else{
//      return false;
//     }
//   }
//    let result = names (item);
//    console.log(result);
  //  4
  // function maxitem(item){
  //   let max=0;

  //   for(let x of item){
  //     if(x>max){
  //       max=x;
  //     }
  //   }
  //   return max
  // }
  // console.log(maxitem ([5,47,100,999,4,6]))