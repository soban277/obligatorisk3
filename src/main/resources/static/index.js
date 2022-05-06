let arrayBillett = [];

$(function(){
    hentAlle();
});

function hentAlle(){
    $.get("/henteBilletter", function(Billett){
        utskrift(Billett);
    });
}

function hentAlle(){
    $.get("/henteBilletter", function(data){
        utskrift(data);
    });
}

function kjopBillett() {
    let velgFilm = document.getElementById("vFilmer").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn= document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    const billetten = {
        film: velgFilm,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost};

    if(billetten.antall === ""){
        document.getElementById("feilAntall").innerHTML ="Må skrive noe inn i antall!";
    }else{
        document.getElementById("feilAntall").innerHTML ="";
    }

    if(billetten.fornavn === ""){
        document.getElementById("feilFornavn").innerHTML ="Må skrive noe inn i fornavn!";
    }else{
        document.getElementById("feilFornavn").innerHTML ="";
    }

    if(billetten.etternavn === ""){
        document.getElementById("feilEtternavn").innerHTML ="Må skrive noe inn i etternavn!";
    }else{
        document.getElementById("feilEtternavn").innerHTML ="";}

    if(billetten.telefonnr === ""){
        document.getElementById("feilTelefonnr").innerHTML ="Må skrive noe inn i telefonnr!";}
    else{
        document.getElementById("feilTelefonnr").innerHTML ="";}

    if(billetten.epost === ""){
        document.getElementById("feilEpost").innerHTML ="Må skrive noe inn i epostadresse!";
    }else{
        document.getElementById("feilEpost").innerHTML ="";
    }
    document.getElementById("vFilmer").value ="";
    document.getElementById("antall").value="";
    document.getElementById("fornavn").value ="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefonnr").value ="";
    document.getElementById("epost").value="";

    arrayBillett.push(billetten);
    utskrift();
}
function utskrift(){
    let ut ="<table class='table table-hover'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" +
        "<th>Telefonnummer</th><th>E-post</th></tr>";
    for (let i = 0; i < arrayBillett.length; i++){
        ut += "<tr><td>"+arrayBillett[i].film + "</td><td>" + arrayBillett[i].antall + "</td><td>" + arrayBillett[i].fornavn + "</td>" +
            "<td>" +arrayBillett[i].etternavn + "</td><td>" + arrayBillett[i].telefonnr + "</td><td>" + arrayBillett[i].epost + "</td></tr>";

    }
    ut +="</table>";
    document.getElementById("Billett").innerHTML = ut;
}





function slettBillett() {
    arrayBillett =[];
    utskrift();
}
