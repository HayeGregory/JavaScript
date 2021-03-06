function printTableColors(idDiv, b) {
    var divColorPick = document.getElementById(idDiv, b);
    var tableColor = divColorPick.appendChild(document.createElement("table"));
    var gap = 16;

    for(var i = 0; i < (256/gap); i++) {
        var tr = tableColor.appendChild(document.createElement("tr"));
        
        for(var j = 0; j < (256/gap); j++) {
            var td = tr.appendChild(document.createElement("td"));
            td.setAttribute("style", `width:16px; height:16px; background-color:rgb(${i*gap}, ${j*gap}, ${b});` );
        }    
    }
}

