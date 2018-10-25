
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
            block.addEventListener('mouseenter', (e) => {
                block.style.backgroundColor = "blue";
                });
            });
        }
generateBlockGrid();
//get reset button to clear the color from the grid
let resetButton = document.querySelector("#reset");
function resetGrid(){
    gridBlocks.forEach((block) => block.style.backgroundColor = "white"); 
    gridBlocksPerSide = parseInt(prompt("How many blocks would you like per side?"));
    grid.innerHTML = " "; 
    generateBlockGrid();
    
}
resetButton.addEventListener('click', resetGrid);