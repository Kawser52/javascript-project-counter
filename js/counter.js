const counters = document.querySelectorAll('.counter')
counters.forEach(counter=>{
    counter.innerText = '0';
    const updateCounter = ()=>{
        const target = + counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increament = target / 300;
        if(count < target){
           counter.innerText = `${ Math.ceil(count + increament)}`
           setTimeout(() => {
            updateCounter()
           }, 1); 
           
        }
    }
    
    updateCounter();

})