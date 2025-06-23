let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses = 50,
  totalDepenses,
  reste;
// Ecrivez votre code ici
salaireMensuel = 500;
loyer = 500*30/100;
nourriture = salaireMensuel*20/100;
transport = salaireMensuel*10/100;
autresDepenses += 25;
totalDepenses = loyer-nourriture-transport-autresDepenses;

// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
