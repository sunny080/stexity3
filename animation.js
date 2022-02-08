
const hero = document.querySelector('.loop');
const img = document.querySelector('.jimy');
const nav = document.querySelector('.header-nav');
const text = document.querySelector('.heading1')
const text1 = document.querySelector('.heading2')

const tl = new TimelineMax();



tl.fromTo(hero, 1.5, { width: "0%" }, {width: '100%',ease:Power2.easeInOut })






.fromTo(nav , .7 , {marginTop:'-200px'},{marginTop:'0'})



.fromTo(img,1,{scale:'.7'},{scale:'1'} ,'-=.6' )


.fromTo(text,1,{opacity:'0'},{opacity:'1'},'-=1' )


.fromTo(text1,1,{opacity:'0'},{opacity:'1'},'-=1' )
