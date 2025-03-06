var imgs = document.getElementsByTagName("img")
for(var img of imgs) {
    if(img.getAttribute("src")[0] !== "/") {
        console.log(img)
        img.setAttribute("src", "/" + img.getAttribute("src"))
    }
}