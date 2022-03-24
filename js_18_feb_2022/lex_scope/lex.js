console.log(n);
var n=10;
function f(){
    console.log(n); // undefined
    //var n=20;
}
f();

// function c(){
//     console.log(x);
// }
// var x=10;
// c();


// scope chain matlab agar ek variable function me na mile toh hum bahar jaate hain
// lexical scope se har function ka apna ek separate execution context banta hai


// undefined
// 10
// undefined
// 10
// 20


// 10
// undefined
// 21
// 31
// 31
// 10