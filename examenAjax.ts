
function generaEdatAjax() {
    this.generaEdat((data) => {
        let input = <HTMLInputElement>document.getElementById("edatForm");
        input.value = data.edat
    })
}

function generaEdat(fn: Function) {
    const url = "http://localhost/examenFinalPr06/examen.php?op=genera_edat"
    fetch(url).then(resp => resp.json()).then(resp => {
        fn(resp);
    });
}

function generaNomAjax() {
    this.generaNom((data) => {
        let input = <HTMLInputElement>document.getElementById("nomForm");
        input.value = data.nom
    })
}

function generaNom(fn: Function) {
    const url = "http://localhost/examenFinalPr06/examen.php?op=genera_nom"
    fetch(url).then(resp => resp.json()).then(resp => {
        fn(resp);
    });
}


function updateAjaxNom() {
    let div = <HTMLInputElement>document.getElementById("nomForm")
    let nom = div.value;

    const url = "http://localhost/examenFinalPr06/examen.php?nom=" + nom;
    fetch(url).then(resp => resp.json()).then(resp => {
        let secion = document.getElementById("mostraResultats");
        secion.innerHTML = "pos: " + resp.pos + "<br>"
        secion.innerHTML += "nom: " + resp.nom + "<br>"
        secion.innerHTML += "edat: " + resp.edat + "<br>"
        secion.innerHTML += "pas: " + resp.pas + "<br>"

    });

}

function setPosAjaxNom() {
    let div = <HTMLInputElement>document.getElementById("nomForm")
    let nom = div.value;
    const url = "http://localhost/examenFinalPr06/examen.php?op=guarda_nom&nom=" + nom;
    fetch(url).then(resp => resp.json()).then(resp => {
        let secion = document.getElementById("mostraResultats");
        secion.innerHTML = "<ul>";
        for (let valor in resp.valores) {
            secion.innerHTML += "<li>" + resp.valores[valor] + "</li>"
        }
        secion.innerHTML += "</ul>";

    });

}