let princings = document.querySelectorAll('.pricing')

princings.forEach(pricing => {
    pricing.addEventListener('click', () => {

        princings.forEach(pricing => {
            pricing.classList.remove('highlight')
        })
        pricing.classList.add('highlight');
            
    })
})