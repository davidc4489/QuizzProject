CREATE TABLE IF NOT EXISTS "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3" (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT,
    reponse_1 TEXT,
    reponse_2 TEXT, 
    reponse_3 TEXT,
    reponse_correcte TEXT
);

INSERT INTO "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3" (question, reponse_1, reponse_2, reponse_3, reponse_correcte)
VALUES (
    "Qu'est-ce que la 'syntaxe de dépendance' dans l'analyse linguistique?",
    "Une méthode pour organiser les mots dans une phrase selon leur longueur.",
    "Une représentation de la structure grammaticale qui indique les relations de dépendance entre les mots.",
    "Une technique pour mélanger des mots de différentes langues dans une phrase.",
    "Une représentation de la structure grammaticale qui indique les relations de dépendance entre les mots."
);

INSERT INTO "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3" (question, reponse_1, reponse_2, reponse_3, reponse_correcte)
VALUES (
    "Qu'est-ce que le 'co-reference resolution' dans le NLP?",
    "Une méthode pour résoudre les conflits dans un texte.",
    "Une tâche qui consiste à identifier les expressions qui font référence aux mêmes entités.",
    "Un processus pour déterminer la tonalité d'un texte.",
    "Une tâche qui consiste à identifier les expressions qui font référence aux mêmes entités."
);

INSERT INTO "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3" (question, reponse_1, reponse_2, reponse_3, reponse_correcte)
VALUES (
    "Qu'est-ce qu'une 'knowledge graph' dans le contexte du NLP?",
    "Une carte géographique avec des informations sur les connaissances locales.",
    "Une représentation graphique des connaissances avec des entités et des relations entre elles.",
    "Un modèle NLP qui possède une connaissance approfondie dans toutes les langues.",
    "Une représentation graphique des connaissances avec des entités et des relations entre elles."
);

INSERT INTO "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3" (question, reponse_1, reponse_2, reponse_3, reponse_correcte)
VALUES (
    "Comment fonctionne généralement un modèle de 'text summarization' dans le NLP?",
    "En générant des résumés basés sur la longueur du texte.",
    "En réduisant la taille d'un texte tout en préservant ses informations essentielles.",
    "En ajoutant des détails supplémentaires à un texte pour le rendre plus complet.",
    "En réduisant la taille d'un texte tout en préservant ses informations essentielles."
);

INSERT INTO "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3" (question, reponse_1, reponse_2, reponse_3, reponse_correcte)
VALUES (
    "Quelle est la différence entre 'coreference resolution' et 'anaphora resolution'?",
    "Il n'y a aucune différence.",
    "La coreference resolution concerne les références aux entités, tandis que l'anaphora resolution concerne les références aux concepts.",
    "La coreference resolution concerne les références aux concepts, tandis que l'anaphora resolution concerne les références aux entités.",
    "La coreference resolution concerne les références aux entités, tandis que l'anaphora resolution concerne les références aux concepts."
);

INSERT INTO "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3" (question, reponse_1, reponse_2, reponse_3, reponse_correcte)
VALUES (
    "Qu'est-ce qu'un 'dialogue system' dans le NLP?",
    "Un outil pour éditer des dialogues littéraires.",
    "Un système capable de comprendre et de générer des dialogues humains.",
    "Une méthode pour analyser les dialogues entre différentes langues.",
    "Un système capable de comprendre et de générer des dialogues humains."
);

INSERT INTO "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3" (question, reponse_1, reponse_2, reponse_3, reponse_correcte)
VALUES (
    "Qu'est-ce que le 'style transfer' dans le contexte du NLP?",
    "Un processus pour transférer le style d'écriture d'un auteur à un autre.",
    "Une méthode pour changer le style de police dans un texte.",
    "Un moyen de transférer des compétences linguistiques d'une personne à une autre.",
    "Un processus pour transférer le style d'écriture d'un auteur à un autre."
);

INSERT INTO "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3" (question, reponse_1, reponse_2, reponse_3, reponse_correcte)
VALUES (
    "Qu'est-ce que la 'text generation' dans le NLP?",
    "Un processus pour générer des textes aléatoires.",
    "Une tâche qui consiste à produire automatiquement du texte de manière cohérente et significative.",
    "Une méthode pour supprimer des parties de texte.",
    "Une tâche qui consiste à produire automatiquement du texte de manière cohérente et significative."
);

INSERT INTO "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3" (question, reponse_1, reponse_2, reponse_3, reponse_correcte)
VALUES (
    "Qu'est-ce que la 'sentiment analysis' fine-grained dans le NLP?",
    "Une analyse qui ne prend pas en compte les nuances du sentiment.",
    "Une analyse qui catégorise le sentiment en plusieurs niveaux, tels que positif, neutre et négatif.",
    "Une méthode pour analyser le sentiment des mots individuels.",
    "Une analyse qui catégorise le sentiment en plusieurs niveaux, tels que positif, neutre et négatif."
);

INSERT INTO "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3" (question, reponse_1, reponse_2, reponse_3, reponse_correcte)
VALUES (
    "Qu'est-ce que le 'NLG (Natural Language Generation)'?",
    "Un processus pour générer des langues naturelles à partir de langues artificielles.",
    "Une technique qui permet aux ordinateurs de générer automatiquement des textes en langage naturel.",
    "Une méthode pour traduire des langues naturelles en langues artificielles.",
    "Une technique qui permet aux ordinateurs de générer automatiquement des textes en langage naturel."
);

update "Quizz Gestion des Exceptions C++ Niveau 2" set "reponse_1" = "throw; réexécute l'exception actuelle sans la modifier, tandis que throw e; lance une nouvelle exception basée sur une copie de l'objet exception e" where "id" = 5; 
update "Quizz Gestion des Exceptions C++ Niveau 2" set "reponse_correcte" = "throw; réexécute l'exception actuelle sans la modifier, tandis que throw e; lance une nouvelle exception basée sur une copie de l'objet exception e" where "id" = 5; 



