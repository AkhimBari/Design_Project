let input = document.getElementById("email");
let ghost = document.getElementById("hidden");
let sicht = document.getElementById("js");

function mail() {
    ghost.style.display = "none";
    sicht.style.display = "block";
    console.log(input.value)
    
}

