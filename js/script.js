const darkMode = document.getElementById('darkMode');
const lightMode = document.getElementById('lightMode');



darkMode.addEventListener('click', ()=>{

    document.querySelector('body').style.backgroundColor = 'black';
})


lightMode.addEventListener('click', ()=>{
    document.querySelector('body').style.backgroundColor = 'white';
})