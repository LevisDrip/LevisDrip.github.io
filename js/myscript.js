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

//language changing stuff
function ChangeLanguageLoad()
{
    if (localStorage.getItem("penis").includes("English"))
    {
        console.log("Yes")
        Dutch = true;
    }
    else
    {
        console.log("No")
        Dutch = false;
    }
    console.log(localStorage.getItem("penis"))
}

function TypeWriter(){
    document.getElementById("background").style.backgroundColor = "black";

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

    if (!Dutch){
        document.getElementById("languageText").innerText = "Language"
    }
    else {
        document.getElementById("languageText").innerText = "Taal"
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



// Language changer
function onload(){
    document.getElementById("container").style.backgroundColor = "#2d2d2d"

    slideShow();

    if (!Dutch){
        document.getElementById("aboutMeTitle").innerText = "The archive     -    About me"

        document.getElementById("projectsText").innerText = "Projects"
        document.getElementById("homeText").innerText = "Home"


        document.getElementById("information1").innerText = "Hello, My name is Levi Lamerichs";

        document.getElementById("information2").innerText = "I am 17 years old and live in the Netherlands." +
            "                 I am currently studying Software development at Sintlucas" +
            "                 in Eindhoven. Before my studies I used to go to Citaverde in Horst," +
            "                 which was a school that didn't actually have anything to do with computers" +
            "                 so i basically just went there because it was a nice and small school." +
            "                 I am currently studying for the cambridge exam on C1 level. Even though I've been" +
            "                 told my speaking is on C2 level, I find reading and understanding texts quite difficult.";

        document.getElementById("information3").innerText = "My Hobbies";

        document.getElementById("information4").innerText = "In my free time I like to play games with my friends. We would play games like Minecraft, Terraria" +
            "                and all sorts of party games in which one of us is always luckier than the others" +
            "                Other than playing games I also like playing guitar. I picked up playing" +
            "                the guitar not to long after making this website. A little dedication came a far way, because in less" +
            "                than half a year I was able to play some of my favorite songs! The first song I knew how to play was the intro theme to The last of us.";

        document.getElementById("information5").innerText = "My experience with programming";

        document.getElementById("information6").innerText = "For the past years I have been programming stuff for school like games and websites. We started" +
            "                by learning the basics of HTML and CSS, after a while we got to learn Javascript as well." +
            "                In the first period of the second year we had learned even more about web development, thus also got" +
            "                more efficient with JavaScript and CSS. That was in the same period that I made this website." +
            "                In the second period we will start working on Game development which I am really excited about." +
            "                " +
            "                " +
            "                I personally want to specialize in game development, since I think it's more fun than web development." +
            "                In the first year of my education we made prototype games like a first-person shooter. I also made" +
            "                BlackJack for a freedom assignment. I would've made more, but we had too little time to make our game." +
            "                As of now Unity has made some pretty bad business decisions, that's why I haven't made anything in Unity" +
            "                for quite a while, I'm looking into other engines at the moment as well, but I haven't found any yet." +
            "                A friend of mine has his own Studio business called Story Studio Entertainment. He had requested me to" +
            "                make a game revolving around the fictional universe that he is currently creating. Together with a friend" +
            "                we decided to start working on that project. In the end, me and my friend hope to start our own game" +
            "                development company.";



        document.getElementById("contactText").innerText = "Contact me"

        document.getElementById("languageText").innerText = "Language"

    }
    else {
        document.getElementById("aboutMeTitle").innerText = "The archive     -    Wie ben ik?"

        document.getElementById("projectsText").innerText = "Projecten"
        document.getElementById("homeText").innerText = "Start"

        document.getElementById("information1").innerText = "Hallo, mijn naam is Levi Lamerichs";

        document.getElementById("information2").innerText = "Ik ben 17 jaar oud en ik woon in Nederland." +
            "                 Ik volg momenteel de opleiding Software development bij het SintLucas" +
            "                 in Eindhoven. Voor mijn opleiding zat ik op het Citaverde college in Horst," +
            "                 dit was een school die niet veel met computers deed, dus ik zat er eigenlijk" +
            "                 omdat ik het een fijne en kleine school vond." +
            "                 Op dit moment ben ik aan het leren voor het Cambridge examen op C1 niveau. Er is mij" +
            "                 vaak verteld dat mijn spreekvaardigheid op zich op niveau C2 bevindt,  "+
            "                 maar texten lezen en begrijpen vind ik vaak nog lastig..";

        document.getElementById("information3").innerText = "Mijn Hobbies";

        document.getElementById("information4").innerText = "In mijn vrije tijd vind ik het leuk om games te spelen met mijn vrienden. Meestal spelen we dan spellen zoals Minecraft, Terraria" +
            "                en allerlei soorten Party games waarin een van ons dan meer geluk heeft dan alle andere." +
            "                Buiten het gamen vind ik het ook leuk om gitaar te spelen. Ik ben een half jaar" +
            "                voor het maken van deze website begonnen met gitaar spelen. Met een beetje doorzettingsvermogen kom je al best ver, want in minder" +
            "                dan een half jaar kan ik al een paar van mijn favoriete nummers spelen! Het eerste nummer dat ik kon was de intro song van The Last of us.";

        document.getElementById("information5").innerText = "Mijn ervaring met programmeren.";

        document.getElementById("information6").innerText = "De agelopen jaren heb ik vooral dingen voor school geprogrammeerd, zoals Games of websites. We zijn begonnen" +
            "                met het leren van HTML en CSS, later na gingen we ook Javascript leren." +
            "                In de eerste periode van het tweede jaar leerden we nog meer over web development, en nu kunnen " +
            "                ook efficienter omgaan met Javascript en CSS. Deze website is gemaakt in dezelfde periode." +
            "                In de tweede periode gaan we verder met Game development, en dat is iets waar ik wel heel erg veel zin in heb." +
            "                \n" +
            "                \n" +
            "                Ik wil graag specializeren in Game development, omdat mij dit leuker lijkt dan web development." +
            "                In het eerste jaar van mijn opleiding hebben we vooral protoptypes van spellen gemaakt zoals een first-person shooter. Ook heb ik" +
            "                BlackJack gemaakt voor een open opdracht. Ik zou meer hebben gemaakt, maar we hadden te weinig tijd." +
            "                Zoals het er nu uit ziet heeft Unity best slechte financieele beslissingen gemaakt, daarom heb ik ook al even niks meer gemaakt in Unity," +
            "                ik ben daarom ook aan het kijken naar andere engines zoals Unreal, maar daar heb ik nog geen gebruik van gemaakt." +
            "                Een vriend van mij heeft zijn eigen studio bedrijf, genaamd Story Studio entertainment. Hij had aan mij gevraagd" +
            "                om een game voor zijn fictionele universum te maken. Samen met een andere vriend" +
            "                besloten we daar aan te gaan werken. Uiteindelijk hoop ik met die vriend ons eigen game" +
            "                development company op te richten.";


        document.getElementById("contactText").innerText = "Contact opnemen?"

        document.getElementById("languageText").innerText = "Taal"
    }
}

function onloadHome(){
    document.getElementById("container").style.backgroundColor = "#2d2d2d"

    slideShow();

    if (!Dutch){
        document.getElementById("homeTitle").innerText = "The archive     -    Home"

        document.getElementById("projectsText").innerText = "Projects"
        document.getElementById("aboutMeText").innerText = "About me"

        document.getElementById("contactText").innerText = "Contact me"

        document.getElementById("homePageText").innerText = "Images shown above have been made by me and are previews of my projects.\n" +
            "                        For more information on these projects head on over to the \"Projects page\"."

        document.getElementById("languageText").innerText = "Language"
    }
    else {
        document.getElementById("homeTitle").innerText = "The archive     -    Start"

        document.getElementById("projectsText").innerText = "Projecten"
        document.getElementById("aboutMeText").innerText = "Wie ben ik?"

        document.getElementById("contactText").innerText = "Contact opnemen?"

        document.getElementById("homePageText").innerText = "Foto's die hier boven weer zijn previews van mijn projecten." +
            "                        Voor meer informatie over deze projecten kunt u naar de \"Projecten\"  pagina gaan."

        document.getElementById("languageText").innerText = "Taal"
    }
}

function onloadBoardingBucs(){

    document.getElementById("container").style.backgroundColor = "#2d2d2d"

    if (!Dutch){
        document.getElementById("BackButton").innerText = "Go back"

        document.getElementById("projectBBInfo1").innerText = "Boarding Buccaneers was made as an extra for a game development assignment." +
            "                Since I was building a game that had nothing to do with our assignment " +
            "                I had to ask for help from friends and look things up on the internet. Besides the Pong game we" +
            "                made (which was the original assignment), I decided I wanted to make a space invaders like game with" +
            "                actual good-looking sprites."

        document.getElementById("projectBBInfo2").innerText = "For the sprites I used PaintDotNet to make small 16 x 16 pixel art ships." +
            "            I made 2 variants the Spanish and the British (sprites are shown down below). The enemies will shoot you and kill you." +
            "            One shot from the enemy ship will kill you. Return fire with your own pirate ship to attempt to kill" +
            "            the spanish and british armada's." +
            "                \n" +
            "            The game spans over 5 levels. 2 of which contain their own unique ships, either the spanish or the british" +
            "            ships. The 3rd and 4th level have mixed enemies and level 5 is the boss level. The boss has 15 health points" +
            "            and can shoot multiple bullets at once."



        document.getElementById("contactText").innerText = "Contact me"

        document.getElementById("languageText").innerText = "Language"
    }
    else {

        document.getElementById("BackButton").innerText = "Terug"

        document.getElementById("projectBBInfo1").innerText = "Boarding Buccaneers was gemaakt als een extra game voor een game development opdracht." +
            "                Sinds ik een heel ander project ging maken moest ik heel veel opzoeken en ook vragen aan klasgenoten of zij wisten" +
            "                hoe iets in elkaar zat. Buiten het pong spel die we hebben gemaakt" +
            "                (dit was de originele opdracht), had ik besloten om een spel te maken gebaseerd op Space invaders" +
            "                met goed-uitziende sprites."

        document.getElementById("projectBBInfo2").innerText = "Voor de sprites heb ik PaintDotNet gebruikt om kleine 16 x 16 pixel art schepen te maken." +
            "            Ik heb 2 varianten gemaakt, namelijk de Spanjaarden en de Britten (Sprites zijn onder aan het scherm te zien). Deze vijanden zullen op je schieten en je proberen te doden." +
            "            Een schot van de vijand en je bent dood. Je kunt zelf natuurlijk ook terug schieten om " +
            "            de Spaanse en Britse armada's te vernietigen." +
            "                \n" +
            "            Het spel heeft 5 levels. 2 van deze levels hebben elk hun unieke schip, namelijk de Spaanse of Britse " +
            "            schepen. Het 3rde en 4rde level zijn een mix van de 2 soorten. De eindbaas heeft 15 healthpoints" +
            "            en kan meerdere kogels tegelijk schieten."




        document.getElementById("contactText").innerText = "Contact opnemen?"

        document.getElementById("languageText").innerText = "Taal"
    }
}

function onloadBlackJack(){

    document.getElementById("container").style.backgroundColor = "#2d2d2d"

    if (!Dutch){
        document.getElementById("BackButton").innerText = "Go back"

        document.getElementById("projectBJInfo1").innerText = "This game was a way for me to show that I know how to work with blender." +
            "It was a freedom assignment for which we got 2 weeks, so I decided to make a simple game, Blackjack." +
            "With this I got to work on my blender skills as much as I got to work on my coding skills."

        document.getElementById("projectBJInfo2").innerText = "I remember this was quite a tedious project and not because of the coding but because of blender" +
            "texturing. I needed a different texture for every card to represent all cards in a deck." +
            "So i made a list with all 52 card textures on them. Then as soon as a card is drawn it will select a random" +
            "texture from the list assign it to the drawn card and then delete the texture from the list so it cant be" +
            "drawn again. "



        document.getElementById("contactText").innerText = "Contact me"

        document.getElementById("languageText").innerText = "Language"
    }
    else {

        document.getElementById("BackButton").innerText = "Terug"

        document.getElementById("projectBJInfo1").innerText = "Dit spel was een manier om te laten zien dat ik weet hoe ik met blender om kan gaan." +
            "Het was een vrije opdracht waar we 2 weken de tijd voor kregen, dus had ik besloten om een redelijk simpel" +
            "spel te maken, namelijk Blackjack." +
            "Tijdens dit project kon ik veel werken aan mijn blender en programeer vaardigheden."

        document.getElementById("projectBJInfo2").innerText = "Ik weet nog dat dit een vervelend project was, en dit kwam niet door het coderen, maar door blender." +
            "Ik had namelijk verschillende textures nodig voor elke kaart in de stapel. Dus heb ik een list gemaakt" +
            "en alle 52 textures er in gezet. Als er een kaart wordt getrokken dan krijgt deze een random texture en" +
            "wordt de texture verwijdert uit de lijst, zodat deze kaart niet nog een keer getrokken kan worden."




        document.getElementById("contactText").innerText = "Contact opnemen?"

        document.getElementById("languageText").innerText = "Taal"
    }
}

function onloadFPSshooter(){

    document.getElementById("container").style.backgroundColor = "#2d2d2d"

    if (!Dutch){
        document.getElementById("BackButton").innerText = "Go back"

        document.getElementById("projectFPSInfo1").innerText = "This project was really nothing more than a prototype or an assignment on how to do basic" +
            "game development. During this time I also figured out how to use unity assets. This is" +
            "how I made the mountain area in the backgrounds and the mushroom forest which you can see in " +
            "the images that I have provided."

        document.getElementById("projectFPSInfo2").innerText = "While working on this project we also learnt about raycasting for the first time. This was very important since I will definitly be using it in many projects to come. Although raycasting was a bit dificult at first, I quickly learnt how to use it. We also made enemies that we could shoot. I hadn't worked with blender when making this so the gun was made with just unity objects. It also didn't shoot bullets, but thats besides the point, because all that matters is that the enemies were killable. "



        document.getElementById("contactText").innerText = "Contact me"

        document.getElementById("languageText").innerText = "Language"
    }
    else {

        document.getElementById("BackButton").innerText = "Terug"

        document.getElementById("projectFPSInfo1").innerText = "Dit project was eigenlijk niet meer dan een prototype of een opdracht om de basis van game development te leren. Tijdens dit project heb ik ook geleerd hoe ik unity assets kan gebruiken. Door middel hiervan heb ik de bergen op de achtergrond kunnen maken en het bos van paddenstoelen. Deze zijn te zien in de foto's die ik in de pagina heb gezet."

        document.getElementById("projectFPSInfo2").innerText = "Tijdens dit project leerde we ook over raycasting. Dit was heel belangrijk, omdat raycasting vaak gebruik word in 3D videogames en dus zal ik dit nog vaak moeten gaan gebruiken. In het begin was raycasting nog wel lastig, maar ik had al snel door hoe ik het moest gebruiken. We hadden ook vijanden gemaakt die we konden neerschieten. Toen bezig was met dit project had ik nog niet met blender gewerkt dus het pistool was gemaakt met alleen maar unity objecten en het pistool schoot geen kogels, want dan hadden we meer met animatie moeten werken, maar dat maakt niet uit want de vijanden kon je tenminste vermoorden."




        document.getElementById("contactText").innerText = "Contact opnemen?"

        document.getElementById("languageText").innerText = "Taal"
    }
}

function onloadWebShop(){

    document.getElementById("container").style.backgroundColor = "#2d2d2d"

    document.getElementById("button").style.display = "block"

    if (!Dutch){
        document.getElementById("BackButton").innerText = "Go back"

        document.getElementById("projectWebShopInfo1").innerText = "An assignment to learn a lot more about JavaScript. We had to make a Webshop with functional" +
            "buying systems. Honestly there isn't a lot I can say about this exercise, since I don't actually want" +
            "to continue any further with web development. That's why I focused more on the development part of " +
            "this exercise, instead of the design of the website."


        document.getElementById("button").innerText = "To the WebShop"




        document.getElementById("contactText").innerText = "Contact me"

        document.getElementById("languageText").innerText = "Language"
    }
    else {

        document.getElementById("BackButton").innerText = "Terug"

        document.getElementById("projectWebShopInfo1").innerText = "Een opdracht om nog meer te weten te komen over JavaScript. We moesten een WebShop met een functioneel " +
            "koop systeem maken. Veel meer kan ik niet zeggen over deze opdracht, omdat ik niet echt verder wil met " +
            "web development. Dit is ook de reden dat ik meer focus legde op het coderen dan het ontwerp van de website."


        document.getElementById("button").innerText = "Naar de WebShop"



        document.getElementById("contactText").innerText = "Contact opnemen?"

        document.getElementById("languageText").innerText = "Taal"
    }
}



function onloadProject(){

    document.getElementById("container").style.backgroundColor = "#2d2d2d"

    if (!Dutch){
        document.getElementById("projectTitle").innerText = "The archive     -    Projects"

        document.getElementById("homeText").innerText = "Home"
        document.getElementById("aboutMeText").innerText = "About me"

        document.getElementById("contactText").innerText = "Contact me"



        document.getElementById("languageText").innerText = "Language"
    }
    else {
        document.getElementById("projectTitle").innerText = "The archive     -    Projecten"

        document.getElementById("homeText").innerText = "Start"
        document.getElementById("aboutMeText").innerText = "Wie ben ik?"

        document.getElementById("contactText").innerText = "Contact opnemen?"

        document.getElementById("languageText").innerText = "Taal"
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

function webShop(){
    window.location.href = "../projectsPage/webShop/webShop.html"
}


function openWebshopPage(){
    window.open("LevisDrip.github.io/WebShopDirectory/WebShopindex.html")
}


function changeDutch(){
    document.cookie = "English";
    localStorage.setItem("penis", "English")
    window.location.reload();
}

function changeEnglish(){
    document.cookie = "Dutch"
    localStorage.setItem("penis", "FISH")
    window.location.reload();
}


