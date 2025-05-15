let salaireMensuel = 500;
let loyer = salaireMensuel * 0.30;
let nourriture = salaireMensuel * 0.20;
let transport = salaireMensuel * 0.10;
let autresDepenses = 50 + 25;

let totalDepenses = loyer + nourriture + transport + autresDepenses;

let reste = salaireMensuel - totalDepenses;

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
