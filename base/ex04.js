function afficherMessageAccueil() {
    var msgDiv = document.getElementById("msg");
    var now = new Date();
    var HH = now.getHours(); //  HH += 12;
    var MM = now.getMinutes();
    var salutation = ``;
    var message = ``;
    
    if (HH >= 22) {
        salutation = "Bonne nuit"
    } else if (HH >= 18) {
        salutation = "Bonne soiree"
    } else if (HH >= 13) {
        salutation = "Bonne aprem"
    } else if (HH >= 6) {
        salutation = "Bonjour"
    } else {
        salutation = "Bonne nuit (apres minuit)"
    }
    
    message = `${salutation}, il est ${HH}:${MM} !`; // console.log(message);
    var spanMessage = document.createElement("span").appendChild(document.createTextNode(message));
    
    msgDiv.appendChild(spanMessage);

}


