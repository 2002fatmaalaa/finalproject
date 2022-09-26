var userName=document.getElementById("username");
var email=document.getElementById("email");
var password=document.getElementById("password");
var password2=document.getElementById("password2");
var form=document.getElementById("form");


function validateInput(){
    //check user name is empty
    if(userName.value.length<3){
        
        onError(userName,"user name must be at least 3 characters");
    }else{
        
        onSuccess(userName);
    }
    
    if(email.value.trim()===""){
        
        onError(email,"Email is not valid");
    }else{
       
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");

        }else{
            onSuccess(email);

        }
    }

if(password.value.length<6){
    onError(password,"password must be at least 6 characters");

}else{
    onSuccess(password);

}
if(password2.value.trim()===""){
    onError(password2,"password2 is required");

}else{
    // onSuccess(password2);
    if(password2.value.trim()!==password.value.length<6){
        onError(password2,"password doesnotmatch");     
    }else{
        onSuccess(password);
    }

}

}
document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
})
function onSuccess(input){
    var parent=input.parentElement;
        var messageEle=parent.querySelector("small");
        messageEle.style.visibility="hidden";
        messageEle.innerText="";
        parent.classList.add("success");
        parent.classList.remove("error");


}
function onError(input,message){
    var parent=input.parentElement;
        var messageEle=parent.querySelector("small");
        messageEle.style.visibility="visible";
        messageEle.innerText=message;
        parent.classList.remove("success");
        parent.classList.add("error");

}

function isValidEmail(email){
   return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}