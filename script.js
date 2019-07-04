const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

let screenSave = document.getElementById('screen')
let head = document.getElementById('head')

let img = document.createElement('object')
let link = document.createElement('link')

let source = './img/dvd-video-1-logo-svg-vector.svg'
let x = 1
let y = 1

img.data = source
img.type = 'image/svg+xml'
img.width = '150'
img.height = '150'
img.style.position = 'absolute'
img.style.top = '0'
img.style.left = '0'

link.href = source
link.rel = 'shortcut icon'
screenSave.appendChild(img)
head.appendChild(link)

let count1 = 1
let count2 = 1

const moveDvd = () => {
  let currX = parseInt(img.style.left)
  let currY = parseInt(img.style.top)
  if (currX < width - 150 && currX >= 0){
    x+=count1
    img.style.left = `${x}px`
  }
  if (currY < height && currY >= 0){
    y+=count2
    img.style.top = `${y}px`
  }

  if (currX == width - 150){
    count1 = -1
    x+=count1
    img.style.left = `${x}px`
  }
  if (currY == height - 110){
    count2 = -1
    y+=count2
    img.style.top = `${y}px`
  }
  if (currX <= 0){
    count1 = 1
    x+=count1
    img.style.left = `${x}px`
  }
  if (currY <= 0){
    count2 = 1
    y+=count2
    img.style.top = `${y}px`
  }
}
setInterval(moveDvd, 10)
