let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici

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
const totalHeritage = 60000000 + 40000000 + 20000000;

// Première catégorie (75%)
const partPremiereCategorie = totalHeritage * 0.75;
const partParEnfant = partPremiereCategorie / 3;

var paul = partParEnfant;
var marie = partParEnfant;
var eric = partParEnfant / 2;
var clair = partParEnfant / 2;

// Deuxième catégorie (25%)
const partDeuxiemeCategorie = totalHeritage * 0.25;
const partParPersonne = partDeuxiemeCategorie / 3;

var madameMukuna = partParPersonne;
var joseph = partParPersonne;
var sarah = partParPersonne;
