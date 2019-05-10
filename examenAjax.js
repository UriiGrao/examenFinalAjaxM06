function generaEdatAjax() {
    this.generaEdat(function (data) {
        var input = document.getElementById("edatForm");
        input.value = data.edat;
    });
}
function generaEdat(fn) {
    var url = "http://localhost/examenFinalPr06/examen.php?op=genera_edat";
    fetch(url).then(function (resp) { return resp.json(); }).then(function (resp) {
        fn(resp);
    });
}
function generaNomAjax() {
    this.generaNom(function (data) {
        var input = document.getElementById("nomForm");
        input.value = data.nom;
    });
}
function generaNom(fn) {
    var url = "http://localhost/examenFinalPr06/examen.php?op=genera_nom";
    fetch(url).then(function (resp) { return resp.json(); }).then(function (resp) {
        fn(resp);
    });
}
function updateAjaxNom() {
    var div = document.getElementById("nomForm");
    var nom = div.value;
    var url = "http://localhost/examenFinalPr06/examen.php?nom=" + nom;
    fetch(url).then(function (resp) { return resp.json(); }).then(function (resp) {
        var secion = document.getElementById("mostraResultats");
        secion.innerHTML = "pos: " + resp.pos + "<br>";
        secion.innerHTML += "nom: " + resp.nom + "<br>";
        secion.innerHTML += "edat: " + resp.edat + "<br>";
        secion.innerHTML += "pas: " + resp.pas + "<br>";
    });
}
function setPosAjaxNom() {
    var div = document.getElementById("nomForm");
    var nom = div.value;
    var url = "http://localhost/examenFinalPr06/examen.php?op=guarda_nom&nom=" + nom;
    fetch(url).then(function (resp) { return resp.json(); }).then(function (resp) {
        var secion = document.getElementById("mostraResultats");
        secion.innerHTML = "<ul>";
        for (var valor in resp.valores) {
            secion.innerHTML += "<li>" + resp.valores[valor] + "</li>";
        }
        secion.innerHTML += "</ul>";
    });
}
