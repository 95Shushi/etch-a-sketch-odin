let containerDiv = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.classList.add("inside-div");
    div.setAttribute("style", "width: 40px; height: 40px");
    containerDiv.appendChild(div);
}

function changeColor() {
    this.style.backgroundColor = "orange";
}

let grid = document.querySelectorAll(".inside-div");
grid.forEach((square) => {
    square.addEventListener("mouseover", changeColor);
});

function changeGrid() {
    while (containerDiv.hasChildNodes()) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    let gridNumber = prompt("Select a grid size n x n")
    if (gridNumber < 1 || gridNumber > 100 || isNaN(gridNumber)) {
        alert("Please type a valid number")
    } else {
        let squareNumber = gridNumber * gridNumber;
        let squareSize = ((672/gridNumber) - 2);
        for (let i = 1; i <= squareNumber; i++) {
            let div = document.createElement("div");
            div.classList.add("inside-div");
            div.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px`);
            containerDiv.appendChild(div);
        };
        let grid = document.querySelectorAll(".inside-div");
        grid.forEach((square) => {
        square.addEventListener("mouseover", changeColor);
});
    }
}

let button = document.querySelector("#change-grid")
button.addEventListener("click", changeGrid)