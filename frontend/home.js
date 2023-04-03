let info=document.getElementById('info');
let info_btn=document.getElementById('profile-btn');
let text=document.getElementById('text2');
let all=document.getElementsByClassName("all");
let home_btn=document.getElementById('home-btn');
let about_btn=document.getElementById('about-btn');
let login_btn=document.getElementById('login-btn');
let logo=document.getElementById('text');

info_btn.onclick=function(){
    if(info.style.visibility==='hidden'){
        info.style.visibility='visible';
        text.style.visibility='hidden';
        home_btn.style.visibility='hidden';
        about_btn.style.visibility='hidden';
        login_btn.style.visibility='hidden';
        logo.style.visibility='hidden';
    }else{
        info.style.visibility='hidden';
        text.style.visibility='visible';
        home_btn.style.visibility='visible';
        about_btn.style.visibility='visible';
        login_btn.style.visibility='visible';
        logo.style.visibility='visible';
    }
}
