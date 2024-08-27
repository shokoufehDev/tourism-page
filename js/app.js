let $ = document
let albumImgs = $.querySelectorAll('.album__img')
let mainImg = $.querySelector('.main__img')
let modal = $.querySelector('.info-modal')
let showModalBtn = $.querySelector('.more-info')
let header = $.querySelector('.header')
let main = $.querySelector('.main')
let footer = $.querySelector('.footer')
let closeModalBtn = $.querySelector('.close--icon')
let nextBtn = $.querySelector('.next__btn')
let preBtn = $.querySelector('.pre__btn')
let imgsArray = ['img/ferdos10.jpg', 'img/ferdos11.jpg', 'img/ferdos1.webp', 'img/ferdos2.webp', 'img/ferdos3.webp', 'img/ferdos4.webp', 'img/ferdos5.jpg', 'img/ferdos6.jpg']

console.log(albumImgs);

albumImgs.forEach(function (img) {
    img.addEventListener('click', function () {
        mainImg.setAttribute('src', img.getAttribute('src'))
    })
})

showModalBtn.addEventListener('click', function () {
    modal.style.display = 'block'
    header.style.filter = 'blur(10px)'
    main.style.filter = 'blur(10px)'
    footer.style.filter = 'blur(10px)'
    window.scrollTo(0, 0)
})

closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none'
    header.style.filter = 'blur(0px)'
    main.style.filter = 'blur(0px)'
    footer.style.filter = 'blur(0px)'
})

let imgIndex = 0
function goPrevious () {
    imgIndex--
    if (imgIndex < 0) {
        imgIndex = imgsArray.length - 1
    }
    mainImg.setAttribute('src', imgsArray[imgIndex])
    }
    
    function goNext () {
    imgIndex++
    if (imgIndex > imgsArray.length - 1) {
        imgIndex = 0
    }
    mainImg.setAttribute('src', imgsArray[imgIndex])
    }
    
    
    preBtn.addEventListener('click', goPrevious)
    nextBtn.addEventListener('click', goNext)
    
