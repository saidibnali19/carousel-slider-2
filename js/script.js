const sliderWrapper = document.querySelector("[data-slider-wrapper]")
const buttons = sliderWrapper.querySelectorAll("button")
const buttonLeft = sliderWrapper.querySelector("[data-button-left]")
const buttonRight = sliderWrapper.querySelector("[data-button-right]")
const slider = sliderWrapper.querySelector("[data-slider]")
const slides = slider.children.length
const slidesPerScreen = parseInt(getComputedStyle(slider).getPropertyValue("--slides-per-screen"))
let offset = parseInt(getComputedStyle(slider).getPropertyValue("--offset"))
const noOfSlides = Math.ceil(slides / slidesPerScreen)

console.log(noOfSlides)

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button === buttonLeft) offset-= 1
        if (button === buttonRight) offset+= 1

        if (offset === noOfSlides) offset = 0
        if (offset < 0) offset = noOfSlides - 1

        slider.style.setProperty("--offset", offset)
    })
})