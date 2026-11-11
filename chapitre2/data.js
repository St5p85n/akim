// =============================================================
//  GestiShop — jeu de données du fil rouge
//  Utilisé dans tous les chapitres du module.
//  Prix en FCFA.
// =============================================================

export const produits = [
  { id: 1, nom: "Ordinateur portable HP", categorie: "informatique", prix: 450000, stock: 8, note: 4.5 },
  { id: 2, nom: "Souris sans fil", categorie: "informatique", prix: 7500, stock: 45, note: 4.1 },
  { id: 3, nom: "Clé USB 64 Go", categorie: "informatique", prix: 6000, stock: 0, note: 3.9 },
  { id: 4, nom: "Smartphone Samsung A15", categorie: "telephonie", prix: 115000, stock: 12, note: 4.3 },
  { id: 5, nom: "Écouteurs Bluetooth", categorie: "telephonie", prix: 15000, stock: 30, note: 4.0 },
  { id: 6, nom: "Chargeur rapide 25W", categorie: "telephonie", prix: 9000, stock: 3, note: 4.2 },
  { id: 7, nom: "Imprimante Canon", categorie: "bureautique", prix: 85000, stock: 5, note: 3.8 },
  { id: 8, nom: "Rame papier A4", categorie: "bureautique", prix: 3500, stock: 120, note: 4.6 },
  { id: 9, nom: "Calculatrice Casio", categorie: "bureautique", prix: 12000, stock: 0, note: 4.4 },
  { id: 10, nom: "Onduleur 650VA", categorie: "informatique", prix: 55000, stock: 7, note: 4.0 },
];

export const clients = [
  { id: 1, nom: "Awa Diallo", email: "awa.diallo@mail.com", ville: "Dakar", premium: true },
  { id: 2, nom: "Moussa Traoré", email: "moussa.t@mail.com", ville: "Abidjan", premium: false },
  { id: 3, nom: "Fatou Ndiaye", email: "fatou.n@mail.com", ville: "Thiès", premium: false },
  { id: 4, nom: "Ibrahima Koné", email: "ibra.kone@mail.com", ville: "Bamako", premium: true },
];

export const commandes = [
  {
    id: 101, clientId: 1, date: "2026-09-02", statut: "livree",
    lignes: [
      { produitId: 1, quantite: 1, prixUnitaire: 450000 },
      { produitId: 2, quantite: 2, prixUnitaire: 7500 },
    ],
  },
  {
    id: 102, clientId: 2, date: "2026-09-05", statut: "livree",
    lignes: [{ produitId: 4, quantite: 1, prixUnitaire: 115000 }],
  },
  {
    id: 103, clientId: 1, date: "2026-09-12", statut: "en_cours",
    lignes: [
      { produitId: 8, quantite: 10, prixUnitaire: 3500 },
      { produitId: 7, quantite: 1, prixUnitaire: 85000 },
    ],
  },
  {
    id: 104, clientId: 3, date: "2026-09-18", statut: "annulee",
    lignes: [{ produitId: 5, quantite: 2, prixUnitaire: 15000 }],
  },
  {
    id: 105, clientId: 4, date: "2026-09-25", statut: "livree",
    lignes: [
      { produitId: 10, quantite: 2, prixUnitaire: 55000 },
      { produitId: 6, quantite: 3, prixUnitaire: 9000 },
    ],
  },
  {
    id: 106, clientId: 2, date: "2026-10-01", statut: "en_cours",
    lignes: [{ produitId: 9, quantite: 4, prixUnitaire: 12000 }],
  },
];
