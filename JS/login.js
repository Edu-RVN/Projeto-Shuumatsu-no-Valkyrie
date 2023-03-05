var FormSignin = document.querySelector('#signin')
var FormSignup = document.querySelector('#signup')
var bntColor = document.querySelector('.bntColor')

document.querySelector('#bntSignin')
    .addEventListener('click', () => {
        FormSignin.style.left = "25px"
        FormSignup.style.left = "450px"
        bntColor.style.left = "0px"
})

document.querySelector('#bntSignup')
    .addEventListener('click', () => {
        FormSignin.style.left = "-450px"
        FormSignup.style.left = "25px"
        bntColor.style.left = "110px"
})