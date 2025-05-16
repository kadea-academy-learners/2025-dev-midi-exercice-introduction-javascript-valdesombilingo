let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici
let maison = 60_000_000,
  terrains = 40_000_000,
  liquidites = 20_000_000,
  totalPatrimoine = maison + terrains + liquidites,
  partCategorie1 = totalPatrimoine * 0.75,
  partCategorie2 = totalPatrimoine * 0.25,
  partEnfant = partCategorie1 / 3,
  partEnfantAlain = partEnfant / 2,
  partConjointOuFrere = partCategorie2 / 3;

(paul = partEnfant),
  (marie = partEnfant),
  (eric = partEnfantAlain),
  (clair = partEnfantAlain),
  (madameMukuna = partConjointOuFrere),
  (joseph = partConjointOuFrere),
  (sarah = partConjointOuFrere);
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
