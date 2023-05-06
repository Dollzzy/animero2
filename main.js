var PrincipalPage = document.querySelector(".PrincipalPage")
var notification = document.querySelector(".notification")
var back = document.querySelector(".back-pp")
var inbox= document.querySelector(".inbox")

notification.addEventListener("click",() => {
    PrincipalPage.style.display = 'none'
    inbox.style.display = 'block'
})
back.addEventListener("click",() => {
    PrincipalPage.style.display = 'block'
    inbox.style.display = 'none'
})