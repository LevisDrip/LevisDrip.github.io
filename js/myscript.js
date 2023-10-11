let i = 0;
let j = 0;
let b = 0;


let introText1 = "Hello, my name is Levi Lamerichs"
let introText2 = "And welcome to my portfolio!"
let introText3 = "Continue >"

let introTextDutch1 = "Hallo, mijn naam is Levi Lamerichs"
let introTextDutch2 = "En welkom bij mijn portfolio!"
let introTextDutch3 = "Verder >"

let speed = 50;

let myIndex = 0;

let Dutch = true;

function ChangeLanguageLoad()
{
    if (document.cookie.includes("English"))
    {
        console.log("Yes")
        Dutch = true;
    }
    else
    {
        console.log("No")
        Dutch = false;
    }

    console.log(document.cookie)
}


function TypeWriter(){
    if(i < introText1.length && !Dutch){
        document.getElementById("head").innerHTML += introText1.charAt(i);
        i++;
        setTimeout(TypeWriter, speed);
    }
    else if(j < introText2.length && !Dutch){
        document.getElementById("head2").innerHTML += introText2.charAt(j);
        j++;
        setTimeout(TypeWriter, speed);
    }
    else if (b < introText3.length && !Dutch) {
        document.getElementById("button").style.display = "block"
        document.getElementById("button").innerHTML += introText3.charAt(b);
        b++;
        setTimeout(TypeWriter, speed);
    }


    if(i < introTextDutch1.length && Dutch){
        document.getElementById("head").innerHTML += introTextDutch1.charAt(i);
        i++;
        setTimeout(TypeWriter, speed);
    }
    else if(j < introTextDutch2.length && Dutch){
        document.getElementById("head2").innerHTML += introTextDutch2.charAt(j);
        j++;
        setTimeout(TypeWriter, speed);
    }
    else if (b < introTextDutch3.length && Dutch) {
        document.getElementById("button").style.display = "block"
        document.getElementById("button").innerHTML += introTextDutch3.charAt(b);
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

    if (!Dutch){
        document.getElementById("aboutMeTitle").innerText = "The archive     - \n About me"

        document.getElementById("projectsText").innerText = "Projects"
        document.getElementById("homeText").innerText = "Home"


        document.getElementById("information1").innerText = "Hello, My name is Levi Lamerichs";

        document.getElementById("information2").innerText = "I am 17 years old and live in the Netherlands.\n" +
            "                 I am currently studying Software development at Sintlucas\n" +
            "                 in Eindhoven. Before my studies I used to go to Citaverde in Horst,\n" +
            "                 which was a school that didn't actually have anything to do with computers\n" +
            "                 so i basically just went there because it was a nice and small school.\n" +
            "                 I am currently studying for the cambridge exam on C1 level. Even though I've been\n" +
            "                 told my speaking is on C2 level, I find reading and understanding texts quite difficult.";

        document.getElementById("information3").innerText = "My Hobbies";

        document.getElementById("information4").innerText = "In my free time I like to play games with my friends. We would play games like Minecraft, Terraria\n" +
            "                and all sorts of party games in which we can just get mad at each other, because one of us is always\n" +
            "                luckier than the others. Other than playing games I also like playing guitar. I picked up playing\n" +
            "                the guitar not to long after making this website. A little dedication came a far way, because in less\n" +
            "                than half a year I was able to play some of my favorite songs! The first song I knew how to play was the intro theme to The last of us.";

        document.getElementById("information5").innerText = "My experience with programming";

        document.getElementById("information6").innerText = "For the past years I have been programming stuff for school like games and websites. We started\n" +
            "                by learning the basics of HTML and CSS, after a while we got to learn Javascript as well.\n" +
            "                In the first period of the second year we had learned even more about web development, thus also got\n" +
            "                more efficient with JavaScript and CSS. That was in the same period that I made this website.\n" +
            "                In the second period we will start working on Game development which I am really excited about.\n" +
            "                <br>\n" +
            "                <br>\n" +
            "                I personally want to specialize in game development, since I think it's more fun than web development.\n" +
            "                In my first year of my education we made prototype games like a first-person shooter. I also made\n" +
            "                BlackJack for a freedom assignment. I would've made more, but we had too little time to make our game.\n" +
            "                As of now Unity has made some pretty bad business decisions, that's why I haven't made anything in Unity\n" +
            "                for quite a while, I'm looking into other engines at the moment as well, but I haven't found any yet.\n" +
            "                A friend of mine has his own Studio business called Story Studio Entertainment. He had requested me to\n" +
            "                make a game revolving around the fictional universe that he is currently creating. Together with a friend\n" +
            "                we decided to start working on that project. In the end, me and my friend hope to start our own game\n" +
            "                development company.";



        document.getElementById("contactText").innerText = "Contact me"
    }
    else {
        document.getElementById("aboutMeTitle").innerText = "The archive     - \n Wie ben ik"

        document.getElementById("projectsText").innerText = "Projecten"
        document.getElementById("homeText").innerText = "Start"

        document.getElementById("information1").innerText = "Hallo, mijn naam is Levi Lamerichs";

        document.getElementById("information2").innerText = "Ik ben 17 jaar oud en ik leef in Nederland.\n" +
            "                 Ik volg momenteel de opleiding Software development bij het SintLucas\n" +
            "                 in Eindhoven. Voor mijn opleiding zat ik op het Citaverde college in Horst,\n" +
            "                 dit was een school die niet veel met computers deed, dus ik zat er eigenlijk\n" +
            "                 omdat ik het een fijne en kleine school vond.\n" +
            "                 Op dit moment ben ik aan het leren voor het Cambridge examen op C1 niveau. Er is mij\n" +
            "                 vaak verteld dat mijn spreekvaardigheid op zich op niveau C2 bevindt, \n "+
            "                 maar texten lezen en begrijpen vind ik vaak nog lastig..";

        document.getElementById("information3").innerText = "Mijn Hobbies";

        document.getElementById("information4").innerText = "In mijn vrije tijd vind ik het leuk om games te spelen met mijn vrienden. Meestal spelen we dan spellen zoals Minecraft, Terraria\n" +
            "                en allerlei soorten Party games waarin we altijd boos op elkaar kunnen worden, Omdat een van ons dan altijd\n" +
            "                meer geluk heeft dan de andere. Buiten het gamen vind ik het ook leuk om gitaar te spelen. Ik ben een half jaar\n" +
            "                voor het maken van deze website begonnen met gitaar spelen. Met een beetje doorzettingsvermogen kom je al best ver, want in minder\n" +
            "                dan een half jaar kan ik al een paar van mijn favoriete nummers spelen! Het eerste nummer dat ik kon was de intro song van The Last of us.";

        document.getElementById("information5").innerText = "Mijn ervaring met programmeren.";

        document.getElementById("information6").innerText = "De agelopen jaren heb ik vooral dingen voor school geprogrammeerd, zoals Games of websites. We zijn begonnen\n" +
            "                met het leren van HTML en CSS, later na gingen we ook Javascript leren.\n" +
            "                In de eerste periode van het tweede jaar leerden we nog meer over web development, en nu kunnen \n" +
            "                ook efficienter omgaan met Javascript en CSS. Deze website is gemaakt in dezelfde periode.\n" +
            "                In de tweede periode gaan we verder met Game development, en dat is iets waar ik wel heel erg veel zin in heb.\n" +
            "                <br>\n" +
            "                <br>\n" +
            "                Ik wil graag specializeren in Game development, since I think it's more fun than web development.\n" +
            "                In my first year of my education we made prototype games like a first-person shooter. I also made\n" +
            "                BlackJack for a freedom assignment. I would've made more, but we had too little time to make our game.\n" +
            "                As of now Unity has made some pretty bad business decisions, that's why I haven't made anything in Unity\n" +
            "                for quite a while, I'm looking into other engines at the moment as well, but I haven't found any yet.\n" +
            "                A friend of mine has his own Studio business called Story Studio Entertainment. He had requested me to\n" +
            "                make a game revolving around the fictional universe that he is currently creating. Together with a friend\n" +
            "                we decided to start working on that project. In the end, me and my friend hope to start our own game\n" +
            "                development company.";


        document.getElementById("contactText").innerText = "Contact opnemen?"
    }
}

function onloadHome(){
    document.getElementById("container").style.backgroundColor = "#2d2d2d"

    slideShow();

    if (!Dutch){
        document.getElementById("homeTitle").innerText = "The archive     - \n Home"

        document.getElementById("projectsText").innerText = "Projects"
        document.getElementById("aboutMeText").innerText = "About me"

        document.getElementById("contactText").innerText = "Contact me"
    }
    else {
        document.getElementById("homeTitle").innerText = "The archive     - \n Start"

        document.getElementById("projectsText").innerText = "Projecten"
        document.getElementById("aboutMeText").innerText = "Wie ben ik"

        document.getElementById("contactText").innerText = "Contact opnemen?"
    }
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



function changeDutch(){
    document.cookie = "English";
    window.location.reload();
}

function changeEnglish(){
    document.cookie = "Dutch"
    window.location.reload();
}


