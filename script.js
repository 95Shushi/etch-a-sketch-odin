let containerDiv = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.classList.add("inside-div");
    containerDiv.appendChild(div);
}

function changeColor() {
    this.style.backgroundColor = "orange";
}

let grid = document.querySelectorAll(".inside-div");
grid.forEach((square) => {
    square.addEventListener("mouseover", changeColor);
});