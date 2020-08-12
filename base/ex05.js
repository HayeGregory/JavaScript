function afficherMessageAccueil() {
    const days = [ "dimanche","lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi" ];
    const months = [ "janvier", "février", "mars", "avril", "mai", "juin", 
                     "juillet", "août", "septembre", "octobre", "novembre", "décembre" ];
    var msgDiv = document.getElementById("msg");
    var now = new Date();
    var day = now.getDay(); // 0-6 start sunday
    var JJ = now.getDate();
    var month = now.getMonth(); // 0-11
    var YYYY = now.getFullYear();
    var message = ``;

    message = `Nous sommes le ${days[day]} ${JJ} ${months[month]} ${YYYY}`; // console.log(message);
    var spanMessage = document.createElement("span").appendChild(document.createTextNode(message));
    
    msgDiv.appendChild(spanMessage);

}