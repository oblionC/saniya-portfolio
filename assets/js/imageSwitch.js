async function imageSwitch() {
    var imagesContainer = document.getElementsByClassName("image-switch")[0]
    var images = imagesContainer.getElementsByTagName("img")
    console.log(images)
    for(var i = 0; i < images.length; i = (i + 1) % images.length) {
        images[i].classList.remove("opacity-0")
        images[i].classList.add("opacity-100")
        await new Promise(r => setTimeout(r, 1000))
        images[i].classList.add("opacity-0")
        images[i].classList.remove("opacity-100")
    }
}

imageSwitch()