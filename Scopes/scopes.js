
/** Scopes in JS
 * -----------------
 */

// var a = 35;
// console.log(a);     //global
// if(true){
//     console.log(a); //block
// }
// function print(){
//     console.log(a); //function
// }
// print();
/** if we take var in globally we can access anywhere */

// let a = 35;
// console.log(a);     //global
// if(true){
//     console.log(a); //block
// }
// function print(){
//     console.log(a); //function
// }
// print();
/** if we take let in globally we can access anywhere */

// const a = 35;
// console.log(a);     //global
// if(true){
//     console.log(a); //block
// }
// function print(){
//     console.log(a); //function
// }
// print();
/** if we take const in globally we can access anywhere */



// if(true){
//     var a = 35;
//     console.log(a); //block
// }
// function print(){
//     console.log(a); //function
// }
// print();
/** I we declare var in block you can access in functions also */


// if(true){
//     let a = 35;
//     console.log(a); //block
// }
// function print(){
//     console.log(a); //function
// }
// print();
/** if we declare let in block we can access in only in block 
 *  can't access in function and global */


// if(true){
//     const a = 35;
//     console.log(a); //block
// }
// function print(){
//     console.log(a); //function
// }
// print();
/** if we declare let in block we can access in only in block 
 *  can't access in function and global */


/**  assign,declare,initialise,hoisting,TDZ */

/**  we can re-declare with same name var */
// var a = 50;      // initialisation
// var a = 45;      //re-assign
// var a;           //declare
// console.log(a);  // 45 we can redeclare it 

/**  we can't re-declare with same name let */
// let b = 50;      // initialisation
// let b = 45;      //re-assign
// let b;           //declare
// console.log(b);  // error (uncaught)

/**  we can't re-declare with same name const */
// const c = 50;      // initialisation
// const c = 45;      //re-assign
// const c;           //declare
// console.log(c);  // error (uncaught)


/** hoisting, Temporial dead zone(TDZ) 
 * 
 * If we get undefined it is in hoisting else we get error it is in TDZ
*/
// console.log(a);  // undefine
// var a = 10;


// console.log(b);     //error
// let b = 10;       


// console.log(c);        //error
// const c = 10;


/**  setTimeout(callback,time) */
// setTimeout(
//     ()=> console.log("wait a minute"),3000
// )







