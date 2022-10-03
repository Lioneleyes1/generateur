
var citations = [
  "* La vie, les femmes, le monde sont tous les memes quand  tu leurs accordes de l'importance il te fuit, quand tu ne t'intéresse pas à eux, ils courrent derriéres toi.*<br>"+
  "<h4>CHEIKH AHMADOU BAMBA MBACKE</h4>",

  "*Mes fils aiez la patience d'un sarognard  car il sait qu'il ne doit vivre qu'avec la volonté devine .*<br>"+
  "<h4>Mame Cheikh Ibrahima Fall</h4>",

  "*les mensonges ne durent que trois jours, le jour que tu le fait le jour qu'on le sache  et le jour que tout le monde te lache .*<br>"+
  "<h>Mame Cheikh Ibrahima Fall</h4>",

  "*Dans ce monde il faut travailler comme tu si tu ne le quitte jamais mais n'empéche qu'il faut prier comme si t'allais mourrir aujourd'hui .*<br>"+
  "<h4>Serigne Saliou Mbacké</h4>",

  "*Celui qui n'est pas discipliné n'auras rien. *<br>"+
  "<h4>Serigne Sidy Moukhtar Mbacké</h4>",

  "*Ibrahima fall est un fin fond diplomate remarquablement intelligent, quand tu le voit venir tu sais que c'est  un diplomate quant tu le vois partir tu sais que c'est un disciple de chekh Akhmadou Bamba .*<br>"+
  "<h4></h4>",

  "*pain is temporary if you want it, you gotta go get it .*<br>"+
  "<h4>Benlionelscott</h4>",

"*soit je gagne soit j'ai de l'experience mais je ne perd jamais .*<br>"+
  "<h4>Nelson Mandela</h4>",

  "*Respecter son prochain c'est se respecter sois meme .*<br>"+
  "<h4>Ngagne Diaw Fall</h4>",

  "* Parfois il faut continuer notre chemin sans certaines personnes .  Si ellles sont vraiment destinées à etre dans notre vie . Elles nous rattraperons.*<br>"+
  "<h4>Sept'Hanou:Plaisir des yeux</h4>",
]
//utiliser la méthode aléatoire
Math.floor(Math.random() * (max - min + 1)) +1;
//initialiser un centre de lancement
var randomNumber = Math.floor(Math.random()*citations.length);

//afficher les donnèes du centre 
document.getElementById('citations').innerHTML = citations[randomNumber];

//établir un fonction de auto(génére et stock en meme temps des citations)
function fallpoint(){
    var randomNumber = Math.floor(Math.random()*citations.length);
    document.getElementById('citations').innerHTML = citations[randomNumber];
}







      