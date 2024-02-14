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

