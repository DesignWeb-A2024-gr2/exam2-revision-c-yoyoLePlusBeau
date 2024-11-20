const PATTERN_NUMERO_IDENTIFICATION = /^([A-Za-z]{3}-\d{4})$/;
const nom = document.getElementById("nom_biere");
const identification = document.getElementById("identification_biere");
const saveur = document.getElementsByClassName("saveur_houblon"); 
const input = document.getElementById("couleur");
const couleur = document.getElementById("couleur_nom");

input.addEventListener("input", CouleurBiere);

const COULEURS_BIERE = [
    "Paille",
    "Blonde",
    "Rousse",
    "Cuivrée",
    "Brune",
    "Noire"
];

function Validation() {
    if (nom.value != "" && PATTERN_NUMERO_IDENTIFICATION.test(identification.value) && (saveur[0].checked || saveur[1].checked ||saveur[2].checked ||saveur[3].checked)) {
        return true;
    }
    return false;
}

function CouleurBiere() {
    couleur.innerText = COULEURS_BIERE[input.value];
}