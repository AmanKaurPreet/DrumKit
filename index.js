// detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnnimation(buttonInnerHTML);
    });
}

// detecting key press

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
    }

}


function buttonAnnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");
} , 100);
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
// console.log(this.style.color = "white");or
// this.style.color = "white";