var dd = document.querySelector('#opt-1');
var dd2 = document.querySelector('#opt-2');
var dd3 = document.querySelector('#opt-3');

dd.addEventListener("click",function(){
    if(document.getElementById('dd').style.display == "block"){
        document.getElementById('dd').style.display = "none";
        dd.classList.remove("drop-active");
        // dd.classList.add("addeff"); 
    
    // document.getElementById('d').classList.add("eff");
    // document.getElementById('dd').classList.add("eff"); 
    }
    else{
        document.getElementById('dd').style.display = "block";
        document.getElementById('dd-2').style.display = "none";
        document.getElementById('dd-3').style.display = "none";
        dd.classList.add("drop-active");
    }
        console.log("mm");
});

dd2.addEventListener("click",function(){
    if(document.getElementById('dd-2').style.display == "block"){
        document.getElementById('dd-2').style.display = "none";
        dd2.classList.remove("drop-active"); 

    }
    else{
        document.getElementById('dd').style.display = "none";
        document.getElementById('dd-2').style.display = "block";
        document.getElementById('dd-3').style.display = "none";
        dd2.classList.add("drop-active"); 
    }
    console.log("mm");
});

dd3.addEventListener("click",function(){
    if(document.getElementById('dd-3').style.display == "block"){
        document.getElementById('dd-3').style.display = "none";
        dd3.classList.remove("drop-active"); 

    }
    else{
        document.getElementById('dd').style.display = "none";
        document.getElementById('dd-2').style.display = "none";
        document.getElementById('dd-3').style.display = "block";
        dd3.classList.add("drop-active"); 
    }
    console.log("mm");
});

// dd2.removeEventListener("click",function(){
//     document.getElementById('dd').style.display = "none";
//     console.log("kk");
// })
// function getValue1(){
//     var opt1 = document.getElementById('opt-1').value;
//     console.log(opt1);
//     if(opt1 == 0){
//         document.getElementById('dd').style.display = "block";
//         document.getElementById('fs').style.display = "block";
        
//     }
// }

// function getValue2(){
//     var opt2 = document.getElementById('opt-2').value;
//     console.log(opt2);
//     if(opt2 == 1){
//         document.getElementById('dd-2').style.display = "block";
//         document.getElementById('fs').style.display = "block";
        
//     }
// }

// function getValue3(){
//     var opt3 = document.getElementById('opt-3').value;
//     console.log(opt3);
//     if(opt3 == 2){
//         document.getElementById('dd-3').style.display = "block";
//         document.getElementById('fs').style.display = "block";
        
//     }
// }

var point_0 = document.querySelector('#point-0');
var point_1 = document.querySelector('#point-1');
var point_2 = document.querySelector('#point-2');
var point_3 = document.querySelector('#point-3');
var point_4 = document.querySelector('#point-4');

point_0.addEventListener("click",function(){
    if(document.querySelector('#point-0-detail').style.display == "block"){
        document.querySelector('#point-0-detail').style.display = "none";
        point_0.classList.remove("a-show-0"); 
    console.log("p1");
}
else{
    document.querySelector('#point-0-detail').style.display = "block";
    point_0.classList.add("a-show-0");    

}
    
});

point_1.addEventListener("click",function(){
    if(document.querySelector('#point-1-detail').style.display == "block"){
        document.querySelector('#point-1-detail').style.display = "none";
        point_1.classList.remove("a-show-1"); 
        console.log("p2");
}
else{
    document.querySelector('#point-1-detail').style.display = "block";
    point_1.classList.add("a-show-1"); 

}
    
});


point_2.addEventListener("click",function(){
    if(document.querySelector('#point-2-detail').style.display == "block"){
        document.querySelector('#point-2-detail').style.display = "none";
        point_2.classList.remove("a-show-2");     
    
}
else{
    document.querySelector('#point-2-detail').style.display = "block";
    point_2.classList.add("a-show-2"); 
}
    
});

