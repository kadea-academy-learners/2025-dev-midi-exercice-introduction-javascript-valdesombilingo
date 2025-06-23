let paul, marie, eric, clair, madameMukuna, joseph, sarah;



let maisonFamiliale ,terrains,liquidites;

maisonFamiliale =60000000;
terrains=40000000;
liquidites=20000000;
// heritage
heritage=maisonFamiliale+terrains+liquidites;

//heritage des enfants du defun
heritageEnfantDefunt=(75/100)*heritage;

paul=heritageEnfantDefunt/3
marie=heritageEnfantDefunt/3
alain=heritageEnfantDefunt/3
//enfant alain (decedee)
eric=alain/2
clair=alain/2

//heritage conjoint , frere et soeur

heritageConjointFrereEtSoeur=(25/100)*heritage;

madameMukuna=heritageConjointFrereEtSoeur/3;
sarah=heritageConjointFrereEtSoeur/3;
joseph=heritageConjointFrereEtSoeur/3;










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
