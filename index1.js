// let className = "btn";
// className +=  'btn_primary';
// className +=  'none';

// console.log(className);

// let person = {
//     firstName : "john",
//     lastName : "Cine"
// };

// console.log(person.firstName);
// console.log(person.lastName);



// let person = {
//     firstName : "john",
//     lastName : "Cine"
// };

// console.log(person['firstName']);
// console.log(person['lastName']);

// let adress = {
//     'building no' : 3344,
//     village: 'Rustampu',
//     city : 'G.Noida',
//     state:' Uttar',
//     country: 'India'
// }

// console.log(adress.village);

// let person = {
//     firstName:"John",
//     lastName:"Cina",
// };

// person.firstName="john"

// console.log(person);

// let employee = {
//     firstName: 'joy',
//     lastName: "sharp",
//     employeeid:1,
// }

// console.log('sss' in employee);
// console.log('firstName' in employee);

// Array

// let mountains =['everest', 'fuji', 'nanga', 'k2'];
// mountains[3] ='k3'

// console.log(mountains[0]);
// console.log(mountains[1]);
// console.log(mountains[2]);
// console.log(mountains[3]);

// console.log(mountains.length);

// let seas =['Black sea', 'caribian sea', 'atlantic sea', 'North sea'];

// seas.push('Red sea');

// console.log(seas);


// let seas =['Black sea', 'caribian sea', 'atlantic sea', 'North sea'];

// seas.unshift('Red sea');

// console.log(seas);

// let seas =['Black sea', 'caribian sea', 'atlantic sea', 'North sea'];
// let index = seas.indexOf('North sea');

// console.log(index);
// console.log(Array.isArray(seas));

// Arthmatic Operations

// let sum = 1+2;
// console.log(sum);

// let netPrice = 9.90;
// let shippingPrice = 11.99;

// grossPrice= netPrice+shippingPrice;

// console.log(grossPrice);

// let x ='20';
// let y ='30';

// result=x+y;

// console.log(result);

// let energy = {
//     valueOf() {
//         return 100

//     },
    
// };

// let currentEnergy =energy-10;
// console.log(currentEnergy);

// currentEnergy = energy +10;
// console.log(currentEnergy);

// currentEnergy = energy * 3;
// console.log(currentEnergy);

// currentEnergy = energy / 2;
// console.log(currentEnergy);

// Urinary operator

// let x = 10;
// let y = +x;

// console.log(y);

// let person = {
//     name : "John",
//     toString: function () {
//         return'25'
//     }
// }

// console.log(++person);

// JS Statements

// let age = 10;
// if (age =>18){
//     console.log('You can sign up');
    
// }

// let age = 18;
// let state ="UP";

// if (age ==18){
//     if (state=="UP"){
//         console.log("You Can Drive");
        
//     }
// }


// let age = 18;
// let state ="UP";

// if (age ==18 && state=="UP"){
   
//         console.log("You Can Drive");
// }

// let age = 17;
// if (age >=18) {
//     console.log('You Can Drive');
    
    
// } else {
//     console.log('You must be at least 18 to drive');
    
    
// }

// let month = 6;
// let monthName ;

// if(month == 1){
//     monthName='Jan';
// }else if(month == 2){
//     monthName='Feb';
// }else if(month == 3){
//     monthName='Mar';
// }else if(month == 4){
//     monthName='Apr';
// }else if(month == 5){
//     monthName='May';
// }else if(month== 6){
//     monthName='Jun'
// }else if(month== 7){
//     monthName='Jul'
// }else if(month== 8){
//     monthName='Aug'
// }else if(month== 9){
//     monthName='Sep'
// }else if(month== 10){
//     monthName='Oct'
// }else if(month== 11){
//     monthName='Nov'
// }else if(month== 12){
//     monthName='Dec'
// }else("none")    

// console.log(monthName);

// let age = 18;
// let message ;
//  message = age >= 18 ? 'can drive' : 'cant drive';




// console.log(message);


// Object Spread

// let colors =['red', 'yellow', 'white']
// let rgb = [...colors];

// console.log(rgb);

// let colors = ['red', 'green','yellow','white'];
// let rgb = ['blue','orange','brown','grey'];

// let merge = [...colors , ...rgb];

// console.log(merge);

// LOOP


// let num = 1;
// while (num <10) {
//     console.log(num);
//     num += 1;
    
    
// }

// let num = 1;
// do {
//     console.log(num);
//     num += 1
    
    
// } while (num <20);\



// const MIN = 1;
// const MAX = 10;

// let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

// let guesses = 0; 
// let hint = ''; 
// let number = 0;
// do {
//   let input = window.propmt(`Please enter a number between ${MIN} and ${MAX}` + hint);

//   number = parseInt(input);
//   guesses++;

//   if (number > secretNumber) {
//     hint = ', and less than ' + number;
//   } else if (number < secretNumber) {
//     hint = ', and greater than ' + number;
//   } else if (number == secretNumber) {
//     alert(`Bravo! you're correct after ${guesses} guesses.`);
//   }
// } while (number != secretNumber);

// let i = 0;
// for (let i = 0; i < 20; i++) {
//     console.log(i);
    
    
// }




// FUNCTION


// function say(message) {
//     console.log(message);
    
    
// }
// return say ('Hello');

// function compareBy(propertyName) {
//     return function (a, b) {
//       let x = a[propertyName],
//         y = b[propertyName];
  
//       if (x > y) {
//         return 1;
//       } else if (x < y) {
//         return -1;
//       } else {
//         return 0;
//       }
//     };
//   }
//   let products = [
//     { name: 'iPhone', price: 900 },
//     { name: 'Samsung Galaxy', price: 850 },
//     { name: 'Sony Xperia', price: 700 },
//   ];
  
//   // sort products by name
//   console.log('Products sorted by name:');
//   products.sort(compareBy('name'));
  
//   console.table(products);
  
//   // sort products by price
//   console.log('Products sorted by price:');
//   products.sort(compareBy('price'));
//   console.table(products);

let person = {
    firstName: 'John',
    lastName: 'Cina',
    greet: function() {
        console.log('Hello , world !');
        
    },

    getFullName: function () {
        return this.firstName +  ' '  + this.lastName;
    }


};

console.log(person.getFullName());

  




























