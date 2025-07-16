const form=document.querySelector("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const number=document.getElementById("number");
const password=document.getElementById("password");
const confirmp=document.getElementById("confirmp");
const checkbox=document.querySelector(".tickbox input")


// event listeners
username.addEventListener("input",validateUsername);
email.addEventListener("input",validateEmail);
number.addEventListener("input",validateNumber);
password.addEventListener("input",validatePassword);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validation()
})

// functions
function validateUsername(){
    let name=username.value.trim();
    if(name.length<4){
        seterror(username,"Enter atleast 3 characters");
        return false;
    }
    else if(!((name[0]>='a' && name[0]<='z') || (name[0]>='A' && name[0]<='Z'))){
        seterror(username,"First character should be alphabet");
        return false;
    }
    setsuccess(username);
    return true;
}

function validateEmail(){
    email.value=email.value.toLowerCase();
    let mail=email.value.trim();
    let regE=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if(mail==""){
        seterror(email,"Please fill this field");
        return false;
    }
    else if(!regE.test(mail)){
        seterror(email,"Please enter valid email");
        return false;
    }
    setsuccess(email);
    return true;
}

function validateNumber(){
    number.value=number.value.replace(/[^0-9]/g,"");
    if(number.value.trim().length>10){
        number.value=number.value.slice(0,10);
    }
    let num=number.value.trim();
    let regE=/^[0-9]{10}$/;

    if(num==""){
        seterror(number,"Please fill this field");
        return false;
    }
    else if(!(regE.test(num))){
        seterror(number,"Enter 10 digits");
        return false;
    }
    setsuccess(number);
    return true;
}

function validatePassword(){
    password.value=password.value.replace(/\s/g,"");
    let pass=password.value.trim();
    let regE=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&_\-+*/=()]).{8,20}$/

    if(pass==""){
        seterror(password,"Please fill this field");
        return false;
    }
    else if(!(regE.test(pass))){
        seterror(password,"password must be 8-20 charaters and include uppercase letters, lowercase letters, numbers and symbols");
        return false;
    }
    setsuccess(password);
    return true;
}

function validateConfirmp(){
    let cpass=confirmp.value.trim();

    if(cpass==""){
        seterror(confirmp,"Please fill this field");
        return false;
    }
    else if(cpass!=password.value.trim()){
        seterror(confirmp,"Password doessn't match");
        return false;
    }
    setsuccess(confirmp);
    return true;
}

function validateCheckbox(){
    if(!checkbox.checked) {
        seterror(checkbox,"Please accept terms and conditions");
        return false;
    }
    setsuccess(checkbox);
    return true;
    
}


//set error and sucess
function seterror(ele,msg){
    let parent=ele.parentElement;
    parent.classList.add("error");
    parent.classList.remove("success");
    let msgele=parent.querySelector(".errormsg small");
    msgele.innerText=msg;
}
function setsuccess(ele){
    let parent=ele.parentElement;
    parent.classList.add("success");
    parent.classList.remove("error");
}


//form submission
function validation(){

    if(validateUsername() && validateEmail() && validateNumber() &&
        validatePassword() && validateConfirmp() && validateCheckbox()){

            form.submit();
    }
}