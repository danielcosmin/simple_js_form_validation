let id = (id) => document.getElementById(id)

let classes = (classes) => document.getElementsByClassName(classes)

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkValidity(username, 0, "Username cannot be blank")
    checkValidity(email, 1, "Email cannot be blank")
    checkValidity(password, 2, "Password cannot be blank")
})

let checkValidity = (id, checkClass, message) => {
    if (id.value.trim() === "") {
        errorMsg[checkClass].innerHTML = message
        id.style.border = "2px solid red"

        // icons
        failureIcon[checkClass].style.opacity = "1"
        successIcon[checkClass].style.opacity = "0"
    } else {
        errorMsg[checkClass].innerHTML = ""
        id.style.border = "2px solid green"

        // icons
        failureIcon[checkClass].style.opacity = "0"
        successIcon[checkClass].style.opacity = "1"
    }
}