const randomQuizData = [
	// Vos 60 nouvelles questions ici
	{
    "question": "Quelle est la durée moyenne d'utilisation de la filière anaérobie alactique ?",
    "options": ["5-10 secondes", "20-30 secondes", "1-2 minutes", "3-5 minutes"],
    "correctAnswer": 0,
    "reference": "Filières énergétiques"
  },
  {
    "question": "Dans le cycle de Krebs, quelle molécule est formée à partir de l'oxaloacétate et de l'acétyl-CoA ?",
    "options": ["Citrate", "α-cétoglutarate", "Succinate", "Fumarate"],
    "correctAnswer": 0,
    "reference": "Cycle de Krebs"
  },
  {
    "question": "Quelle hormone est produite par les cellules bêta du pancréas ?",
    "options": ["Insuline", "Glucagon", "Cortisol", "Adrénaline"],
    "correctAnswer": 0,
    "reference": "Fonctions du pancréas"
  },
  {
    "question": "Complétez la phrase : Le volume résiduel des poumons est d'environ ___ L.",
    "options": ["0.5", "1.0", "1.5", "2.0"],
    "correctAnswer": 2,
    "reference": "Volumes pulmonaires"
  },
  {
    "question": "Quelle est la fonction principale du nœud sinusal dans le cœur ?",
    "options": [
      "Déclencher la contraction cardiaque",
      "Ralentir le rythme cardiaque",
      "Oxygéner le sang",
      "Filtrer le sang"
    ],
    "correctAnswer": 0,
    "reference": "Système de conduction cardiaque"
  },
  {
    "question": "Quel est le pH normal du sang ?",
    "options": ["6.8-7.0", "7.35-7.45", "7.6-7.8", "8.0-8.2"],
    "correctAnswer": 1,
    "reference": "Homéostasie sanguine"
  },
  {
    "question": "Quelle est la durée approximative du cycle de Krebs pour une molécule de glucose ?",
    "options": ["30 secondes", "1 minute", "2 minutes", "5 minutes"],
    "correctAnswer": 1,
    "reference": "Cycle de Krebs"
  },
  {
    "question": "Quel est le rôle principal de la myoglobine dans les muscles ?",
    "options": [
      "Stockage d'oxygène",
      "Production d'ATP",
      "Contraction musculaire",
      "Élimination de l'acide lactique"
    ],
    "correctAnswer": 0,
    "reference": "Physiologie musculaire"
  },
  {
    "question": "Quelle est la principale source d'énergie dans la filière anaérobie lactique ?",
    "options": ["Glucose", "Acides gras", "Créatine phosphate", "Protéines"],
    "correctAnswer": 0,
    "reference": "Filières énergétiques"
  },
  {
    "question": "Combien de molécules d'ATP sont produites par molécule de glucose dans la glycolyse anaérobie ?",
    "options": ["2", "4", "32", "38"],
    "correctAnswer": 0,
    "reference": "Métabolisme énergétique"
  },
  {
    "question": "Quel est le rôle principal de la valve mitrale dans le cœur ?",
    "options": [
      "Empêcher le reflux sanguin de l'oreillette gauche vers le ventricule gauche",
      "Empêcher le reflux sanguin du ventricule gauche vers l'oreillette gauche",
      "Réguler le flux sanguin vers les poumons",
      "Contrôler la fréquence cardiaque"
    ],
    "correctAnswer": 1,
    "reference": "Anatomie cardiaque"
  },
  {
    "question": "Quelle hormone stimule la production de globules rouges ?",
    "options": ["Érythropoïétine", "Insuline", "Cortisol", "Thyroxine"],
    "correctAnswer": 0,
    "reference": "Hématologie"
  },
  {
    "question": "Dans quelle partie du néphron la réabsorption du glucose a-t-elle principalement lieu ?",
    "options": [
      "Glomérule",
      "Tubule proximal",
      "Anse de Henle",
      "Tubule distal"
    ],
    "correctAnswer": 1,
    "reference": "Physiologie rénale"
  },
  {
    "question": "Quelle est la durée typique d'utilisation de la filière anaérobie lactique ?",
    "options": ["10-20 secondes", "30 secondes - 3 minutes", "3-5 minutes", "Plus de 5 minutes"],
    "correctAnswer": 1,
    "reference": "Filières énergétiques"
  },
  {
    "question": "Quel est le rôle principal de la protéine C-réactive dans le corps ?",
    "options": [
      "Marqueur de l'inflammation",
      "Transport de l'oxygène",
      "Régulation du glucose sanguin",
      "Contraction musculaire"
    ],
    "correctAnswer": 0,
    "reference": "Biochimie"
  },
  {
    "question": "Quelle enzyme catalyse la conversion du pyruvate en lactate ?",
    "options": [
      "Lactate déshydrogénase",
      "Pyruvate kinase",
      "Hexokinase",
      "Phosphofructokinase"
    ],
    "correctAnswer": 0,
    "reference": "Métabolisme énergétique"
  },
  {
    "question": "Quel est le principal neurotransmetteur excitateur dans le système nerveux central ?",
    "options": ["Glutamate", "GABA", "Dopamine", "Sérotonine"],
    "correctAnswer": 0,
    "reference": "Neurophysiologie"
  },
  {
    "question": "Quelle est la fonction principale du corps calleux dans le cerveau ?",
    "options": [
      "Connecter les hémisphères cérébraux",
      "Réguler le sommeil",
      "Contrôler l'équilibre",
      "Produire des hormones"
    ],
    "correctAnswer": 0,
    "reference": "Anatomie cérébrale"
  },
  {
    "question": "Quel est le principal site de production de l'érythropoïétine chez l'adulte ?",
    "options": ["Reins", "Foie", "Rate", "Moelle osseuse"],
    "correctAnswer": 0,
    "reference": "Physiologie rénale"
  },
  {
    "question": "Quelle est la principale fonction de la vitamine K dans le corps ?",
    "options": [
      "Coagulation sanguine",
      "Absorption du calcium",
      "Fonction immunitaire",
      "Production d'énergie"
    ],
    "correctAnswer": 0,
    "reference": "Nutrition et métabolisme"
  },
  {
    "question": "Quel est le rôle principal des cellules de Kupffer dans le foie ?",
    "options": [
      "Phagocytose",
      "Production de bile",
      "Stockage du glycogène",
      "Synthèse de protéines"
    ],
    "correctAnswer": 0,
    "reference": "Physiologie hépatique"
  },
  {
    "question": "Quelle hormone est responsable de la stimulation de la lipolyse pendant l'exercice ?",
    "options": ["Adrénaline", "Insuline", "Cortisol", "Hormone de croissance"],
    "correctAnswer": 0,
    "reference": "Endocrinologie de l'exercice"
  },
  {
    "question": "Quel est le principal facteur limitant dans la filière aérobie ?",
    "options": [
      "Apport en oxygène",
      "Disponibilité du glucose",
      "pH sanguin",
      "Température corporelle"
    ],
    "correctAnswer": 0,
    "reference": "Filières énergétiques"
  },
  {
    "question": "Quelle est la fonction principale des cellules de Sertoli dans les testicules ?",
    "options": [
      "Soutien et nutrition des spermatozoïdes",
      "Production de testostérone",
      "Production de spermatozoïdes",
      "Régulation de la température testiculaire"
    ],
    "correctAnswer": 0,
    "reference": "Physiologie reproductive"
  },
  {
    "question": "Quel est le rôle principal du facteur intrinsèque produit par l'estomac ?",
    "options": [
      "Absorption de la vitamine B12",
      "Digestion des protéines",
      "Régulation de l'acidité gastrique",
      "Stimulation de la sécrétion biliaire"
    ],
    "correctAnswer": 0,
    "reference": "Physiologie digestive"
  },
  {
    "question": "Quelle est la principale fonction du système rénine-angiotensine-aldostérone ?",
    "options": [
      "Régulation de la pression artérielle",
      "Contrôle de la glycémie",
      "Production de globules rouges",
      "Digestion des lipides"
    ],
    "correctAnswer": 0,
    "reference": "Physiologie cardiovasculaire"
  },
  {
    "question": "Quel est le principal site de production de la sérotonine dans le corps ?",
    "options": [
      "Tractus gastro-intestinal",
      "Cerveau",
      "Foie",
      "Glandes surrénales"
    ],
    "correctAnswer": 0,
    "reference": "Neurochimie"
  },
  {
    "question": "Quelle est la durée typique de la phase folliculaire du cycle menstruel ?",
    "options": ["14 jours", "7 jours", "21 jours", "28 jours"],
    "correctAnswer": 0,
    "reference": "Physiologie reproductive féminine"
  },
  {
    "question": "Quel est le rôle principal du surfactant pulmonaire ?",
    "options": [
      "Réduire la tension superficielle dans les alvéoles",
      "Faciliter l'échange gazeux",
      "Produire du mucus",
      "Éliminer les pathogènes"
    ],
    "correctAnswer": 0,
    "reference": "Physiologie respiratoire"
  },
  {
    "question": "Quelle est la principale fonction de la protéine kinase A dans la cellule ?",
    "options": [
      "Phosphoryler d'autres protéines",
      "Synthétiser l'ATP",
      "Transporter les ions",
      "Répliquer l'ADN"
    ],
    "correctAnswer": 0,
    "reference": "Biologie cellulaire"
  },
  {
    "question": "Quel est le principal site de production de la thrombopoïétine ?",
    "options": ["Foie", "Rate", "Reins", "Moelle osseuse"],
    "correctAnswer": 0,
    "reference": "Hématologie"
  },
  {
    "question": "Quelle est la principale fonction du corps lutéum dans l'ovaire ?",
    "options": [
      "Production de progestérone",
      "Production d'œstrogènes",
      "Ovulation",
      "Production de follicules"
    ],
    "correctAnswer": 0,
    "reference": "Physiologie reproductive féminine"
  },
  {
    "question": "Quel est le rôle principal de la protéine découplante (UCP) dans les mitochondries ?",
    "options": [
      "Production de chaleur",
      "Synthèse d'ATP",
      "Transport d'électrons",
      "Réplication de l'ADN mitochondrial"
    ],
    "correctAnswer": 0,
    "reference": "Métabolisme cellulaire"
  },
  {
    "question": "Quelle est la principale fonction du peptide natriurétique auriculaire (ANP) ?",
    "options": [
      "Réduire la pression artérielle",
      "Augmenter la fréquence cardiaque",
      "Stimuler la soif",
      "Augmenter la rétention de sodium"
    ],
    "correctAnswer": 0,
    "reference": "Physiologie cardiovasculaire"
  },
  {
    "question": "Quel est le principal site de production de l'érythropoïétine chez le fœtus ?",
    "options": ["Foie", "Reins", "Rate", "Moelle osseuse"],
    "correctAnswer": 0,
    "reference": "Physiologie fœtale"
  },
  {
    "question": "Quelle est la principale fonction de la protéine GLUT4 ?",
    "options": [
      "Transport du glucose dans les cellules musculaires et adipeuses",
      "Digestion des glucides",
      "Stockage du glycogène",
      "Régulation de l'insuline"
    ],
    "correctAnswer": 0,
    "reference": "Métabolisme glucidique"
  },
  {
    "question": "Quel est le rôle principal de la protéine heat shock 70 (HSP70) ?",
    "options": [
      "Protection cellulaire contre le stress",
      "Synthèse de l'ADN",
      "Transport des lipides",
      "Contraction musculaire"
    ],
    "correctAnswer": 0,
    "reference": "Biologie cellulaire"
  },
  {
    "question": "Quelle est la principale fonction du facteur de von Willebrand ?",
    "options": [
      "Adhésion plaquettaire",
      "Production d'érythrocytes",
      "Régulation de la pression artérielle",
      "Digestion des protéines"
    ],
    "correctAnswer": 0,
    "reference": "Hémostase"
  },
	// ... 59 autres questions ...
];