point_3.addEventListener("click",function(){
    if(document.querySelector('#point-3-detail').style.display == "block"){
        document.querySelector('#point-3-detail').style.display = "none";
        point_3.classList.remove("a-show-3"); 
        console.log("p4");
}
else{
    document.querySelector('#point-3-detail').style.display = "block";
    point_3.classList.add("a-show-3"); 

}
    
});

point_4.addEventListener("click",function(){
    if(document.querySelector('#point-4-detail').style.display == "block"){
        document.querySelector('#point-4-detail').style.display = "none";
        point_4.classList.remove("a-show-4"); 
        console.log("p5");
}
else{
    document.querySelector('#point-4-detail').style.display = "block";
    point_4.classList.add("a-show-4"); 

}
});


var footerList_0 = document.querySelector('#footer-list-1');
var footerList_1 = document.querySelector('#footer-list-2');
var footerList_2 = document.querySelector('#footer-list-3');
var footerList_3 = document.querySelector('#footer-list-4');
var footerList_4 = document.querySelector('#footer-list-5');

footerList_0.addEventListener("click",function(){
    if(document.querySelector('#footer-list-item-1').style.display == "block"){
        document.querySelector('#footer-list-item-1').style.display = "none";
        document.querySelector(' #head-after-1').classList.remove("arrow-after");
        document.querySelector(' #head-after-1').classList.add("arrow-before");
}
else{
    document.querySelector('#footer-list-item-1').style.display = "block";
    document.querySelector(' #head-after-1').classList.add("arrow-after");
    document.querySelector(' #head-after-1').classList.remove("arrow-before");

}
    
});

footerList_1.addEventListener("click",function(){
    if(document.querySelector('#footer-list-item-2').style.display == "block"){
        document.querySelector('#footer-list-item-2').style.display = "none";
        document.querySelector(' #head-after-2').classList.remove("arrow-after");
        document.querySelector(' #head-after-2').classList.add("arrow-before");
}
else{
    document.querySelector('#footer-list-item-2').style.display = "block";
    document.querySelector(' #head-after-2').classList.add("arrow-after");
    document.querySelector(' #head-after-2').classList.remove("arrow-before");
}
    
});


footerList_2.addEventListener("click",function(){
    if(document.querySelector('#footer-list-item-3').style.display == "block"){
        document.querySelector('#footer-list-item-3').style.display = "none";
        document.querySelector(' #head-after-3').classList.remove("arrow-after");
        document.querySelector(' #head-after-3').classList.add("arrow-before");
}
else{
    document.querySelector('#footer-list-item-3').style.display = "block";
    document.querySelector(' #head-after-3').classList.add("arrow-after");
    document.querySelector(' #head-after-3').classList.remove("arrow-before");
}
    
});

footerList_3.addEventListener("click",function(){
    if(document.querySelector('#footer-list-item-4').style.display == "block"){
        document.querySelector('#footer-list-item-4').style.display = "none";
        document.querySelector(' #head-after-4').classList.remove("arrow-after");
        document.querySelector(' #head-after-4').classList.add("arrow-before");}
else{
    document.querySelector('#footer-list-item-4').style.display = "block";
    document.querySelector(' #head-after-4').classList.add("arrow-after");
    document.querySelector(' #head-after-4').classList.remove("arrow-before");
}
    
});

footerList_4.addEventListener("click",function(){
    if(document.querySelector('#footer-list-item-5').style.display == "block"){
        document.querySelector('#footer-list-item-5').style.display = "none";
        document.querySelector(' #head-after-5').classList.remove("arrow-after");
        document.querySelector(' #head-after-5').classList.add("arrow-before");}
else{
    document.querySelector('#footer-list-item-5').style.display = "block";
    document.querySelector(' #head-after-5').classList.add("arrow-after");
    document.querySelector(' #head-after-5').classList.remove("arrow-before");
}
});
