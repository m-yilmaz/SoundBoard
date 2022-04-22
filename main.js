// play buttons
var buttons = document.getElementsByTagName("button");
var booBtn = document.getElementById("booSound");
var applauseBtn = document.getElementById("applauseSound");
var gaspBtn = document.getElementById("gaspSound");
var tadaBtn = document.getElementById("tadaSound");
var victoryBtn = document.getElementById("victorySound");
var wrongBtn = document.getElementById("wrongSound");

// sound
var sound = document.getElementById("sound");
// image
var image = document.getElementById("image");

window.addEventListener('DOMContentLoaded',function () {
    image.style.display = "block";
    for(var iterateor of buttons){
        iterateor.style.display = "block";
    }
});

booBtn.onclick = function(){
    document.body.style.backgroundColor = "tomato";
    sound.src = ".\\sounds\\boo.mp3";
    image.src = ".\\images\\booing.gif";
    sound.play();
}
applauseBtn.onclick = function() {
    document.body.style.backgroundColor = "coral";
    sound.src = ".\\sounds\\applause.mp3";
    image.src = ".\\images\\applause.gif";
    sound.play();
}
gaspBtn.onclick = function() {
    document.body.style.backgroundColor = "brown";
    sound.src = ".\\sounds\\gasp.mp3";
    image.src = ".\\images\\gasping.gif";
    sound.play();
}

tadaBtn.onclick = function(){
    sound.src = ".\\sounds\\tada.mp3";
    image.src = ".\\images\\tada.gif";
    document.body.style.backgroundColor = "MediumAquaMarine";
    sound.play();
}

victoryBtn.onclick = function(){
    sound.src = ".\\sounds\\victory.mp3";
    image.src = ".\\images\\victory.gif";
    document.body.style.backgroundColor = "Tan";
    sound.play();
}

wrongBtn.onclick = function(){
    sound.src = ".\\sounds\\wrong.mp3";
    image.src = ".\\images\\wrong.gif";
    document.body.style.backgroundColor = "black";
    sound.play();
}

sound.onended = function(){
    image.src = ".\\speaker.png";
    document.body.style.backgroundColor = "#a164df";
}