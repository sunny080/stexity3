let wrapper = document.querySelector('.link');
let toggle = document.querySelector('.toggle');


window.onload=function(){
    
    toggle.onclick=function(){
    toggle.classList.toggle('active'); 
    wrapper.classList.toggle('open')
    }
    
}



