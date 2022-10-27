// Pour ce kata vous allez devoir écrire
// une fonction qui prend en paramètre
// une chaîne de caractères et qui, à
// la manière d'un beau cadeau, affiche
// dans la console cette même chaîne de
// caractères entourée d'un cadre fait
// d'étoiles (comme ceci : *). Chaque
// mot s'affiche sur une ligne distincte,
// et les dimensions du cadre ne doivent
// pas être affectées par la longueur
// des différents mots...

// Happy coding!

const inAFrame = (str) => {
  // La magie s'opère ici!
  const arr = str.split(" ");
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  let output = "";
  for (let i = 0; i < arr.length + 2; i++) {
    for (let j = 0; j < longest.length + 4; j++) {
      if (i === 0 || i === arr.length + 1) {
        output += "*";
      } else {
        if (j === 0) {
          output += "* ";
        } else if (j === longest.length + 3) {
          output += " *";
        } else if (j === 1) {
          output += arr[i - 1];
        } else if (arr[i - 1].length + j <= longest.length + 1) {
          output += " ";
        }
      }
    }
    console.log(output);
    output = "";
  }
};

inAFrame("Hakuna matata mais quelle phrase magnifique");
// Le résultat attendu :
//
// **************
// * Hakuna     *
// * matata     *
// * mais       *
// * quelle     *
// * phrase     *
// * magnifique *
// **************
