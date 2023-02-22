function handleEditProfile() {
    var name = document.getElementById("name").textContent
    var inputName = document.getElementById("input-name")
    inputName.value = name

    var email = document.getElementById("email").textContent
    var inputemail = document.getElementById("input-email")
    inputemail.value = email

    var interests = document.getElementById("interests").textContent
    var inputinterests = document.getElementById("input-interests")
    inputinterests.value = interests

    document.getElementById("edit-profile").style.display = "block"
    document.getElementById("user-profile").style.display = "none"
}

function handleUpdateProfile() {
    var updatedName = document.getElementById("input-name").value
    var name = document.getElementById("name")
    name.textContent = updatedName

    var updatedEmail = document.getElementById("input-email").value
    var email = document.getElementById("email")
    if (validator.isEmail(updatedEmail)){
        email.textContent = updatedEmail
    }
    else{
        alert("Wrong email format!")
    }

    var updatedinterests = document.getElementById("input-interests").value
    var interests = document.getElementById("interests")
    interests.textContent = updatedinterests

    document.getElementById("edit-profile").style.display = "none"
    document.getElementById("user-profile").style.display = "block"
} 