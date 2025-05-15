let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses;
// Ecrivez votre code ici
salaireMensuel = 500;
loyer = salaireMensuel * 0.30;
nourriture = salaireMensuel * 0.20;
transport = salaireMensuel * 0.10;
autresDepenses = 50 + 25;

totalDepenses = loyer + nourriture + transport + autresDepenses;

reste = salaireMensuel - totalDepenses;

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
