
let footer = document.getElementById('footer');
let wrapper = document.getElementById('wrapper')

wrapper.addEventListener('scroll', function(){
    let scrolled = this.scrollTop;
})

let dateSpan = document.getElementById('date');
let date = new Date();
let y = date.getFullYear();
dateSpan.innerHTML = y;