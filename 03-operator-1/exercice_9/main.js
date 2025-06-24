let paul, marie, eric, clair, madameMukuna, joseph, sarah;
let maison = 60000000;
let terrains = 40000000;
let liquidités = 20000000; 
let heritage = maison + terrains + liquidités;
// let trentepourcent = heritage*25/100;
let douzepointcinqpourcent = vingtcinqpourcentpourcent/2
let vingtcinqpourcent = heritage*25/100;
paul = vingtcinqpourcentpourcent;
marie = vingtcinqpourcentpourcent;
madameMukuna = vingtcinqpourcent/3;
joseph = vingtcinqpourcent/3;
sarah = vingtcinqpourcent/3

//le 75% de l'heritage est 90,000,000 CDF
//les enfants ont à chacun 30,000,000 CDF
eric = douzepointcinqpourcent;
clair = douzepointcinqpourcent;
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
