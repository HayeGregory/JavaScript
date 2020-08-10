nom = "Haye"
prenom = "Gregory"
dateToday = new Date()
var strDate =   dateToday.getDate() + "-" + 
                dateToday.getMonth() + "-" +
                dateToday.getFullYear();

function afficherDocumentWrite() {
    document.writeln("Bonjour " + nom + " " + prenom + " </p>")
    document.write("Nous sommes le "+ strDate + " (by docWrite)")
}

function afficherInnerHTML() {
    var divWelcome = document.getElementById("today")
    
    divWelcome.innerHTML = "Nous sommes le " + strDate + " (by innerHTML)"
}

function afficherAppend() {
    var divContent = document.getElementById("content")
    var pContent = document.createElement("p");
    var nodePContent = document.createTextNode("Nous sommes le " + strDate + " (by appendChild)")
    
    pContent.appendChild(nodePContent)
    divContent.appendChild(pContent)
}
