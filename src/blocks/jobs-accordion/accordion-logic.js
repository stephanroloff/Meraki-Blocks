setTimeout(()=>{
    let accordionAllContainer = document.querySelectorAll('.accordion-container');

    accordionAllContainer.forEach(accordion =>{
        accordion.addEventListener('click', ()=>{
            accordion.classList.toggle('accordion-active');
        });
    })
    
},1000)