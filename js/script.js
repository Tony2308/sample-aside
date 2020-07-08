// selecting elements
let toggleMenu = document.getElementById('check');
let menu = document.querySelector('.menu');
let open =document.querySelector('.fa-bars');
let body =document.querySelector('main');


toggleMenu.addEventListener('click', ()=>{

    if( menu.style.width === '0px' ){

        body.style.marginRight = '250px';
        menu.style.width = '250px';
        menu.style.right = '0px';
        body.style.backgroundColor = ' rgba(0,0,0, 0.5)';
 
    }else{
        
        body.style.marginRight = '0%';
        menu.style.width = '0px';
        body.style.backgroundColor = ' rgba(0,0,0, 0)';

    }

});


