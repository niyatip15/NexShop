const menu = document.getElementById('burger-menu');
const closeMenu = document.getElementById('close')
const nav =  document.getElementById('navbar');

if(menu){
    menu.addEventListener('click',() =>{
        nav.classList.add('active')
    })
}
if(closeMenu){
    closeMenu.addEventListener('click',() =>{
        nav.classList.remove('active')
        })
}
