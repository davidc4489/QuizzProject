import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import DropDownButton from '../DropDownButton/DropDownButton';

function Navbar () {
  const navigation = useNavigation();

  return (
    <View>
    <View style={styles.navbar}>
      <Text style={styles.logo}>
        <Text style={styles.quizz}>Quizz</Text>
        <Text style={styles.for}>For</Text>
        <Text style={styles.geeks}>Geeks</Text>
      </Text>
    </View>
    <View style={styles.titlesContainer}>
      <DropDownButton
        title="Ordinateur"
        subtitles={[
          "Hardware",
          "Mémoire",
          "Systèmes d'Exploitation",
          "Réseaux informatiques",
          "Programmation",
          "Sécurité informatique",
          "Logiciels et Applications",
          "Histoire de l'informatique",
        ]}
        subsubtitles={[
          ["Quizz Hardware Niveau 1 : Quizz 1", "Quizz Hardware Niveau 2 : Quizz 1", "Quizz Hardware Niveau 3 : Quizz 1"],
          ["Quizz Mémoire Niveau 1 : Quizz 1", "Quizz Mémoire Niveau 2 : Quizz 1", "Quizz Mémoire Niveau 3 : Quizz 1"],
          ["Quizz Systèmes d'Exploitation Niveau 1 : Quizz 1", "Quizz Systèmes d'Exploitation Niveau 2 : Quizz 1", "Quizz Systèmes d'Exploitation Niveau 3 : Quizz 1"],
          ["Quizz Réseaux informatiques Niveau 1 : Quizz 1", "Quizz Réseaux informatiques Niveau 2 : Quizz 1", "Quizz Réseaux informatiques Niveau 3 : Quizz 1"],
          ["Quizz Programmation Niveau 1 : Quizz 1", "Quizz Programmation Niveau 2 : Quizz 1", "Quizz Programmation Niveau 3 : Quizz 1"],
          ["Quizz Sécurité Informatique Niveau 1 : Quizz 1", "Quizz Sécurité Informatique Niveau 2 : Quizz 1", "Quizz Sécurité Informatique Niveau 3 : Quizz 1"],
          ["Quizz Logiciels et Applications Niveau 1 : Quizz 1", "Quizz Logiciels et Applications Niveau 2 : Quizz 1", "Quizz Logiciels et Applications Niveau 3 : Quizz 1"],
          ["Quizz Histoire de l'Informatique Niveau 1 : Quizz 1", "Quizz Histoire de l'Informatique Niveau 2 : Quizz 1", "Quizz Histoire de l'Informatique Niveau 3 : Quizz 1"],
        ]}
      />
        <DropDownButton 
                title={"React"} 
                subtitles={
                    ["Les Fondamentaux de React", 
                     "State et Props",
                     "Cycle de Vie des Composants",
                     "Gestion des Événements",
                     "Routing dans React",
                     "Gestion de l'État Global",
                     "React Hooks",
                     "Tests dans React"
                     ]}
                subsubtitles={[
                    ["Quizz Les Fondamentaux de React Niveau 1", "Quizz Les Fondamentaux de React Niveau 2", "Quizz Les Fondamentaux de React Niveau 3"],
                    ["Quizz State et Props Niveau 1", "Quizz State et Props Niveau 2", "Quizz State et Props Niveau 3"],
                    ["Quizz Cycle de Vie des Composants Niveau 1", "Quizz Cycle de Vie des Composants Niveau 2", "Quizz Cycle de Vie des Composants Niveau 3"],
                    ["Quizz Gestion des Événements Niveau 1", "Quizz Gestion des Événements Niveau 2", "Quizz Gestion des Événements Niveau 3"],
                    ["Quizz Routing dans React Niveau 1", "Quizz Routing dans React Niveau 2", "Quizz Routing dans React Niveau 3"],
                    ["Quizz Gestion de l'État Global Niveau 1", "Quizz Gestion de l'État Global Niveau 2", "Quizz Gestion de l'État Global Niveau 3"],
                    ["Quizz React Hooks Niveau 1", "Quizz React Hooks Niveau 2", "Quizz React Hooks Niveau 3"],
                    ["Quizz Tests dans React Niveau 1", "Quizz Tests dans React Niveau 2", "Quizz Tests dans React Niveau 3"],
                ]}
            />
            <DropDownButton 
                title={"Structures de Données"} 
                subtitles={
                ["Tableaux", 
                "Listes Chaînées",
                "Pile - Stack", 
                "File d'Attente", 
                "Arbre", 
                "Graphe", 
                "Table de Hachage", 
                "File de Priorité", 
                "Set", 
                "File Doublement Chaînée"
            ]}
                subsubtitles={[
                    ["Quizz Tableaux Niveau 1", "Quizz Tableaux Niveau 2", "Quizz Tableaux Niveau 3"],
                    ["Quizz Listes Chaînées Niveau 1", "Quizz Listes Chaînées Niveau 2", "Quizz Listes Chaînées Niveau 3"],
                    ["Quizz Pile - Stack Niveau 1", "Quizz Pile - Stack Niveau 2", "Quizz Pile - Stack Niveau 3"],
                    ["Quizz File d'Attente Niveau 1", "Quizz File d'Attente Niveau 2", "Quizz File d'Attente Niveau 3"],
                    ["Quizz Arbre Niveau 1", "Quizz Arbre Niveau 2", "Quizz Arbre Niveau 3"],
                    ["Quizz Graphe Niveau 1", "Quizz Graphe Niveau 2", "Quizz Graphe Niveau 3"],
                    ["Quizz Table de Hachage Niveau 1", "Quizz Table de Hachage Niveau 2", "Quizz Table de Hachage Niveau 3"],
                    ["Quizz File de Priorité Niveau 1", "Quizz File de Priorité Niveau 2", "Quizz File de Priorité Niveau 3"],
                    ["Quizz Set Niveau 1", "Quizz Set Niveau 2", "Quizz Set Niveau 3"],
                    ["Quizz File Doublement Chaînée Niveau 1", "Quizz File Doublement Chaînée Niveau 2", "Quizz File Doublement Chaînée Niveau 3"]
                ]}
                />
            <DropDownButton 
                title={"Langages de Programmation"} 
                subtitles={
                ["C", 
                 "C++", 
                 "C#", 
                 "Java", 
                 "JavaScript", 
                 "Python", 
                 "TypeScript", 
                 "JSX", 
                 "PHP", 
                 "Swift", 
                 "Go", 
                 "Ruby"]}
                subsubtitles={[
        /*C*/       ["Syntaxe", "Boucles", "Variables", "Data Types", "Conditions", "Output", "Tableaux",
                      "String", "Pointeurs", "Reference", "Fonctions", "Struct et Class", "Enum", "Manipulation de Fichiers"],
        /*C++*/     ["Les Fondamentaux de C++","Syntaxe", "Classes et Objets", "Conteneurs", "Gestion de la Mémoire", "Gestion des Exceptions", 
                     "Heritage et Polymorphisme", "Manipulation de Fichiers", "Modularité", "Multithreading", 
                     "Opérateurs", "Opérateurs de Surcharge", "Pointeurs et Références", "Programmation Générique", "STL - Standard Template Library"],
        /*C#*/      ["Les Fondamentaux de C#", "Classes et Objets", "Héritage et Interfaces", "Programmation Orientée Objet", 
                     "Gestion de la Mémoire", "Opérateurs", "Linq", "Événements et Délégués", "Exceptions", "Async/Await", 
                     "Windows Presentation Foundation - WPF", "ASP.NET", "Serialization", "Entity Framework", "Testing"],
        /*Java*/    ["Les Fondamentaux de Java", "Classes et Objets", "Héritage et Interfaces", "Polymorphisme", 
                     "Encapsulation", "Collections", "Gestion des Exceptions", "Threads", "Entrées/Sorties", 
                     "Interfaces Graphiques - Swing", "Gestion de la Mémoire", "JavaFX", "Serialization", "Annotations", "Web Services et API REST"],
    /*JavaScript */ ["Les Fondamentaux de JavaScript", "Types de Données", "Objets", "Fonctions", "Gestion des Evénements", 
                     "DOM - Document Object Model", "Asynchrone", "AJAX et Requêtes HTTP", "Closure", "Expressions Régulières - RegExp", 
                     "LocalStorage et SessionStorage", "Webpack et Gestion des Modules", "React.js", "Node.js", "Async/Await et Promesses"],
                     ["Introduction", "Syntaxe", "Structures de Contrôle", "Collections", "Programmation Orientée Objet", "Méthodes", "Exceptions",
                     "Manipulation de Fichiers", "Modules et Mixins", "Gestion de la Mémoire", "Gemmes", "Ruby on Rails", "Tests", "Programmation Fonctionnelle", "Web Scraping"],
                    ["Syntaxe", "Output", "Variables", "Data Types", "Conditions", "Boucles", "Tableaux",
                     "String", "Pointeurs", "Reference", "Fonctions", "Struct et Class", "Enum", "Manipulation de Fihiers"],
                    ["Syntaxe", "Output", "Variables", "Data Types", "Conditions", "Boucles", "Tableaux",
                     "String", "Pointeurs", "Reference", "Fonctions", "Struct et Class", "Enum", "Template", "Manipulation de Fihiers"],
                    ["Syntaxe", "Output", "Variables", "Data Types", "Conditions", "Boucles", "Tableaux",
                     "String", "Pointeurs", "Reference", "Fonctions", "Struct et Class", "Enum", "Manipulation de Fihiers"],
                    ["Syntaxe", "Output", "Variables", "Data Types", "Conditions", "Boucles", "Tableaux",
                     "String", "Pointeurs", "Reference", "Fonctions", "Struct et Class", "Enum", "Manipulation de Fihiers"],
                    ["Syntaxe", "Output", "Variables", "Data Types", "Conditions", "Boucles", "Tableaux",
                     "String", "Pointeurs", "Reference", "Fonctions", "Struct et Class", "Enum", "Manipulation de Fihiers"],
                    ["Introduction", "Syntaxe", "Structures de Contrôle", "Collections", "Programmation Orientée Objet", "Méthodes", "Exceptions",
                     "Manipulation de Fichiers", "Modules et Mixins", "Gestion de la Mémoire", "Gemmes", "Ruby on Rails", "Tests", "Programmation Fonctionnelle", "Web Scraping"]
                ]} 
                subsubsubtitles={[
                    [
                    ["Quizz Syntaxe Niveau 1", "Quizz Syntaxe Niveau 2", "Quizz Syntaxe Niveau 3"],
                    ["Quizz Boucles Niveau 1", "Quizz Boucles Niveau 2", "Quizz Boucles Niveau 3"],
                    ["Quizz Variables Niveau 1", "Quizz Variables Niveau 2", "Quizz Variables Niveau 3"],
                    ["Quizz Data Types Niveau 1", "Quizz Data Types Niveau 2", "Quizz Data Types Niveau 3"],
                    ["Quizz Conditions Niveau 1", "Quizz Conditions Niveau 2", "Quizz Conditions Niveau 3"],
                    ["Quizz Outputs C Niveau 1", "Quizz Outputs C Niveau 2", "Quizz Outputs C Niveau 3"],
                    ["Quizz Tableaux Niveau 1", "Quizz Tableaux Niveau 2", "Quizz Tableaux Niveau 3"],
                    ["Quizz Strings Niveau 1", "Quizz Strings Niveau 2", "Quizz Strings Niveau 3"],
                    ["Quizz Pointeurs Niveau 1", "Quizz Pointeurs Niveau 2", "Quizz Pointeurs Niveau 3"],
                    ["Quizz References Niveau 1", "Quizz References Niveau 2", "Quizz References Niveau 3"],
                    ["Quizz Fonctions Niveau 1", "Quizz Fonctions Niveau 2", "Quizz Fonctions Niveau 3"],
                    ["Quizz Struct et Class Niveau 1", "Quizz Struct et Class Niveau 2", "Quizz Struct et Class Niveau 3"],
                    ["Quizz Enum Niveau 1", "Quizz Enum Niveau 2", "Quizz Enum Niveau 3"],
                    ["Quizz Manipulation de Fichiers Niveau 1", "Quizz Manipulation de Fichiers Niveau 2", "Quizz Manipulation de Fichiers Niveau 3"]
                    ],
                    [
                    ["Quizz Les Fondamentaux de C++ Niveau 1", "Quizz Les Fondamentaux de C++ Niveau 2", "Quizz Les Fondamentaux de C++ Niveau 3"],
                    ["Quizz Syntaxe C++ Niveau 1", "Quizz Syntaxe C++ Niveau 2", "Quizz Syntaxe C++ Niveau 3"],
                    ["Quizz Classes et Objets C++ Niveau 1", "Quizz Classes et Objets C++ Niveau 2", "Quizz Classes et Objets C++ Niveau 3"],
                    ["Quizz Tableau C++ Niveau 1", "Quizz Tableau C++ Niveau 2", "Quizz Tableau C++ Niveau 3",
                     "Quizz Vector C++ Niveau 1", "Quizz Vector C++ Niveau 2", "Quizz Vector C++ Niveau 3",
                     "Quizz Unordered Map C++ Niveau 1", "Quizz Unordered Map C++ Niveau 2", "Quizz Unordered Map C++ Niveau 3",
                     "Quizz Map C++ Niveau 1", "Quizz Map C++ Niveau 2", "Quizz Map C++ Niveau 3",
                     "Quizz Stack C++ Niveau 1", "Quizz Stack C++ Niveau 2", "Quizz Stack C++ Niveau 3",
                     "Quizz List C++ Niveau 1", "Quizz List C++ Niveau 2", "Quizz List C++ Niveau 3",
                     "Quizz Forward List C++ Niveau 1", "Quizz Forward List C++ Niveau 2", "Quizz Forward List C++ Niveau 3",
                     "Quizz Queue C++ Niveau 1", "Quizz Queue C++ Niveau 2", "Quizz Queue C++ Niveau 3",
                     "Quizz Deque C++ Niveau 1", "Quizz Deque C++ Niveau 2", "Quizz Deque C++ Niveau 3",
                     "Quizz Unordered Set C++ Niveau 1", "Quizz Unordered Set C++ Niveau 2", "Quizz Unordered Set C++ Niveau 3",
                     "Quizz Set C++ Niveau 1", "Quizz Set C++ Niveau 2", "Quizz Set C++ Niveau 3"],
                    ["Quizz Gestion de la Mémoire C++ Niveau 1", "Quizz Gestion de la Mémoire C++ Niveau 2", "Quizz Gestion de la Mémoire C++ Niveau 3"],
                    ["Quizz Gestion des Exceptions C++ Niveau 1", "Quizz Gestion des Exceptions C++ Niveau 2", "Quizz Gestion des Exceptions C++ Niveau 3"],
                    ["Quizz Heritage et Polymorphisme C++ Niveau 1", "Quizz Heritage et Polymorphisme C++ Niveau 2", "Quizz Heritage et Polymorphisme C++ Niveau 3"],
                    ["Quizz Manipulation de Fichiers C++ Niveau 1", "Quizz Manipulation de Fichiers C++ Niveau 2", "Quizz Manipulation de Fichiers C++ Niveau 3"],
                    ["Quizz Modularité C++ Niveau 1", "Quizz SynModularitétaxe C++ Niveau 2", "Quizz Modularité C++ Niveau 3"],
                    ["Quizz Multithreading C++ Niveau 1", "Quizz Multithreading C++ Niveau 2", "Quizz Syntaxe C++ Niveau 3"],
                    ["Quizz Opérateurs C++ Niveau 1", "Quizz Opérateurs C++ Niveau 2", "Quizz Opérateurs C++ Niveau 3"],
                    ["Quizz Opérateurs de Surcharge C++ Niveau 1", "Quizz Opérateurs de Surcharge C++ Niveau 2", "Quizz Opérateurs de Surcharge C++ Niveau 3"],
                    ["Quizz Pointeurs et Références C++ Niveau 1", "Quizz Pointeurs et Références C++ Niveau 2", "Quizz Pointeurs et Références C++ Niveau 3"],
                    ["Quizz Programmation Générique C++ Niveau 1", "Quizz Programmation Générique C++ Niveau 2", "Quizz Programmation Générique C++ Niveau 3"],
                    ["Quizz STL - Standard Template Library C++ Niveau 1", "Quizz STL - Standard Template Library C++ Niveau 2", "Quizz STL - Standard Template Library C++ Niveau 3"]
                    ],
                    [
                    ["Quizz Les Fondamentaux de CSharp Niveau 1", "Quizz Les Fondamentaux de CSharp Niveau 2", "Quizz Les Fondamentaux de CSharp Niveau 3"],
                    ["Quizz Classes et Objets CSharp Niveau 1", "Quizz Classes et Objets CSharp Niveau 2", "Quizz Classes et Objets CSharp Niveau 3"],
                    ["Quizz Héritage et Interfaces CSharp Niveau 1", "Quizz Héritage et Interfaces CSharp Niveau 2", "Quizz Héritage et Interfaces CSharp Niveau 3"],
                    ["Quizz Programmation Orientée Objet CSharp Niveau 1", "Quizz Programmation Orientée Objet CSharp Niveau 2", "Quizz Programmation Orientée Objet CSharp Niveau 3"],
                    ["Quizz Gestion de la Mémoire CSharp Niveau 1", "Quizz Gestion de la Mémoire CSharp Niveau 2", "Quizz Gestion de la Mémoire CSharp Niveau 3"],
                    ["Quizz Opérateurs CSharp Niveau 1", "Quizz Opérateurs CSharp Niveau 2", "Quizz Opérateurs CSharp Niveau 3"],
                    ["Quizz Linq CSharp Niveau 1", "Quizz Linq CSharp Niveau 2", "Quizz Linq CSharp Niveau 3"],
                    ["Quizz Événements et Délégués CSharp Niveau 1", "Quizz Événements et Délégués CSharp Niveau 2", "Quizz Événements et Délégués CSharp Niveau 3"],
                    ["Quizz Exceptions CSharp Niveau 1", "Quizz Exceptions CSharp Niveau 2", "Quizz Exceptions CSharp Niveau 3"],
                    ["Quizz Async/Await CSharp Niveau 1", "Quizz Async/Await CSharp Niveau 2", "Quizz Async/Await CSharp Niveau 3"],
                    ["Quizz Windows Presentation Foundation - WPF CSharp Niveau 1", "Quizz Windows Presentation Foundation - WPF CSharp Niveau 2", "Quizz Windows Presentation Foundation - WPF CSharp Niveau 3"],
                    ["Quizz ASP.NET CSharp Niveau 1", "Quizz ASP.NET CSharp Niveau 2", "Quizz ASP.NET CSharp Niveau 3"],
                    ["Quizz Serialization CSharp Niveau 1", "Quizz Serialization C# Niveau 2", "Quizz Serialization CSharp Niveau 3"],
                    ["Quizz Entity Framework CSharp Niveau 1", "Quizz Entity Framework CSharp Niveau 2", "Quizz Entity Framework CSharp Niveau 3"],
                    ["Quizz Testing CSharp Niveau 1", "Quizz Testing CSharp Niveau 2", "Quizz Testing CSharp Niveau 3"]
                    ],
                    [
                    ["Quizz Les Fondamentaux de Java Niveau 1", "Quizz Les Fondamentaux de Java Niveau 2", "Quizz Les Fondamentaux de Java Niveau 3"],
                    ["Quizz Classes et Objets Java Niveau 1", "Quizz Classes et Objets Java Niveau 2", "Quizz Classes et Objets Java Niveau 3"],
                    ["Quizz Héritage et Interfaces Java Niveau 1", "Quizz Héritage et Interfaces Java Niveau 2", "Quizz Héritage et Interfaces Java Niveau 3"],
                    ["Quizz Polymorphisme Java Niveau 1", "Quizz Polymorphisme Java Niveau 2", "Quizz Polymorphisme Java Niveau 3"],
                    ["Quizz Encapsulation Java Niveau 1", "Quizz Encapsulation Java Niveau 2", "Quizz Encapsulation Java Niveau 3"],
                    ["Quizz Collections Java Niveau 1", "Quizz Collections Java Niveau 2", "Quizz Collections Java Niveau 3"],
                    ["Quizz Gestion des Exceptions Java Niveau 1", "Quizz Gestion des Exceptions Java Niveau 2", "Quizz Gestion des Exceptions Java Niveau 3"],
                    ["Quizz Threads Java Niveau 1", "Quizz Threads Java Niveau 2", "Quizz Threads Java Niveau 3"],
                    ["Quizz Entrées/Sorties Java Niveau 1", "Quizz Entrées/Sorties Java Niveau 2", "Quizz Entrées/Sorties Java Niveau 3"],
                    ["Quizz Interfaces Graphiques - Swing Java Niveau 1", "Quizz Interfaces Graphiques - Swing Java Niveau 2", "Quizz Interfaces Graphiques - Swing Java Niveau 3"],
                    ["Quizz Gestion de la Mémoire Java Niveau 1", "Quizz Gestion de la Mémoire Java Niveau 2", "Quizz Gestion de la Mémoire Java Niveau 3"],
                    ["Quizz JavaFX Java Niveau 1", "Quizz JavaFX Java Niveau 2", "Quizz JavaFX Java Niveau 3"],
                    ["Quizz Serialization Java Niveau 1", "Quizz Serialization Java Niveau 2", "Quizz Serialization Java Niveau 3"],
                    ["Quizz Annotations Java Niveau 1", "Quizz Annotations Java Niveau 2", "Quizz Annotations Java Niveau 3"],
                    ["Quizz Web Services - API REST Java Niveau 1", "Quizz Web Services - API REST Java Niveau 2", "Quizz Web Services - API REST Java Niveau 3"]
                    ],
                    [
                    ["Quizz Les Fondamentaux de JavaScript Niveau 1", "Quizz Les Fondamentaux de JavaScript Niveau 2", "Quizz Les Fondamentaux de JavaScript Niveau 3"],
                    ["Quizz Types de Données JavaScript Niveau 1", "Quizz Types de Données JavaScript Niveau 2", "Quizz Types de Données JavaScript Niveau 3"],
                    ["Quizz Objets JavaScript Niveau 1", "Quizz Objets JavaScript Niveau 2", "Quizz Objets JavaScript Niveau 3"],
                    ["Quizz Fonctions JavaScript Niveau 1", "Quizz Fonctions JavaScript Niveau 2", "Quizz Fonctions JavaScript Niveau 3"],
                    ["Quizz Gestion des Evénements JavaScript Niveau 1", "Quizz Gestion des Evénements JavaScript Niveau 2", "Quizz Gestion des Evénements JavaScript Niveau 3"],
                    ["Quizz DOM - Document Object Model JavaScript Niveau 1", "Quizz DOM - Document Object Model JavaScript Niveau 2", "Quizz DOM - Document Object Model JavaScript Niveau 3"],
                    ["Quizz Asynchrone JavaScript Niveau 1", "Quizz Asynchrone JavaScript Niveau 2", "Quizz Asynchrone JavaScript Niveau 3"],
                    ["Quizz AJAX et Requêtes HTTP JavaScript Niveau 1", "Quizz AJAX et Requêtes HTTP JavaScript Niveau 2", "Quizz AJAX et Requêtes HTTP JavaScript Niveau 3"],
                    ["Quizz Closure JavaScript Niveau 1", "Quizz Closure JavaScript Niveau 2", "Quizz Closure JavaScript Niveau 3"],
                    ["Quizz Expressions Régulières - RegExp Niveau 1", "Quizz Expressions Régulières - RegExp Java Niveau 2", "Quizz Expressions Régulières - RegExp JavaScript Niveau 3"],
                    ["Quizz LocalStorage et SessionStorage JavaScript Niveau 1", "Quizz LocalStorage et SessionStorage JavaScript Niveau 2", "Quizz LocalStorage et SessionStorage JavaScript Niveau 3"],
                    ["Quizz Webpack et Gestion des Modules JavaScript Niveau 1", "Quizz Webpack et Gestion des Modules JavaScript Niveau 2", "Quizz Webpack et Gestion des Modules JavaScript Niveau 3"],
                    ["Quizz React.js JavaScript Niveau 1", "Quizz React.js JavaScript Niveau 2", "Quizz React.js JavaScript Niveau 3"],
                    ["Quizz Node.js JavaScript Niveau 1", "Quizz Node.js JavaScript Niveau 2", "Quizz Node.js JavaScript Niveau 3"],
                    ["Quizz Async/Await et Promesses JavaScript Niveau 1", "Quizz Async/Await et Promesses JavaScript Niveau 2", "Quizz Async/Await et Promesses JavaScript Niveau 3"]
                    ],
                    [], [], [], [], [], [],
                    [
                    ["Quizz Introduction Ruby Niveau 1", "Quizz Introduction Ruby Niveau 2", "Quizz Introduction Ruby Niveau 3"],
                    ["Quizz Syntaxe Ruby Niveau 1", "Quizz Syntaxe Ruby Niveau 2", "Quizz Syntaxe Ruby Niveau 3"],
                    ["Quizz Structures de Contrôle Ruby Niveau 1", "Quizz Structures de Contrôle Ruby Niveau 2", "Quizz Structures de Contrôle Ruby Niveau 3"],
                    ["Quizz Collections Ruby Niveau 1", "Quizz Collections Ruby Niveau 2", "Quizz Collections Ruby Niveau 3"],
                    ["Quizz Programmation Orientée Objet Ruby Niveau 1", "Quizz Programmation Orientée Objet Ruby Niveau 2", "Quizz Programmation Orientée Objet Ruby Niveau 3"],
                    ["Quizz Méthodes Ruby Niveau 1", "Quizz Méthodes Ruby Niveau 2", "Quizz Méthodes Ruby Niveau 3"],
                    ["Quizz Exceptions Ruby Niveau 1", "Quizz Exceptions Ruby Niveau 2", "Quizz Exceptions Ruby Niveau 3"],
                    ["Quizz Manipulation de Fichiers Ruby Niveau 1", "Quizz Manipulation de Fichiers Ruby Niveau 2", "Quizz Manipulation de Fichiers Ruby Niveau 3"],
                    ["Quizz Modules et Mixins Ruby Niveau 1", "Quizz Modules et Mixins Ruby Niveau 2", "Quizz Modules et Mixins Ruby Niveau 3"],
                    ["Quizz Gestion de la Mémoire Ruby Niveau 1", "Quizz Gestion de la Mémoire Ruby Niveau 2", "Quizz Gestion de la Mémoire Ruby Niveau 3"],
                    ["Quizz Gemmes Ruby Niveau 1", "Quizz Gemmes Ruby Niveau 2", "Quizz Gemmes Ruby Niveau 3"],
                    ["Quizz Ruby on Rails Ruby Niveau 1", "Quizz Ruby on Rails Ruby Niveau 2", "Quizz Ruby on Rails Ruby Niveau 3"],
                    ["Quizz Tests Ruby Niveau 1", "Quizz Tests Ruby Niveau 2", "Quizz Tests Ruby Niveau 3"],
                    ["Quizz Programmation Fonctionnelle Ruby Niveau 1", "Quizz Programmation Fonctionnelle Ruby Niveau 2", "Quizz Programmation Fonctionnelle Ruby Niveau 3"],
                    ["Quizz Web Scraping Ruby Niveau 1", "Quizz Web Scraping Ruby Niveau 2", "Quizz Web Scraping Ruby Niveau 3"],
                    ],
            ]}
                 />
                 <DropDownButton
                  title="Machine Learning"
                  subtitles={[
                    "Fondamentaux du Machine Learning",
                    "Algorithmes d'Apprentissage Supervisé",
                    "Réseaux de Neurones et Deep Learning",
                    "Prétraitement des Données",
                    "Évaluation des Modèles",
                    "Sélection de Modèle et Validation Croisée",
                    "Ensemble Learning",
                    "Algorithmes d'Apprentissage Non Supervisé",
                    "Traitement du Langage Naturel (NLP)",
                    "Apprentissage par Renforcement",
                    "Réseaux de Neurones Convolutifs (CNN)",
                    "Traitement d'Images",
                    "Autoencoders",
                    "Sélection de Caractéristiques",
                    "Éthique en Machine Learning",
                    "Interprétabilité des Modèles",
                    "Apprentissage Semi-Supervisé",
                    "Déploiement de Modèles",
                    "Évolution des Modèles de Machine Learning",
                    "Génération de Données Synthétiques"
                  ]}
                  subsubtitles={[
                    ["Quizz Fondamentaux Machine Learning Niveau 1", "Quizz Fondamentaux Machine Learning Niveau 2", "Quizz Fondamentaux Machine Learning Niveau 3"],
                    ["Quizz Algorithmes d'Apprentissage Supervisé Machine Learning Niveau 1", "Quizz Algorithmes d'Apprentissage Supervisé Machine Learning Niveau 2", "Quizz Algorithmes d'Apprentissage Supervisé Machine Learning Niveau 3"],
                    ["Quizz Réseaux de Neurones et Deep Learning Machine Learning Niveau 1", "Quizz Réseaux de Neurones et Deep Learning Machine Learning Niveau 2", "Quizz Réseaux de Neurones et Deep Learning Machine Learning Niveau 3"],
                    ["Quizz Prétraitement des Données Machine Learning Niveau 1", "Quizz Prétraitement des Données Machine Learning Niveau 2", "Quizz Prétraitement des Données Machine Learning Niveau 3"],
                    ["Quizz Évaluation des Modèles Machine Learning Niveau 1", "Quizz Évaluation des Modèles Machine Learning Niveau 2", "Quizz Évaluation des Modèles Machine Learning Niveau 3"],
                    ["Quizz Sélection de Modèle et Validation Croisée Machine Learning Niveau 1", "Quizz Sélection de Modèle et Validation Croisée Machine Learning Niveau 2", "Quizz Sélection de Modèle et Validation Croisée Machine Learning Niveau 3"],
                    ["Quizz Ensemble Learning Machine Learning Niveau 1", "Quizz Ensemble Learning Machine Learning Niveau 2", "Quizz Ensemble Learning Machine Learning Niveau 3"],
                    ["Quizz Algorithmes d'Apprentissage Non Supervisé Machine Learning Niveau 1", "Quizz Algorithmes d'Apprentissage Non Supervisé Machine Learning Niveau 2", "Quizz Algorithmes d'Apprentissage Non Supervisé Machine Learning Niveau 3"],
                    ["Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 1", "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 2", "Quizz Traitement du Langage Naturel (NLP) Machine Learning Niveau 3"],
                    ["Quizz Apprentissage par Renforcement Machine Learning Niveau 1", "Quizz Apprentissage par Renforcement Machine Learning Niveau 2", "Quizz Apprentissage par Renforcement Machine Learning Niveau 3"],
                    ["Quizz Réseaux de Neurones Convolutifs (CNN) Machine Learning Niveau 1", "Quizz Réseaux de Neurones Convolutifs (CNN) Machine Learning Niveau 2", "Quizz Réseaux de Neurones Convolutifs (CNN) Machine Learning Niveau 3"],
                    ["Quizz Traitement d'Images Machine Learning Niveau 1", "Quizz Traitement d'Images Machine Learning Niveau 2", "Quizz Traitement d'Images Machine Learning Niveau 3"],
                    ["Quizz Autoencoders Machine Learning Niveau 1", "Quizz Autoencoders Machine Learning Niveau 2", "Quizz Autoencoders Machine Learning Niveau 3"],
                    ["Quizz Sélection de Caractéristiques Machine Learning Niveau 1", "Quizz Sélection de Caractéristiques Machine Learning Niveau 2", "Quizz Sélection de Caractéristiques Machine Learning Niveau 3"],
                    ["Quizz Éthique en Machine Learning Machine Learning Niveau 1", "Quizz Éthique en Machine Learning Machine Learning Niveau 2", "Quizz Éthique en Machine Learning Machine Learning Niveau 3"],
                    ["Quizz Interprétabilité des Modèles Machine Learning Niveau 1", "Quizz Interprétabilité des Modèles Machine Learning Niveau 2", "Quizz Interprétabilité des Modèles Machine Learning Niveau 3"],
                    ["Quizz Apprentissage Semi-Supervisé Machine Learning Niveau 1", "Quizz Apprentissage Semi-Supervisé Machine Learning Niveau 2", "Quizz Apprentissage Semi-Supervisé Machine Learning Niveau 3"],
                    ["Quizz Déploiement de Modèles Machine Learning Niveau 1", "Quizz Déploiement de Modèles Machine Learning Niveau 2", "Quizz Déploiement de Modèles Machine Learning Niveau 3"],
                    ["Quizz Évolution des Modèles de Machine Learning Machine Learning Niveau 1", "Quizz Évolution des Modèles de Machine Learning Machine Learning Niveau 2", "Quizz Évolution des Modèles de Machine Learning Machine Learning Niveau 3"],
                    ["Quizz Génération de Données Synthétiques Machine Learning Niveau 1", "Quizz Génération de Données Synthétiques Machine Learning Niveau 2", "Quizz Génération de Données Synthétiques Machine Learning Niveau 3"],
                  ]}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#3498db',
  },
  logo: {
    marginLeft: '30%'
  },
  quizz: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  for: {
    fontSize: 18,
    color: '#f39c12',
  },
  geeks: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  titlesContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20%',
    marginTop: '10%',
    height: '70%'
  },
});

export default Navbar;

// HTML, CSS, SQL, GIT, Linux, 
