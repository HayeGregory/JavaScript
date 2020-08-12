var factures = [
    [ "Jean Laplace",  "12/12/2015", [ [ "Lampe à huile", 1, 21, 52.5 ], [ "Huile 1L", 10, 21, 2.5 ] ] ],
    [ "Pierre Dupont", "13/12/2015", [ [ "Vélo pour dame", 1, 21, 443.99 ] ] ],
    [ "Amélie Donna",  "13/12/2015", [ [ "Vélo pour dame", 1, 21, 443.99 ], [ "Huile 1L", 5, 21, 2.5 ], [ "Agrafeuse", 1, 6, 10.8 ], [ "Agrafes boite de 1000", 4, 6, 5.99 ] ] ],
    [ "Paul Delville", "15/12/2015", [ [ "Agrafes boite de 1000", 10, 6, 5.99 ] ] ]
    ];

var client, dateCmd, produit, qqt, tauxTva, htva, prix, tva, tvac;
var total_HTVA = total_TVA = total_TVAC = 0;

function printFactures() {
    var table = document.getElementById("factures");

    for (var i = 0; i < factures.length; i++) {
        // data & calcul 
        client = factures[i][0];
        dateCmd = factures[i][1];
        total_HTVA = total_TVA = total_TVAC = 0

        // dom
        // info client - date commande
        var tr = table.appendChild(document.createElement("tr"));
        tr.setAttribute("class", "title");
        var td = tr.appendChild(document.createElement("td"));
        td.setAttribute("colspan", "6");
        td.appendChild(document.createTextNode(`Client : ${client} - Date de la commande : ${dateCmd}`))

        // info titre colonne produit
        var tr = table.appendChild(document.createElement("tr"));
        tr.setAttribute("class", "subtitle");
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("Produit"));
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("qqt"));
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("HTVA"));
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("Taux TVA"));
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("TVA"));
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("Total TVAC"));

        // info produits
        for( var j = 0; j < factures[i][2].length; j++ ) {
            // data & cacul
            produit = factures[i][2][j][0];
            qqt = factures[i][2][j][1];
            tauxTva = factures[i][2][j][2];
            prix = factures[i][2][j][3];
            // -
            htva = Math.round(prix * qqt * 100) / 100;
            tva = Math.round( (htva*tauxTva/100) * 100 ) / 100;
            tvac = Math.round( (htva + tva) * 100) / 100;
            total_HTVA += htva;
            total_TVA += tva;
            total_TVAC += tvac;

            // dom
            var tr = table.appendChild(document.createElement("tr"));
            tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(produit));
            tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(qqt));
            tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(htva));
            tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(tauxTva));
            tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(tva));
            tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(tvac));
            
            // console.log(`produit: ${produit} qqt: ${qqt} tva: ${tauxTva} htva:${htva}` );
        }
        var tr = table.appendChild(document.createElement("tr"));
        tr.setAttribute("class", "subtitle");
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("Total :"));
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(""));
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(total_HTVA));
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(""));
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(total_TVA));
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(total_TVAC));

        // ligne separatrice
        var tr = table.appendChild(document.createElement("tr"));
        tr.setAttribute("class", "empty");
        tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(""));


    }
}