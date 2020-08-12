function afficheHeure() {
    var divHorloge = document.getElementById("horloge")
    var now = new Date();
    var colorSeparator = (now.getSeconds() % 2) === 0 ? "aaaaaa;" : "dddddd;"
    var separator = document.createElement("span");
    separator.setAttribute("style", "color:#" + colorSeparator);
    separator.appendChild(document.createTextNode(" : "));
    var spanHours = document.createElement("span").appendChild(document.createTextNode(now.getHours()))
    var spanMinutes = document.createElement("span").appendChild(document.createTextNode(now.getMinutes()))
    var spanSeconds = document.createElement("span").appendChild(document.createTextNode(now.getSeconds()))


    divHorloge.appendChild(spanHours);
    divHorloge.appendChild(separator);
    divHorloge.appendChild(spanMinutes);
    divHorloge.appendChild(separator.cloneNode(true));
    divHorloge.appendChild(spanSeconds);


    console.log(separator.textContent);
    console.log(`il est  : ${now}`)
}