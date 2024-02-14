function sendValue(){
        var mail = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        var remember = document.getElementById("remain");
        if(remember.checked == true){
            var remember = document.getElementById("remain").value;
            console.log("Remember me:",remember);    
        }
        else{
            console.log("Remember me: No");
        }
        console.log(logData);
        // console.log("email:",mail);
        // console.log("password:",pass);

        // var logData = [];
        // var storeData = {};
    
        // storeData["email"] = mail;
        // storeData["password"] = pass;
            
        // logData.push(storeData);
        
        // localStorage.setItem("userdata",logData);
        // // localStorage.setItem("password",pass);
    
        // console.log(localStorage.getItem("email",mail));
        // // console.log(localStorage.getItem("password",pass));
        // // storeData = {};
        // // mail.value = '';
        // // pass.value = '';
        // console.log(logData);


        localStorage.setItem("email",mail);
        localStorage.setItem("password",pass);

        console.log(localStorage.getItem("email",mail));
        console.log(localStorage.getItem("password",pass));

        // var emailStorage = [];
        // emailStorage.unshift(localStorage.getItem("email",mail));
        // var passwordStorage = [];
        // passwordStorage.unshift(localStorage.getItem("password",pass));

        // console.log(emailStorage);
        // console.log(passwordStorage);
        // localStorage.removeItem("email");
        // localStorage.clear();
        sessionStorage.setItem("email",mail);
        sessionStorage.setItem("password",pass);

        console.log(sessionStorage.getItem("email",mail));
        console.log(sessionStorage.getItem("password",pass));

        // document.cookie = "email" = mail; 
        // document.cookie = "password" = pass;


}

// sessionStorage.removeItem("email");

// var emailStorage = [];
        // emailStorage.unshift(localStorage.getItem("email",mail));
        // var passwordStorage = [];
        // passwordStorage.unshift(localStorage.getItem("password",pass));

        // console.log(emailStorage);
        // console.log(passwordStorage);
        