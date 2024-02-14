
var mail = document.getElementById("email").value;
var pass = document.getElementById("password").value;

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
    
    var data;
    data = JSON.parse(localStorage.getItem('userdata'));
    // data.forEach((user, index) => {
    // console.log(`User ${index + 1}:`);
    // console.log(`Name: ${user.name}`);
    // var mailId =  `${user.email}`;
    // console.log('Email:',mailId);
    // var password =  `${user.newpassword}`;
    // console.log('Password:',password);
    // console.log('--------------------------');
    // console.log(mail);
    // console.log(pass);
    const userExists = data.some(user => user.email === mail && user.newpassword === pass);
    if (userExists == true) {
        var change = document.querySelector('.login');
        console.log('Login successful');
        alert("success");
        change.href = 'run.html';
        // window.location.replace('http://www.google.com');
        // location.href = 'run.html';
      } 
    
    else {
        console.log('Login failed');
        alert('fail');
        mail.innerText = '';
        pass.innerText = '';
      }

}
