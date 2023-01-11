const windowFeatures = "left=800,top=250,width=320,height=320";
const links = document.querySelectorAll("a[target='SingleSecondaryWindowName']");
window.open("./login.htm", "loginWindow", windowFeatures);
let windowObjectReference = null;
let previousURL;

function openRequestedSingleTab(url) {
    if (windowObjectReference === null || windowObjectReference.closed) {
      windowObjectReference = window.open(url, "SingleSecondaryWindowName", windowFeatures);
    } else if (previousURL !== url) {
      windowObjectReference = window.open(url, "SingleSecondaryWindowName", windowFeatures);
      windowObjectReference.focus();
    } else {
      windowObjectReference.focus();
    };
    previousURL = url;
  }

  for (const link of links) {
    link.addEventListener("click", (event) => {
      openRequestedSingleTab(link.href);
      event.preventDefault();
    }, false);
  }

document.getElementById("bouton").addEventListener("click", openWindow);
document.getElementById("popup").addEventListener("click", openWindow);


// étape 1

// on configure la fenêtre
// const windowFeatures = "left=100,top=100,width=320,height=320";
// vous pouvez adapter ce code à votre convenance
// étape 2

// on crée une globale pour gérer la fenêtre
// let windowObjectReference = null;
// la valeur est null pour pouvoir réaliser des tests avec if
// étape 3

// on crée une globale pour gérer les url
// let previousURL;
// pas la peine de passer une valeur
// à chaque click l'url sera enregistrée dans cette variable

// étape 4

// la fonction pour gérer la fenêtre
// function openRequestedSingleTab(url) {
//   if (windowObjectReference === null || windowObjectReference.closed) {
//     windowObjectReference = window.open(url, "SingleSecondaryWindowName", windowFeatures);
//   } else if (previousURL !== url) {
//     windowObjectReference = window.open(url, "SingleSecondaryWindowName", windowFeatures);
//     windowObjectReference.focus();
//   } else {
//     windowObjectReference.focus();
//   };
//   previousURL = url;
// }

// on va l'expliquer ligne à ligne
// function openRequestedSingleTab(url)  => on instance la fonction, elle nécessite un paramètre qui est l'url de la page que l'on veut ouvrir
// if (windowObjectReference === null || windowObjectReference.closed) { } => on test si windowObjectReference est null (valeur par défaut) ou si la fenêtre est fermée
// || signifie "OU" (OR en anglais)

// quand vous faites un if ou un elseif, quelque soit le langage, limitez le nombre de condition
// 2 ou 3, pas plus
// à l'itérieur du if => windowObjectReference = window.open(url, "SingleSecondaryWindowName", windowFeatures);
// on ouvre la fenêtre (et Robin se jete dans le vide)
// c'est ici que le paramètre url est utilisé
// la fonction open() à 3 paramètres : l'url, le nom de la fenêtre, la config de la fenêtre
// des questions sur ce point ?
// deuxième test => else if (previousURL !== url) { }
// on vérifie que le contenu de previousURL est différent du paramètre url
// c'est là que l'on va recharger la fenêtre
// les fenêtres, c'est comme les revolver, ça se recharge
// dans le else if => windowObjectReference = window.open(url, "SingleSecondaryWindowName", windowFeatures);
// on recharge la fenêtre, avec les mêmes réglages que dans le if
// toujours dans le else if => windowObjectReference.focus();
// on rend la fenêtre active
// NB : il existe un événement onFocus, donc avec la fonction focus() on peut s'amuser à provoquer des événements dans la fenêtre
// après 2 tests, on finit par un else => else { }
// on se contente de mettre le focus sur la fenêtre => windowObjectReference.focus();
// après les tests conditionnels, on remplit la variable previousURL => previousURL = url;
// pour rappel, previousURL est une globale dans ce script

// étape 5 

// on crée une constante pour les liens => const links = document.querySelectorAll("a[target='SingleSecondaryWindowName']");
// en utilisant querySelectorAll on sélectionne tous les liens d'un coup
// il faut juste qu'il contienne le code => target='SingleSecondaryWindowName' 
// querySelectorAll est à manier avec précaution

// étape 6

// on va créé les eventListener
// comme on a un queryselector, on va faire une boucle
// for (const link of links) {
//   link.addEventListener("click", (event) => {
//     openRequestedSingleTab(link.href);
//     event.preventDefault();
//   }, false);
// }
// on utilise une boucle for => for (const link of links) { }
// const link => il s'agit de l'attribut href des a 
// noté qu'en fonction du langage, un élément (le lien dans le cas présent) peut s'appeler de manière différente
// ensuite on crée le eventlistener =>  link.addEventListener()
// l'événement => "click"
// la fonction =>  (event) => {}
// il s'agit d'une fonction fléchée
// ça correspond à => function (event) {}
// dans le cas de event, il s'agit plus d'une convention que d'un réel gain de temps
// tout le monde a mis "convention" dans son lexique ?
// à l'intérieur de la fonction fléchée => openRequestedSingleTab(link.href);
//     event.preventDefault();
// openRequestedSingleTab(link.href); => on appelle la fonction pour ouvrir la fenêtre, link.href sert de paramètre
// event.preventDefault(); => on bloque le comportement normal de event, ce qui évite qu'une fenêtre s'ouvre toute seule
// le false à la fin du code sert à gérer l propagation de l'élément