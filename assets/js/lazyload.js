function lazyload() {
    const imagesParentDiv = document.getElementsByClassName("lazyload")[0]
    const images = [...imagesParentDiv.children]
    images.forEach(image => {
        image.classList.add("opacity-0")
    })
    const options = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1
    }
    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const img = entry.target
                img.classList.add("fade-up")
                img.classList.remove("opacity-0")
                observer.unobserve(img);
            }
        })
    }, options)
    console.log(images)
    images.forEach(image => observer.observe(image))
}

lazyload()