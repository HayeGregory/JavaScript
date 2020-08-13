function afficher() {
    var maGrille = new Grid(6,7);
    maGrille.afficher();
}

/*
  Grille
*/
function Grid(x, y) {
    this.x = x;
    this.y = y;
    this.cases = [];

    for (let i = 0;i < x*y; i++) {
        this.cases[i] = new Case(i+1,this);
    }
} 

Grid.prototype.afficher = function() {

    this.divGrid = document.getElementById("grille");
    this.table = this.divGrid.appendChild(document.createElement("table"));
    for (var i = 0; i < this.x * this.y; i++) {
        if(i % this.x === 0)
            var tr = this.table.appendChild(document.createElement("tr"));
        this.cases[i].afficher(tr);
    }

}

Grid.prototype.checkTirage = function () {
    for (var i = 0, n = 0; i < this.x * this.y; i++ ) {
        if (this.cases[i].checked) n++;
        if (n===6) return true;
    }
    return false;
}

Grid.prototype.effacerTirage = function() {
    var div = document.getElementById("message");
    div.innerHTML = '';
}

Grid.prototype.afficherTirage = function () {
    this.effacerTirage();
    var div = document.getElementById("message");
    var tmp = '';
    for (var i = 0, n = 0; i < this.x * this.y; i++ ) {
        if (this.cases[i].checked) 
            tmp += this.cases[i].numero + ' ';
    }
    div.appendChild(document.createTextNode(`tirage : ${tmp}`));
    console.log(`tirage : ${tmp}` );
}
/*
  Case - numero
*/
function Case (numero, g) {
    this.numero = numero;
    this.checked = false;
    this.grille = g;
}

Case.prototype.afficher = function (tr) {

    this.td = tr.appendChild(document.createElement("td"));
    this.td.setAttribute("style","width:32px;height:32px;border:1px solid red;font-size:20px;color:#dddddd;font-weight:bold;font-family:verdana;text-align:center;");
    this.td.appendChild(document.createTextNode(this.numero));
    this.td.onclick = function(c) {
        return function() { c.cocher(); } // fonction exposée
    } (this);
}

Case.prototype.cocher = function () {
    if (!this.checked && this.grille.checkTirage()) return;
    this.checked = !this.checked;
    this.td.style.color = (this.checked)?"#000000":"#dddddd";
    if (this.grille.checkTirage()) {
        this.grille.afficherTirage();
        console.log("6 numeros tirés");
    } else {
        this.grille.effacerTirage();
        console.log("selection en cours...");
    }
}