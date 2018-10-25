//function to create random color value;
let rainbow = false;
let etch = false;
randomColor = function(){
    Math.floor(Math.random()*256);
};

function colorChange(){
    if (rainbow === true){
        this.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},
                ${Math.floor(Math.random()*256)},
                ${Math.floor(Math.random()*256)})`;
    }
    else if (etch === true){

        this.style.backgroundColor = "black"; 
        if (this.classList.contains("etch1") === true){
            this.classList.replace("etch1","etch2");
            console.log("test");
            
        }
        else if (this.classList.contains("etch2") === true){
            this.classList.replace("etch2","etch3");
    }
    else if (this.classList.contains("etch3" )=== true){
        this.classList.replace("etch3","etch4");
        }
        else if (this.classList.contains("etch4") === true){
            this.classList.replace("etch4","etch5");
        }
        else if (this.classList.contains("etch5") === true){
            return;
        }
        else{
            this.classList.add('etch1')
        }
    }

    else{
        this.style.backgroundColor = 'blue';
    }
}




// Create the  grid
let gridBlocksPerSide = 16
let grid = document.querySelector("#gridSystem");
let gridBlocks;
function generateBlockGrid(){
    let blockArea = (grid.clientWidth /gridBlocksPerSide );
    for (i = 0;  i<(gridBlocksPerSide * gridBlocksPerSide); i++){
        let gridBlock = document.createElement("div");
        gridBlock.classList.add("gridBlock");
        gridBlock.style.width = `${blockArea}px`;
        gridBlock.style.height = `${blockArea}px`;
        grid.appendChild(gridBlock);
    }

            //Change block color upon mouse entering a block
        gridBlocks = document.querySelectorAll(".gridBlock");
        gridBlocks.forEach((block) => {
            block.addEventListener('mouseenter',colorChange)
                });
        }
generateBlockGrid();
//get reset button to clear the color from the grid
let resetButton = document.querySelector("#reset");
function resetGrid(){
    gridBlocks.forEach((block) => block.style.backgroundColor = "white"); 
    gridBlocksPerSide = parseInt(prompt("How many blocks would you like per side? Please choose no more than 64!"));
    while (gridBlocksPerSide > 64){
        gridBlocksPerSide = parseInt(prompt("I said no more than 64!"));
    }
    grid.innerHTML = " "; 
    generateBlockGrid();
    
}
//rainbow button function
let rainbowButton = document.querySelector("#rainbow");

function rainbowButtonClick(){
    if (etch === true){
        etchButton.click();
    }
    rainbow = !rainbow;
    this.classList.toggle("enabled");
}
function etchButtonClick(){
    if (rainbow === true){
        rainbowButton.click()
    }
    etch = !etch;
    this.classList.toggle("enabled");
}

rainbowButton.addEventListener('click', rainbowButtonClick);

let etchButton = document.querySelector("#etch");
etchButton.addEventListener("click", etchButtonClick)
resetButton.addEventListener('click', resetGrid);