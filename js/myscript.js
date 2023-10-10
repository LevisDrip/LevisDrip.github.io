let i = 0;
let j = 0;
let b = 0;


let introText1 = "Hello, my name is Levi Lamerichs"
let introText2 = "And welcome to my portfolio!"
let introText3 = "Continue >"

let speed = 50;

let myIndex = 0;

function TypeWriter(){
    if(i < introText1.length){
        document.getElementById("head").innerHTML += introText1.charAt(i);
        i++;
        setTimeout(TypeWriter, speed);
    }
    else if(j < introText2.length){
        document.getElementById("head2").innerHTML += introText2.charAt(j);
        j++;
        setTimeout(TypeWriter, speed);
    }
    else if (b < introText3.length) {
        document.getElementById("button").style.display = "block"
        document.getElementById("button").innerHTML += introText3.charAt(b);
        b++;
        setTimeout(TypeWriter, speed);
    }
}


// Navigational functions
function firstHomePage(){
    window.location.href = "homePage/HomePage.html"
}
function toHomePage(){
    window.location.href = "../homePage/HomePage.html"
}
function toAboutMe(){
    window.location.href = "../aboutMePage/AboutMePage.html"
}
function toProjects(){
    window.location.href = "../projectsPage/ProjectsPage.html"
}



// Other stuff
function onload(){
    document.getElementById("container").style.backgroundColor = "#2d2d2d"

    slideShow();
}

function slideShow() {
    let i;
    let x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;

    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(slideShow, 5000);
}




// Project navigations.
function goBack(){
    window.location.href = "../ProjectsPage.html"
}

function boardingBuccanneers(){
    window.location.href = "../projectsPage/boardingBucs/boardingBuccanneers.html"
}

function blackJack(){
    window.location.href = "../projectsPage/blackJack/blackJack.html"
}

function fpsGame(){
    window.location.href = "../projectsPage/fpsGame/fpsGame.html"
}



