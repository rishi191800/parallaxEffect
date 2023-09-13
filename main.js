
let footer = document.getElementById('footer');


window.addEventListener('scroll', ()=>{
    if( window.scrollY > 30000){
        footer.classList.add('footerAdd');
    }
    else{
        footer.classList.remove('footerAdd');
    }
})

let dateSpan = document.getElementById('date');
let date = new Date();
let y = date.getFullYear();
dateSpan.innerHTML = y;