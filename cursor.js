const cursor=document.getElementById('cursor-personalizado');   
document.addEventListener('mousemove', (event) =>{
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
});
cursor.classList.remove('click-animado');
document.addEventListener('click', ()=>{
    cursor.classList.add("click-animado");

    // Add brightness effect
    cursor.style.filter = 'brightness(1)'; 
    setTimeout(() => {
        cursor.style.filter = 'brightness(10)';
        cursor.classList.remove('click-animado');
    }, 300);
});