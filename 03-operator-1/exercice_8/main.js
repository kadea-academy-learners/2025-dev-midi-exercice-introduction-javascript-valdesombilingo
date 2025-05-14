let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste;
  


  salaireMensuel = 500;
  loyer= ( salaireMensuel / 100 ) * 30;
  nourriture=(salaireMensuel/100)*20;
  transport=(salaireMensuel/100)*10;
  autresDepenses=50+25;
  totalDepenses=loyer+nourriture+transport+autresDepenses;
  reste=salaireMensuel-totalDepenses;

 

  if (reste>=100) {
    console.log("Budget bien gere");
    
  }else{
    console.log("Attention, budget serré");

  }

  //ajout du loisir en prenant 15% du salaireMensuel
  let loisirs=(500/100)*15;
  totalDepenses=totalDepenses+loisirs;
  reste=salaireMensuel-totalDepenses;

  // calcul de pourcentage de chaque categorie
  pourcentageLoyer=(loyer/salaireMensuel)*100;
  pourcentageNouriture=(nourriture/salaireMensuel)*100;
  pourcentageTransport=(transport/salaireMensuel)*100;
  pourcentageLoisir=(loisirs/salaireMensuel)*100;
  pourcentageAutreDepense=(autresDepenses/salaireMensuel)*100;

  //affiche des pourcentage de chaque categorie
  console.log(pourcentageLoyer);
  console.log(pourcentageNouriture);
  console.log(pourcentageTransport);
  console.log(pourcentageLoisir);
  console.log(pourcentageAutreDepense);


//simulation d'augmentation de 10% sur le salaire mensuel
  salaireMensuel= salaireMensuel+((10/100)*salaireMensuel);


// on recalcule les depenses
  loyer=(salaireMensuel/100)*30;
  nourriture=(salaireMensuel/100)*20;
  transport=(salaireMensuel/100)*10;
  totalDepenses=loyer+nourriture+transport+autresDepenses;
  reste=salaireMensuel-totalDepenses;

// on recalcule les pourcentage
  pourcentageLoyer=(loyer/salaireMensuel)*100;
  pourcentageNouriture=(nourriture/salaireMensuel)*100;
  pourcentageTransport=(transport/salaireMensuel)*100;
  pourcentageLoisir=(loisirs/salaireMensuel)*100;
  pourcentageAutreDepense=(autresDepenses/salaireMensuel)*100;

  // la condition finale
  if (totalDepenses>((90/100)*salaireMensuel)) {
    console.log("Dépenses trop élevées, réduisez vos charges");
  }

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
