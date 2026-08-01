$(document).ready(function() {
    //liste des catégories : yellow, ct, cs, survie, dressage, équipement, comestible, capture, évolutif

var products = [
{
      name: "CT N°001 - Bélier",
      categories_videgrenier: "yellow",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 1
    },
{
      name: "CT N°030 - Aboiement",
      categories_videgrenier: "yellow",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 1
    },
{
      name: "CT N°060 - Demi-Tour",
      categories_videgrenier: "yellow",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/DiRjhnc.png",
      price: 425,
      
      qty_videgrenier: 1
    },
{
      name: "CT N°083 - Direct Toxik",
      categories_videgrenier: "yellow",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/dKxitmG.png",
      price: 425,
      
      qty_videgrenier: 1
    },
{
      name: "CT N°183 - Croc Fatal",
      categories_videgrenier: "yellow",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 1
    },

{
      name: "Accro Griffe",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Les attaques piégeantes durent 7 tours au lieu de 5. Attaques compatibles : Claquoir, Danse Flamme, Étreinte, Harcèlement, Ligotage, Siphon, Tourbi-Sable, Vortex Magma.",
      imageUrl: "https://2img.net/i.imgur.com/EMfvS4n.png",
      price: 325,
      
      qty_videgrenier: 0
    },
{
      name: "Bande Étreinte",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Les dégâts résiduels des attaques piégeantes s’élèvent à ⅙ des PV max de la cible, au lieu de ⅛.",
      imageUrl: "https://2img.net/i.imgur.com/qez6LtJ.png",
      price: 350,
      
      qty_videgrenier: 0
    },
    {
      name: "Bandeau Choix",
      categories_videgrenier: "équipement",
      categories_boutique: "rouge équipement",
      description: "Augmente la statistique d'Attaque du porteur de 50% (x1,5). En contrepartie, il n'est plus possible que d'utiliser une seule attaque du moveset jusqu'à ce que le Pokémon soit échangé.",
      imageUrl: "https://2img.net/i.imgur.com/GkKq17K.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Bandeau Muscle",
      categories_videgrenier: "équipement",
      categories_boutique: "rouge équipement",
      description: "La puissance des attaques physiques augmente de 10% (x1,1).",
      imageUrl: "https://2img.net/i.imgur.com/MCfGIDj.png",
      price: 425,
      
      qty_videgrenier: 0
    },
    {
      name: "Bouton Fuite",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "Lorsque le porteur est touché par n’importe quelle attaque, il est échangé avec un autre Pokémon de l’équipe. Fonctionne une fois par combat.",
      imageUrl: "https://2img.net/i.imgur.com/JXMFf1A.png",
      price: 300,
      
      qty_videgrenier: 0
    },
    {
      name: "Cape Obscure",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "Le porteur n’est pas affecté par les effets additionnels des capacités reçues, à l’exception de ceux infligés par les capacités piégeantes.",
      imageUrl: "https://www.pokepedia.fr/images/thumb/9/97/Miniature_Cape_Obscure_EV.png/32px-Miniature_Cape_Obscure_EV.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Carton Rouge",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "Le porteur, s’il est ciblé par une attaque offensive, force le Pokémon attaquant à être échangé. Fonctionne une seule fois par combat.",
      imageUrl: "https://2img.net/i.imgur.com/JXMFf1A.png",
      price: 350,
      
      qty_videgrenier: 1
    },
    {
      name: "Casque Brut",
      categories_videgrenier: "équipement",
      categories_boutique: "rouge équipement",
      description: "Si un Pokémon effectue une attaque directe sur le porteur de cet objet, il perdra 1/6e de ses PV maximums.",
      imageUrl: "https://2img.net/i.imgur.com/sE9wScJ.png",
      price: 550,
      
      qty_videgrenier: 0
    },
    {
      name: "Ceinture Force",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Si le porteur a 100% de ses PV et subit une attaque qui devrait le mettre KO, il résistera à l’attaque en gardant 1 PV.",
      imageUrl: "https://2img.net/i.imgur.com/aJrZ91D.png",
      price: 475,
      
      qty_videgrenier: 0
    },
    {
      name: "Ceinture Pro",
      categories_videgrenier: "équipement",
      categories_boutique: "rouge équipement",
      description: "La puissance des attaques super efficaces est augmentée de 20% (x1,2).",
      imageUrl: "https://2img.net/i.imgur.com/AzL7Fnf.png",
      price: 475,
      
      qty_videgrenier: 0
    },
    {
      name: "Dé Pipé",
      categories_videgrenier: "équipement",
      categories_boutique: "rouge équipement",
      description: "Les capacités à multi-coups infligées par le porteur touchent 4 fois lorsque c’est le maximum de coups possibles, et lorsque le maximum de coups est 5, elles ont 50 % de chances de toucher 5 fois, et 50% de chance de toucher 4 fois.",
      imageUrl: "https://www.pokepedia.fr/images/thumb/5/5a/Miniature_D%C3%A9_Pip%C3%A9_EV.png/32px-Miniature_D%C3%A9_Pip%C3%A9_EV.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Émulateur",
      categories_videgrenier: "équipement",
      categories_boutique: "rouge équipement",
      description: "Émule les objets spécifiques aux Pokémon (ex : Poireau, Masse Os, Balle Lumière...)",
      imageUrl: "https://2img.net/i.imgur.com/feggJef.png",
      price: 575,
      
      qty_videgrenier: 0
    },
    
    {
      name: "Évoluroc",
      categories_videgrenier: "équipement",
      categories_boutique: "rouge équipement",
      description: "Si le porteur de cet objet possède une évolution, sa défense et sa défense spéciale sont augmentées de 50% (x1,5).",
      imageUrl: "https://2img.net/i.imgur.com/g67lKHk.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Gant de Boxe",
      categories_videgrenier: "équipement",
      categories_boutique: "rouge équipement",
      description: "La puissance des capacités Coup de poing augmente de 10 % (x1,1). Le porteur peut aussi utiliser des capacités provoquant un contact physique avec la cible sans qu'elles ne soient considérés comme telles, ce qui permet par exemple d'éviter les dégâts occasionnés par Pico-Défense, le Casque Brut, etc. ou des talents comme Statik, Peau Dure, etc.",
      imageUrl: "https://www.pokepedia.fr/images/thumb/6/6d/Miniature_Gant_de_Boxe_EV.png/32px-Miniature_Gant_de_Boxe_EV.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Grelot Coque",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "À chaque attaque, le porteur récupère en points de vie l’équivalent de 1/8e des dégâts qu’il inflige à son adversaire.",
      imageUrl: "https://2img.net/i.imgur.com/ZdDMzpN.png",
      price: 425,
      
      qty_videgrenier: 0
    },
    {
      name: "Griffe Rasoir",
      categories_videgrenier: "équipement",
      categories_boutique: "rouge équipement",
      description: "Augmente le taux de coups critiques du porteur d’un cran.",
      imageUrl: "https://2img.net/i.imgur.com/ztXzvO3.png",
      price: 375,
      
      qty_videgrenier: 0
    },
    {
      name: "Grosses Bottes",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Le porteur n’est pas affecté par les pièges au sol tels que Pics Toxik ou Picots.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/grosses-bottes.png",
      price: 350,
      
      qty_videgrenier: 0
    },
    {
      name: "Grosse Racine",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "Les attaques drainant des PV restaurent 30% (x1,3) de PV supplémentaires. Fonctionne avec Anneau Hydro, Dévorêve, Encornebois, Giga-Sangsue, Méga-Sangsue, Mort-Ailes, Parabocharge, Racines, Vampibaiser, Vampigraine, Vampi-Poing, Vampirisme et Vole-Vie.",
      imageUrl: "https://2img.net/i.imgur.com/mgorwWX.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Herbe Blanche",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Une fois par combat, restaure les statistiques du Pokémon qui tient cet objet à leur valeur d'origine quand elles subissent une perte, même auto-infligée.",
      imageUrl: "https://2img.net/i.imgur.com/Ig5OrDt.png",
      price: 475,
      
      qty_videgrenier: 0
    },
    {
      name: "Herbe Pouvoir",
      categories_videgrenier: "équipement",
      categories_boutique: "rouge équipement",
      description: "Une fois par combat, le porteur de cet objet peut éviter le tour de chargement nécessaire à certaines attaques telles que Lance Soleil.",
      imageUrl: "https://2img.net/i.imgur.com/wsjCMl1.png",
      price: 475,
      
      qty_videgrenier: 0
    },
    {
      name: "Lentille Zoom",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Augmente la précision des attaques du porteur de 20 % (x1,2), à condition que le porteur attaque après son adversaire.",
      imageUrl: "https://2img.net/i.imgur.com/Ddjf2UN.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Loupe",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Augmente la précision des attaques du porteur de 10% (x1,1).",
      imageUrl: "https://2img.net/i.imgur.com/Z5yMoea.png",
      price: 325,
      
      qty_videgrenier: 0
    },
    {
      name: "Lumargile",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "Les effets de Mur Lumière et Protection durent 8 tours au lieu de 5.",
      imageUrl: "https://2img.net/i.imgur.com/kw7smHj.png",
      price: 300,
      
      qty_videgrenier: 0
    },
    {
      name: "Lunettes Choix",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "Augmente la statistique d'Attaque Spéciale du porteur de 50% (x1,5). En contrepartie, il n'est plus possible d'utiliser qu’une seule attaque du moveset jusqu'à ce que le Pokémon soit échangé.",
      imageUrl: "https://2img.net/i.imgur.com/9EKnYKX.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Lunettes Filtre",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "Si cet objet est tenu par un Pokémon, ce dernier sera immunisé aux dégâts de la Météo ainsi qu'aux capacités et talents de poudre.",
      imageUrl: "https://2img.net/i.imgur.com/HBh3apu.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Lunettes Sages",
      categories_videgrenier: "équipement",
      categories_boutique: "rouge équipement",
      description: "Augmente la puissance des attaques spéciales de 10% (x1,1).",
      imageUrl: "https://2img.net/i.imgur.com/m3pTAID.png",
      price: 425,
      
      qty_videgrenier: 0
    },
    {
      name: "Mouchoir Choix",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Augmente la statistique de vitesse du porteur de 50% (x1,5). En contrepartie, celui-ci est bloqué sur la dernière attaque utilisée de son moveset jusqu'à ce qu'il soit switché.",
      imageUrl: "https://2img.net/i.imgur.com/BfrbT3B.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Orbe Flamme",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Le statut du porteur est altéré par une brûlure dès la fin de son premier tour de combat.",
      imageUrl: "https://2img.net/i.imgur.com/y8HycN7.png",
      price: 300,
      
      qty_videgrenier: 0
    },
    {
      name: "Orbe Toxique",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Le statut du porteur est altéré par un empoisonnement grave dès la fin de son premier tour de combat.",
      imageUrl: "https://2img.net/i.imgur.com/BbtKlZ1.png",
      price: 300,
      
      qty_videgrenier: 0
    },
    {
      name: "Orbe Vie",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "Augmente la puissance des attaques de 30% (x1,3), mais le porteur perd 10% de ses PV max à chaque fois qu'il touche sa cible avec une capacité offensive.",
      imageUrl: "https://2img.net/i.imgur.com/ZmPFyk1.png",
      price: 475,
      
      qty_videgrenier: 0
    },
    {
      name: "Restes",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "Permet de soigner 1/16e des PV max du porteur à chaque fin de tour.",
      imageUrl: "https://2img.net/i.imgur.com/HP3SpQN.png",
      price: 525,
      
      qty_videgrenier: 0
    },
    {
      name: "Roche Météo",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "Permet de faire durer une météo installée par le porteur pendant 8 tours au lieu de 5.",
      imageUrl: "https://media.pokemoncentral.it/wiki/7/7a/Rocciafredda_IV_Sprite_Zaino.png",
      price: 300,
      
      qty_videgrenier: 0
    },
    {
      name: "Roche Royale",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Toutes les attaques ont 10% de chances d’apeurer la cible.",
      imageUrl: "https://2img.net/i.imgur.com/8jpRIB4.png",
      price: 375,
      
      qty_videgrenier: 0
    },
    {
      name: "Spray Gorge",
      categories_videgrenier: "équipement",
      categories_boutique: "bleu équipement",
      description: "Lorsque le porteur utilise une capacité sonore, augmente sa statistique d'Attaque spéciale d'un niveau.",
      imageUrl: "https://2img.net/i.imgur.com/cMRlBai.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Veste de Combat",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Augmente de 50% (x1,5) la défense spéciale. En contrepartie, le porteur ne peut pas lancer d’attaques non offensives.",
      imageUrl: "https://2img.net/i.imgur.com/rRWYQRO.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Vulné-Assurance",
      categories_videgrenier: "équipement",
      categories_boutique: "jaune équipement",
      description: "Une fois par combat, s’il est la cible d’une attaque super efficace, le porteur voit son attaque et son attaque spéciale augmenter de deux crans (x2).",
      imageUrl: "https://i.imgur.com/lpqIrOl.png",
      price: 525,
      
      qty_videgrenier: 1
    },
    {
      name: "CS Coupe",
      categories_videgrenier: "cs",
      categories_boutique: "bleu cs",
      description: "Permet d’accéder à la zone 7 de Calléis, pour dix butins et / ou une capture.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/permis10.png",
      price: 350,
      
      qty_videgrenier: 0
    },
    {
      name: "CS Escalade",
      categories_videgrenier: "cs",
      categories_boutique: "jaune cs",
      description: "Permet d’accéder à la zone 7 d'Adamantia, pour dix butins et / ou une capture.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/permis10.png",
      price: 350,
      
      qty_videgrenier: 0
    },
    {
      name: "CS Éclate-Roc",
      categories_videgrenier: "cs",
      categories_boutique: "jaune cs",
      description: "Permet d’accéder à la zone 7 d'Haptos, pour dix butins et / ou une capture.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/permis10.png",
      price: 350,
      
      qty_videgrenier: 0
    },
    {
      name: "CS Surf",
      categories_videgrenier: "cs",
      categories_boutique: "bleu cs",
      description: "Permet d’accéder à la zone 7 de Kopadia, pour dix butins et / ou une capture.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/permis10.png",
      price: 350,
      
      qty_videgrenier: 0
    },
    {
      name: "CS Cascade",
      categories_videgrenier: "cs",
      categories_boutique: "rouge cs",
      description: "Permet d’accéder à la zone 7 d’Anthos, pour dix butins et / ou une capture.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/permis10.png",
      price: 350,
      
      qty_videgrenier: 0
    },
    {
      name: "Corde sortie",
      categories_videgrenier: "survie",
      categories_boutique: "jaune survie",
      description: "Permet de fuir de manière certaine n'importe quel Pokémon (à l'exception d'un obscur) de n'importe quelle zone, sans gain d'EXP.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/cordes10.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Pokéball",
      categories_videgrenier: "capture",
      categories_boutique: "jaune capture",
      description: "Permet la capture de Pokémons avec un taux de succès relatif.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/poke-b11.png",
      price: 50,
      
      qty_videgrenier: 0
    },
    {
      name: "Superball",
      categories_videgrenier: "capture",
      categories_boutique: "jaune capture",
      description: "Permet la capture de Pokémons avec un taux de succès amélioré.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/superb10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Hyperball",
      categories_videgrenier: "capture",
      categories_boutique: "jaune capture",
      description: "Permet la capture de Pokémons avec un taux de succès excellent.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/hyperb10.png",
      price: 300,
      
      qty_videgrenier: 0
    },
    {
      name: "Potion",
      categories_videgrenier: "survie",
      categories_boutique: "bleu survie",
      description: "Permet de soigner le tiers des points de vie du Pokémon ciblé.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/potion10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Super Potion",
      categories_videgrenier: "survie",
      categories_boutique: "bleu survie",
      description: "Permet de soigner la moitié des points de vie du Pokémon ciblé.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/super-10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Hyper Potion",
      categories_videgrenier: "survie",
      categories_boutique: "bleu survie",
      description: "Permet de soigner les deux tiers des points de vie du Pokémon ciblé.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/hyper-10.png",
      price: 350,
      
      qty_videgrenier: 0
    },
    {
      name: "Total Soin",
      categories_videgrenier: "survie",
      categories_boutique: "bleu survie",
      description: "Permet de soigner les problèmes de statut du Pokémon ciblé. Peut être tenu comme un Équipement de combat.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/full-h10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Rappel",
      categories_videgrenier: "survie",
      categories_boutique: "bleu survie",
      description: "Permet de ranimer un Pokémon ayant été mis hors jeu et de lui rendre 50 % de ses PV maximum.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/revive10.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Super Repousse",
      categories_videgrenier: "survie",
      categories_boutique: "rouge survie",
      description: "En sujet de capture, les <u>six</u> prochains Pokémons qui apparaîtront auront un niveau compris entre -3 et +3 par rapport à votre moyenne d'équipe active.",
      imageUrl: "https://2img.net/i.imgur.com/PKVcJ5Z.png",
      price: 750,
      
      qty_videgrenier: 0
    },
    {
      name: "Super Repousse-Chroma",
      categories_videgrenier: "survie",
      categories_boutique: "bleu survie",
      description: "En sujet de capture, les <u>six</u> prochains Pokémons qui apparaîtront seront forcément non chromatiques.",
      imageUrl: "https://www.pokepedia.fr/images/0/0a/Miniature_Repousse_Max_DEPS.png",
      price: 375,
      
      qty_videgrenier: 0
    },
    {
      name: "Écaille cœur",
      categories_videgrenier: "dressage",
      categories_boutique: "bleu dressage",
      description: "Permet d’apprendre une capacité que le Pokémon aurait dû apprendre à un niveau antérieur. Les capacités apprises à des stades d’évolution antérieurs ne sont pas considérées dans la liste des possibilités qu’ouvre cet objet.",
      imageUrl: "https://zupimages.net/up/18/25/s8j7.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Nœud Destin",
      categories_videgrenier: "dressage",
      categories_boutique: "bleu dressage",
      description: "Lors de l'éclosion d'un œuf, permet d'obtenir une liste de choix de 3 capacités de reproduction en plus des 3 de base, pour un total de 6CR.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/destin10.png",
      price: 350,
      
      qty_videgrenier: 0
    },
    {
      name: "Pilule Talent",
      categories_videgrenier: "dressage",
      categories_boutique: "bleu dressage",
      description: "Permet de changer le talent de son Pokémon. Cela ne donne toutefois pas accès aux talents cachés.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/abilit10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Grelot Zen",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet l’évolution de certaines espèces de Pokémon.",
      imageUrl: "https://2img.net/i.imgur.com/jCS22g2.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Pierre Aube",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet l’évolution de certaines espèces de Pokémon.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/aube10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Pierre Eau",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet l’évolution de certaines espèces de Pokémon.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/eau10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Pierre Éclat",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet l’évolution de certaines espèces de Pokémon.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/eclat10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Pierre Feu",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet l’évolution de certaines espèces de Pokémon.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/feu10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Pierre Foudre",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet l’évolution de certaines espèces de Pokémon.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/foudre10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Pierre Glace",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet l’évolution de certaines espèces de Pokémon.",
      imageUrl: "https://img.pokemondb.net/sprites/items/ice-stone.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Pierre Lune",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet l’évolution de certaines espèces de Pokémon.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/lune10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Pierre Nuit",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet l’évolution de certaines espèces de Pokémon.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/nuit10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Pierre Plante",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet l’évolution de certaines espèces de Pokémon.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/plante10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Pierre Soleil",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet l’évolution de certaines espèces de Pokémon.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/soleil10.png",
      price: 250,
      
      qty_videgrenier: 0
    },
    {
      name: "Pointeau ADN",
      categories_videgrenier: "évolutif",
      categories_boutique: "évolutif",
      description: "Permet d'éveiller la nature ancienne de Pokémons dont les formes évoluées ont disparu du globe.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/pointeau-adn.png",
      price: 250,
      
      qt_videgreniery: 0
    },
    {
      name: "Magnésium",
      categories_videgrenier: "dressage",
      categories_boutique: "bleu dressage",
      description: "Permet d’augmenter de 5 la statistique de base des points de vie d’un Pokémon. Effet Permanent",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/magnes10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Protéine",
      categories_videgrenier: "dressage",
      categories_boutique: "rouge dressage",
      description: "Permet d’augmenter de 5 la statistique de base d’attaque d’un Pokémon. Effet Permanent",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/protei10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Fer",
      categories_videgrenier: "dressage",
      categories_boutique: "jaune dressage",
      description: "Permet d’augmenter de 5 la statistique de base de défense d’un Pokémon. Effet Permanent",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/iron10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Calcium",
      categories_videgrenier: "dressage",
      categories_boutique: "jaune dressage",
      description: "Permet d’augmenter de 5 la statistique de base d’attaque spéciale d’un Pokémon. Effet Permanent",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/calciu10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Zinc",
      categories_videgrenier: "dressage",
      categories_boutique: "rouge dressage",
      description: "Permet d’augmenter de 5 la statistique de base de défense spéciale d’un Pokémon. Effet Permanent",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/zinc10.png",
      price: 150,
      
      qty_videgrenier: 1
    },
    {
      name: "Carbone",
      categories_videgrenier: "dressage",
      categories_boutique: "rouge dressage",
      description: "Permet d’augmenter de 5 la statistique de base de vitesse d’un Pokémon. Effet Permanent",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/carbon10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Grena",
      categories_videgrenier: "comestible",
      categories_boutique: "bleu comestible",
      description: "Permet de réinitialiser entièrement la statistique de base des points de vie de façon permanente sur un Pokémon après utilisation d'une ou plusieurs vitamines. Elle peut aussi être utilisée en cuisine et augmente le niveau d’une recette de deux niveaux.",
      imageUrl: "https://2img.net/i.imgur.com/vgb8jRk.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Alga",
      categories_videgrenier: "comestible",
      categories_boutique: "rouge comestible",
      description: "Permet de réinitialiser entièrement la statistique de base de l'attaque de façon permanente sur un Pokémon après utilisation d'une ou plusieurs vitamines. Elle peut aussi être utilisée en cuisine et augmente le niveau d’une recette de deux niveaux.",
      imageUrl: "https://2img.net/i.imgur.com/mrYvSnK.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Qualot",
      categories_videgrenier: "comestible",
      categories_boutique: "jaune comestible",
      description: "Permet de réinitialiser entièrement la statistique de base de la défense de façon permanente sur un Pokémon après utilisation d'une ou plusieurs vitamines. Elle peut aussi être utilisée en cuisine et augmente le niveau d’une recette de deux niveaux.",
      imageUrl: "https://2img.net/i.imgur.com/VhCT1ZE.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Lonme",
      categories_videgrenier: "comestible",
      categories_boutique: "jaune comestible",
      description: "Permet de réinitialiser entièrement la statistique de base de l'attaque spéciale de façon permanente sur un Pokémon après utilisation d'une ou plusieurs vitamines. Elle peut aussi être utilisée en cuisine et augmente le niveau d’une recette de deux niveaux.",
      imageUrl: "https://2img.net/i.imgur.com/yC7IvrT.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Resin",
      categories_videgrenier: "comestible",
      categories_boutique: "rouge comestible",
      description: "Permet de réinitialiser entièrement la statistique de base de la défense spéciale de façon permanente sur un Pokémon après utilisation d'une ou plusieurs vitamines. Elle peut aussi être utilisée en cuisine et augmente le niveau d’une recette de deux niveaux.",
      imageUrl: "https://2img.net/i.imgur.com/mtIC5ds.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Tamato",
      categories_videgrenier: "comestible",
      categories_boutique: "bleu comestible",
      description: "Permet de réinitialiser entièrement la statistique de base de la vitesse de façon permanente sur un Pokémon après utilisation d'une ou plusieurs vitamines. Elle peut aussi être utilisée en cuisine et augmente le niveau d’une recette de deux niveaux.",
      imageUrl: "https://2img.net/i.imgur.com/TdKDEtv.png",
      price: 450,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Abriko",
      categories_videgrenier: "comestible",
      categories_boutique: "jaune comestible",
      description: "Permet d’augmenter les statistiques de défense et de défense spéciale d’un cran pour un combat. Elle peut aussi être utilisée en cuisine.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/abriko10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Cherrim",
      categories_videgrenier: "comestible",
      categories_boutique: "rouge comestible",
      description: "Permet d’assurer d’attaquer en premier une fois dans un combat, même si l’attaque n’en est pas une de priorité. Elle peut aussi être utilisée en cuisine.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/cherri10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Jaboca",
      categories_videgrenier: "comestible",
      categories_boutique: "bleu comestible",
      description: "Permet d’absorber 25 % des dégâts reçus sur une attaque et de les retourner sur son assaillant. Elle peut aussi être utilisée en cuisine.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/jaboca10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Kika",
      categories_videgrenier: "comestible",
      categories_boutique: "jaune comestible",
      description: "Permet de soigner la confusion. Elle peut aussi être utilisée en cuisine.",
      imageUrl: "https://media.pokemoncentral.it/wiki/0/0d/Baccaki_III_Sprite_Zaino.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Lansatt",
      categories_videgrenier: "comestible",
      categories_boutique: "rouge comestible",
      description: "Permet d’augmenter le taux de coups critiques d’un cran pour un combat. Elle peut aussi être utilisée en cuisine.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/lansat10.png",
      price: 150,
      
      qty_videgrenier: 1
    },
    {
      name: "Baie Lichii",
      categories_videgrenier: "comestible",
      categories_boutique: "rouge comestible",
      description: "Permet d’augmenter les statistiques d’attaque et d’attaque spéciale d’un cran pour un combat. Elle peut aussi être utilisée en cuisine.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/lichii10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Micle",
      categories_videgrenier: "comestible",
      categories_boutique: "jaune comestible",
      description: "Permet d’augmenter de 10% la précision d’une attaque une fois dans un combat. Elle peut aussi être utilisée en cuisine.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/micle10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Oran",
      categories_videgrenier: "comestible",
      categories_boutique: "bleu comestible",
      description: "Permet de soigner un Pokémon du quart de ses points de vie totaux. Elle peut aussi être utilisée en cuisine.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/oran10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Prine",
      categories_videgrenier: "comestible",
      categories_boutique: "rouge comestible",
      description: "Permet d'augmenter la vitesse d'un cran pour un combat. Elle peut aussi être utilisée en cuisine.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/prine10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
    {
      name: "Baie Sailak",
      categories_videgrenier: "comestible",
      categories_boutique: "rouge comestible",
      description: "Permet d'augmenter la vitesse de deux crans lorsque les PV du Pokémon passent sous 1/4 de ses PV max. Elle peut aussi être utilisée en cuisine.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/sailak10.png",
      price: 150,
      
      qty_videgrenier: 0
    },
//VIDE GRENIER EXCLUSIF
    {
      name: "Plaque élémentaire Acier",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Acier.",
      imageUrl: "https://2img.net/i.imgur.com/UqQR2PN.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Combat",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Combat.",
      imageUrl: "https://2img.net/i.imgur.com/Dw1bpul.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Dragon",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Dragon.",
      imageUrl: "https://2img.net/i.imgur.com/eXuKDwc.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Eau",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Eau.",
      imageUrl: "https://2img.net/i.imgur.com/CFE818t.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Fée",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Fée.",
      imageUrl: "https://2img.net/i.imgur.com/NV8lQCi.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Feu",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Feu.",
      imageUrl: "https://2img.net/i.imgur.com/Uc3jUFV.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Électrik",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Électrique.",
      imageUrl: "https://2img.net/i.imgur.com/Oc6QP0l.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Glace",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Glace.",
      imageUrl: "https://2img.net/i.imgur.com/IiJrVZP.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Insecte",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Insecte.",
      imageUrl: "https://2img.net/i.imgur.com/T8TDBPH.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Normal",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Normal.",
      imageUrl: "https://2img.net/i.imgur.com/Ld2oe5u.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Plante",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Plante.",
      imageUrl: "https://2img.net/i.imgur.com/C9gsqMp.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Poison",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Poison.",
      imageUrl: "https://2img.net/i.imgur.com/jp3zdeD.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Psy",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Psy.",
      imageUrl: "https://2img.net/i.imgur.com/GuX1R8u.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Roche",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Roche",
      imageUrl: "https://2img.net/i.imgur.com/wHrU8BT.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Sol",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Sol.",
      imageUrl: "https://2img.net/i.imgur.com/fjelCpe.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Spectre",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Spectre.",
      imageUrl: "https://2img.net/i.imgur.com/rP8P7k2.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Ténèbres",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Ténèbres.",
      imageUrl: "https://2img.net/i.imgur.com/OpN0mnJ.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "Plaque élémentaire Vol",
      categories_videgrenier: "équipement",
      categories_boutique: "none",
      description: "Augmente de 20% (x1,2) la puissance des attaques de type Vol.",
      imageUrl: "https://2img.net/i.imgur.com/pSF5HUI.png",
      price: 500,
      
      qty_videgrenier: 0
    },
    {
      name: "CT N°001 - Bélier",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°002 - Charme",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wm6COaR.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°003 - Croco Larme",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°004 - Hâte",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°005 - Coud’Boue",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°006 - Grimace",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°007 - Abri",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°008 - Crocs Feu",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°009 - Crocs Éclair",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°010 - Crocs Givre",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/RPwJTuI.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°011 - Vibraqua",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°012 - Balayage",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°013 - Bombe Acide",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/dKxitmG.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°014 - Acrobatie",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/jbrh5O1.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°015 - Survinsecte",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/DiRjhnc.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°016 - Rafale Psy",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°017 - Onde Folie",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kpYk19C.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°018 - Larcin",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°019 - Voix Enjôleuse",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wm6COaR.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°020 - Désherbaffe",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°021 - Bond",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/DiRjhnc.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°022 - Douche Froide",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°023 - Rayon Chargé",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°024 - Danse Flammes",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°025 - Façade",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
    {
      name: "CT N°026 - Queue-Poison",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/dKxitmG.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°027 - Aéropique",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/jbrh5O1.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°028 - Piétisol",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°029 - Châtiment",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kpYk19C.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°030 - Aboiement",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°031 - Griffe Acier",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/0vd9iuu.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°032 - Météores",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°033 - Feuille Magik",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°034 - Vent Glace",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/RPwJTuI.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°035 - Tir de Boue",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°036 - Tomberoche",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wZib6U0.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°037 - Vampibaiser",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wm6COaR.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°038 - Nitrocharge",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°039 - Balayette",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°040 - Tranch’Air",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/jbrh5O1.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°041 - Force Ajoutée",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°042 - Ombre Nocturne",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kpYk19C.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°043 - Dégommage",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°044 - Draco-Queue",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/XqHczdQ.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°045 - Choc Venin",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/dKxitmG.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°046 - Avalanche",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/RPwJTuI.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°047 - Ténacité",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°048 - Change Éclair",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°049 - Zénith",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°050 - Danse-Pluie",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
    {
      name: "CT N°051 - Tempête de Sable",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wZib6U0.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°052 - Chute de Neige",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/RPwJTuI.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°053 - Estocorne",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/0vd9iuu.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°054 - Choc Psy",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°055 - Tunnel",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°056 - Balle Graine",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°057 - Faux-Chage",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°058 - Casse-Brique",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°059 - Psykoud'Boul",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°060 - Demi-Tour",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/DiRjhnc.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°061 - Griffe Ombre",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kpYk19C.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°062 - Tricherie",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°063 - Psycho-Croc",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°064 - Gonflette",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°065 - Lame d’Air",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/jbrh5O1.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°066 - Plaquage",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°067 - Poing Feu",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°068 - Poing Éclair",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°069 - Poing Glace",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/RPwJTuI.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°070 - Blabla Dodo",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°071 - Canon Graine",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°072 - Boule Élek",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°073 - Vampi-Poing",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°074 - Protection",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°075 - Mur Lumière",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
    {
      name: "CT N°076 - Boule Roc",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wZib6U0.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°077 - Cascade",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°078 - Draco-Griffe",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/XqHczdQ.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°079 - Éclat Magique",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wm6COaR.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°080 - Métronome",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°081 - Nœud Herbe",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°082 - Cage Éclair",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°083 - Direct Toxik",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/dKxitmG.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°084 - Trépignement",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°085 - Repos",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°086 - Éboulement",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wZib6U0.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°087 - Provoc",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°088 - Danse Lames",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°089 - Big Splash",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°090 - Picots",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°091 - Pics Toxik",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/dKxitmG.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°092 - Possessif",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°093 - Luminocanon",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/0vd9iuu.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°094 - Vibrobscur",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°095 - Vampirisme",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/DiRjhnc.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°096 - Ondes Étranges",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°097 - Vol",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/jbrh5O1.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°098 - Échange",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°099 - Tête de Fer",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/0vd9iuu.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°100 - Danse Draco",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/XqHczdQ.png",
      price: 425,
      
      qty_videgrenier: 0
    },
    {
      name: "CT N°101 - Rayon Gemme",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wZib6U0.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°102 - Détricanon",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/dKxitmG.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°103 - Clonage",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°104 - Mur de Fer",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/0vd9iuu.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°105 - Plaie Croix",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/DiRjhnc.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°106 - Tunnelier",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°107 - Feu Follet",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°108 - Mâchouille",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°109 - Tour de Magie",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°110 - Aqua-Brèche",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°111 - Giga-Sangsue",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°112 - Aurasphère",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°113 - Vent Arrière",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/jbrh5O1.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°114 - Ball’Ombre",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kpYk19C.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°115 - Draco-Choc",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/XqHczdQ.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°116 - Piège de Roc",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wZib6U0.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°117 - Mégaphone",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°118 - Canicule",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°119 - Éco-Sphère",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°120 - Psyko",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°121 - Tacle Lourd",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/0vd9iuu.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°122 - Encore",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°123 - Surf",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°124 - Cryo-Pirouette",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/RPwJTuI.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°125 - Lance-Flammes",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
    {
      name: "CT N°126 - Tonnerre",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°127 - Câlinerie",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wm6COaR.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°128 - Amnésie",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°129 - Plénitude",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°130 - Coup d’Main",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°131 - Boule Pollen",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/DiRjhnc.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°132 - Relais",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°133 - Telluriforce",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°134 - Contre",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°135 - Laser Glace",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/RPwJTuI.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°136 - Champ Électrifié",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°137 - Champ Herbu",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°138 - Champ Psychique",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°139 - Champ Brumeux",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wm6COaR.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°140 - Machination",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°141 - Déflagration",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°142 - Hydrocanon",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°143 - Blizzard",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/RPwJTuI.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°144 - Aire de Feu",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°145 - Aire d’Eau",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°146 - Aire d’Herbe",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°147 - Éclair Fou",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°148 - Bombe Beurk",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/dKxitmG.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°149 - Séisme",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°150 - Lame de Roc",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wZib6U0.png",
      price: 425,
      
      qty_videgrenier: 0
    },
    {
      name: "CT N°151 - Hantise",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kpYk19C.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°152 - Giga Impact",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°153 - Rafale Feu",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°154 - Hydroblast",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°155 - Végé-Attaque",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°156 - Colère",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/XqHczdQ.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°157 - Surchauffe",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°158 - Exploforce",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°159 - Tempête Verte",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°160 - Vent Violent",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/jbrh5O1.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°161 - Distorsion",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°162 - Bourdon",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/DiRjhnc.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°163 - Ultralaser",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°164 - Rapace",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/jbrh5O1.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°165 - Boutefeu",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°166 - Fatal-Foudre",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°167 - Close Combat",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°168 - Lance-Soleil",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°169 - Draco-Météore",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/XqHczdQ.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°170 - Métalaser",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/0vd9iuu.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°171 - Téra Explosion",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°172 - Hurlement",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°173 - Chargeur",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°174 - Buée Noire",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/RPwJTuI.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°175 - Toxik",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/dKxitmG.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°176 - Tourbi-Sable",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°177 - Dépit",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kpYk19C.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°178 - Gravité",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°179 - Anti-Air",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wZib6U0.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°180 - Gyroballe",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/0vd9iuu.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°181 - Sabotage",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°182 - Piqûre",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/DiRjhnc.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°183 - Croc Fatal",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°184 - Onde Vide",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°185 - Furie-Bond",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/DiRjhnc.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°186 - Cavalerie Lourde",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°187 - Stalactite",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/RPwJTuI.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°188 - Ébullition",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°189 - Tacle Feu",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°190 - Lame Solaire",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°191 - Brouhaha",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°192 - Mitra-Poing",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°193 - Ball’Météo",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°194 - Gliss'Herbe",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°195 - Feu Envieux",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°196 - Eau Revoir",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°197 - Double Volée",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/jbrh5O1.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°198 - Esprit Frappeur",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kpYk19C.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°199 - Cent Rancunes",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°200 - Rafale Écailles",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/XqHczdQ.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°201 - Explo-Brume",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wm6COaR.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°202 - Balance",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°203 - Boost",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°204 - Damoclès",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°205 - Effort",
       categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/UefGNge.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°206 - Tempête Florale",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/i4IuXqL.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°207 - Indignition",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/qB5NjTo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°208 - Siphon",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°209 - Ocroupi",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/FPjRElo.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°210 - Volt Assaut",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°211 - Toile Élek",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/7Vurm5o.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°212 - Triple Axel",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/RPwJTuI.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°213 - Coaching",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°214 - Cradovague",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/dKxitmG.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°215 - Sable Ardent",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/g682r6i.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°216 - Danse Plumes",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/jbrh5O1.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°217 - Prescience",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°218 - Vaste Pouvoir",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°219 - Ravage Rampant",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/DiRjhnc.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°220 - Laser Météore",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wZib6U0.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°221 - Exécu-Son",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kljUs3u.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°222 - Abattage",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/XqHczdQ.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°223 - Strido-Son",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/0vd9iuu.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°224 - Malédiction",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/kpYk19C.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°225 - Pression Extrême",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/0vd9iuu.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°226 - Cri Draconique",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/XqHczdQ.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°227 - Voix Envoûtante",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/wm6COaR.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°228 - Dissonance Psy",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/OQ9GjNb.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "CT N°229 - Prio-Parade",
      categories_videgrenier: "ct",
      categories_boutique: "none",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique.",
      imageUrl: "https://2img.net/i.imgur.com/pITz2Fs.png",
      price: 425,
      
      qty_videgrenier: 0
    },
{
      name: "Aérozélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/d/d9/Miniature_A%C3%A9roz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Aquazélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/b/bd/Miniature_Aquaz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Combazélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/b/bc/Miniature_Combaz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Cryozélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/f/f1/Miniature_Cryoz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Dracozélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/e/e0/Miniature_Dracoz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Florazélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/b/b4/Miniature_Floraz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Insectozélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/9/95/Miniature_Insectoz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Métallozélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/f/f6/Miniature_M%C3%A9talloz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Normazélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/c/c4/Miniature_Normaz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Nymphézélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/c/cb/Miniature_Nymph%C3%A9z%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Psychézélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/1/1e/Miniature_Psych%C3%A9z%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Pyrozélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/7/75/Miniature_Pyroz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Rocazélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/5/57/Miniature_Rocaz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Spectrozélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/0/04/Miniature_Spectroz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Ténébrozélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/c/c2/Miniature_T%C3%A9n%C3%A9broz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Terrazélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/9/98/Miniature_Terraz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Toxizélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/a/a5/Miniature_Toxiz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Voltazélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/a/ab/Miniature_Voltaz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Aloraïzélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/3/38/Miniature_Alora%C3%AFz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Archézélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/0/0c/Miniature_Arch%C3%A9z%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Ékaïzélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/3/37/Miniature_%C3%89ka%C3%AFz%C3%A9lite_USUL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Évolizélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Miniature_%C3%89voliz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Félinozélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/4/44/Miniature_F%C3%A9linoz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Lougarozélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/d/d5/Miniature_Lougaroz%C3%A9lite_USUL.png",
      price: 600,
      
      qty_videgrenier: 1
    },
{
      name: "Mimiquizélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/7/72/Miniature_Mimiquiz%C3%A9lite_USUL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Oratozélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Miniature_Oratoz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Pikachazélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/b/b1/Miniature_Pikachaz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Pikazélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/6/65/Miniature_Pikaz%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
{
      name: "Ronflézélite",
      categories_videgrenier: "équipement",
        categories_boutique: "none",
      categories_tc: "displayed",
      description: "Permet d’utiliser la capacité Z associée.",
      imageUrl: "https://www.pokepedia.fr/images/3/39/Miniature_Ronfl%C3%A9z%C3%A9lite_SL.png",
      price: 600,
      
      qty_videgrenier: 0
    },
//boutique exclusif
    {
      name: "Plaques élémentaires",
      categories_videgrenier: "none",
      categories_boutique: "rouge équipement",
      description: "Augmente de 20% (x1,2) la puissance des attaques du même type que la plaque équipée.",
      imageUrl: "https://2img.net/i.imgur.com/UqQR2PN.png",
      price: 500
    },
{
      name: "Masterball",
      categories_videgrenier: "none",
      categories_boutique: "capture",
      description: "Permet la capture assurée du Pokémon (taux de capture de 100 %).",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/master10.png",
      price: 0
    },
    {
      name: "Repousse",
      categories_videgrenier: "none",
      categories_boutique: "survie",
      description: "En sujet de capture, les <u>deux</u> prochains Pokémons qui apparaîtront auront un niveau compris entre -3 et +3 par rapport à la moyenne d'équipe active de l’utilisateur du Repousse.<br/>Si vous êtes en sujet duo, les apparitions de chaque joueur consommeront un slot de Repousse.<br/>Les Pokémons Obscurs consomment un slot mais apparaîtront <b>toujours</b> au niveau max de la zone.",
      imageUrl: "https://2img.net/i.imgur.com/eVYlbVm.png",
      price: 0
    },
{
      name: "CT aléatoire",
      categories_videgrenier: "none",
      categories_boutique: "jaune ct cts",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique. Pour en acheter, il faut lancer en #salon-du-hasard la commande « /bw ct X » (X remplaçant le nombre de CT achetées) et reporter le lien du message Discord (clic droit > copier le lien du message) dans le post d'achat.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/cs-normal.png",
      price: 425
    },
{
      name: "CT de la bannière",
      categories_videgrenier: "none",
      categories_boutique: "bleu ctban cts",
      description: "Permet d’apprendre la capacité associée au numéro de la capsule technique reçue. La capsule est à usage unique. Pour en acheter, il faut lancer en #salon-du-hasard la commande « /bw ct X » (X remplaçant le nombre de CT achetées) et reporter le lien du message Discord (clic droit > copier le lien du message) dans le post d'achat.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/cs-normal.png",
      price: 600
    },
{
      name: "Cristal Z aléatoire",
      categories_videgrenier: "none",
      categories_boutique: "rouge équipement",
      description: "Permet d’utiliser la capacité Z associée. Il est nécessaire d’utiliser la commande « /bw cristal X » en ⁠salon-du-hasard sur Discord pour savoir quel cristal a été tiré (X remplaçant le nombre de cristaux achetés).",
      imageUrl: "https://www.pokepedia.fr/images/e/e2/Miniature_Mewz%C3%A9lite_SL.png",
      price: 600
    },
{
      name: "Crème Fraîche",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de trois niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/creme-fraiche.png",
      price: 0
    },
    {
      name: "Curry Instantané",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de trois niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/curry-instantane.png",
      price: 0
    },
    {
      name: "Épices",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de deux niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/epices.png",
      price: 0
    },
    {
      name: "Friture",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette d’un niveau.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/fritures.png",
      price: 0
    },
    {
      name: "Fromage Meumeu",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de quatre niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/fromage-meumeu.png",
      price: 0
    },
    {
      name: "Fruits",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de quatre niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/fruits.png",
      price: 0
    },
    {
      name: "Gros Poireau",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de quatre niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/gros-poireau.png",
      price: 0
    },
    {
      name: "Haricots",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de deux niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/haricots.png",
      price: 0
    },
    {
      name: "Lait de coco",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de trois niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/lait-de-coco.png",
      price: 0
    },
    {
      name: "Légumes",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de deux niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/legumes.png",
      price: 0
    },
    {
      name: "Nouilles",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette d’un niveau.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/nouilles.png",
      price: 0
    },
    {
      name: "Œuf dur",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de quatre niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/oeuf-dur.png",
      price: 0
    },
    {
      name: "Os à moelle",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de trois niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/os-a-moelle.png",
      price: 0
    },
    {
      name: "Pain de mie",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette d’un niveau.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/pain-de-mie.png",
      price: 0
    },
    {
      name: "Pâtes",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette d’un niveau.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/pates.png",
      price: 0
    },
    {
      name: "Pommes de terre",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de deux niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/pommes-de-terre.png",
      price: 0
    },
    {
      name: "Queue Fumée",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de quatre niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/queue-fumee.png",
      price: 0
    },
    {
      name: "Saucisses",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de deux niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/saucisses.png",
      price: 0
    },
    {
      name: "Steak haché",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette d’un niveau.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/steak-hache.png",
      price: 0
    },
    {
      name: "Tubercule",
      categories_videgrenier: "none",
      categories_boutique: "comestible butin",
      description: "Permet d’améliorer une recette de trois niveaux.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/tubercule.png",
      price: 0
    },
    {
      name: "Boîte Mystère",
      categories_videgrenier: "none",
      categories_boutique: "boite rare",
      description: "Une fois achetée, permet d’obtenir un nombre d’objets totalisant une valeur minimale de 500p$ et maximale de 1000p$. Ce cap peut être dépassé avec un trésor Illumina. (Achat limité à une boîte par mois).",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/boite-pokemon.png",
      price: 500
    },
    {
      name: "Sérum",
      categories_videgrenier: "none",
      categories_boutique: "rare",
      description: "Permet de soigner un pokémon Obscur, et de l'utiliser en capture comme un pokémon normal. Lors de son utilisation en Progression Pokémon, vous devez choisir la forme complète ou incomplète :<br/>Forme complète : le Pokémon devient «&nbsp;immunisé&nbsp;» et retrouve son état normal.<br/>Forme incomplète : le pokémon conservera un boost de 15% (x1,15) permanent sur l’ensemble de ses statistiques, ainsi que son sprite Obscur, mais continuera à souffrir inRP.",
      imageUrl: "https://2img.net/i.imgur.com/t81acMy.png",
      price: 1000
    },
    {
      name: "Charme chroma",
      categories_videgrenier: "none",
      categories_boutique: "event",
      description: "Modifie les chances d'apparition d'un Pokémon chromatique à 1/15 plutôt que 1/50. Se consomme à l'apparition d'un Pokémon chromatique et son utilisation, après la première demande, ne peut-être interrompue.",
      imageUrl: "https://www.pokepedia.fr/images/6/65/Sprite_Charme_Chroma_NB2.png",
      price: 0
    },
    {
      name: "Énergie Booster",
      categories_videgrenier: "none",
      categories_boutique: "équipement butin",
      description: "Tenu par un Pokémon Paradoxe, augmente la statistique la plus élevée : +50% pour la vitesse, +30% pour les autres statistiques. Cet objet est à usage unique et disparaît après avoir été utilisé.",
      imageUrl: "https://www.pokepedia.fr/images/thumb/e/e0/Miniature_%C3%89nergie_Booster_EV.png/32px-Miniature_%C3%89nergie_Booster_EV.png",
      price: 0
    },
    {
      name: "Lumina Ball",
      categories_videgrenier: "none",
      categories_boutique: "capture butin",
      description: "Une ball spéciale qui permet de capturer un pokémon Obscur, sous réserve que les PV de l'Obscur aient été baissés aux 2/3 de ses PV maximums.",
      imageUrl: "https://2img.net/i.imgur.com/ioAG4IF.png",
      price: 0
    },
    {
      name: "Méga-gemmes",
      categories_videgrenier: "none",
      categories_boutique: "équipement butin",
      description: "Permet de faire méga-évoluer le Pokémon concerné, une fois par combat.",
      imageUrl: "https://www.pokepedia.fr/images/1/16/Miniature_Absolite_SL.png",
      price: 0
    },
    {
      name: "Orbe énigmatique",
      categories_videgrenier: "none",
      categories_boutique: "event",
      description: "Mystérieuse orbe aux propriétés bien particulières... Possède 1 chance sur 6 de rendre un Pokémon Chromatique, 3 chances sur 6 de rendre un Pokémon Obscur et 2 chances sur 6 de ne rien faire du tout.",
      imageUrl: "https://www.pokepedia.fr/images/2/27/Miniature_Ros%C3%A9e_%C3%82me_EV.png",
      price: 0
    },
    {
      name: "Patch Talent",
      categories_videgrenier: "none",
      categories_boutique: "event",
      description: "Le Patch Talent permet de remplacer le talent d'un Pokémon par son talent caché. Objet à usage unique.",
      imageUrl: "https://www.pokepedia.fr/images/e/e5/Miniature_Patch_Talent_EB.png",
      price: 0
    },
    {
      name: "Téra-Éclat",
      categories_videgrenier: "none",
      categories_boutique: "event",
      description: "Vous pouvez consommer <b>20 Téra-Éclats</b> en Progression Pokémon pour changer le type Téracristal d'un Pokémon en celui de votre choix (parmi les 18 types existants).",
      imageUrl: "https://2img.net/i.imgur.com/NXJAhYK.png",
      price: 0
    },
    {
      name: "Pièce Rune",
      categories_videgrenier: "none",
      categories_boutique: "équipement butin",
      description: "Permet de doubler le butin en Pokédollars obtenus lors d’un combat gagné pendant une capture.",
      imageUrl: "https://2img.net/i.imgur.com/BxIoxnQ.png",
      price: 0
    },
    {
      name: "Totem Protecteur",
      categories_videgrenier: "none",
      categories_boutique: "rare",
      description: "Permet de protéger son RP, hors sujet modéré type capture, des Interventions Sauvages. Il doit être possédé avant le lancement du topic, et son utilisation précisée dans le premier post du sujet. Il n’est pas nécessaire que tous les joueurs le possèdent : un seul suffit à protéger tous les partenaires. Objet à utilisation unique.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/totemp10.png",
      price: 2000
    },
    {
      name: "Trésor Illumina",
      categories_videgrenier: "none",
      categories_boutique: "butin",
      description: "Permet de bonifier le butin obtenu dans une boîte mystère.",
      imageUrl: "https://www.pokebip.com/pages/icones/objets/joyau-normal.png",
      price: 0
    },
    {
      name: "Vieux Ducat",
      categories_videgrenier: "none",
      categories_boutique: "butin",
      description: "Peut être échangé contre 150 P$.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/ducat10.png",
      price: 0
    },
    {
      name: "Vieux Vase",
      categories_videgrenier: "none",
      categories_boutique: "butin",
      description: "Peut être échangé contre 250 P$.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/vase10.png",
      price: 0
    },
    {
      name: "Vieux Santon",
      categories_videgrenier: "none",
      categories_boutique: "butin",
      description: "Peut être échangé contre 500 P$.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/santon10.png",
      price: 0
    },
    {
      name: "Vieux Tortil",
      categories_videgrenier: "none",
      categories_boutique: "butin",
      description: "Peut être échangé contre 1000 P$.",
      imageUrl: "https://i.servimg.com/u/f30/20/48/90/66/tm/tortil10.png",
      price: 0
    },
//objets t-card
{
      name: "Émulateur (Balle Lumière)",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/ULnpQbU.png",
      satk: "×2"

},
{
      name: "Émulateur (Dent Océan)",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/428JmlZ.png",
      satk: "×2"
},
{
      name: "Émulateur (Écaille Océan)",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/T8qaAZ9.png",
      sdef: "×2"
},
{
      name: "Émulateur (Masse Os)",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/3R05beK.png",
      atk: "×2"
},
{
      name: "Émulateur (Poing Chance)",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/IuSJac3.png"
},
{
  name: "Émulateur (Poireau)",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/hpZ0j1Q.png"
},
{
      name: "Émulateur (Poudre Métal)",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/9tkff5J.png",
      def: "×1.5",
      sdef: "×1.5"
},
{
      name: "Émulateur (Poudre Vite)",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/kmMvjVG.png",
      speed: "2"
},
//mega-gemmes   
{
      name: "Absolite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/y2BvS4Y.png"
},
{
      name: "Absolite Z",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/hmrVCa8.png"
},
{
      name: "Airmurite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/4tg7vz7.png"
},
{
      name: "Alakazamite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/5Mi9KiR.png"
},
{
      name: "Aligatueurite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/A5n4yNJ.png"
},
{
      name: "Altarite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/8xy7lN3.png"
},
{
      name: "Amphinolite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/r0gyJOq.png"
},
{
      name: "Baggaïdite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/PNitqEf.png"
},
{
      name: "Blindépiquite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/VN2EwhC.png"
},
{
      name: "Blizzarite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/8A9vqYJ.png"
},
{
      name: "Branettite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/YEgoI1h.png"
},
{
      name: "Braségalite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/RyDJOie.png"
},
{
      name: "Brutalibrite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/CQQTsfv.png"
},
{
      name: "Brutapodite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/rVmchuQ.png"
},
{
      name: "Caméruptite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/ek5mkT3.png"
},
{
      name: "Carchacrokite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/Nm7icRm.png"
},
{
      name: "Carchacrokite Z",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/zgFQIOQ.png"
},
{
      name: "Charminite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/IlNSoZ9.png"
},
{
      name: "Cizayoxite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
      imageUrl: "https://2img.net/i.imgur.com/PipTEwJ.png"
},
{
  name: "Crabominablite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/GlUQqP0.png",
},
{
  name: "Dardargnite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/6vDb2sM.png",
},
{
  name: "Démolossite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/TjXJqL0.png",
},
{
  name: "Dracaufite X",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/T87Gd3Q.png",
},
{
  name: "Dracaufite Y",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/3V6ky7Y.png",
},
{
  name: "Dracolossite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/VfjxAyL.png",
},
{
  name: "Draïeulite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/mZkZ7lh.png",
},
{
  name: "Drattakite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/yVQX8hV.png",
},
{
  name: "Ectoplasmite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/A6ju363.png",
},
{
  name: "Élecsprintite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/bEAHxhK.png",
},
{
  name: "Empiflorite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/RleYwoI.png",
},
{
  name: "Éokite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/9VS4u3f.png",
},
{
  name: "Étouraptorite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/vDRLbps.png",
},
{
  name: "Flagadossite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/kL7ssZ2.png",
},
{
  name: "Floréclatite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/HrZ8IUP.png",
},
{
  name: "Florizarrite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/NGHmvJe.png",
},
{
  name: "Galekingite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/HCvSHKh.png",
},
{
  name: "Gallamite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/HhDFKqd.png",
},
{
  name: "Gardevoirite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/A48w0tZ.png",
},
{
  name: "Glaivodite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/Flopo7n.png",
},
{
  name: "Golemastokite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/tpseCFU.png",
},
{
  name: "Golgopathite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/EbBRIcJ.png",
},
{
  name: "Goupelinite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/vE3M2ZA.png",
},
{
  name: "Hexadronite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/826SJwk.png",
},
{
  name: "Jungkite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/W8dVigP.png",
},
{
  name: "Kangourexite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/hP1mUN0.png",
},
{
  name: "Kravarechite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/8JeDROk.png",
},
{
  name: "Laggronite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/jTeH30g.png",
},
{
  name: "Léviatorite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/8Bq5KxD.png",
},
{
  name: "Lockpinite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/LFOUu4G.png",
},
{
  name: "Lucarite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/lANE1jB.png",
},
{
  name: "Lucarite Z",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/Dw8hcYp.png",
},
{
  name: "Lugulabrite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/EeJM0G5.png",
},
{
  name: "Méganiumite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/sohkUBC.png",
},
{
  name: "Mélodelfite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/glbmj6w.png",
},
{
  name: "Métalossite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/MvTj6uv.png",
},
{
  name: "Minotaupite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/0squs9U.png",
},
{
  name: "Mistigrixite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/SC9xlGy.png",
},
{
  name: "Momartikite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/9iz7yi9.png",
},
{
  name: "Mysdibulite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/irGl96s.png",
},
{
  name: "Nanméouïte",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/zXrmXoL.png",
},
{
  name: "Néméliosite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/0B8b8sX.png",
},
{
  name: "Nigirigonite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/bT14hab.png",
},
{
  name: "Ohmassacrite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/AmdgZVS.png",
},
{
  name: "Oniglalite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/gdYCPYF.png",
},
{
  name: "Pharampite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/m6hsSPa.png",
},
{
  name: "Ptéraïte",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/iAMIQIf.png",
},
{
  name: "Raichuïte X",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/42grWvm.png",
},
{
  name: "Raichuïte Y",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/lFeq3P8.png",
},
{
  name: "Roitiflamite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/3SWmjsL.png",
},
{
  name: "Roucarnagite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/Rw7VpEj.png",
},
{
  name: "Sarmuraïte",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/f9c8a1p.png",
},
{
  name: "Scarabruite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/Bt0PWkQ.png",
},
{
  name: "Scarhinoïte",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/ebk8gjZ.png",
},
{
  name: "Scovilainite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/qqgbVWb.png",
},
{
  name: "Sepiatrocite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/UyofSQM.png",
},
{
  name: "Sharpedite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/AO03TIs.png",
},
{
  name: "Starossite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/tvqDh4H.png",
},
{
  name: "Steelixite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/B1D73wN.png",
},
{
  name: "Ténéfixite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/jcPxvYy.png",
},
{
  name: "Tortankite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/dZN0CkW.png",
},
{
  name: "Tyranocivite",
      categories_videgrenier: "none",
      categories_boutique: "none",
      categories_tc: "displayed",
  imageUrl: "https://2img.net/i.imgur.com/lJe1YTW.png",
}];
  DisplayProductList(products);
  DisplayCTList(products);
  DisplayMegaList(products)
  DisplayItemList(products);
});
