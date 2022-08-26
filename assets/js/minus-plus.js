let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

plus.onclick = function() {
    let count = document.getElementById("count");
    count.innerHTML = parseInt(count.innerHTML) + 1;
};

minus.onclick = function() {
    let count = document.getElementById("count");
    count.innerHTML = parseInt(count.innerHTML) - 1;
}
