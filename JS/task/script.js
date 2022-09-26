


//=================================================================Write a JS code to print numbers from 1 to 10===================================================

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
//    }

  //================================================================= Write a JavaScript function to print the “Hello World” message=================================


//   function HELLO(text ) {
//    // console.log("Hello World ");
// }
// console.log("Hello World ");


//======================================================================Write a JS code to print Even numbers in given array============================================

// var n=1;
// for(n=1;n<=16;n++){
//     if(n % 2==0){
//         console.log(n);
       

//     }
//}
//===================================================================Write a JS code to print a pattern using for loop like:=============================================


// var i,j;
// for( i=1;i<=8;i++){
//     for(j=1 ;j<=i ; j++){
//         document.write(j +"");
//     }
//     document.write("<br/>")
// }

//=======================================================================Write a function that returns the square of a number=============================================


// function sqr(n){
//     return n*n
// }
// var r = sqr(prompt("plz enter number"));
// console.log(r);

// ========================================================================task10=======================================================================================

window.addEventListener('scoll', function(){
  var navbar = document.querySelector('nav')
  if (window.pageYOffset >= 100) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
})


