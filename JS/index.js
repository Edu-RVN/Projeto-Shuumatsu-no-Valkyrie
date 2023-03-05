const observer = new IntersectionObserver(entries => {
    console.log(entries)
    entries[0].target.classList.add('.personagem-off')
})


Array.from(document.querySelector('.personagem')).forEach( element => {
    observer.observe(element)
})
