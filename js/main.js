/* ==========================================================================
   PROMPTING FORMATION - JavaScript
   ========================================================================== */

// Données des principes de prompting
const principesData = {
  "affiner": {
    emoji: "🔍",
    titre: "Affiner questions et réponses",
    definition: "Au lieu de galérer à écrire le prompt parfait du premier coup, tu demandes à l'IA de <strong>t'aider à améliorer ta propre question</strong>. C'est comme avoir un coach qui te dit : \"Attends, tu veux dire quoi exactement ?\"",
    utilite: [
      "Tu obtiens des réponses plus précises",
      "Tu apprends à mieux formuler tes demandes",
      "Tu découvres des angles auxquels tu n'avais pas pensé"
    ],
    astuce: "Ajoute cette instruction à ton prompt : <em>\"Avant de répondre, suggère une version améliorée de ma question.\"</em>",
    exemple: {
      situation: "Tu veux des conseils pour ton orientation post-bac.",
      promptInitial: "Qu'est-ce que je peux faire après le bac ?",
      reponseIA: "Ta question est très large. Voici une version plus précise : 'Quelles formations courtes (2-3 ans) dans le domaine du numérique sont accessibles après un bac général avec spécialité maths, pour quelqu'un qui aime créer des sites web ?'"
    }
  },
  "inversees": {
    emoji: "🔄",
    titre: "Interactions inversées",
    definition: "Normalement, c'est toi qui poses les questions. Avec ce principe, tu <strong>inverses les rôles</strong> : c'est l'IA qui te pose des questions pour mieux comprendre ce que tu veux.",
    utilite: [
      "Tu n'as pas besoin de tout savoir à l'avance",
      "L'IA t'aide à clarifier tes propres idées",
      "Tu obtiens un résultat vraiment personnalisé"
    ],
    astuce: "Termine ton prompt par : <em>\"Pose-moi des questions une par une pour mieux comprendre mes besoins.\"</em>",
    exemple: {
      situation: "Tu veux te mettre au sport mais tu ne sais pas par où commencer.",
      promptInitial: "Je veux commencer le sport. Pose-moi des questions une par une pour me créer un programme adapté.",
      reponseIA: "1. \"Quel est ton objectif principal : perdre du poids, te muscler, améliorer ton endurance ou juste te sentir mieux ?\" 2. \"Combien de temps par semaine peux-tu y consacrer ?\" 3. \"As-tu accès à une salle de sport ou tu préfères t'entraîner chez toi ?\""
    }
  },
  "divergence": {
    emoji: "🌱",
    titre: "Divergence",
    definition: "Au lieu de demander UNE solution, tu demandes à l'IA de te proposer <strong>plein d'options différentes</strong>. C'est du brainstorming boosté à l'IA.",
    utilite: [
      "Tu sors de ta zone de confort",
      "Tu découvres des idées auxquelles tu n'aurais jamais pensé",
      "Tu gardes le contrôle : c'est toi qui choisis à la fin"
    ],
    astuce: "Utilise des formules comme : <em>\"Propose-moi 10 idées très différentes pour...\"</em> ou <em>\"Donne-moi 5 approches opposées pour...\"</em>",
    exemple: {
      situation: "Tu dois trouver un sujet original pour ton exposé de sciences sur l'écologie.",
      promptInitial: "Propose-moi 8 sujets d'exposé sur l'écologie pour des lycéens. Je veux des angles vraiment différents : scientifique, économique, artistique, provocateur, local, futuriste, etc.",
      reponseIA: "1. Les champignons qui dépolluent les sols (scientifique) 2. Combien coûte vraiment un jean ? (économique) 3. Le street art écolo qui change les villes (artistique) 4. Et si on arrêtait de recycler ? (provocateur)..."
    }
  },
  "jeu": {
    emoji: "🎮",
    titre: "Le jeu",
    definition: "Tu transformes une tâche ennuyante (révisions, apprentissage...) en <strong>jeu interactif</strong> avec l'IA. Points, niveaux, défis, feedback immédiat : tout ce qui rend les jeux vidéo addictifs, appliqué à l'apprentissage.",
    utilite: [
      "Apprendre devient moins pénible",
      "Tu as un feedback instantané",
      "La difficulté s'adapte à ton niveau"
    ],
    astuce: "Demande à l'IA de créer un jeu avec des règles claires : <em>\"Crée un quiz interactif avec des points. Augmente la difficulté à chaque bonne réponse.\"</em>",
    exemple: {
      situation: "Tu dois réviser les capitales du monde pour un contrôle de géo.",
      promptInitial: "On va jouer ! Tu me donnes un pays, je te donne la capitale. Si j'ai bon, +1 point et tu passes à un pays plus difficile. Si j'ai faux, tu me donnes un indice et je réessaie. Objectif : atteindre 15 points. C'est parti !",
      reponseIA: "\"France ?\" → \"Paris !\" → \"✅ +1 point ! Score : 1/15\" / \"Mongolie ?\" → \"Euh... Pékin ?\" → \"❌ Indice : ça commence par 'Oulan'...\" → \"Oulan-Bator !\" → \"✅ Bien rattrapé !\""
    }
  },
  "factchecking": {
    emoji: "🕵️",
    titre: "Fact checking",
    definition: "Les IA peuvent inventer des trucs qui ont l'air vrais mais qui sont faux (on appelle ça des \"hallucinations\"). Ce principe consiste à <strong>demander à l'IA de lister les faits à vérifier</strong> dans sa réponse.",
    utilite: [
      "Tu évites de répéter des bêtises",
      "Tu développes ton esprit critique",
      "Tu apprends à ne pas tout gober",
      "Cela peut pousser l'IA à moins halluciner"
    ],
    astuce: "Ajoute à la fin de ton prompt : <em>\"Liste les faits clés de ta réponse que je devrais vérifier pour être sûr que ta réponse est juste.\"</em>",
    exemple: {
      situation: "Tu prépares un exposé sur les réseaux sociaux et la santé mentale.",
      promptInitial: "Explique-moi l'impact des réseaux sociaux sur la santé mentale des ados. À la fin, liste les chiffres et études que tu cites pour que je puisse les vérifier.",
      reponseIA: "⚠️ Faits à vérifier : • \"73% des ados...\" → Vérifier la source et l'année • \"Étude de l'université de Cambridge\" → Rechercher si elle existe vraiment • \"L'OMS recommande...\" → Consulter le site officiel de l'OMS"
    }
  },
  "exemples": {
    emoji: "🧩",
    titre: "Exemples (Few-shot)",
    definition: "Au lieu d'expliquer longuement ce que tu veux, tu <strong>montres des exemples</strong> à l'IA. Elle comprend le pattern et reproduit le style.",
    utilite: [
      "C'est plus rapide que d'expliquer",
      "Le résultat correspond exactement à ce que tu veux",
      "Parfait pour copier un style ou un format"
    ],
    astuce: "Donne 2-3 exemples avant ta demande : <em>\"Voici des exemples de ce que je veux : [exemple 1], [exemple 2]. Maintenant fais pareil pour...\"</em>",
    exemple: {
      situation: "Tu veux créer des flashcards de vocabulaire anglais avec des phrases mnémotechniques marrantes.",
      promptInitial: "Voici comment je veux mes flashcards :\n• Mot : Awkward (gênant) → Phrase : \"C'est AWKWARD quand ton crush voit que t'as liké sa photo de 2019\"\n• Mot : Overwhelmed (submergé) → Phrase : \"Je suis OVERWHELMED par les 47 onglets ouverts sur mon ordi\"\nMaintenant, crée des flashcards dans le même style pour : Grateful, Procrastinate, Cringe",
      reponseIA: "L'IA comprend ton style (références ados, humour) et reproduit exactement ce format."
    }
  },
  "metalangage": {
    emoji: "🧠",
    titre: "Métalangage",
    definition: "Tu crées tes propres <strong>raccourcis et commandes</strong> que l'IA va mémoriser. C'est comme programmer ton assistant personnel avec des mots-clés.",
    utilite: [
      "Tu gagnes du temps sur les tâches répétitives",
      "L'IA comprend exactement ce que tu veux en un mot",
      "Tu personnalises ton expérience"
    ],
    astuce: "Définis tes raccourcis clairement : <em>\"À partir de maintenant, quand j'écris [COMMANDE], tu dois faire [ACTION].\"</em>",
    exemple: {
      situation: "Tu fais souvent des fiches de révision et tu en as marre de tout réexpliquer à chaque fois.",
      promptInitial: "À partir de maintenant :\n• Quand j'écris FICHE(sujet), tu me fais une fiche de révision avec : définition, 3 points clés, 1 exemple, 1 piège à éviter\n• Quand j'écris QUIZ(sujet), tu me poses 5 questions de difficulté croissante\n• Quand j'écris EXPLAIN5(concept), tu m'expliques comme si j'avais 5 ans",
      reponseIA: "Ensuite tu utilises simplement : FICHE(théorème de Pythagore) ou QUIZ(Révolution française)"
    }
  },
  "squelette": {
    emoji: "🦴",
    titre: "Squelette de pensées",
    definition: "Avant de te donner une réponse détaillée, tu demandes à l'IA de <strong>poser d'abord un plan</strong> (le \"squelette\"). Ensuite seulement, elle développe.",
    utilite: [
      "La réponse est mieux structurée",
      "Tu peux valider le plan avant qu'elle développe",
      "Tu gagnes en clarté"
    ],
    astuce: "Demande un plan en premier : <em>\"D'abord, donne-moi un plan en 5 points. Ensuite, développe chaque point.\"</em>",
    exemple: {
      situation: "Tu dois écrire une lettre de motivation pour un stage.",
      promptInitial: "Je dois écrire une lettre de motivation pour un stage en marketing digital. D'abord, propose-moi un plan structuré avec les parties principales. Attends ma validation avant de rédiger.",
      reponseIA: "Plan proposé : 1. Accroche personnalisée 2. Mon parcours et mes compétences 3. Ce que je peux apporter 4. Ce que j'espère apprendre 5. Conclusion et appel à l'action"
    }
  },
  "chaine": {
    emoji: "⛓️",
    titre: "Chaînes de pensées",
    definition: "Tu demandes à l'IA de <strong>montrer son raisonnement étape par étape</strong> au lieu de donner directement la réponse. Comme quand un prof te demande de \"montrer ton calcul\".",
    utilite: [
      "Tu comprends le \"pourquoi\", pas juste le résultat",
      "Tu peux repérer si l'IA se trompe quelque part",
      "Les réponses sont souvent meilleures"
    ],
    astuce: "Ajoute simplement : <em>\"Réfléchis étape par étape avant de me donner ta réponse finale.\"</em>",
    exemple: {
      situation: "Tu galères sur un problème de maths avec des pourcentages.",
      promptInitial: "Un article coûte 80€. Il est soldé à -30%, puis une réduction supplémentaire de -10% est appliquée sur le prix soldé. Quel est le prix final ? Montre-moi ton raisonnement étape par étape.",
      reponseIA: "Étape 1 : Prix initial = 80€\nÉtape 2 : Première réduction de 30% → 80 × 0,70 = 56€\nÉtape 3 : Deuxième réduction de 10% sur 56€ → 56 × 0,90 = 50,40€\n⚠️ Attention au piège : on ne peut PAS additionner les pourcentages (30% + 10% ≠ 40%) !"
    }
  },
  "arbre": {
    emoji: "🌳",
    titre: "Arbre de pensées",
    definition: "Au lieu de foncer sur une seule solution, tu demandes à l'IA d'<strong>explorer plusieurs pistes en parallèle</strong> et de les <strong>évaluer selon tes critères</strong> avant de choisir.",
    utilite: [
      "Tu compares des options de façon objective",
      "Tu dis à l'IA ce qui est important pour toi (les critères)",
      "Tu évites de te précipiter sur la première idée",
      "Tu prends de meilleures décisions"
    ],
    astuce: "Demande une évaluation multicritères : <em>\"Propose 3 options différentes. Évalue chacune sur [critère 1], [critère 2], [critère 3] avec une note sur 5.\"</em>",
    exemple: {
      situation: "Tu hésites entre plusieurs idées de cadeau d'anniversaire pour ta meilleure pote.",
      promptInitial: "Ma meilleure amie fête ses 18 ans. Elle adore la K-pop, le dessin et les plantes. Budget : 40€ max.\nPropose-moi 4 idées de cadeaux très différentes. Pour chacune, évalue sur 5 :\n• Originalité\n• Lien avec ses passions\n• Rapport qualité/prix\n• Facilité à trouver",
      reponseIA: "L'IA répond avec un tableau comparatif permettant de voir clairement quelle option a le meilleur score total."
    }
  }
};

