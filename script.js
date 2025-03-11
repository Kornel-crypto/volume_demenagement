class ObjetDemenagement {
  constructor(nom, volume, emoji) {
    this.nom = nom;
    this.volume = volume;
    this.emoji = emoji;
  }
}

// 2️⃣ Liste des objets avec leurs émojis
const catalogue = [
  new ObjetDemenagement("Canapé", 2.5, "🛋️"),
  new ObjetDemenagement("Table", 1.2, "🪑"),
  new ObjetDemenagement("Chaise", 0.5, "🪑"),
  new ObjetDemenagement("Lit", 3.0, "🛏️"),
  new ObjetDemenagement("Armoire", 4.0, "🗄️"),
];

function afficherListeObjets() {
  const listeObjetsDiv = document.getElementById("liste-objets");

  listeObjetsDiv.innerHTML = "";

  catalogue.forEach((objet) => {
    const div = document.createElement("div");
    div.classList.add("objet");

    div.innerHTML = `
            <span>${objet.emoji} ${objet.nom} (${objet.volume} m³)</span>
            <input type="number" min="0" value="0" data-nom="${objet.nom}">
        `;

    // Ajout de l'élément à la page
    listeObjetsDiv.appendChild(div);
  });
}

function calculerVolumeTotal() {
  let volumeTotal = 0;
  let totalObjets = 0;

  document.querySelectorAll("input").forEach((input) => {
    const nom = input.dataset.nom;
    const quantite = parseInt(input.value, 10);
    const objet = catalogue.find((o) => o.nom === nom);

    if (objet && quantite > 0) {
      volumeTotal += objet.volume * quantite;
      totalObjets += quantite;
    }
  });

  // Vérification si aucun objet n'a été sélectionné
  if (volumeTotal === 0) {
    alert("Veuillez sélectionner au moins un objet !");
  }

  // Afficher le volume total dans l'élément HTML
  document.getElementById("resultat").textContent = volumeTotal.toFixed(2);
  document.getElementById("total-objet").textContent = totalObjets;
}

document
  .getElementById("calculer")
  .addEventListener("click", calculerVolumeTotal);

document.addEventListener("DOMContentLoaded", afficherListeObjets);
