# Atelier programmation
## ::: B  R  I  E  F  I  N  G ::: 256  x   256   x  256
E  S  A     ·     A  N  1  ·    ·    ·  0  7  /  0  2  /  2  0     ·     1  3  /  0  3  /  2  0 

* [Objectifs](#objectifs-)
* [Contraintes ](#contraintes-)
* [En classe](#en-classe-)
* [Chez vous](#chez-vous-)
* [Description](#description-)
* [Règles](#règles-)
* [Nomenclature](#nomenclature-)
* [Attributions](#attributions-)
* [Lien vers l'app](#lien-vers-lapp-)

### OBJECTIFS :    
* Produire à 26, 256 espaces interactifs dont la dimension est fixée à 256 pixels sur 256 pixels.
* Explorer le potentiel ludique de 16 interactions.
* Développer nos compréhensions du potentiel de l'environnement web.
* Collaborer et s'identifier par rapport aux autres, en créant des espaces différents dans un but commun avec une structure commune.
* Réflexion sur le design «call to action» 
    * Clair 
    * Rapide à comprendre
    * Efficace
    * Sans texte
* **Nous exposons ce projet commun produit de nos individualités aux portes ouvertes de l’école**.

### CONTRAINTES : 
* **Techno :** WEB > HTML + CSS + Javascript
* **Dimension :** 256 x 256 pixels
* **Durée :** chacun des espaces sera vu par l'utilisateur 14 secondes
* **Quantité :** chacun de vous développe au minimum 10 espaces interactifs
* **Interaction :** chaque espace interactif demande à l'utilisateur de produire 2 actions dans un certain ordre

<img src="./public/images/interactions.jpg" alt="alt text" height="500">

### EN CLASSE :   
* Nous explorons chacune des 16 interactions :
    * Définition
    * Technique
    * Utilisation
* Nous mettons en place un canvas de développement de vos espaces interactifs.
* Nous répondons aux questions relatives à votre production.
* Nous discutons de la pertinence de votre production.
* Nous intégrons nos espaces au dispositif capable de parcourir ceux-ci.

### CHEZ VOUS :   
* Vous conceptualisez vos 10 espaces interactifs (être capable de décrire chacun en français par écrit)
* Vous dessinez vos 10 espaces interactifs
* Vous développez vos 10 espaces interactifs

### DESCRIPTION : 
|   ID  | Action      | Définition           |
|:-----:|:----------- | -------------------- |
| **0** | `TAP`       | L’utilisateur __click avec un doigt__ sur un objet |
| **1** | `DOUBLETAP` | L’utilisateur `TAP` __2x__ en peu de temps sur un objet |
| **2** | `LONGTAP`   | L’utilisateur __presse un certain temps__ sur un objet |
| **3** | `DRAG`      | L’utilisateur met un doigt sur un objet et le __glisse__ |
| **4** | `DROPFILE`  | L’utilisateur, __glisse un fichier attendu à un endroit voulu__ |
| **5** | `MOUSEENTER`    | L’utilisateur __fait entrer le curseur de souris__ sur un objet |
| **6** | `MOUSELEAVE`  | L’utilisateur __fait sortir le curseur de souris__ d'un objet |
| **7** | `KEYUP`     | L’utilisateur __relache une touche spécifique du clavier__  |
| **8** | `KEYDOWN`     | L’utilisateur __appuie une touche spécifique du clavier__ |
| **9** | `HIDE`     | L’utilisateur __cache__ la fenêtre du son navigateur |
| **A** | `SHOW`      | L’utilisateur __affiche__ la fenêtre du son navigateur |
| **B** | `WINDOWRISIZE`     | L’utilisateur __redimensionne__ la fenêtre du navigateur |
| **C** | `BEFOREPRINT`    | L’utilisateur demande à son navigateur __d'imprimer la page courante__ |
| **D** | `SCROLL`    | L’utilisateur __scroll__ en visant un objet | 
| **E** | `TIMEOUT`   | L’utilisateur __attend__ un certain temps |
| **F** | `SOUND`    | L’utilisateur __fait du bruit__ au dela d'un certain niveau sonore |

### RÈGLES : 
* L'utilisateur a pour but de **parcourir en moins d'une heure les 256 espces interactifs.**
* Pour cela, il dispose d'une page web qui encapsule tout ces espaces interactifs, appelons la : **Mécanique temporelle**.
* Au commencemant, la Mécanique temporelle affiche un espace interactif tiré au hazard. L'utilisateur doit alors **accomplir deux actions**. 
* Si l'utilisateur parvient à accomplir dans l'ordre les deux actions assignées à cet espace, **la Mécanique temporelle est notifiée. Elle referme cet espace, en sélectionne un nouveau encore à résoudre** et l'histoire continue. `AppManager.levelComplete();`
* Si l'utilisateur ne parvient pas à résoudre cet espace en moins de 14 secondes, alors **la Mécanique temporelle referme automatiquement cet espace et ouvre l'espace précédent.** 

### NOMENCLATURE : 
Chaque espace est nomé suivant la règle suivante : <br/>
"0x"+`Id_Action_1`+`Id_Action_2`
> _exemple :_ <br/>
> ... la première action à acomplir est `LONGTAP` qui à pour Id **2**<br/>
> ... la seconde action à acomplir est `WINDOWRISIZE` qui à pour Id **B**<br/>
> ... cet espace porte le nom **0x2B**

### ATTRIBUTIONS :
La colonne Acronyme vous identifie, elle contient des trigrammes composés au moyen de vos prénoms et noms. La première lettre du prénom suivie des 2 premières lettres du nom de famille. Pour les noms composés, on prend la première lettre de chaque patronyme jusqu'à composition du trigramme.
> _exemple :_ <br/>
> ... Vincent Evrard - **VEV**

|  Trigramme | Espaces à votre charge   |
|:---------- |:------------------------ |
| **GAN** | | 
| **EBE** | | 
| **MCO** | | 
| **TCA** | | 
| **FHC** | | 
| **ADA** | | 
| **LDE** | | 
| **JDE** | | 
| **TDR** | | 
| **AEH** | | 
| **AFR** | | 
| **HHA** | | 
| **THE** | | 
| **LKN** | | 
| **ELY** | | 
| **ANI** | | 
| **ANN** | | 
| **QPO** | | 
| **SRA** | | 
| **MSA** | | 
| **CMG** | | 
| **JSE** | | 
| **TSI** | | 
| **AST** | | 
| **STO** | | 
| **STR** | | 
| **ATÜ** | |
| **MVA** | |


```javascript
(new Array(256))                                                    // nouveau Tableau de 256 case
.fill(0)                                                            // ce tableau est remplit de zéros
.map((e, k)=> (
    "0x" + (k < 16 ? "0" : "") + (k.toString(16)).toUpperCase()     // remplace lez zéros par le numéros de la case converti en hexa
))
.sort(() => Math.random() - 0.5)                                    // on mélange le tableau
.sort(() => Math.random() - 0.5)                                    // on mélange le tableau
.sort(() => Math.random() - 0.5)
.sort(() => Math.random() - 0.5)
.sort(() => Math.random() - 0.5)
.join("")                                                           // le tableau est fusionné en une string
.match(new RegExp(".{1,"+ 10*4 +"}","g"))                           // coupe la string tous les 40 char
.map(e=>(
    e.match(new RegExp(".{1,"+ 4 +"}","g"))                         // chaque sous-element est coupé tous les 4 char 
    .join(" | ")                                                    // fusion des sous-sous-èlément par un pipe
)) 
.join("\n")                                                         // fusion des sous-èlément par un retour à la ligne
```
[TEST your apps](./test.app.md)

### LIEN VERS L'APP :


### LICENCE : 
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)


