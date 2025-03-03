async function imageSwitch() {
    var imagesContainers = document.getElementsByClassName("image-switch")
    var maxLength = 0
    for(imagesContainer of imagesContainers) {
        var images = imagesContainer.getElementsByTagName('img')
        maxLength = ((images.length > maxLength) * images.length) + ((images.length <= maxLength) * maxLength)
    }
    for(var i = 0; i < maxLength; i = ((i - 1 < 0) * (maxLength - 1)) + ((i - 1 >= 0) * (i - 1))) {
        console.log(i)
        for(var imagesContainer of imagesContainers) {
            var images = imagesContainer.getElementsByTagName("img")
            images[i % images.length].classList.remove("opacity-0")
            images[i % images.length].classList.add("opacity-100")
            images[Math.abs((i+1)%images.length)].classList.add("opacity-0")
            images[Math.abs((i+1)%images.length)].classList.remove("opacity-100")
        }
        await new Promise(r => setTimeout(r, 1000))
    }
}


imageSwitch()