<template>
    <div id="user-profile">
        <h1>User Profile</h1>
        <img :src="image" alt="">

        <span>Name: </span><b id="name">Payam Koohi</b>
        <hr/>

        <span>Email: </span><b id="email">payam.koohii@gmail.com</b>
        <hr/>

        <span>Interest: </span><b id="interests">Coding</b>
        <hr/>

        <button @click="handleEditProfile">Edit Profile</button>
    </div>

    <div id="edit-profile">
        <h1>Edit Profile</h1>
        <img :src="image" alt="">

        <span>Name: </span>
        <input type="text" id="input-name" placeholder="Payam Koohi">
        <hr/>

        <span>Email: </span>
        <input type="text" id="input-email" placeholder="payam.koohii@gmail.com">
        <hr/>

        <span>Interest: </span>
        <input type="text" id="input-interests" placeholder="Coding">
        <hr/>

        <button @click="handleUpdateProfile">Update Profile</button>
    </div>
</template>

<script>
    import image from './payam.jpg'
    export default {
        name: 'App',
        data() {
            return {
                image: image
            }
        },
        methods: {
            handleEditProfile() {
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
            },
            handleUpdateProfile() {
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
        }
    }
</script>

<style>
    img {
        width: 320px;
        height: 320px;
        display: block;
        margin-bottom: 40px;
    }
    div {
        margin: 40px auto;
        width: 80%;
    }

    hr {
        width: 95%;
        margin: 25px 0;
    }

    button {
        width: 130px;
        height: 35px;
        border-radius: 20px;
        font-size: 15px;
    }

    input {
        width: 200px;
        padding: 4px;
        font-size: 13px;
    }

    #edit-profile {
        display: none;
    }

    button:hover {
        cursor: pointer;
    }
</style>