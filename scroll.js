window.addEventListener('scroll',()=>{
    let content = document.querySelector('.card1' ,'card2');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.5;
    if(contentPosition < screenPosition){
        content.classList.add('active');

    }else{
        content.classList.remove('active')
    }

});




window.addEventListener('scroll',()=>{
    let content = document.querySelector('.card2' );
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.5;
    if(contentPosition < screenPosition){
        content.classList.add('active');

    }else{
        content.classList.remove('active')
    }

});

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.card3' );
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.5;
    if(contentPosition < screenPosition){
        content.classList.add('active');

    }else{
        content.classList.remove('active')
    }

});



window.addEventListener('scroll',()=>{
    let content = document.querySelector('.card4' );
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.5;
    if(contentPosition < screenPosition){
        content.classList.add('active');

    }else{
        content.classList.remove('active')
    }

});