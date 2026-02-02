// function mostraPrezzo() {

//const km = parseFloat(document.getElementById("km").value);
//const eta = parseInt(document.getElementById("eta").value);
const km = 100;
const eta = 10;

let prezzo = km * 0.21;

if ( eta < 18 ) {

    prezzo = prezzo - ( prezzo * 0.20 );

}

else if ( eta > 65 ) {

    prezzo = prezzo - (prezzo * 0.40 ); 

}
 else {

    console.log("Prezzo finale:", prezzo, "€");

 }

 console.log("Prezzo: €" + prezzo.toFixed(2));

 //document.getElementById("prezzo").innerText = "Prezzo: € " + prezzo.toFixed(2); // toFixed limita il numero dei decimali

//}