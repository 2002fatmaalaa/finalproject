//=====================================hoisting scanning variables


// console.log(user);
// var user="amit";


// console.log(user);
// let user="amit";




// var test;
// console.log(test);

// hello();
// function hello(){
//     console.log|(hello)
// }

//testFun();
// var testFun = function test(){
//     console.log("testFun");
// }
// testFun();



//=====>glopal scope ==>local scope


// var x = 2;
// let y = 10;


// function test(){
//     console.log(x)
//     console.log(y)

// }
// test();



// function test(){//local
//     var user = "fatma";
// }
// console.log(user);



// if(true){//block scope
//     var user = "fatma";
//     let user2 ="mariam"

// }
// console.log(user);
// console.log(user2);


//===var ==> global , block
//===let===>global {}


// var x=2;
// var x=3;
// console.log(x);
// let y=2;
// y=3;
// console.log(y)


///==============asynch============synch

// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },1000)
// console.log("c")

// var btn = document.querySelector('button')
// btn.addEventListener('click',test)

// function test(){
//     console.log('clicked')
// }

// console.log("fatma");
// for(let index=0;index<10;index++){
//     console.log(index)
// }








// var products;
// setTimeout(()=>{
//     products=[
//         {id:1,name:"product1"},
//         {id:2,name:"product2"},
//         {id:3,name:"product3"},
// ]
// // console.log(products);
// printProduct(products);
// },5)


// function printProduct(recieveVariable){
//     console.log(recieveVariable);
// }
//printProduct(products);


//=======================call back===========================

// setTimeout(()=>{
//     addEventListener('click',()=>{

//     })
// })

// setTimeout(f,1000)
// function f(){
//     console.log("done");
// }



// function fun1(fa){
//     // console.log(done);
//     fa();
// }
// function fun2(){
//     console.log("fatma");
// }
// fun1()





//==========================>
// setTimeout(test,1000)
// function test(x){
//     console.log(x);
//     x();
// }
// test(sayhii);

// function sayhii(){
//     console.log(hiiiiii)
// }


//==================================callback function
// var products;
// //setTimeout(count(printProduct),5)
// count(printProduct)
// function count(cb){
//     products=[
//         {id:1,name:"product1"},
//         {id:2,name:"product2"},
//         {id:3,name:"product3"},

//     ]
//     cb(products)
//     //printProduct(products);
// }
// function printProduct(recieveVariable){
//     console.log(recieveVariable);
// }






//==================================promise
// var products;
// //setTimeout(count(printProduct),5)
// //count(printProduct)
// setTimeout(
//     count().then(product=>console.log(product))
// )
// function count(){
//     return new Promise(function(resolve, reject) {
        
    
//     products=[
//         {id:1,name:"product1"},
//         {id:2,name:"product2"},
//         {id:3,name:"product3"},

//     ]
//     //cb(products)
//     //printProduct(products);
//     resolve(products)
// })}
// function printProduct(recieveVariable){
//     console.log(recieveVariable);
// }


//fetch('https://jsonplaceholder.typicode.com/posts')























































