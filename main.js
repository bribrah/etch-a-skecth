let grid = document.querySelector("#gridSystem");
let blockArea=  35/16;
for (i = 0;  i<=16; i++){
    for (y = 0; y<=16; y++){
        let gridBlock = document.createElement("div");
        gridBlock.classList.add("gridBlock");
        grid.appendChild(gridBlock);
        
    }
}