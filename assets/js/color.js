let colors = ["red", "green", "blue", "yellow", "orange", "purple"];
let changeColor = document.getElementById("change");
let count = 0;
document.body.style.backgroundColor = colors[count];

changeColor.onclick = function() {
    count++;
    if( count > colors.length - 1) {
        count = 0;
    }
    document.body.style.backgroundColor = colors[count];
}