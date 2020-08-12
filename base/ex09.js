var gap =16;
function printTableColors(idDiv, b) {
    cleanTableColor(idDiv);

    var divColorPick = document.getElementById(idDiv, b);
    var tableColor = divColorPick.appendChild(document.createElement("table"));

    for(var i = 0; i < (256/gap); i++) {
        var tr = tableColor.appendChild(document.createElement("tr"));
        
        for(var j = 0; j < (256/gap); j++) {
            var td = tr.appendChild(document.createElement("td"));
            td.setAttribute("style", `width:16px; height:16px; background-color:rgb(${i*gap}, ${j*gap}, ${b});` );
        }    
    }
}
function cleanTableColor(idDiv) {
    var div = document.getElementById(idDiv);
    // div.textContent = ''; // ????? luc - pourquoi ne pas utiliser ceci ou innerHTML=''
    while (div.firstChild) div.removeChild(div.firstChild);
}

function afficher(colorSlideDiv, colorPickDiv) {
    printTableColors(colorPickDiv, 0);  

    var divSlide = document.getElementById('colorSlide');
    var tableSlide = divSlide.appendChild(document.createElement("table"));
    var tr = tableSlide.appendChild(document.createElement("tr"));

    for (var i = 0 ; i < (256/ gap) ; i++) {
        var td = tr.appendChild(document.createElement("td"));
        var nuanceBleu = (15 - i)*gap;
        var bgColor = `background-color:rgb(${nuanceBleu},${nuanceBleu},255)`;
        td.setAttribute("style", `width:16px; height:16px; ${bgColor}; `);

        // ajout de l'event onClick sur la cellule
        td.onclick = function(bleu) { 
            return function() { 
                printTableColors(colorPickDiv, bleu) 
            }; 
        }(nuanceBleu);

        //td.onclick = printTableColors(colorPickDiv, nuanceBleu); 
            
        
    }

}