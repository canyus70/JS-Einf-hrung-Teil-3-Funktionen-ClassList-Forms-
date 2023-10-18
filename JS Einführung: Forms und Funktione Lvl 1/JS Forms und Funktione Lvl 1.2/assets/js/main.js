function altersBerechnung(){
    const geburtsJahr = document.getElementById("geburtsJahr").value
    const jetzigesJahr = new Date().getFullYear();
    const alter = jetzigesJahr - geburtsJahr
    document.getElementById("ergebnis").innerHTML = "Dein Alter beträgt " + alter + " Jahre."
}