let navBar = document.getElementById('nav-bar');
let togglBtn = document.querySelector('.hamburg-icon');
let toggleImage = document.getElementById('icon');


togglBtn.addEventListener("click", ()=>{
    navBar.classList.toggle('show-nav');
    if(navBar.classList.contains('show-nav')){
        toggleImage.src = './images/icon-close.svg';
    }
    else{
        toggleImage.src = './images/icon-hamburger.svg'
    }
})