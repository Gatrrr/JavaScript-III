/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - Global scope value of this is the window object. 
* 2. Implicit binding - when a function called by a dot then the object before the dot is "this"
* 3. New binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit binding - Whenever JavaScript’s call or apply method is used, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// function sayName(name) {
//     console.log(this);
//     return name;
//   }
//   sayName("David");
  

// Principle 2

// let myEars = {
//     hearing: 'Bad',
//     ears: function(){
//         console.log(this.hearing)
//     }

// }

// myEars.ears();

// Principle 3

// function King(saying){
//     this.thing = saying;
//   }
  
//   let myKing = new King('The King of the North is Robb Stark');
  
//   console.log(myKing.thing);

// Principle 4

// function game(){
//     console.log(this.videogame);
// }
// let myGame = {
//     videogame: 'Counter-Strike',
// } 

// game.call(myGame);