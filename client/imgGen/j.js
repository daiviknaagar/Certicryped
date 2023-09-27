const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const n = document.getElementById('name')
const down = document.getElementById('download-btn')

var image = new Image()
image.src = "https://girishruti.github.io/imagehostgithub.io/poster.jpg"
image.crossOrigin = "anonymous"
image.onload = function () {
    drawImage()
}

function drawImage() {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    ctx.font = '30px monotype corsiva'
    ctx.fillStyle = '#29e'
    ctx.fillText(n.value, 40, 180)
}

n.addEventListener('input', function () {
    drawImage()
})

down.addEventListener('click', function () {
    down.href = canvas.toDataURL("img/png", 1.0)
    console.log(down.href)
    down.download = true
    console.log("hi")
})