// Fonction pour ouvrir la modal d'un principe
function openPrincipleModal(principleId) {
  const principle = principesData[principleId];
  if (!principle) return;

  const modal = document.getElementById('principle-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.innerHTML = `${principle.emoji} ${principle.titre}`;
  
  let utilitesHTML = principle.utilite.map(u => `<li>${u}</li>`).join('');
  
  modalBody.innerHTML = `
    <div class="definition">
      <p>${principle.definition}</p>
    </div>
    
    <h4>Pourquoi c'est utile ?</h4>
    <ul>${utilitesHTML}</ul>
    
    <div class="tip">
      <strong>💡 Le truc à retenir :</strong>
      <p>${principle.astuce}</p>
    </div>
    
    <div class="example-box">
      <h4>🎯 Cas pratique</h4>
      <p><strong>Situation :</strong> ${principle.exemple.situation}</p>
      <p><strong>Ton prompt :</strong></p>
      <blockquote>${principle.exemple.promptInitial}</blockquote>
      <p><strong>Ce que l'IA peut répondre :</strong></p>
      <blockquote>${principle.exemple.reponseIA}</blockquote>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fonction pour fermer la modal
function closeModal() {
  const modal = document.getElementById('principle-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Fermer la modal en cliquant à l'extérieur
document.addEventListener('click', function(e) {
  const modal = document.getElementById('principle-modal');
  if (e.target === modal) {
    closeModal();
  }
});

// Fermer la modal avec Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Toggle du menu mobile
function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Marquer le lien actif dans la navigation
function updateActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Fonction pour afficher une catégorie et masquer les autres
function showCategory(categoryId) {
  console.log('showCategory appelé avec:', categoryId);

  // Masquer toutes les catégories
  const allSections = document.querySelectorAll('.category-section');
  console.log('Nombre de sections trouvées:', allSections.length);

  allSections.forEach(section => {
    section.style.display = 'none';
  });

  // Afficher la catégorie sélectionnée
  const selectedCategory = document.getElementById(categoryId);
  console.log('Section sélectionnée:', selectedCategory);

  if (selectedCategory) {
    selectedCategory.style.display = 'block';
  }

  // Mettre à jour les boutons de navigation
  document.querySelectorAll('.category-nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === categoryId) {
      btn.classList.add('active');
    }
  });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
  updateActiveNav();

  // Ajouter les gestionnaires d'événements pour les tags de principes
  document.querySelectorAll('.principle-tag').forEach(tag => {
    tag.addEventListener('click', function(e) {
      e.preventDefault();
      const principleId = this.dataset.principle;
      if (principleId) {
        openPrincipleModal(principleId);
      }
    });
  });

  // Initialiser la navigation par catégories (page cas-pratiques)
  const categoryNavBtns = document.querySelectorAll('.category-nav-btn');
  if (categoryNavBtns.length > 0) {
    // Masquer toutes les catégories sauf la première au chargement
    showCategory('quotidien');

    // Ajouter les gestionnaires de clic sur les vignettes
    categoryNavBtns.forEach(btn => {
      console.log('Ajout event listener sur:', btn.dataset.category);
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const categoryId = this.dataset.category;
        console.log('Clic détecté sur:', categoryId);
        showCategory(categoryId);
      });
    });
  }
});
