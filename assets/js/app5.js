const toggler = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.navItem');
console.log(navItems);

toggler.addEventListener('click',(e)=>{
    if(navbar.classList.contains('active')){
        navbar.classList.remove('active');
        toggler.querySelector('a').innerHTML = '<i class="fa-solid fa-bars"></i>';
    }else {
        navbar.classList.add('active');
        toggler.querySelector('a').innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
})
