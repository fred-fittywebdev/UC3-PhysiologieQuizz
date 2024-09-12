const quizData = {
	quiz1: {
		title: "Quiz 1 : Niveau facile",
		questions: [
 {
    "question": "Complétez la phrase : Le sang est composé à ___ % de plasma et à ___ % de cellules.",
    "options": ["55, 45", "45, 55", "60, 40", "50, 50"],
    "correctAnswer": 0,
    "reference": "Composition du sang"
  },
  {
    "question": "Quelle est la fonction principale des globules rouges ?",
    "options": ["Transport d'oxygène", "Défense immunitaire", "Coagulation sanguine", "Production d'hormones"],
    "correctAnswer": 0,
    "reference": "Fonction des globules rouges"
  },
  {
    "question": "Combien de chambres le cœur possède-t-il ?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 2,
    "reference": "Structure du cœur"
  },
  {
    "question": "Quel est l'organe le plus volumineux du corps ?",
    "options": ["Le cœur", "Le foie", "Les poumons", "Le cerveau"],
    "correctAnswer": 1,
    "reference": "Description du foie"
  },
  {
    "question": "Quelle est la fonction principale de la thyroïde ?",
    "options": ["Fabriquer des hormones", "Filtrer le sang", "Digérer les aliments", "Produire de l'insuline"],
    "correctAnswer": 0,
    "reference": "Fonction de la thyroïde"
  }
		],
	},
	quiz2: {
		title: "Quiz 2 : Niveau intermédiaire",
		questions: [
		{
    "question": "Identifiez l'affirmation FAUSSE concernant la circulation sanguine :",
    "options": [
      "Le sang oxygéné quitte le ventricule gauche via l'aorte",
      "Les artères ont des parois plus épaisses que les veines",
      "Les capillaires sont le lieu des échanges entre le sang et les tissus",
      "Les veines transportent toujours du sang désoxygéné"
    ],
    "correctAnswer": 3,
    "reference": "Circulation sanguine et types de vaisseaux"
  },
  {
    "question": "Complétez la séquence de la circulation pulmonaire : Ventricule droit → ___ → Poumons → ___ → Oreillette gauche",
    "options": [
      "Artères pulmonaires, Veines pulmonaires",
      "Veines pulmonaires, Artères pulmonaires",
      "Aorte, Veine cave",
      "Veine cave, Aorte"
    ],
    "correctAnswer": 0,
    "reference": "Circulation pulmonaire"
  },
  {
    "question": "Quel est le rôle de l'effet Bohr dans la respiration ?",
    "options": [
      "Il augmente l'affinité de l'hémoglobine pour l'oxygène en présence de CO2",
      "Il diminue l'affinité de l'hémoglobine pour l'oxygène en présence de CO2",
      "Il augmente la production de globules rouges",
      "Il régule la fréquence respiratoire"
    ],
    "correctAnswer": 1,
    "reference": "Effet Bohr"
  },
  {
    "question": "Quelle est la fonction principale des valvules dans les veines ?",
    "options": [
      "Augmenter la vitesse du flux sanguin",
      "Réguler la pression sanguine",
      "Empêcher le reflux du sang",
      "Filtrer le sang"
    ],
    "correctAnswer": 2,
    "reference": "Types de vaisseaux sanguins"
  },
  {
    "question": "Quel lobe du cerveau est principalement responsable de l'activité motrice et du raisonnement ?",
    "options": ["Frontal", "Pariétal", "Temporal", "Occipital"],
    "correctAnswer": 0,
    "reference": "Structure du cerveau"
  }
		],
	},
	quiz3: {
		title: "Quiz 3 : Niveau difficile",
		questions: [
      {
        "question": "Complétez la phrase avec les termes corrects : Le _____ est composé du mésencéphale, du _____ et du bulbe rachidien. _____ des 12 paires de nerfs crâniens siègent dans cet espace.",
        "options": [
          "tronc cérébral, pont, 10",
          "cervelet, thalamus, 8",
          "hypothalamus, cortex, 6",
          "corps calleux, hippocampe, 4"
        ],
        "correctAnswer": 0,
        "reference": "Structure du tronc cérébral"
      },
      {
        "question": "Expliquez comment l'augmentation du volume cardiaque se produit lors d'un effort physique intense.",
        "options": [
          "Par une diminution de la fréquence cardiaque",
          "Par une augmentation de la force de contraction des muscles cardiaques",
          "Par une dilatation des veines",
          "Par une constriction des artères"
        ],
        "correctAnswer": 1,
        "reference": "Fonctionnement du cœur lors d'un effort"
      },
      {
        "question": "Quelle est la séquence correcte des composants de la paroi de l'estomac, de l'intérieur vers l'extérieur ?",
        "options": [
          "Muqueuse, sous-muqueuse, musculeuse, séreuse",
          "Séreuse, musculeuse, sous-muqueuse, muqueuse",
          "Muqueuse, musculeuse, sous-muqueuse, séreuse",
          "Sous-muqueuse, muqueuse, musculeuse, séreuse"
        ],
        "correctAnswer": 0,
        "reference": "Structure de l'estomac"
      },
      {
        "question": "Calculez la capacité vitale d'un adulte moyen si son volume courant est de 0,5L, son volume de réserve inspiratoire est de 2,5L et son volume de réserve expiratoire est de 2L.",
        "options": ["4L", "5L", "3L", "6L"],
        "correctAnswer": 1,
        "reference": "Volumes respiratoires"
      },
      {
        "question": "Quelle est la fonction de l'appareil de Golgi dans une cellule ?",
        "options": [
          "Production d'énergie",
          "Synthèse des protéines",
          "Modification, tri et emballage des protéines et lipides",
          "Stockage de l'information génétique"
        ],
        "correctAnswer": 2,
        "reference": "Composants cellulaires"
      }
		],
	},
	quizRandom: {
		title: "Quiz Aleatoire",
		questions: [],
	},
};
