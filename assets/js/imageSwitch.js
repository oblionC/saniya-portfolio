async function imageSwitch() {
    async function handleSwitch(images) {
        for(var i = 0; i < images.length; i++) {
            images[i].classList.remove("opacity-0")
            images[i].classList.add("opacity-100")
            await new Promise(r => setTimeout(r, 1000))
            images[i-1%images.length].classList.add("opacity-0")
            images[i-1%images.length].classList.remove("opacity-100")
        }
    }
    var imagesContainers = document.getElementsByClassName("image-switch")
    for(var imagesContainer of imagesContainers) {
        var images = imagesContainer.getElementsByTagName("img")
        handleSwitch(images)
        // setInterval(() => handleSwitch(images), 1000)
    }
}


imageSwitch()