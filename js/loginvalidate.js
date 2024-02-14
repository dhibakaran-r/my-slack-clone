function sendValue(){
    var mail = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var remember = document.getElementById("remain");
    // var element = document.querySelector(".input");
    // var error = document.querySelector(".error");
    console.log(validateEmail(mail));
    console.log(validatePass(pass));
    formValidation(mail,pass);

    if(remember.checked == true){
        var remember = document.getElementById("remain").value;
        console.log("Remember me:",remember);    
    }
    else{
        console.log("Remember me: No");
    }

    console.log("email:",mail);
    console.log("password:",pass);    
}

function formValidation(mail,pass){

    validateEmail(mail);
    validatePass(pass);
    
        var verifiedMail = validateEmail(mail);
        var a = document.getElementById("email");
        if(verifiedMail == true){
           setSuccess(a);
        }
        // else if(verifiedMail === ''){
        //     error.innerText = "Enter Email";
        //     element.classList.add("errormsg");
        // }
        else{
            setError(a,"Enter Valid Email");
        }

        var verifiedPass = validatePass(pass);
        var b = document.getElementById("password");
        if(verifiedPass == true){
            setSuccess(b);
        }
        // else if(verifiedPass === ''){
        //     error.innerText = "Enter Password";
        //     element.classList.add("errormsg");
        // }
        else{
            setError(b,"Enter Valid Password");
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

function validatePass(pass){
    // var passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$ /;
    var passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.* ).{8,16}$/ ;
    var checkedPass = passRegex.test(pass);
    return checkedPass;
}


























// const form = document.getElementsByClassName('form');
// const mail = document.getElementsByClassName('email').value;
// const password = document.getElementsByClassName('password');
// // var mil = mail.value();
// console.log(mail);
// function sendValue() {
//     // preventDefault();
//     validateInputes();
// }

// function validateInputes(){
//     const mailval = mail.value.trim();
//     const passwordval = password.value.trim();

//     if(mailval === ''){
//         setError(mailval,"Enter Email");
//     }
//     else if( !validate(mailval)){
//         setError(mailval,"Enter valid Email");
//     }
//     else{
//         setSuccess(mailval);
//     }

//     if(passwordval === ''){
//         setError(passwordval,"Enter Password");
//     }
//     else if(passwordval < 8){
//         setError(passwordval,"password min 8 Char");
//     }
//     else{
//         setSuccess(passwordval);
//     }
// }

// function setError(element,msg){
//     const input = element.parentElement;
//     const errorel = input.querySelector(".error");

//     errorel.innerText = msg;
//     input.classList.add("error");
//     input.classList.remove("success");
// }

// function setSuccess(element){
//     const input = element.parentElement;
//     const errorel = input.querySelector(".error");

//     errorel.innerText = "";
//     input.classList.add("success");
//     input.classList.remove("error");
// }

// function validate(eval){
//     var mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var checkedMail = mailRegex.test(eval);
//     return checkedMail;
// }