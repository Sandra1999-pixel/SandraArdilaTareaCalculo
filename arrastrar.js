$("#contenedor-exito").hide();

function permitirSoltar(ev) {
    ev.preventDefault();
    //document.getElementById("caja2").classList.add("detectar")
}

function arrastrar(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function soltar(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function comprobar() {

    var i1 = document.querySelector("#imagen1").parentElement.id;
    var i2 = document.querySelector("#imagen2").parentElement.id;
    var i3 = document.querySelector("#imagen3").parentElement.id;
    var i4 = document.querySelector("#imagen4").parentElement.id;
    var i5 = document.querySelector("#imagen5").parentElement.id;
    var i6 = document.querySelector("#imagen6").parentElement.id;
    var i7 = document.querySelector("#imagen7").parentElement.id;
    var i8 = document.querySelector("#imagen8").parentElement.id;
    var i9 = document.querySelector("#imagen9").parentElement.id;
    var i10 = document.querySelector("#imagen10").parentElement.id;
    var i11 = document.querySelector("#imagen11").parentElement.id;
    var i12 = document.querySelector("#imagen12").parentElement.id;
    var i13 = document.querySelector("#imagen13").parentElement.id;
    var i14 = document.querySelector("#imagen14").parentElement.id;
    var i15 = document.querySelector("#imagen15").parentElement.id;
    var i16 = document.querySelector("#imagen16").parentElement.id;
    var i17 = document.querySelector("#imagen17").parentElement.id;

    if (i1 == "c5" && i2 == "c4" && i3 == "c1" && i4 == "c7" && i5 == "c2" && i6 == "c3" && i7 == "c8" && i8 == "c6" && i9 == "c11" && i10 == "c13" && i11 == "c10" && i12 == "c14" && i13 == "c9" && i14 == "c12" && i15 == "c16" && i16 == "c17" && i17 == "c15") {
        //alert("Ejercicio completado con éxito");
        $("#contenedor-exito").show();
    } else {

        alert("Algún o algunos campos son incorrectos");
    }
}