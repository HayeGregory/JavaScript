function printTableColors() {
    var divColorPick = document.getElementById("colorPick");
    var tableColor = divColorPick.appendChild(document.createElement("table"));
    var gap = 16;

    divColorPick.appendChild(tableColor);
    for(var i = 0; i < (256/gap); i++) {
        var tr = tableColor.appendChild(document.createElement("tr"));
        
        for(var j = 0; j < (256/gap); j++) {
            var td = tr.appendChild(document.createElement("td"));
            td.setAttribute("style", `width:16px; height:16px; background-color:rgb(${i*gap}, ${j*gap}, 0);` );
        }    
    }
}

