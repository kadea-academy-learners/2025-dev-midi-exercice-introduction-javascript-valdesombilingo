let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici
let prisMaison=60_000_000;
let terraisEstime = 40_000_000;
let liquite =20_000_000;
let totalHeritage=prisMaison + terraisEstime + liquite;

let premiereCatgorie = totalHeritage*0.75;
let partChaqueEnfant=premiereCatgorie/3;
let ericEtClair =partChaqueEnfant/2;
let deuxiemeCategorie= totalHeritage *0.25;
let partConjointe = deuxiemeCategorie /3 ;

paul = partChaqueEnfant,
marie= partChaqueEnfant,
eric =ericEtClair,
clair = ericEtClair,
madameMukuna = partConjointe,
joseph = partConjointe,
sarah = partConjointe;




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
