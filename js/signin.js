document.getElementById("sign").addEventListener("click", function(event){
    event.preventDefault()
  });
var logData = [];
var storeData = {};

var fullName = document.getElementById("name");
var Email = document.getElementById("email-2");
var mobileNo = document.getElementById("mobile");
var User = document.getElementById("user");
var newPassword = document.getElementById("newpassword");
var rePassword = document.getElementById("repassword");

function getValue(event,type){

    if(type == 'name'){
        storeData["name"] = event.target.value;
    }

    if(type == 'email-2'){
        storeData["email"] = event.target.value;
    }

    if(type == 'mobile'){
        storeData["mobile"] = event.target.value;
    }

    if(type == 'user'){
        storeData["user"] = event.target.value;
    }

    if(type == 'newpassword'){
        storeData["newpassword"] = event.target.value;
    }

    if(type == 'repassword'){
        storeData["repassword"] = event.target.value;
    }



}
function sendValue(){
    console.log(storeData);        
    logData.push(storeData);
    
    localStorage.setItem("userdata",JSON.stringify(logData));
    storeData = {};
    fullName.value = '';
    Email.value = '';
    mobileNo.value = '';
    User.value = '';
    newPassword.value = '';
    rePassword.value = '';
    console.log(logData);
    // console.log(storeData);
    // localStorage.clear();
}

function getVal(){
// window.location.replace('https://www.geeksforgeeks.org/');
// window.location = 'run.html'
// window.location.href = 'https://www.geeksforgeeks.org/';

  
  // Usage
//   replaceWithPage('https://www.geeksforgeeks.org/');
  
// document.addEventListener('DOMContentLoaded', function () {
    // window.location.replace('http://www.google.com');
//   });
  
    //     var data;
//     data = JSON.parse(localStorage.getItem('userdata'));
//     data.forEach((user, index) => {
//     console.log(`User ${index + 1}:`);
//     console.log(`Name: ${user.name}`);
//     console.log(`Email: ${user.email}`);
//     console.log(`Password: ${user.newpassword}`);
//     console.log('--------------------------');
// });
    // var n = localStorage.getItem('userdata');
    // var test = document.getElementById('test');
    // test.innerText = n;
    
    // var test2 = document.getElementById('test2');
    // for(var i = 0; i < arr2.length; i++){
    // test2.innerText = arr2[i];
    // console.log(arr[i]);}
    
}
// function replaceWithPage(url) {
//     window.location.replace(url);
//   }

function checkValue(){
    var fname = document.getElementById("name").value;
    var mail = document.getElementById("email-2").value;
    var mobile = document.getElementById("mobile").value;
    var user = document.getElementById("user").value;
    var newpass = document.getElementById("newpassword").value;
    var repass = document.getElementById("repassword").value;
    var remember = document.getElementById("term");
    // var element = document.querySelector(".input");
    // var error = document.querySelector(".error");
    console.log(validateEmail(mail));
    console.log(validatePass(newpass));
    formValidation(mail,newpass,mobile,fname,user,repass);

    if(remember.checked == true){
        var remember = document.getElementById("remain").value;
        console.log("Remember me:",remember);    
    }
    else{
        console.log("Remember me: No");
    }

    console.log("email:",mail);
    console.log("password:",newpass);    
}

function formValidation(mail,newpass,mobile,fname,user,repass){

    validateEmail(mail);
    validatePass(newpass);
    validateMobile(mobile);
    validateFullname(fname);
    validateUser(user);
    validateRepass(repass,newpass);

    
        var verifiedMail = validateEmail(mail);
        var a = document.getElementById("email-2");
        if(verifiedMail == true){
           setSuccess(a);
        }
       
        else{
            setError(a,"Enter Valid Email");
        }

        var verifiedPass = validatePass(newpass);
        var b = document.getElementById("newpassword");
        if(verifiedPass == true){
            setSuccess(b);
        }
       
        else{
            setError(b,"Enter Valid Password");
        }

        var verifiedMobile = validateMobile(mobile);
        var c = document.getElementById("mobile");
        if(verifiedMobile == true){
            setSuccess(c);
        }
       
        else{
            setError(c,"Ex: +910123456789/0123456789");
        }


        var verifiedFullname = validateFullname(fname);
        var d = document.getElementById("name");
        if(verifiedFullname == true){
            setSuccess(d);
        }
       
        else{
            setError(d,"Enter Full Name.Name only contain string value");
        }

        var verifiedUser = validateUser(user);
        var e = document.getElementById("user");
        if(verifiedUser == true){
            setSuccess(e);
        }
       
        else{
            setError(e,"User name must have one number");
        }

        var verifiedRepass = validateRepass(repass,newpass);
        var f = document.getElementById("repassword");
        if(verifiedRepass == true){
            setSuccess(f);
        }
        else if(repass == ""){
            setError(f,"Enter pass");
        }

        else{
            setError(f,"password doesn't match");
        }


}

function setError(ele,msg){
    // var a = document.getElementById("");
    // console.log(a.value);
    var element = ele.parentElement;
    console.log(element);
    var error = element.querySelector('.error');
    // m.innerText = 'ka';
    // var element = document.querySelector(".input");
    // var error = document.querySelector(".error");

    error.innerText = msg;
    element.classList.add("errormsg");
    element.classList.remove("success");
}

function setSuccess(ele){
    // var element = document.querySelector(".input");
    // var error = document.querySelector(".error");

    var element = ele.parentElement;
    console.log(element);
    var error = element.querySelector('.error');


    error.innerText = "";
    element.classList.add("success");
    element.classList.remove("errormsg");
}

function validateEmail(email){
    var mailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    // var passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$ /;
    var checkedMail = mailRegex.test(email);
    return checkedMail;
}

function validatePass(newpass){
    // var passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$ /;
    var passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.* ).{8,16}$/ ;
    var checkedPass = passRegex.test(newpass);
    return checkedPass;
}

function validateMobile(mobile){
    var mobileRegex = /^([+]\d{2})?\d{10}$/ ;
    var checkedMobil = mobileRegex.test(mobile);
    return checkedMobil;
}

function validateFullname(fname){
    var FullnameRegex = /^[A-Za-z\\s]+$/ ;
    var checkedFname = FullnameRegex.test(fname);
    return checkedFname;
}

function validateUser(user){
    var userRegex = /^[a-zA-Z0-9]+$/ ;
    var checkedUser = userRegex.test(user);
    return checkedUser;
}

function validateRepass(repass,newpass){
    // var passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$ /;
    // var repassRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.* ).{8,16}$/ ;
    // var checkedRepass = repassRegex.test(repass);
    var checkedRepass;
    if(repass == newpass){
        checkedRepass = true;
    }
    else if(repass = ''){
        checkedRepass = "" 
    }
    else{
        checkedRepass = false;
    }
    return checkedRepass;
}

