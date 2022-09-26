// window.addEventListener('scoll', function(){
//     var navbar= document.querySelectorAll('navbar')
//     if (window.pageYOffset >= 21) {
//         navbar.classList.add("sticky")
//       } else {
//         navbar.classList.remove("sticky");
//       }
// })

// window.addEventListener("scroll",function(){
//   var container = document.querySelector("container");
//   container.classList.toggle("sticky" ,window. scrollY > 100);
// })


var nav = document.querySelector("nav")
window.addEventListener("scroll",()=>{
  if (document.documentElement.scrollTop>21){
    nav.classList.add("sticky");
    nav.style.position="fixed";
  }else{
    nav.classList.remove("sticky")
  }
})





var totop=document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
  if(window.pageYOffset>200){
    totop.classList.add("active")
  }else{
    totop.classList.remove("active")
  }

})