// ______________image slider script______________

let slides = document.getElementById("slideImg")
let slideText = document.getElementsByClassName("text")
let slideData = [
    {
        img: "img1.jpg",
        text: "Come And See",
    }, {
        img: "img2.jpg",
        text: "Only The Best For You.",
    }, {
        img: "img3.jpg",
        text: "Only The Best For Your Kid.",
    }
]

let slideIndex = 0

function mySlides() {
    let item = slideData[slideIndex]

    if (slideIndex > 2) {
        slideIndex = 0
        
    }
    else {
        slides.src = item.img;
        slideText[0].textContent = item.text
        slideIndex++;

    }
}
let slideTime = setInterval(mySlides, 1000)




// _______________check username & password______________

let userName = document.getElementById("userName")
let userPassword = document.getElementById("userPassword")

const inputData = [{
    userName: "e",
    password: "1",
    image: "pro.jpg"

}]

function goHome() {
    if (userName.value === inputData[0].userName && userPassword.value == inputData[0].password) {
        location.href = "homePage.html";

    }
    else {
        document.getElementById("erroAlert").innerHTML = "Your username or password is incorrect!";
    }
    pic()

}

function pic() {
    let pics = document.querySelectorAll(".dp");

    for (let i = 0; i < pics.length; i++) {
        pics[i].src = "pro.jpg";
    }

}

pic()

// _______________login form pop up___________________

let dark = document.getElementById("dk")

function create() {

    dark.style.display = "flex"
}

function closeForm() {

    dark.style.display = "none";

}
