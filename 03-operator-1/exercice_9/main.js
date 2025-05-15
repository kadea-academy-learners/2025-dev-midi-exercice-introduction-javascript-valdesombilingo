let paul, marie, eric, clair, madameMukuna, joseph, sarah;


let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;
let totalHeritage = maison + terrains + liquidites;

// DEUX Groupes
let partEnfants = totalHeritage * 0.75;
let partAutres = totalHeritage * 0.25;

// Enfants
let partParEnfant = partEnfants / 3;
paul = partParEnfant;
marie = partParEnfant;

//Les autres 
eric = partParEnfant / 2;
clair = partParEnfant / 2;


let partParAutre = partAutres / 3;
madameMukuna = partParAutre;
joseph = partParAutre;
sarah = partParAutre;

// Affichage
console.log("Paul :", paul, "CDF");
console.log("Marie :", marie, "CDF");
console.log("Éric :", eric, "CDF");
console.log("Claire :", clair, "CDF");
console.log("Madame MUKUNA :", madameMukuna, "CDF");
console.log("Joseph :", joseph, "CDF");
console.log("Sarah :", sarah, "CDF");

// Ne pas modifier le code ci-dessous
module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};
