// SET UP
var num = 6; // game mode, default to 6

var colors; // array: hold random colors
var squares = document.querySelectorAll(".square"); // select all of the squares
var pickedColor; // targeted color to find
var colorDisp = document.getElementById("colorDisp"); // target color to display
var msgD = document.querySelector("#msg"); // result msg display
var h1b = document.querySelector("h1"); // h1 tag

var res = document.querySelector("#reset"); // res for reset button
res.addEventListener("click", reset); // listener for reset button

var modeBTN = document.getElementsByClassName("mode"); // mode changing tags
modeBTNListener();
reset();

// display the colors and apply the corresponding rules
for( var i = 0; i < squares.length; i++ ){
    // add click listeners to squares
    squares[i].addEventListener("click", squareActions);
}

function squareActions(){
    var clickedColor = this.style.backgroundColor;
    if( clickedColor === pickedColor ){
        msgD.textContent = "Correct!";
        changeColor(clickedColor);
        res.textContent = "Play Again?";
    }
    else {
        this.style.backgroundColor = "#232323";
        msgD.textContent = "Try Again";
    }
}

function modeBTNListener(){
    // listener for mode change button
    for( var i = 0; i < modeBTN.length; ++i ){
        modeBTN[i].addEventListener("click", function(){
            modeBTN[0].classList.remove("selected");
            modeBTN[1].classList.remove("selected");
            this.classList.add("selected");
            num = (this.textContent === "EASY" ? 3: 6);
            reset();
        });
    }
}

function changeColor(color) {
    // change each color to match given color;
    for( var i = 0; i < colors.length; ++i){
        squares[i].style.backgroundColor = color;
    }
    h1b.style.backgroundColor = color;
}

function pickColor() {
    var cor = Math.floor(Math.random()*colors.length);
    return colors[cor];
}

function generateRandomeColors(num){
    // make a array
    var arr = [];
    // add num random colors to array
    for( var i = 0; i < num; ++i ){
        // get random color
        arr.push(randomColor());
    }
    // return it
    return arr;
}

function randomColor(){
    // pick a red
    var r = Math.floor(Math.random() * 256);
    // pick a green
    var g = Math.floor(Math.random() * 256);
    // pick a blue
    var b = Math.floor(Math.random() * 256);

    return "rgb("+ r + ", " + g + ", " + b + ")";
}

function reset(){
    h1b.style.backgroundColor = "steelblue";
    colors = generateRandomeColors(num);
    res.textContent = "New Colors";
    msgD.textContent = "";
    pickedColor = pickColor();
    colorDisp.textContent = pickedColor;
    for( var i = 0; i < squares.length; ++i){
        squares[i].style.backgroundColor = colors[i];
    }
    // if mode is easy, hide the bottom 3 squares by erasing its color
    if( num == 3 ){
        squares[3].style.backgroundColor = "#232323";
        squares[4].style.backgroundColor = "#232323";
        squares[5].style.backgroundColor = "#232323";
    }
}
