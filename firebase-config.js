// Configuration Firebase — à remplacer par la config de TON projet Firebase.
// Voir LISEZMOI.txt pour la marche à suivre complète (5 minutes, gratuit).
//
// 1. Va sur https://console.firebase.google.com → Ajouter un projet
// 2. Dans le projet : Créer une application Web (icône </>)
// 3. Firebase te donne un objet de config : copie-le ci-dessous, à la place
//    de l'exemple "REMPLACE_MOI".
// 4. Toujours dans la console Firebase : Build > Firestore Database > Créer
//    une base de données (mode production), puis colle les règles fournies
//    dans LISEZMOI.txt sous l'onglet "Règles".
//
// Tant que cette config n'est pas remplacée, l'app fonctionne normalement
// mais reste locale à cet appareil (pas de partage entre téléphones).

window.ECOT_FIREBASE_CONFIG = {
  apiKey: "REMPLACE_MOI",
  authDomain: "REMPLACE_MOI.firebaseapp.com",
  projectId: "REMPLACE_MOI",
  storageBucket: "REMPLACE_MOI.appspot.com",
  messagingSenderId: "REMPLACE_MOI",
  appId: "REMPLACE_MOI"
};
