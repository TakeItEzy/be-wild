$(document).ready(function() {
  // RÉCUPÉRATION DU CODE
  var formpkmEdit = sessionStorage.getItem("formpkmEdit");
  $('#preview').html(formpkmEdit);
  
  // Fonction changer de groupe
  var progGroupe = $('.bw__team-pokemonV2').attr('class');
  $('body').addClass(progGroupe).removeClass('bw__trainer-cardV2').removeClass('bw__team-pokemonV2');
  if( progGroupe == 'bw__team-pokemonV2 bw__trainer-cardV2 adamantia' ){
    $('#region .adamantia').attr('selected', 'selected');
    $('select#region').attr('class', 'adamantia');
  } else if( progGroupe == 'bw__team-pokemonV2 bw__trainer-cardV2 anthos' ){
    $('#region .anthos').attr('selected', 'selected');
    $('select#region').attr('class', 'anthos');
  } else if( progGroupe == 'bw__team-pokemonV2 bw__trainer-cardV2 calleis' ){
    $('#region .calleis').attr('selected', 'selected');
    $('select#region').attr('class', 'calleis');
  } else if( progGroupe == 'bw__team-pokemonV2 bw__trainer-cardV2 haptos' ){
    $('#region .haptos').attr('selected', 'selected');
    $('select#region').attr('class', 'haptos');
  } else if( progGroupe == 'bw__team-pokemonV2 bw__trainer-cardV2 kopadia' ){
    $('#region .kopadia').attr('selected', 'selected');
    $('select#region').attr('class', 'kopadia');
  }
 
  $("select#region").change(function(){
    $("select#region option.adamantia:selected").each(function(){
      $('select#region').attr('class', 'adamantia');
      $('.bw__trainer-cardV2').attr('class', 'bw__team-pokemonV2 bw__trainer-cardV2 adamantia');
      $('body').attr('class', 'adamantia');
    });
  });
  $("select#region").change(function(){
    $("select#region option.anthos:selected").each(function(){
      $('select#region').attr('class', 'anthos');
      $('.bw__trainer-cardV2').attr('class', 'bw__team-pokemonV2 bw__trainer-cardV2 anthos');
      $('body').attr('class', 'anthos');
    });
  });
  $("select#region").change(function(){
    $("select#region option.calleis:selected").each(function(){
      $('select#region').attr('class', 'calleis');
      $('.bw__trainer-cardV2').attr('class', 'bw__team-pokemonV2 bw__trainer-cardV2 calleis');
      $('body').attr('class', 'calleis');
    });
  });
  $("select#region").change(function(){
    $("select#region option.haptos:selected").each(function(){
      $('select#region').attr('class', 'haptos');
      $('.bw__trainer-cardV2').attr('class', 'bw__team-pokemonV2 bw__trainer-cardV2 haptos');
      $('body').attr('class', 'haptos');
    });
  });
  $("select#region").change(function(){
    $("select#region option.kopadia:selected").each(function(){
      $('select#region').attr('class', 'kopadia');
      $('.bw__trainer-cardV2').attr('class', 'bw__team-pokemonV2 bw__trainer-cardV2 kopadia');
      $('body').attr('class', 'kopadia');
    });
  });
  
  // POST RÉCUPÉRÉ → INPUT POUR LE PREVIEW
  
  //Sous-titre
  var subtitle = $('.container__subtitle').html();
  $('.container__subtitle').replaceWith(`<span class="container__subtitle" id="subtitle" role="textbox" contenteditable>` + subtitle + `</span>`);


  $('.team__pokemon').each(function(){
    //Surnom
    var surnom = $(this).find('.description__name').html().replace(/"/gi, "'");
    $(this).find('.description__name').replaceWith(`<input class="description__name" type="text" id="surnom" autocomplete="off" placeholder="Surnom" value="` + surnom + `" autocomplete="off">`);
  
    //Espèce
    var espece = $(this).find('.description__species').html().replace(/"/gi, "'");
    $(this).find('.description__species').replaceWith(`<input class="description__species" type="text" id="espece" autocomplete="off" placeholder="Espèce" value="` + espece + `">`);
  
    //Descri
    var pokemon_desc = $(this).find('.description__text .text-direction').html().replace(/<br>/gi, "\n");
    $(this).find('.description__text').replaceWith(`<textarea class="description__text" id="pokemon_desc" name="pokemon_desc" placeholder="Description du Pokémon">` + pokemon_desc + `</textarea>`);


    //Niveau
    var niveau = $(this).find('.details__list div:nth-child(1) lvl').html();
    var niveauAll = $(this).find('.details__list div:nth-child(1)').html().replace(/]/gi, ''),
    niveau2 = niveauAll.split('[')[1];
    $(this).find('.details__list > div:nth-child(1)').replaceWith(`<div>Niv.<input type="text" id="lvl" placeholder="XX" autocomplete="off" value="` + niveau + `">[<input type="text" id="lvl2" placeholder="XX/XX" autocomplete="off" value="` + niveau2 + `"/>]</div>`);
  
      //Nature
    var nature = $(this).find('.details__list > div:nth-child(2)').html().replace(/"/gi, "'");
    $(this).find('.details__list > div:nth-child(2)').replaceWith(`<input type="text" id="nature" placeholder="Nature" autocomplete="off" value="` + nature + `">`);
  
      //Genre
    var genre = $(this).find('.list__gender > div:nth-child(1)').html().replace(/"/gi, "'");
    $(this).find('.list__gender > div:nth-child(1)').replaceWith(`<input type="text" id="genre" placeholder="Genre" autocomplete="off" value="` + genre + `">`);
  
      //Obtention
    var obtention = $(this).find('.list__gender > div:nth-child(2)').html();
    $(this).find('.list__gender > div:nth-child(2)').replaceWith(`<input type="text" id="obtention" placeholder="Obtention" autocomplete="off" value="` + obtention + `">`);
  
      //Talent
    var talent = $(this).find('.list__talent').html(),
        talentName = $(this).find('.list__talent span').html().replace(/"/gi, "'"),
    talentDesc = talent.split('</span> : ')[1];
    $(this).find('.list__talent').replaceWith(`<div class="list__talent"><input type="text" id="talent" placeholder="Nom du talent" autocomplete="off" value="` + talentName + `"/> <textarea class="autoresize" id="pokemon_talent" name="pokemon_talent" placeholder="Description du talent du Pokémon">` + talentDesc + `</textarea></div>`);
    autosize( $('.autoresize') );
  
        //Stats
    var statPV = $(this).find('.values__table .row:nth-child(1) .cell:nth-child(1)').html(),
        statAtk = $(this).find('.values__table .row:nth-child(1) .cell:nth-child(2)').html(),
        statDef = $(this).find('.values__table .row:nth-child(1) .cell:nth-child(3)').html(),
            statSatk = $(this).find('.values__table .row:nth-child(1) .cell:nth-child(4)').html(),
        statSdef = $(this).find('.values__table .row:nth-child(1) .cell:nth-child(5)').html(),
        statVit = $(this).find('.values__table .row:nth-child(1) .cell:nth-child(6)').html();
    $(this).find('.values__table .row:nth-child(1) .cell:nth-child(1)').replaceWith(`<input class="cell" type="text" id="pv_base" autocomplete="off" placeholder="0" value="` + statPV + `">`);
    $(this).find('.values__table .row:nth-child(1) .cell:nth-child(2)').replaceWith(`<input class="cell" type="text" id="atk_base" autocomplete="off" placeholder="0" value="` + statAtk + `">`);
    $(this).find('.values__table .row:nth-child(1) .cell:nth-child(3)').replaceWith(`<input class="cell" type="text" id="def_base" autocomplete="off" placeholder="0" value="` + statDef + `">`);
    $(this).find('.values__table .row:nth-child(1) .cell:nth-child(4)').replaceWith(`<input class="cell" type="text" id="satk_base" autocomplete="off" placeholder="0" value="` + statSatk + `">`);
    $(this).find('.values__table .row:nth-child(1) .cell:nth-child(5)').replaceWith(`<input class="cell" type="text" id="sdef_base" autocomplete="off" placeholder="0" value="` + statSdef + `">`);
    $(this).find('.values__table .row:nth-child(1) .cell:nth-child(6)').replaceWith(`<input class="cell" type="text" id="vit_base" autocomplete="off" placeholder="0" value="` + statVit + `">`);
  
    var statPVvit = $(this).find('.values__table .row:nth-child(3) .cell:nth-child(1)').html().replace(/-/gi, ""),
        statAtkvit = $(this).find('.values__table .row:nth-child(3) .cell:nth-child(2)').html().replace(/-/gi, ""),
        statDefvit = $(this).find('.values__table .row:nth-child(3) .cell:nth-child(3)').html().replace(/-/gi, ""),
            statSatkvit = $(this).find('.values__table .row:nth-child(3) .cell:nth-child(4)').html().replace(/-/gi, ""),
        statSdefvit = $(this).find('.values__table .row:nth-child(3) .cell:nth-child(5)').html().replace(/-/gi, ""),
        statVitvit = $(this).find('.values__table .row:nth-child(3) .cell:nth-child(6)').html().replace(/-/gi, "");
    $(this).find('.values__table .row:nth-child(3) .cell:nth-child(1)').replaceWith(`<input class="cell" type="text" id="pv_vit" autocomplete="off" placeholder="+0" value="` + statPVvit + `">`);
    $(this).find('.values__table .row:nth-child(3) .cell:nth-child(2)').replaceWith(`<input class="cell" type="text" id="atk_vit" autocomplete="off" placeholder="+0" value="` + statAtkvit + `">`);
    $(this).find('.values__table .row:nth-child(3) .cell:nth-child(3)').replaceWith(`<input class="cell" type="text" id="def_vit" autocomplete="off" placeholder="+0" value="` + statDefvit + `">`);
    $(this).find('.values__table .row:nth-child(3) .cell:nth-child(4)').replaceWith(`<input class="cell" type="text" id="satk_vit" autocomplete="off" placeholder="+0" value="` + statSatkvit + `">`);
    $(this).find('.values__table .row:nth-child(3) .cell:nth-child(5)').replaceWith(`<input class="cell" type="text" id="sdef_vit" autocomplete="off" placeholder="+0" value="` + statSdefvit + `">`);
    $(this).find('.values__table .row:nth-child(3) .cell:nth-child(6)').replaceWith(`<input class="cell" type="text" id="vit_vit" autocomplete="off" placeholder="+0" value="` + statVitvit + `">`);
  
      //Attaques
  var typeAtk1 = $(this).find('.moves-trainers__moves > div:nth-child(1)').attr('class'),
        nameAtk1 = $(this).find('.moves-trainers__moves > div:nth-child(1)').html().replace(/"/gi, "'");
    var typeAtk2 = $(this).find('.moves-trainers__moves > div:nth-child(2)').attr('class'),
        nameAtk2 = $(this).find('.moves-trainers__moves > div:nth-child(2)').html().replace(/"/gi, "'");
    var typeAtk3 = $(this).find('.moves-trainers__moves > div:nth-child(3)').attr('class'),
        nameAtk3 = $(this).find('.moves-trainers__moves > div:nth-child(3)').html().replace(/"/gi, "'");
    var typeAtk4 = $(this).find('.moves-trainers__moves > div:nth-child(4)').attr('class'),
        nameAtk4 = $(this).find('.moves-trainers__moves > div:nth-child(4)').html().replace(/"/gi, "'");
    
  
    $(this).find('.moves-trainers__moves > div:nth-child(1)').replaceWith(`<div><select id="typeatk1" class="` + typeAtk1 + `"><option class="aucun-type" value="aucun-type">Type</option><option class="acier" value="acier">Acier</option><option class="combat" value="combat">Combat</option><option class="dragon" value="dragon">Dragon</option><option class="eau" value="eau">Eau</option><option class="electrique" value="electrique">Électrik</option><option class="fee" value="fee">Fée</option><option class="feu" value="feu">Feu</option><option class="glace" value="glace">Glace</option><option class="insecte" value="insecte">Insecte</option><option class="normal" value="normal">Normal</option><option class="plante" value="plante">Plante</option><option class="poison" value="poison">Poison</option><option class="psy" value="psy">Psy</option><option class="roche" value="roche">Roche</option><option class="sol" value="sol">Sol</option><option class="spectre" value="spectre">Spectre</option><option class="tenebres" value="tenebres">Ténèbres</option><option class="vol" value="vol">Vol</option></select><input type="text" id="atk1" placeholder="Nom attaque" autocomplete="off" value="` + nameAtk1 + `"></div>`);
    $(this).find('.moves-trainers__moves > div:nth-child(2)').replaceWith(`<div><select id="typeatk2" class="` + typeAtk2 + `"><option class="aucun-type" value="aucun-type">Type</option><option class="acier" value="acier">Acier</option><option class="combat" value="combat">Combat</option><option class="dragon" value="dragon">Dragon</option><option class="eau" value="eau">Eau</option><option class="electrique" value="electrique">Électrik</option><option class="fee" value="fee">Fée</option><option class="feu" value="feu">Feu</option><option class="glace" value="glace">Glace</option><option class="insecte" value="insecte">Insecte</option><option class="normal" value="normal">Normal</option><option class="plante" value="plante">Plante</option><option class="poison" value="poison">Poison</option><option class="psy" value="psy">Psy</option><option class="roche" value="roche">Roche</option><option class="sol" value="sol">Sol</option><option class="spectre" value="spectre">Spectre</option><option class="tenebres" value="tenebres">Ténèbres</option><option class="vol" value="vol">Vol</option></select><input type="text" id="atk2" placeholder="Nom attaque" autocomplete="off" value="` + nameAtk2 + `"></div>`);
    $(this).find('.moves-trainers__moves > div:nth-child(3)').replaceWith(`<div><select id="typeatk3" class="` + typeAtk3 + `"><option class="aucun-type" value="aucun-type">Type</option><option class="acier" value="acier">Acier</option><option class="combat" value="combat">Combat</option><option class="dragon" value="dragon">Dragon</option><option class="eau" value="eau">Eau</option><option class="electrique" value="electrique">Électrik</option><option class="fee" value="fee">Fée</option><option class="feu" value="feu">Feu</option><option class="glace" value="glace">Glace</option><option class="insecte" value="insecte">Insecte</option><option class="normal" value="normal">Normal</option><option class="plante" value="plante">Plante</option><option class="poison" value="poison">Poison</option><option class="psy" value="psy">Psy</option><option class="roche" value="roche">Roche</option><option class="sol" value="sol">Sol</option><option class="spectre" value="spectre">Spectre</option><option class="tenebres" value="tenebres">Ténèbres</option><option class="vol" value="vol">Vol</option></select><input type="text" id="atk3" placeholder="Nom attaque" autocomplete="off" value="` + nameAtk3 + `"></div>`);
    $(this).find('.moves-trainers__moves > div:nth-child(4)').replaceWith(`<div><select id="typeatk4" class="` + typeAtk4 + `"><option class="aucun-type" value="aucun-type">Type</option><option class="acier" value="acier">Acier</option><option class="combat" value="combat">Combat</option><option class="dragon" value="dragon">Dragon</option><option class="eau" value="eau">Eau</option><option class="electrique" value="electrique">Électrik</option><option class="fee" value="fee">Fée</option><option class="feu" value="feu">Feu</option><option class="glace" value="glace">Glace</option><option class="insecte" value="insecte">Insecte</option><option class="normal" value="normal">Normal</option><option class="plante" value="plante">Plante</option><option class="poison" value="poison">Poison</option><option class="psy" value="psy">Psy</option><option class="roche" value="roche">Roche</option><option class="sol" value="sol">Sol</option><option class="spectre" value="spectre">Spectre</option><option class="tenebres" value="tenebres">Ténèbres</option><option class="vol" value="vol">Vol</option></select><input type="text" id="atk4" placeholder="Nom attaque" autocomplete="off" value="` + nameAtk4 + `"></div>`);
    
    var nbAtk = $(this).find('.moves-trainers__moves > div').length;
  
    if( nbAtk == 4 ){
      var newAtk = $(this).find('.moves-trainers__moves > a');
      $(`<div><select id="typeatk5" class=""><option class="aucun-type" value="aucun-type">Type</option><option class="acier" value="acier">Acier</option><option class="combat" value="combat">Combat</option><option class="dragon" value="dragon">Dragon</option><option class="eau" value="eau">Eau</option><option class="electrique" value="electrique">Électrik</option><option class="fee" value="fee">Fée</option><option class="feu" value="feu">Feu</option><option class="glace" value="glace">Glace</option><option class="insecte" value="insecte">Insecte</option><option class="normal" value="normal">Normal</option><option class="plante" value="plante">Plante</option><option class="poison" value="poison">Poison</option><option class="psy" value="psy">Psy</option><option class="roche" value="roche">Roche</option><option class="sol" value="sol">Sol</option><option class="spectre" value="spectre">Spectre</option><option class="tenebres" value="tenebres">Ténèbres</option><option class="vol" value="vol">Vol</option></select><input type="text" id="atk5" placeholder="Nom attaque" autocomplete="off" value=""></div>`).insertBefore(newAtk);
    } else {
        var typeAtk5 = $(this).find('.moves-trainers__moves > div:nth-child(5)').attr('class'),
        nameAtk5 = $(this).find('.moves-trainers__moves > div:nth-child(5)').html().replace(/"/gi, "'");
        $(this).find('.moves-trainers__moves > div:nth-child(5)').replaceWith(`<div><select id="typeatk5" class="` + typeAtk5 + `"><option class="aucun-type" value="aucun-type">Type</option><option class="acier" value="acier">Acier</option><option class="combat" value="combat">Combat</option><option class="dragon" value="dragon">Dragon</option><option class="eau" value="eau">Eau</option><option class="electrique" value="electrique">Électrik</option><option class="fee" value="fee">Fée</option><option class="feu" value="feu">Feu</option><option class="glace" value="glace">Glace</option><option class="insecte" value="insecte">Insecte</option><option class="normal" value="normal">Normal</option><option class="plante" value="plante">Plante</option><option class="poison" value="poison">Poison</option><option class="psy" value="psy">Psy</option><option class="roche" value="roche">Roche</option><option class="sol" value="sol">Sol</option><option class="spectre" value="spectre">Spectre</option><option class="tenebres" value="tenebres">Ténèbres</option><option class="vol" value="vol">Vol</option></select><input type="text" id="atk5" placeholder="Nom attaque" autocomplete="off" value="` + nameAtk5 + `"></div>`);
    }


    // Types des attaques
      $('.moves-trainers__moves select').change(function(){
          var atkType = $(this).val();
          $(this).attr('class', atkType);
      });
  
      //Dresseurs
    var trainer1 = $(this).find('.trainers__list div:nth-child(1)').html().replace(/"/gi, "'"),
        trainer2 = $(this).find('.trainers__list div:nth-child(2)').html().replace(/"/gi, "'"),
        trainer3 = $(this).find('.trainers__list div:nth-child(3)').html().replace(/"/gi, "'"),
        trainer4 = $(this).find('.trainers__list div:nth-child(4)').html().replace(/"/gi, "'");
    $(this).find('.trainers__list div:nth-child(1)').replaceWith(`<input type="text" id="trainer1" placeholder="Nom + Prénom" autocomplete="off" value="` + trainer1 + `" />`);
    $(this).find('.trainers__list div:nth-child(2)').replaceWith(`<input type="text" id="trainer2" placeholder="Nom + Prénom" autocomplete="off" value="` + trainer2 + `" />`);
    $(this).find('.trainers__list div:nth-child(3)').replaceWith(`<input type="text" id="trainer3" placeholder="Nom + Prénom" autocomplete="off" value="` + trainer3 + `" />`);
    $(this).find('.trainers__list div:nth-child(4)').replaceWith(`<input type="text" id="trainer4" placeholder="Nom + Prénom" autocomplete="off" value="` + trainer4 + `" />`);
  
    //Boutons de modif
    $(this).append(`<div class="buttons_2"><span class="modif"><i class="fa-solid fa-gear"></i></span><span class="drag"><i class="fa-solid fa-arrows-up-down-left-right" aria-hidden="true"></i></span><span class="add"><i class="fa-solid fa-plus" aria-hidden="true"></i></span></div>`);
    $(this).append(`<div class="buttons_1"><span class="delete"><i class="fa-solid fa-trash"></i></span></div>`);
    
  });


  // Ajouter 1 Pokémon
  $('.trainer-cardV2__team').on('click', '.add', function(){
    var i = $('.team__pokemon').length + 1;
  $(this).closest('.team__pokemon').after(`<div class="team__pokemon" id="team__pokemon` + i + `"><div class="pokemon__informations"><div class="informations__condition"><div class="condition__types"><div><img src="https://i.imgur.com/AU9bion.png" title="NOMTYPE"></div><div><img src="https://i.imgur.com/AU9bion.png" title="NOMTYPE"></div><div class="types__tera"><img src="https://i.servimg.com/u/f24/18/99/97/34/tera_t29.png" title="Normal"/></div></div><div class="condition__state"><div title="Normal"><img src="https://i.servimg.com/u/f24/18/99/97/34/icon_o10.png"></div></div></div><div class="informations__description"><input class="description__name" type="text" id="surnom" placeholder="Surnom" autocomplete="off"><input class="description__species" type="text" id="espece" autocomplete="off" placeholder="Espèce"><textarea class="description__text" id="pokemon_desc" name="pokemon_desc" placeholder="Description du Pokémon"></textarea></div><div class="informations__infos"><div class="infos__details"><div class="details__item"><img src="https://www.pokemontrash.com/pokedex/images/items/premier-ball.png" title="Aucun Objet"></div><div class="details__sprite"><img src="https://www.pokepedia.fr/images/d/d3/Sprite_0292_DP.png"></div><div class="details__list"><div>Niv.<input type="text" id="lvl" autocomplete="off" placeholder="XX">[<input type="text" id="lvl2" autocomplete="off" placeholder="XX/XX">]</div><input type="text" id="nature" autocomplete="off" placeholder="Nature"><div class="list__gender"><input type="text" id="genre" autocomplete="off" placeholder="Genre"><input type="text" id="obtention" autocomplete="off" placeholder="Obtention"></div><div class="list__talent"><input type="text" id="talent" placeholder="Nom du talent" autocomplete="off"> <textarea class="autoresize" id="pokemon_talent" name="pokemon_talent" placeholder="Description du talent du Pokémon"></textarea></div></div></div><div class="informations__btn-infos-supp">Informations Supplémentaires</div></div></div><div class="hidden pokemon__moderation"><div class="moderation__stats"><div class="stats__name"><div>STAT</div><div>PV</div><div>ATK</div><div>DEF</div><div>S.ATK</div><div>S.DEF</div><div>VIT</div></div><div class="stats__values"><div class="values__bonus"><div>BASE</div><div>ÉTAT</div><div>VITAM</div><div>OBJET</div><div>TOTAL</div></div><div class="values__table"><div class="row"><input class="cell" type="text" id="pv_base" autocomplete="off" placeholder="0"><input class="cell" type="text" id="atk_base" autocomplete="off" placeholder="0"><input class="cell" type="text" id="def_base" autocomplete="off" placeholder="0"><input class="cell" type="text" id="satk_base" autocomplete="off" placeholder="0"><input class="cell" type="text" id="sdef_base" autocomplete="off" placeholder="0"><input class="cell" type="text" id="speed_base" autocomplete="off" placeholder="0"></div><div class="row"><div class="cell">-</div><div class="cell">-</div><div class="cell">-</div><div class="cell">-</div><div class="cell">-</div><div class="cell">-</div></div><div class="row"><input class="cell" type="text" id="pv_vitam" autocomplete="off" placeholder="+0"><input class="cell" type="text" id="atk_vitam" autocomplete="off" placeholder="+0"><input class="cell" type="text" id="def_vitam" autocomplete="off" placeholder="+0"><input class="cell" type="text" id="satk_vitam" autocomplete="off" placeholder="+0"><input class="cell" type="text" id="sdef_vitam" autocomplete="off" placeholder="+0"><input class="cell" type="text" id="speed_vitam" autocomplete="off" placeholder="+0"></div><div class="row"><div class="cell">-</div><div class="cell">-</div><div class="cell">-</div><div class="cell">-</div><div class="cell">-</div><div class="cell">-</div></div><div class="row"><div class="cell">0</div><div class="cell">0</div><div class="cell">0</div><div class="cell">0</div><div class="cell">0</div><div class="cell">0</div></div></div></div><div class="stats__pv"><div><span>Pv Réels :</span><pv>0</pv></div></div></div><div class="moderation_moves-trainers"><div class="moves-trainers__moves"><div><select id="typeatk1"><option class="aucun-type" value="aucun-type">Type</option><option class="acier" value="acier">Acier</option><option class="combat" value="combat">Combat</option><option class="dragon" value="dragon">Dragon</option><option class="eau" value="eau">Eau</option><option class="electrique" value="electrique">Électrik</option><option class="fee" value="fee">Fée</option><option class="feu" value="feu">Feu</option><option class="glace" value="glace">Glace</option><option class="insecte" value="insecte">Insecte</option><option class="normal" value="normal">Normal</option><option class="plante" value="plante">Plante</option><option class="poison" value="poison">Poison</option><option class="psy" value="psy">Psy</option><option class="roche" value="roche">Roche</option><option class="sol" value="sol">Sol</option><option class="spectre" value="spectre">Spectre</option><option class="tenebres" value="tenebres">Ténèbres</option><option class="vol" value="vol">Vol</option></select><input type="text" id="atk1" placeholder="Nom attaque" autocomplete="off"></div><div><select id="typeatk2"><option class="aucun-type" value="aucun-type">Type</option><option class="acier" value="acier">Acier</option><option class="combat" value="combat">Combat</option><option class="dragon" value="dragon">Dragon</option><option class="eau" value="eau">Eau</option><option class="electrique" value="electrique">Électrik</option><option class="fee" value="fee">Fée</option><option class="feu" value="feu">Feu</option><option class="glace" value="glace">Glace</option><option class="insecte" value="insecte">Insecte</option><option class="normal" value="normal">Normal</option><option class="plante" value="plante">Plante</option><option class="poison" value="poison">Poison</option><option class="psy" value="psy">Psy</option><option class="roche" value="roche">Roche</option><option class="sol" value="sol">Sol</option><option class="spectre" value="spectre">Spectre</option><option class="tenebres" value="tenebres">Ténèbres</option><option class="vol" value="vol">Vol</option></select><input type="text" id="atk2" placeholder="Nom attaque" autocomplete="off"></div><div><select id="typeatk3"><option class="aucun-type" value="aucun-type">Type</option><option class="acier" value="acier">Acier</option><option class="combat" value="combat">Combat</option><option class="dragon" value="dragon">Dragon</option><option class="eau" value="eau">Eau</option><option class="electrique" value="electrique">Électrik</option><option class="fee" value="fee">Fée</option><option class="feu" value="feu">Feu</option><option class="glace" value="glace">Glace</option><option class="insecte" value="insecte">Insecte</option><option class="normal" value="normal">Normal</option><option class="plante" value="plante">Plante</option><option class="poison" value="poison">Poison</option><option class="psy" value="psy">Psy</option><option class="roche" value="roche">Roche</option><option class="sol" value="sol">Sol</option><option class="spectre" value="spectre">Spectre</option><option class="tenebres" value="tenebres">Ténèbres</option><option class="vol" value="vol">Vol</option></select><input type="text" id="atk3" placeholder="Nom attaque" autocomplete="off"></div><div><select id="typeatk4"><option class="aucun-type" value="aucun-type">Type</option><option class="acier" value="acier">Acier</option><option class="combat" value="combat">Combat</option><option class="dragon" value="dragon">Dragon</option><option class="eau" value="eau">Eau</option><option class="electrique" value="electrique">Électrik</option><option class="fee" value="fee">Fée</option><option class="feu" value="feu">Feu</option><option class="glace" value="glace">Glace</option><option class="insecte" value="insecte">Insecte</option><option class="normal" value="normal">Normal</option><option class="plante" value="plante">Plante</option><option class="poison" value="poison">Poison</option><option class="psy" value="psy">Psy</option><option class="roche" value="roche">Roche</option><option class="sol" value="sol">Sol</option><option class="spectre" value="spectre">Spectre</option><option class="tenebres" value="tenebres">Ténèbres</option><option class="vol" value="vol">Vol</option></select><input type="text" id="atk4" placeholder="Nom attaque" autocomplete="off"></div><div><select id="typeatk5"><option class="aucun-type" value="aucun-type">Type</option><option class="acier" value="acier">Acier</option><option class="combat" value="combat">Combat</option><option class="dragon" value="dragon">Dragon</option><option class="eau" value="eau">Eau</option><option class="electrique" value="electrique">Électrik</option><option class="fee" value="fee">Fée</option><option class="feu" value="feu">Feu</option><option class="glace" value="glace">Glace</option><option class="insecte" value="insecte">Insecte</option><option class="normal" value="normal">Normal</option><option class="plante" value="plante">Plante</option><option class="poison" value="poison">Poison</option><option class="psy" value="psy">Psy</option><option class="roche" value="roche">Roche</option><option class="sol" value="sol">Sol</option><option class="spectre" value="spectre">Spectre</option><option class="tenebres" value="tenebres">Ténèbres</option><option class="vol" value="vol">Vol</option></select><input type="text" id="atk5" placeholder="Nom attaque" autocomplete="off"></div><a href="https://www.pokepedia.fr/" target="_blank"><div class="moves__pokepedia">Fiche Poképedia</div></a></div><div class="moves-trainers__trainers"><div class="trainers__title">Anciens <span>Dresseurs</span></div><div class="trainers__list"><input type="text" id="trainer1" placeholder="Nom + Prénom" autocomplete="off"><input type="text" id="trainer2" placeholder="Nom + Prénom" autocomplete="off"><input type="text" id="trainer3" placeholder="Nom + Prénom" autocomplete="off"><input type="text" id="trainer4" placeholder="Nom + Prénom" autocomplete="off"></div></div></div></div><div class="buttons_2"><span class="modif"><i class="fa-solid fa-gear"></i></span><span class="drag"><i class="fa-solid fa-arrows-up-down-left-right" aria-hidden="true"></i></span><span class="add"><i class="fa-solid fa-plus" aria-hidden="true"></i></span></div><div class="buttons_1"><span class="delete"><i class="fa-solid fa-trash"></i></span></div></div>`);
    // Types des attaques
      $('.moves-trainers__moves select').change(function(){
          var atkType = $(this).val();
          $(this).attr('class', atkType);
      });
      // Modification d'un Pokémon créé
      var modifTemplate = `<div class="bloc_modif blocHidden team__pokemon` + i + `" id="bloc_modif` + i + `"><h2>Modification de <span id="subtitle_surnom">Surnom</span> (<span id="subtitle_espece">Espèce</span>)</h2><label>Type(s)</label><div class="type_select"><select id="type1"><option class="aucun-type" value="https://i.imgur.com/AU9bion.png">Sélectionner</option><option class="aucun-type" value="https://i.imgur.com/AU9bion.png">Aucun</option><option class="Acier" value="https://www.pokepedia.fr/images/thumb/0/0e/Ic%C3%B4ne_Type_Acier_HOME.png/60px-Ic%C3%B4ne_Type_Acier_HOME.png">Acier</option><option class="Combat" value="https://www.pokepedia.fr/images/thumb/2/25/Ic%C3%B4ne_Type_Combat_HOME.png/60px-Ic%C3%B4ne_Type_Combat_HOME.png">Combat</option><option class="Dragon" value="https://www.pokepedia.fr/images/thumb/5/5c/Ic%C3%B4ne_Type_Dragon_HOME.png/60px-Ic%C3%B4ne_Type_Dragon_HOME.png">Dragon</option><option class="Eau" value="https://www.pokepedia.fr/images/thumb/3/30/Ic%C3%B4ne_Type_Eau_HOME.png/60px-Ic%C3%B4ne_Type_Eau_HOME.png">Eau</option><option class="Électrik" value="https://www.pokepedia.fr/images/thumb/c/c5/Ic%C3%B4ne_Type_%C3%89lectrik_HOME.png/60px-Ic%C3%B4ne_Type_%C3%89lectrik_HOME.png">Électrik</option><option class="Fée" value="https://www.pokepedia.fr/images/thumb/6/62/Ic%C3%B4ne_Type_F%C3%A9e_HOME.png/60px-Ic%C3%B4ne_Type_F%C3%A9e_HOME.png">Fée</option><option class="Feu" value="https://www.pokepedia.fr/images/thumb/2/23/Ic%C3%B4ne_Type_Feu_HOME.png/60px-Ic%C3%B4ne_Type_Feu_HOME.png">Feu</option><option class="Glace" value="https://www.pokepedia.fr/images/thumb/1/19/Ic%C3%B4ne_Type_Glace_HOME.png/60px-Ic%C3%B4ne_Type_Glace_HOME.png">Glace</option><option class="Insecte" value="https://www.pokepedia.fr/images/thumb/6/62/Ic%C3%B4ne_Type_Insecte_HOME.png/60px-Ic%C3%B4ne_Type_Insecte_HOME.png">Insecte</option><option class="Normal" value="https://www.pokepedia.fr/images/thumb/0/05/Ic%C3%B4ne_Type_Normal_HOME.png/60px-Ic%C3%B4ne_Type_Normal_HOME.png">Normal</option><option class="Plante" value="https://www.pokepedia.fr/images/thumb/0/0b/Ic%C3%B4ne_Type_Plante_HOME.png/60px-Ic%C3%B4ne_Type_Plante_HOME.png">Plante</option><option class="Poison" value="https://www.pokepedia.fr/images/thumb/4/45/Ic%C3%B4ne_Type_Poison_HOME.png/60px-Ic%C3%B4ne_Type_Poison_HOME.png">Poison</option><option class="Psy" value="https://www.pokepedia.fr/images/thumb/4/42/Ic%C3%B4ne_Type_Psy_HOME.png/60px-Ic%C3%B4ne_Type_Psy_HOME.png">Psy</option><option class="Roche" value="https://www.pokepedia.fr/images/thumb/2/27/Ic%C3%B4ne_Type_Roche_HOME.png/60px-Ic%C3%B4ne_Type_Roche_HOME.png">Roche</option><option class="Sol" value="https://www.pokepedia.fr/images/thumb/3/37/Ic%C3%B4ne_Type_Sol_HOME.png/60px-Ic%C3%B4ne_Type_Sol_HOME.png">Sol</option><option class="Spectre" value="https://www.pokepedia.fr/images/thumb/e/e2/Ic%C3%B4ne_Type_Spectre_HOME.png/60px-Ic%C3%B4ne_Type_Spectre_HOME.png">Spectre</option><option class="Ténèbres" value="https://www.pokepedia.fr/images/thumb/d/d2/Ic%C3%B4ne_Type_T%C3%A9n%C3%A8bres_HOME.png/60px-Ic%C3%B4ne_Type_T%C3%A9n%C3%A8bres_HOME.png">Ténèbres</option><option class="Vol" value="https://www.pokepedia.fr/images/thumb/8/84/Ic%C3%B4ne_Type_Vol_HOME.png/60px-Ic%C3%B4ne_Type_Vol_HOME.png">Vol</option></select><select id="type2"><option class="aucun-type" value="https://i.imgur.com/AU9bion.png">Sélectionner</option><option class="aucun-type" value="https://i.imgur.com/AU9bion.png">Aucun</option><option class="Acier" value="https://www.pokepedia.fr/images/thumb/0/0e/Ic%C3%B4ne_Type_Acier_HOME.png/60px-Ic%C3%B4ne_Type_Acier_HOME.png">Acier</option><option class="Combat" value="https://www.pokepedia.fr/images/thumb/2/25/Ic%C3%B4ne_Type_Combat_HOME.png/60px-Ic%C3%B4ne_Type_Combat_HOME.png">Combat</option><option class="Dragon" value="https://www.pokepedia.fr/images/thumb/5/5c/Ic%C3%B4ne_Type_Dragon_HOME.png/60px-Ic%C3%B4ne_Type_Dragon_HOME.png">Dragon</option><option class="Eau" value="https://www.pokepedia.fr/images/thumb/3/30/Ic%C3%B4ne_Type_Eau_HOME.png/60px-Ic%C3%B4ne_Type_Eau_HOME.png">Eau</option><option class="Électrik" value="https://www.pokepedia.fr/images/thumb/c/c5/Ic%C3%B4ne_Type_%C3%89lectrik_HOME.png/60px-Ic%C3%B4ne_Type_%C3%89lectrik_HOME.png">Électrik</option><option class="Fée" value="https://www.pokepedia.fr/images/thumb/6/62/Ic%C3%B4ne_Type_F%C3%A9e_HOME.png/60px-Ic%C3%B4ne_Type_F%C3%A9e_HOME.png">Fée</option><option class="Feu" value="https://www.pokepedia.fr/images/thumb/2/23/Ic%C3%B4ne_Type_Feu_HOME.png/60px-Ic%C3%B4ne_Type_Feu_HOME.png">Feu</option><option class="Glace" value="https://www.pokepedia.fr/images/thumb/1/19/Ic%C3%B4ne_Type_Glace_HOME.png/60px-Ic%C3%B4ne_Type_Glace_HOME.png">Glace</option><option class="Insecte" value="https://www.pokepedia.fr/images/thumb/6/62/Ic%C3%B4ne_Type_Insecte_HOME.png/60px-Ic%C3%B4ne_Type_Insecte_HOME.png">Insecte</option><option class="Normal" value="https://www.pokepedia.fr/images/thumb/0/05/Ic%C3%B4ne_Type_Normal_HOME.png/60px-Ic%C3%B4ne_Type_Normal_HOME.png">Normal</option><option class="Plante" value="https://www.pokepedia.fr/images/thumb/0/0b/Ic%C3%B4ne_Type_Plante_HOME.png/60px-Ic%C3%B4ne_Type_Plante_HOME.png">Plante</option><option class="Poison" value="https://www.pokepedia.fr/images/thumb/4/45/Ic%C3%B4ne_Type_Poison_HOME.png/60px-Ic%C3%B4ne_Type_Poison_HOME.png">Poison</option><option class="Psy" value="https://www.pokepedia.fr/images/thumb/4/42/Ic%C3%B4ne_Type_Psy_HOME.png/60px-Ic%C3%B4ne_Type_Psy_HOME.png">Psy</option><option class="Roche" value="https://www.pokepedia.fr/images/thumb/2/27/Ic%C3%B4ne_Type_Roche_HOME.png/60px-Ic%C3%B4ne_Type_Roche_HOME.png">Roche</option><option class="Sol" value="https://www.pokepedia.fr/images/thumb/3/37/Ic%C3%B4ne_Type_Sol_HOME.png/60px-Ic%C3%B4ne_Type_Sol_HOME.png">Sol</option><option class="Spectre" value="https://www.pokepedia.fr/images/thumb/e/e2/Ic%C3%B4ne_Type_Spectre_HOME.png/60px-Ic%C3%B4ne_Type_Spectre_HOME.png">Spectre</option><option class="Ténèbres" value="https://www.pokepedia.fr/images/thumb/d/d2/Ic%C3%B4ne_Type_T%C3%A9n%C3%A8bres_HOME.png/60px-Ic%C3%B4ne_Type_T%C3%A9n%C3%A8bres_HOME.png">Ténèbres</option><option class="Vol" value="https://www.pokepedia.fr/images/thumb/8/84/Ic%C3%B4ne_Type_Vol_HOME.png/60px-Ic%C3%B4ne_Type_Vol_HOME.png">Vol</option></select></div><label>Type Téracristal</label><div class="type_select"><select id="teratype"><option class="aucun-type" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t29.png">Sélectionner</option><option class="Acier" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t34.png">Acier</option><option class="Combat" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t21.png">Combat</option><option class="Dragon" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t17.png">Dragon</option><option class="Eau" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t32.png">Eau</option><option class="Électrik" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t20.png">Électrik</option><option class="Fée" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t22.png">Fée</option><option class="Feu" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t23.png">Feu</option><option class="Glace" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t26.png">Glace</option><option class="Insecte" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t18.png">Insecte</option><option class="Normal" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t29.png">Normal</option><option class="Plante" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t27.png">Plante</option><option class="Poison" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t31.png">Poison</option><option class="Psy" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t30.png">Psy</option><option class="Roche" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t33.png">Roche</option><option class="Sol" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t28.png">Sol</option><option class="Spectre" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t24.png">Spectre</option><option class="Ténèbres" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t19.png">Ténèbres</option><option class="Vol" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t25.png">Vol</option></select></div><label for="sprite">URL du Sprite (max 100 * 100 px)</label> <input id="sprite" name="sprite" type="url" value="https://www.pokepedia.fr/images/d/d3/Sprite_0292_DP.png"><label>Tient...</label> <div class="autoComplete_wrapper"><div class="autoComplete_wrapper autocomplete_bloc"><input class="autoComplete" type="text" tabindex="1" autocomplete="off" placeholder="Nom de l'objet" id="autocomplete"></div></div><label>État</label><div class="etat_select"><select id="etat1"><option class="select-state" value="https://i.servimg.com/u/f24/18/99/97/34/icon_o10.png">Sélectionner</option><option class="Normal" value="https://i.servimg.com/u/f24/18/99/97/34/icon_o10.png">Normal</option><option class="Alpha" value="https://i.servimg.com/u/f24/18/99/97/34/icon_a11.png">Alpha</option><option class="Chromatique" value="https://i.servimg.com/u/f24/18/99/97/34/icon_s17.png">Chromatique</option><option class="Fauxminescent" value="https://i.servimg.com/u/f24/18/99/97/34/icon_f10.png">Fauxminescent</option><option class="Événementiel" value="https://i.servimg.com/u/f24/18/99/97/34/icon_e12.png">Événementiel</option><option class="Obscur" value="https://i.servimg.com/u/f24/18/99/97/34/icon_s18.png">Obscur</option><option class="Soigné" value="https://i.servimg.com/u/f24/18/99/97/34/icon_p29.png">Soigné</option><option class="Immunisé" value="https://i.imgur.com/fToSwvB.png">Immunisé</option></select><select id="etat2"><option class="select-state" value="">Aucun</option><option class="Normal" value="https://i.servimg.com/u/f24/18/99/97/34/icon_o10.png">Normal</option><option class="Alpha" value="https://i.servimg.com/u/f24/18/99/97/34/icon_a11.png">Alpha</option><option class="Chromatique" value="https://i.servimg.com/u/f24/18/99/97/34/icon_s17.png">Chromatique</option><option class="Fauxminescent" value="https://i.servimg.com/u/f24/18/99/97/34/icon_f10.png">Fauxminescent</option><option class="Événementiel" value="https://i.servimg.com/u/f24/18/99/97/34/icon_e12.png">Événementiel</option><option class="Obscur" value="https://i.servimg.com/u/f24/18/99/97/34/icon_s18.png">Obscur</option><option class="Soigné" value="https://i.servimg.com/u/f24/18/99/97/34/icon_p29.png">Soigné</option><option class="Immunisé" value="https://i.imgur.com/fToSwvB.png">Immunisé</option></select></div><label for="pokepedia">URL vers la page Poképédia</label> <input id="pokepedia" autocomplete="off" name="pokepedia" type="url" value="https://www.pokepedia.fr/"></div>`;
      $(modifTemplate).insertBefore('.buttons_envoi');


    $('#team__pokemon' + i).on('click', '.modif', function(){
    $('.bloc_modif:not(.team__pokemon' + i + ')').addClass('blocHidden');
    $('.team__pokemon' + i).toggleClass('blocHidden');
      });
        // Modif des champs de gauche
    $('.team__pokemon' + i).change(function(){
            var urlPokepedia = $(this).find('#pokepedia').val();
      $('#team__pokemon' + i + ' .moves-trainers__moves a').attr('href', urlPokepedia);
      
      var urlSprite = $(this).find('#sprite').val();
            $('#team__pokemon' + i + ' .details__sprite img').attr('src', urlSprite);
          });
    $('#team__pokemon' + i).change(function(){
      var surnom = $(this).find('#surnom').val();
      var espece = $(this).find('#espece').val();
      $('.team__pokemon' + i + ' h2 span:nth-child(1)').html(surnom);
      $('.team__pokemon' + i + ' h2 span:nth-child(2)').html(espece);
    });
    // Types du Pokémon
        $('.team__pokemon' + i + ' #type1').change(function(){
          var type1 = $(this).val(),
              type1_name = $(this).find('option:selected').text();
          $('#team__pokemon' + i + ' .condition__types div:nth-child(1) img').attr('src', type1);
          $('#team__pokemon' + i + ' .condition__types div:nth-child(1) img').attr('title', type1_name);
        });
        $('.team__pokemon' + i + ' #type2').change(function(){
          var type2 = $(this).val(),
              type2_name = $(this).find('option:selected').text();


    if( $('#team__pokemon' + i + ' .condition__types div:not(.types__tera):nth-child(2)').html() == undefined){
      $(`<!-- TYPE 2 (prendre une image ronde (https://www.pokepedia.fr/Plante) --><div><img src="https://i.imgur.com/AU9bion.png" title="Sélectionner"/></div>`).insertBefore('#team__pokemon' + i + ' .condition__types .types__tera');
    }


          if( type2_name == 'Aucun' ){
            $('#team__pokemon' + i + ' .condition__types div:not(.types__tera):nth-child(2)').css('display', 'none');
          } else {
            $('#team__pokemon' + i + ' .condition__types div:not(.types__tera):nth-child(2)').css('display', 'flex');
          }
          $('#team__pokemon' + i + ' .condition__types div:not(.types__tera):nth-child(2) img').attr('src', type2);
          $('#team__pokemon' + i + ' .condition__types div:not(.types__tera):nth-child(2) img').attr('title', type2_name);
        });


  // Tératype du Pokémon
        $('.team__pokemon' + i + ' #teratype').change(function(){
          var teratype = $(this).val(),
              teratype_name = $(this).find('option:selected').text();
          $('#team__pokemon' + i + ' .condition__types .types__tera img').attr('src', teratype);
          $('#team__pokemon' + i + ' .condition__types .types__tera img').attr('title', teratype_name);
        });
  
    // États du Pokémon
        $('.team__pokemon' + i + ' #etat1').change(function(){
          var etat1 = $(this).val(),
              etat1_name = $(this).find('option:selected').text();
          $('#team__pokemon' + i + ' .condition__state div:nth-child(1) img').attr('src', etat1);
          $('#team__pokemon' + i + ' .condition__state div:nth-child(1)').attr('title', etat1_name);
        });
        $('.team__pokemon' + i + ' #etat2').change(function(){
          var etat2 = $(this).val(),
              etat2_name = $(this).find('option:selected').text();
    if( $('#team__pokemon' + i + ' .condition__state div:nth-child(2)').html() == undefined){
      $('#team__pokemon' + i + ' .condition__state').append(`<!-- ÉTAT 2 (chroma, obscur, shiny...)  --><div title=""><img src=""/></div>`)
    }


          if( etat2_name == 'Aucun' ){
            $('#team__pokemon' + i + ' .condition__state div:nth-child(2)').css('display', 'none');
          } else {
            $('#team__pokemon' + i + ' .condition__state div:nth-child(2)').css('display', 'flex');
          }
          $('#team__pokemon' + i + ' .condition__state div:nth-child(2) img').attr('src', etat2);
          $('#team__pokemon' + i + ' .condition__state div:nth-child(2)').attr('title', etat2_name);
        });
  
    $('.team__pokemon' + i + ' .etat_select').change(function(){


          if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('select-state') ){
            $('.team__pokemon' + i + ' #etat2 .aucun-state, .team__pokemon' + i + ' #etat2 .Alpha, .team__pokemon' + i + ' #etat2 .Chromatique, .team__pokemon' + i + ' #etat2 .Fauxminescent, .team__pokemon' + i + ' #etat2 .Événementiel, .team__pokemon' + i + ' #etat2 .Obscur, .team__pokemon' + i + ' #etat2 .Soigné, .team__pokemon' + i + ' #etat2 .Immunisé').css('display', 'block');
            if( $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').remove();
            } else{
              $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('.team__pokemon' + i + ' #etat1').val());
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat1').find('option:selected').text());
            }
          }
          if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('Normal') ){
            $('.team__pokemon' + i + ' #etat2 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat2 .Chromatique, .team__pokemon' + i + ' #etat2 .Événementiel, .team__pokemon' + i + ' #etat2 .Obscur, .team__pokemon' + i + ' #etat2 .Soigné, .team__pokemon' + i + ' #etat2 .aucun-state, .team__pokemon' + i + ' #etat2 .Alpha, .team__pokemon' + i + ' #etat2 .Fauxminescent, .team__pokemon' + i + ' #etat2 .Immunisé').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('.team__pokemon' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat1').find('option:selected').text());
          }
          if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('Alpha') ){
            $('.team__pokemon' + i + ' #etat2 .aucun-state, .team__pokemon' + i + ' #etat2 .Alpha, .team__pokemon' + i + ' #etat2 .Fauxminescent, .team__pokemon' + i + ' #etat2 .Immunisé, .team__pokemon' + i + ' #etat2 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat2 .Chromatique, .team__pokemon' + i + ' #etat2 .Événementiel, .team__pokemon' + i + ' #etat2 .Obscur, .team__pokemon' + i + ' #etat2 .Soigné').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('.team__pokemon' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat1').find('option:selected').text());
          }
          if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('Chromatique') ){
            $('.team__pokemon' + i + ' #etat2 .aucun-state, .team__pokemon' + i + ' #etat2 .Chromatique, .team__pokemon' + i + ' #etat2 .Fauxminescent, .team__pokemon' + i + ' #etat2 .Obscur, .team__pokemon' + i + ' #etat2 .Soigné, .team__pokemon' + i + ' #etat2 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat2 .Alpha, .team__pokemon' + i + ' #etat2 .Événementiel, .team__pokemon' + i + ' #etat2 .Immunisé').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('.team__pokemon' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat1').find('option:selected').text());
          } 
          if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('Fauxminescent') ){
            $('.team__pokemon' + i + ' #etat2 .aucun-state, .team__pokemon' + i + ' #etat2 .Alpha, .team__pokemon' + i + ' #etat2 .Chromatique, .team__pokemon' + i + ' #etat2 .Fauxminescent, .team__pokemon' + i + ' #etat2 .Événementiel, .team__pokemon' + i + ' #etat2 .Immunisé, .team__pokemon' + i + ' #etat2 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat2 .Obscur, .team__pokemon' + i + ' #etat2 .Soigné').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('.team__pokemon' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat1').find('option:selected').text());
          } 
          if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('Événementiel') ){
            $('.team__pokemon' + i + ' #etat2 .aucun-state, .team__pokemon' + i + ' #etat2 .Fauxminescent, .team__pokemon' + i + ' #etat2 .Événementiel, .team__pokemon' + i + ' #etat2 .Immunisé, .team__pokemon' + i + ' #etat2 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat2 .Alpha, .team__pokemon' + i + ' #etat2 .Chromatique .team__pokemon' + i + ' #etat2 .Obscur, .team__pokemon' + i + ' #etat2 .Soigné').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('.team__pokemon' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat1').find('option:selected').text());
          } 
          if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('Obscur') ){
            $('.team__pokemon' + i + ' #etat2 .aucun-state, .team__pokemon' + i + ' #etat2 .Chromatique, .team__pokemon' + i + ' #etat2 .Obscur, .team__pokemon' + i + ' #etat2 .Soigné, .team__pokemon' + i + ' #etat2 .Immunisé, .team__pokemon' + i + ' #etat2 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat2 .Alpha, .team__pokemon' + i + ' #etat2 .Fauxminescent, .team__pokemon' + i + ' #etat2 .Événementiel').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('.team__pokemon' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat1').find('option:selected').text());
          } 
          if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('Soigné') ){
            $('.team__pokemon' + i + ' #etat2 .aucun-state, .team__pokemon' + i + ' #etat2 .Chromatique, .team__pokemon' + i + ' #etat2 .Obscur, .team__pokemon' + i + ' #etat2 .Soigné, .team__pokemon' + i + ' #etat2 .Immunisé, .team__pokemon' + i + ' #etat2 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat2 .Alpha, .team__pokemon' + i + ' #etat2 .Fauxminescent, .team__pokemon' + i + ' #etat2 .Événementiel').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('.team__pokemon' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat1').find('option:selected').text());
          }
          if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('Immunisé') ){
            $('.team__pokemon' + i + ' #etat2 .Normal, .team__pokemon' + i + ' #etat2 .Événementiel, .team__pokemon' + i + ' #etat2 .Obscur, .team__pokemon' + i + ' #etat2 .Soigné, .team__pokemon' + i + ' #etat2 .Alpha, .team__pokemon' + i + ' #etat2 .Fauxminescent, .team__pokemon' + i + ' #etat2 .Immunisé').css('display', 'none');
            $('.team__pokemon' + i + ' #etat2 .Chromatique, .team__pokemon' + i + ' #etat2 .aucun-state').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('.team__pokemon' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat1').find('option:selected').text());
          }
      
          if( $('.team__pokemon' + i + ' #etat2 option:selected').hasClass('select-state') ){
            $('.team__pokemon' + i + ' #etat1 .aucun-state, .team__pokemon' + i + ' #etat1 .Alpha, .team__pokemon' + i + ' #etat1 .Chromatique, .team__pokemon' + i + ' #etat1 .Fauxminescent, .team__pokemon' + i + ' #etat1 .Événementiel, .team__pokemon' + i + ' #etat1 .Obscur, .team__pokemon' + i + ' #etat1 .Soigné, .team__pokemon' + i + ' #etat1 .Immunisé, .team__pokemon' + i + ' #etat1 .Normal').css('display', 'block');
            if($('.team__pokemon' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('.team__pokemon' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat2').find('option:selected').text());
            } else{
              //$('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('.team__pokemon' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('.team__pokemon' + i + ' #etat2').val() + `"></div>`);
            }
          }
          if( $('.team__pokemon' + i + ' #etat2 option:selected').hasClass('Alpha') ){
            $('.team__pokemon' + i + ' #etat1 .aucun-state, .team__pokemon' + i + ' #etat1 .Alpha, .team__pokemon' + i + ' #etat1 .Fauxminescent, .team__pokemon' + i + ' #etat1 .Immunisé, .team__pokemon' + i + ' #etat1 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat1 .Chromatique, .team__pokemon' + i + ' #etat1 .Événementiel, .team__pokemon' + i + ' #etat1 .Obscur, .team__pokemon' + i + ' #etat1 .Soigné').css('display', 'block');
            if($('.team__pokemon' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('.team__pokemon' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('.team__pokemon' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('.team__pokemon' + i + ' #etat2').val() + `"></div>`);
            }
          }
          if( $('.team__pokemon' + i + ' #etat2 option:selected').hasClass('Chromatique') ){
            $('.team__pokemon' + i + ' #etat1 .aucun-state, .team__pokemon' + i + ' #etat1 .Chromatique, .team__pokemon' + i + ' #etat1 .Fauxminescent, .team__pokemon' + i + ' #etat1 .Obscur, .team__pokemon' + i + ' #etat1 .Soigné, .team__pokemon' + i + ' #etat1 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat1 .Alpha, .team__pokemon' + i + ' #etat1 .Événementiel, .team__pokemon' + i + ' #etat1 .Immunisé').css('display', 'block');
            if($('.team__pokemon' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('.team__pokemon' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('.team__pokemon' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('.team__pokemon' + i + ' #etat2').val() + `"></div>`);
            }
          } 
          if( $('.team__pokemon' + i + ' #etat2 option:selected').hasClass('Fauxminescent') ){
            $('.team__pokemon' + i + ' #etat1 .aucun-state, .team__pokemon' + i + ' #etat1 .Alpha, .team__pokemon' + i + ' #etat1 .Chromatique, .team__pokemon' + i + ' #etat1 .Fauxminescent, .team__pokemon' + i + ' #etat1 .Événementiel, .team__pokemon' + i + ' #etat1 .Immunisé, .team__pokemon' + i + ' #etat1 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat1 .Obscur, .team__pokemon' + i + ' #etat1 .Soigné').css('display', 'block');
            if($('.team__pokemon' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('.team__pokemon' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('.team__pokemon' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('.team__pokemon' + i + ' #etat2').val() + `"></div>`);
            }
          } 
          if( $('.team__pokemon' + i + ' #etat2 option:selected').hasClass('Événementiel') ){
            $('.team__pokemon' + i + ' #etat1 .aucun-state, .team__pokemon' + i + ' #etat1 .Fauxminescent, .team__pokemon' + i + ' #etat1 .Événementiel, .team__pokemon' + i + ' #etat1 .Immunisé, .team__pokemon' + i + ' #etat1 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat1 .Alpha, .team__pokemon' + i + ' #etat1 .Chromatique .team__pokemon' + i + ' #etat1 .Obscur, .team__pokemon' + i + ' #etat1 .Soigné').css('display', 'block');
            if($('.team__pokemon' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('.team__pokemon' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('.team__pokemon' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('.team__pokemon' + i + ' #etat2').val() + `"></div>`);
            }
          } 
          if( $('.team__pokemon' + i + ' #etat2 option:selected').hasClass('Obscur') ){
            $('.team__pokemon' + i + ' #etat1 .aucun-state, .team__pokemon' + i + ' #etat1 .Chromatique, .team__pokemon' + i + ' #etat1 .Obscur, .team__pokemon' + i + ' #etat1 .Soigné, .team__pokemon' + i + ' #etat1 .Immunisé, .team__pokemon' + i + ' #etat1 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat1 .Alpha, .team__pokemon' + i + ' #etat1 .Fauxminescent, .team__pokemon' + i + ' #etat1 .Événementiel').css('display', 'block');
            if($('.team__pokemon' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('.team__pokemon' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('.team__pokemon' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('.team__pokemon' + i + ' #etat2').val() + `"></div>`);
            }
          }
          if( $('.team__pokemon' + i + ' #etat2 option:selected').hasClass('Immunisé') ){
            $('.team__pokemon' + i + ' #etat1 .aucun-state, .team__pokemon' + i + ' #etat2 .aucun-state, .team__pokemon' + i + ' #etat1 .Alpha, .team__pokemon' + i + ' #etat1 .Fauxminescent, .team__pokemon' + i + ' #etat1 .Immunisé, .team__pokemon' + i + ' #etat1 .Normal, .team__pokemon' + i + ' #etat1 .Événementiel, .team__pokemon' + i + ' #etat1 .Obscur, .team__pokemon' + i + ' #etat1 .Soigné').css('display', 'none');
            $('.team__pokemon' + i + ' #etat1 .Chromatique').css('display', 'block');
            if($('.team__pokemon' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('.team__pokemon' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('.team__pokemon' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('.team__pokemon' + i + ' #etat2').val() + `"></div>`);
            }
          }
          if( $('.team__pokemon' + i + ' #etat2 option:selected').hasClass('Soigné') ){
            $('.team__pokemon' + i + ' #etat1 .aucun-state, .team__pokemon' + i + ' #etat1 .Chromatique, .team__pokemon' + i + ' #etat1 .Obscur, .team__pokemon' + i + ' #etat1 .Soigné, .team__pokemon' + i + ' #etat1 .Immunisé, .team__pokemon' + i + ' #etat1 .Normal').css('display', 'none');
            $('.team__pokemon' + i + ' #etat1 .Alpha, .team__pokemon' + i + ' #etat1 .Fauxminescent, .team__pokemon' + i + ' #etat1 .Événementiel').css('display', 'block');
            if($('.team__pokemon' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('.team__pokemon' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('.team__pokemon' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('.team__pokemon' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('.team__pokemon' + i + ' #etat2').val() + `"></div>`);
            }
          }
      
          if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('Alpha') || $('.team__pokemon' + i + ' #etat2 option:selected').hasClass('Alpha') ){
          var alphaPV = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').val(),
        alphaAtk = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(2)').val(),
        alphaDef = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(3)').val(),
        alphaSatk = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(4)').val(),
        alphaSdef = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(5)').val(),
        alphaVit = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(6)').val();
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').replaceWith(`<input class="cell" type="text" id="pvAlpha" placeholder="0" value="` + alphaPV + `"/>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(2)').replaceWith(`<input class="cell" type="text" id="atkAlpha" placeholder="0" value="` + alphaAtk + `"/>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(3)').replaceWith(`<input class="cell" type="text" id="defAlpha" placeholder="0" value="` + alphaDef + `"/>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(4)').replaceWith(`<input class="cell" type="text" id="satkAlpha" placeholder="0" value="` + alphaSatk + `"/>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(5)').replaceWith(`<input class="cell" type="text" id="sdefAlpha" placeholder="0" value="` + alphaSdef + `"/>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(6)').replaceWith(`<input class="cell" type="text" id="speedAlpha" placeholder="0" value="` + alphaVit + `"/>`);
          } else if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('Obscur') || $('.team__pokemon' + i + ' #etat2 option:selected').hasClass('Obscur') && $('.team__pokemon' + i + ' #etat1 option:selected').not('.Alpha') && $('.team__pokemon' + i + ' #etat2 option:selected').not('.Alpha') ){
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').replaceWith(`<div class="cell">×1.25</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(2)').replaceWith(`<div class="cell">×1.25</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(3)').replaceWith(`<div class="cell">×1.25</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(4)').replaceWith(`<div class="cell">×1.25</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(5)').replaceWith(`<div class="cell">×1.25</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(6)').replaceWith(`<div class="cell">×1.25</div>`);
          } else if( $('.team__pokemon' + i + ' #etat1 option:selected').hasClass('Soigné') || $('.team__pokemon' + i + ' #etat2 option:selected').hasClass('Soigné') ){
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').replaceWith(`<div class="cell">×1.15</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(2)').replaceWith(`<div class="cell">×1.15</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(3)').replaceWith(`<div class="cell">×1.15</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(4)').replaceWith(`<div class="cell">×1.15</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(5)').replaceWith(`<div class="cell">×1.15</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(6)').replaceWith(`<div class="cell">×1.15</div>`);
          } else{
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').replaceWith(`<div class="cell">-</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(2)').replaceWith(`<div class="cell">-</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(3)').replaceWith(`<div class="cell">-</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(4)').replaceWith(`<div class="cell">-</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(5)').replaceWith(`<div class="cell">-</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(6)').replaceWith(`<div class="cell">-</div>`);
          }
        });


      autosize( $('.autoresize') );
    dragdrop();
  });
  
  // Supprimer 1 Pokémon
  $('.trainer-cardV2__team').on('click', '.delete', function(){
          if(confirm("Êtes-vous sûr·e de vouloir supprimer ce Pokémon ? Attention, cette action est irréversible.")) {
               $(this).closest('.team__pokemon').remove();
               var i = $(this).closest('.team__pokemon').attr('id');
               $('.bloc_modif.' + i).remove();
          } else { return; }
  });


  $('.team__pokemon').each(function(i){
    i = i+1;
    $(this).attr('id', 'team__pokemon' + i);
  
  //Tératype
    var teratype = $(this).find('.types__tera').length;
    if( teratype == 0 ){
      $(this).find('.condition__types').append(`<div class="types__tera"><img src="https://i.servimg.com/u/f24/18/99/97/34/tera_t29.png" title="Normal"/></div>`);
    }
  
    var modifTemplate = `<div class="bloc_modif blocHidden" id="bloc_modif` + i + `"><h2>Modification de <span id="subtitle_surnom"></span> (<span id="subtitle_espece"></span>)</h2><label>Type(s)</label><div class="type_select"><select id="type1"><option class="aucun-type" value="https://i.imgur.com/AU9bion.png">Sélectionner</option><option class="aucun-type" value="https://i.imgur.com/AU9bion.png">Aucun</option><option class="Acier" value="https://www.pokepedia.fr/images/thumb/0/0e/Ic%C3%B4ne_Type_Acier_HOME.png/60px-Ic%C3%B4ne_Type_Acier_HOME.png">Acier</option><option class="Combat" value="https://www.pokepedia.fr/images/thumb/2/25/Ic%C3%B4ne_Type_Combat_HOME.png/60px-Ic%C3%B4ne_Type_Combat_HOME.png">Combat</option><option class="Dragon" value="https://www.pokepedia.fr/images/thumb/5/5c/Ic%C3%B4ne_Type_Dragon_HOME.png/60px-Ic%C3%B4ne_Type_Dragon_HOME.png">Dragon</option><option class="Eau" value="https://www.pokepedia.fr/images/thumb/3/30/Ic%C3%B4ne_Type_Eau_HOME.png/60px-Ic%C3%B4ne_Type_Eau_HOME.png">Eau</option><option class="Électrik" value="https://www.pokepedia.fr/images/thumb/c/c5/Ic%C3%B4ne_Type_%C3%89lectrik_HOME.png/60px-Ic%C3%B4ne_Type_%C3%89lectrik_HOME.png">Électrik</option><option class="Fée" value="https://www.pokepedia.fr/images/thumb/6/62/Ic%C3%B4ne_Type_F%C3%A9e_HOME.png/60px-Ic%C3%B4ne_Type_F%C3%A9e_HOME.png">Fée</option><option class="Feu" value="https://www.pokepedia.fr/images/thumb/2/23/Ic%C3%B4ne_Type_Feu_HOME.png/60px-Ic%C3%B4ne_Type_Feu_HOME.png">Feu</option><option class="Glace" value="https://www.pokepedia.fr/images/thumb/1/19/Ic%C3%B4ne_Type_Glace_HOME.png/60px-Ic%C3%B4ne_Type_Glace_HOME.png">Glace</option><option class="Insecte" value="https://www.pokepedia.fr/images/thumb/6/62/Ic%C3%B4ne_Type_Insecte_HOME.png/60px-Ic%C3%B4ne_Type_Insecte_HOME.png">Insecte</option><option class="Normal" value="https://www.pokepedia.fr/images/thumb/0/05/Ic%C3%B4ne_Type_Normal_HOME.png/60px-Ic%C3%B4ne_Type_Normal_HOME.png">Normal</option><option class="Plante" value="https://www.pokepedia.fr/images/thumb/0/0b/Ic%C3%B4ne_Type_Plante_HOME.png/60px-Ic%C3%B4ne_Type_Plante_HOME.png">Plante</option><option class="Poison" value="https://www.pokepedia.fr/images/thumb/4/45/Ic%C3%B4ne_Type_Poison_HOME.png/60px-Ic%C3%B4ne_Type_Poison_HOME.png">Poison</option><option class="Psy" value="https://www.pokepedia.fr/images/thumb/4/42/Ic%C3%B4ne_Type_Psy_HOME.png/60px-Ic%C3%B4ne_Type_Psy_HOME.png">Psy</option><option class="Roche" value="https://www.pokepedia.fr/images/thumb/2/27/Ic%C3%B4ne_Type_Roche_HOME.png/60px-Ic%C3%B4ne_Type_Roche_HOME.png">Roche</option><option class="Sol" value="https://www.pokepedia.fr/images/thumb/3/37/Ic%C3%B4ne_Type_Sol_HOME.png/60px-Ic%C3%B4ne_Type_Sol_HOME.png">Sol</option><option class="Spectre" value="https://www.pokepedia.fr/images/thumb/e/e2/Ic%C3%B4ne_Type_Spectre_HOME.png/60px-Ic%C3%B4ne_Type_Spectre_HOME.png">Spectre</option><option class="Ténèbres" value="https://www.pokepedia.fr/images/thumb/d/d2/Ic%C3%B4ne_Type_T%C3%A9n%C3%A8bres_HOME.png/60px-Ic%C3%B4ne_Type_T%C3%A9n%C3%A8bres_HOME.png">Ténèbres</option><option class="Vol" value="https://www.pokepedia.fr/images/thumb/8/84/Ic%C3%B4ne_Type_Vol_HOME.png/60px-Ic%C3%B4ne_Type_Vol_HOME.png">Vol</option></select><select id="type2"><option class="aucun-type" value="https://i.imgur.com/AU9bion.png">Sélectionner</option><option class="aucun-type" value="https://i.imgur.com/AU9bion.png">Aucun</option><option class="Acier" value="https://www.pokepedia.fr/images/thumb/0/0e/Ic%C3%B4ne_Type_Acier_HOME.png/60px-Ic%C3%B4ne_Type_Acier_HOME.png">Acier</option><option class="Combat" value="https://www.pokepedia.fr/images/thumb/2/25/Ic%C3%B4ne_Type_Combat_HOME.png/60px-Ic%C3%B4ne_Type_Combat_HOME.png">Combat</option><option class="Dragon" value="https://www.pokepedia.fr/images/thumb/5/5c/Ic%C3%B4ne_Type_Dragon_HOME.png/60px-Ic%C3%B4ne_Type_Dragon_HOME.png">Dragon</option><option class="Eau" value="https://www.pokepedia.fr/images/thumb/3/30/Ic%C3%B4ne_Type_Eau_HOME.png/60px-Ic%C3%B4ne_Type_Eau_HOME.png">Eau</option><option class="Électrik" value="https://www.pokepedia.fr/images/thumb/c/c5/Ic%C3%B4ne_Type_%C3%89lectrik_HOME.png/60px-Ic%C3%B4ne_Type_%C3%89lectrik_HOME.png">Électrik</option><option class="Fée" value="https://www.pokepedia.fr/images/thumb/6/62/Ic%C3%B4ne_Type_F%C3%A9e_HOME.png/60px-Ic%C3%B4ne_Type_F%C3%A9e_HOME.png">Fée</option><option class="Feu" value="https://www.pokepedia.fr/images/thumb/2/23/Ic%C3%B4ne_Type_Feu_HOME.png/60px-Ic%C3%B4ne_Type_Feu_HOME.png">Feu</option><option class="Glace" value="https://www.pokepedia.fr/images/thumb/1/19/Ic%C3%B4ne_Type_Glace_HOME.png/60px-Ic%C3%B4ne_Type_Glace_HOME.png">Glace</option><option class="Insecte" value="https://www.pokepedia.fr/images/thumb/6/62/Ic%C3%B4ne_Type_Insecte_HOME.png/60px-Ic%C3%B4ne_Type_Insecte_HOME.png">Insecte</option><option class="Normal" value="https://www.pokepedia.fr/images/thumb/0/05/Ic%C3%B4ne_Type_Normal_HOME.png/60px-Ic%C3%B4ne_Type_Normal_HOME.png">Normal</option><option class="Plante" value="https://www.pokepedia.fr/images/thumb/0/0b/Ic%C3%B4ne_Type_Plante_HOME.png/60px-Ic%C3%B4ne_Type_Plante_HOME.png">Plante</option><option class="Poison" value="https://www.pokepedia.fr/images/thumb/4/45/Ic%C3%B4ne_Type_Poison_HOME.png/60px-Ic%C3%B4ne_Type_Poison_HOME.png">Poison</option><option class="Psy" value="https://www.pokepedia.fr/images/thumb/4/42/Ic%C3%B4ne_Type_Psy_HOME.png/60px-Ic%C3%B4ne_Type_Psy_HOME.png">Psy</option><option class="Roche" value="https://www.pokepedia.fr/images/thumb/2/27/Ic%C3%B4ne_Type_Roche_HOME.png/60px-Ic%C3%B4ne_Type_Roche_HOME.png">Roche</option><option class="Sol" value="https://www.pokepedia.fr/images/thumb/3/37/Ic%C3%B4ne_Type_Sol_HOME.png/60px-Ic%C3%B4ne_Type_Sol_HOME.png">Sol</option><option class="Spectre" value="https://www.pokepedia.fr/images/thumb/e/e2/Ic%C3%B4ne_Type_Spectre_HOME.png/60px-Ic%C3%B4ne_Type_Spectre_HOME.png">Spectre</option><option class="Ténèbres" value="https://www.pokepedia.fr/images/thumb/d/d2/Ic%C3%B4ne_Type_T%C3%A9n%C3%A8bres_HOME.png/60px-Ic%C3%B4ne_Type_T%C3%A9n%C3%A8bres_HOME.png">Ténèbres</option><option class="Vol" value="https://www.pokepedia.fr/images/thumb/8/84/Ic%C3%B4ne_Type_Vol_HOME.png/60px-Ic%C3%B4ne_Type_Vol_HOME.png">Vol</option></select></div><label>Type Téracristal</label><div class="type_select"><select id="teratype"><option class="aucun-type" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t29.png">Sélectionner</option><option class="Acier" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t34.png">Acier</option><option class="Combat" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t21.png">Combat</option><option class="Dragon" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t17.png">Dragon</option><option class="Eau" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t32.png">Eau</option><option class="Électrik" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t20.png">Électrik</option><option class="Fée" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t22.png">Fée</option><option class="Feu" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t23.png">Feu</option><option class="Glace" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t26.png">Glace</option><option class="Insecte" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t18.png">Insecte</option><option class="Normal" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t29.png">Normal</option><option class="Plante" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t27.png">Plante</option><option class="Poison" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t31.png">Poison</option><option class="Psy" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t30.png">Psy</option><option class="Roche" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t33.png">Roche</option><option class="Sol" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t28.png">Sol</option><option class="Spectre" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t24.png">Spectre</option><option class="Ténèbres" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t19.png">Ténèbres</option><option class="Vol" value="https://i.servimg.com/u/f24/18/99/97/34/tera_t25.png">Vol</option></select></div><label for="sprite">URL du Sprite (max 100 * 100 px)</label> <input id="sprite" name="sprite" type="url" value="https://www.pokepedia.fr/images/d/d3/Sprite_0292_DP.png"><label>Tient...</label> <div class="autoComplete_wrapper"><div class="autoComplete_wrapper autocomplete_bloc"><input class="autoComplete" type="text" tabindex="1" autocomplete="off" placeholder="Nom de l'objet" id="autocomplete"></div></div><label>État</label><div class="etat_select"><select id="etat1"><option class="select-state" value="https://i.servimg.com/u/f24/18/99/97/34/icon_o10.png">Sélectionner</option><option class="Normal" value="https://i.servimg.com/u/f24/18/99/97/34/icon_o10.png">Normal</option><option class="Alpha" value="https://i.servimg.com/u/f24/18/99/97/34/icon_a11.png">Alpha</option><option class="Chromatique" value="https://i.servimg.com/u/f24/18/99/97/34/icon_s17.png">Chromatique</option><option class="Fauxminescent" value="https://i.servimg.com/u/f24/18/99/97/34/icon_f10.png">Fauxminescent</option><option class="Événementiel" value="https://i.servimg.com/u/f24/18/99/97/34/icon_e12.png">Événementiel</option><option class="Obscur" value="https://i.servimg.com/u/f24/18/99/97/34/icon_s18.png">Obscur</option><option class="Soigné" value="https://i.servimg.com/u/f24/18/99/97/34/icon_p29.png">Soigné</option><option class="Immunisé" value="https://i.imgur.com/fToSwvB.png">Immunisé</option></select><select id="etat2"><option class="select-state" value="">Aucun</option><option class="Normal" value="https://i.servimg.com/u/f24/18/99/97/34/icon_o10.png">Normal</option><option class="Alpha" value="https://i.servimg.com/u/f24/18/99/97/34/icon_a11.png">Alpha</option><option class="Chromatique" value="https://i.servimg.com/u/f24/18/99/97/34/icon_s17.png">Chromatique</option><option class="Fauxminescent" value="https://i.servimg.com/u/f24/18/99/97/34/icon_f10.png">Fauxminescent</option><option class="Événementiel" value="https://i.servimg.com/u/f24/18/99/97/34/icon_e12.png">Événementiel</option><option class="Obscur" value="https://i.servimg.com/u/f24/18/99/97/34/icon_s18.png">Obscur</option><option class="Soigné" value="https://i.servimg.com/u/f24/18/99/97/34/icon_p29.png">Soigné</option><option class="Immunisé" value="https://i.imgur.com/fToSwvB.png">Immunisé</option></select></div><label for="pokepedia">URL vers la page Poképédia</label> <input id="pokepedia" autocomplete="off" name="pokepedia" type="url" value="https://www.pokepedia.fr/"></div>`;
    $('.modifs').append(modifTemplate);
    $('#bloc_modif' + i).each(function(){
    var surnom = $('#team__pokemon' + i).find('.description__name').val();
    $(this).find('#subtitle_surnom').html(surnom);
    var espece = $('#team__pokemon' + i).find('.description__species').val();
    $(this).find('#subtitle_espece').html(espece);
    var sprite = $('#team__pokemon' + i).find('.details__sprite img').attr('src');
    $(this).find('#sprite').val(sprite);
    var pokepedia = $('#team__pokemon' + i).find('.moves-trainers__moves > a').attr('href');
    $(this).find('#pokepedia').val(pokepedia);
    var type1 = $('#team__pokemon' + i).find('.condition__types div:nth-child(1) img').attr('title');
    $(this).find('#type1 .' + type1).attr('selected', 'selected');
    var type2 = $('#team__pokemon' + i).find('.condition__types div:not(.types__tera):nth-child(2) img').attr('title');
    $(this).find('#type2 .' + type2).attr('selected', 'selected');
    var etat1 = $('#team__pokemon' + i).find('.condition__state div:nth-child(1)').attr('title');
    $(this).find('#etat1 .' + etat1).attr('selected', 'selected');
    var etat2 = $('#team__pokemon' + i).find('.condition__state div:nth-child(2)').attr('title');
    $(this).find('#etat2 .' + etat2).attr('selected', 'selected');
    var teratype = $('#team__pokemon' + i).find('.condition__types .types__tera img').attr('title');
    $(this).find('#teratype .' + teratype).attr('selected', 'selected');


    var autocompleteId = "autocomplete" + i;
          $(this).find(".autoComplete").attr("id",autocompleteId);
          //$("#bloc_modif" + i + " .autocomplete_bloc").append($('#ui-id-' + i));
          var itemName = $('#team__pokemon' + i).find('.details__item img').attr('title');
          $(this).find('#autocomplete' + i).val(itemName);
  });
  $('#team__pokemon' + i).on('click', '.modif', function(){
    $('.bloc_modif:not(#bloc_modif' + i + ')').addClass('blocHidden');
    $('#bloc_modif' + i).toggleClass('blocHidden');
  });


  // Modif des champs de gauche
  $('#bloc_modif' + i).change(function(){
          var urlPokepedia = $(this).find('#pokepedia').val();
    $('#team__pokemon' + i + ' .moves-trainers__moves a').attr('href', urlPokepedia);
    
    var urlSprite = $(this).find('#sprite').val();
          $('#team__pokemon' + i + ' .details__sprite img').attr('src', urlSprite);
        });
  $('#team__pokemon' + i).change(function(){
    var surnom = $(this).find('#surnom').val();
    var espece = $(this).find('#espece').val();
    $('#bloc_modif' + i + ' h2 span:nth-child(1)').html(surnom);
    $('#bloc_modif' + i + ' h2 span:nth-child(2)').html(espece);
  });


  // Types du Pokémon
  $('#bloc_modif' + i + ' #type1').change(function(){
    var type1 = $(this).val(),
        type1_name = $(this).find('option:selected').text();
    if( type1_name == "NOMTYPE" ){
        type1_name = "Normal";
    }
    $('#team__pokemon' + i + ' .condition__types div:nth-child(1) img').attr('src', type1);
    $('#team__pokemon' + i + ' .condition__types div:nth-child(1) img').attr('title', type1_name);
  });
  $('#bloc_modif' + i + ' #type2').change(function(){
      var type2 = $(this).val(),
          type2_name = $(this).find('option:selected').text();
      if( $('#team__pokemon' + i + ' .condition__types div:not(.types__tera):nth-child(2)').html() == undefined){
        $(`<!-- TYPE 2 (prendre une image ronde (https://www.pokepedia.fr/Plante) --><div><img src="https://i.imgur.com/AU9bion.png" title="Sélectionner"/></div>`).insertBefore('#team__pokemon' + i + ' .condition__types .types__tera');
      }
      if( type2_name == 'Aucun' ){
        $('#team__pokemon' + i + ' .condition__types div:not(.types__tera):nth-child(2)').css('display', 'none');
      } else {
        $('#team__pokemon' + i + ' .condition__types div:not(.types__tera):nth-child(2)').css('display', 'flex');
      }


      if( type2_name == "NOMTYPE" ){
        type2_name = "Normal";
      }
      $('#team__pokemon' + i + ' .condition__types div:not(.types__tera):nth-child(2) img').attr('src', type2);
      $('#team__pokemon' + i + ' .condition__types div:not(.types__tera):nth-child(2) img').attr('title', type2_name);
  });


  // Tératype du Pokémon
    $('#bloc_modif' + i + ' #teratype').change(function(){
      var teratype = $(this).val(),
          teratype_name = $(this).find('option:selected').text();
      $('#team__pokemon' + i + ' .condition__types .types__tera img').attr('src', teratype);
      $('#team__pokemon' + i + ' .condition__types .types__tera img').attr('title', teratype_name);
    });
  
    // États du Pokémon
    $('#bloc_modif' + i + ' #etat1').change(function(){
        var etat1 = $(this).val(),
            etat1_name = $(this).find('option:selected').text();
        $('#team__pokemon' + i + ' .condition__state div:nth-child(1) img').attr('src', etat1);
        $('#team__pokemon' + i + ' .condition__state div:nth-child(1)').attr('title', etat1_name);
        console.log(etat1_name);
    });
    $('#bloc_modif' + i + ' #etat2').change(function(){
        var etat2 = $(this).val(),
            etat2_name = $(this).find('option:selected').text();
        if( $('#team__pokemon' + i + ' .condition__state div:nth-child(2)').html() == undefined){
          $('#team__pokemon' + i + ' .condition__state').append(`<!-- ÉTAT 2 (chroma, obscur, shiny...)  --><div title=""><img src=""/></div>`)
        }


        if( etat2_name == 'Aucun' ){
          $('#team__pokemon' + i + ' .condition__state div:nth-child(2)').css('display', 'none');
        } else {
          $('#team__pokemon' + i + ' .condition__state div:nth-child(2)').css('display', 'flex');
        }
        $('#team__pokemon' + i + ' .condition__state div:nth-child(2) img').attr('src', etat2);
        $('#team__pokemon' + i + ' .condition__state div:nth-child(2)').attr('title', etat2_name);
    });
  
    $('#bloc_modif' + i + ' .etat_select').change(function(){


          if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('select-state') ){
            $('#bloc_modif' + i + ' #etat2 .aucun-state, #bloc_modif' + i + ' #etat2 .Alpha, #bloc_modif' + i + ' #etat2 .Chromatique, #bloc_modif' + i + ' #etat2 .Fauxminescent, #bloc_modif' + i + ' #etat2 .Événementiel, #bloc_modif' + i + ' #etat2 .Obscur, #bloc_modif' + i + ' #etat2 .Soigné, #bloc_modif' + i + ' #etat2 .Immunisé').css('display', 'block');
            if( $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').remove();
            } else{
              $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('#bloc_modif' + i + ' #etat1').val());
              $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('#bloc_modif' + i + ' #etat1').find('option:selected').text());
            }
          }
      if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('Normal') ){
            $('#bloc_modif' + i + ' #etat2 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat2 .Chromatique, #bloc_modif' + i + ' #etat2 .Événementiel, #bloc_modif' + i + ' #etat2 .Obscur, #bloc_modif' + i + ' #etat2 .Soigné, #bloc_modif' + i + ' #etat2 .aucun-state, #bloc_modif' + i + ' #etat2 .Alpha, #bloc_modif' + i + ' #etat2 .Fauxminescent, #bloc_modif' + i + ' #etat2 .Immunisé').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('#bloc_modif' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('#bloc_modif' + i + ' #etat1').find('option:selected').text());
          }
          if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('Alpha') ){
            $('#bloc_modif' + i + ' #etat2 .aucun-state, #bloc_modif' + i + ' #etat2 .Alpha, #bloc_modif' + i + ' #etat2 .Fauxminescent, #bloc_modif' + i + ' #etat2 .Immunisé, #bloc_modif' + i + ' #etat2 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat2 .Chromatique, #bloc_modif' + i + ' #etat2 .Événementiel, #bloc_modif' + i + ' #etat2 .Obscur, #bloc_modif' + i + ' #etat2 .Soigné').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('#bloc_modif' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('#bloc_modif' + i + ' #etat1').find('option:selected').text());
          }
          if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('Chromatique') ){
            $('#bloc_modif' + i + ' #etat2 .aucun-state, #bloc_modif' + i + ' #etat2 .Chromatique, #bloc_modif' + i + ' #etat2 .Fauxminescent, #bloc_modif' + i + ' #etat2 .Obscur, #bloc_modif' + i + ' #etat2 .Soigné, #bloc_modif' + i + ' #etat2 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat2 .Alpha, #bloc_modif' + i + ' #etat2 .Événementiel, #bloc_modif' + i + ' #etat2 .Immunisé').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('#bloc_modif' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('#bloc_modif' + i + ' #etat1').find('option:selected').text());
          } 
          if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('Fauxminescent') ){
            $('#bloc_modif' + i + ' #etat2 .aucun-state, #bloc_modif' + i + ' #etat2 .Alpha, #bloc_modif' + i + ' #etat2 .Chromatique, #bloc_modif' + i + ' #etat2 .Fauxminescent, #bloc_modif' + i + ' #etat2 .Événementiel, #bloc_modif' + i + ' #etat2 .Immunisé, #bloc_modif' + i + ' #etat2 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat2 .Obscur, #bloc_modif' + i + ' #etat2 .Soigné').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('#bloc_modif' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('#bloc_modif' + i + ' #etat1').find('option:selected').text());
          } 
          if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('Événementiel') ){
            $('#bloc_modif' + i + ' #etat2 .aucun-state, #bloc_modif' + i + ' #etat2 .Fauxminescent, #bloc_modif' + i + ' #etat2 .Événementiel, #bloc_modif' + i + ' #etat2 .Immunisé, #bloc_modif' + i + ' #etat2 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat2 .Alpha, #bloc_modif' + i + ' #etat2 .Chromatique #bloc_modif' + i + ' #etat2 .Obscur, #bloc_modif' + i + ' #etat2 .Soigné').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('#bloc_modif' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('#bloc_modif' + i + ' #etat1').find('option:selected').text());
          } 
          if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('Obscur') ){
            $('#bloc_modif' + i + ' #etat2 .aucun-state, #bloc_modif' + i + ' #etat2 .Chromatique, #bloc_modif' + i + ' #etat2 .Obscur, #bloc_modif' + i + ' #etat2 .Soigné, #bloc_modif' + i + ' #etat2 .Immunisé, #bloc_modif' + i + ' #etat2 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat2 .Alpha, #bloc_modif' + i + ' #etat2 .Fauxminescent, #bloc_modif' + i + ' #etat2 .Événementiel').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('#bloc_modif' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('#bloc_modif' + i + ' #etat1').find('option:selected').text());
          } 
          if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('Soigné') ){
            $('#bloc_modif' + i + ' #etat2 .aucun-state, #bloc_modif' + i + ' #etat2 .Chromatique, #bloc_modif' + i + ' #etat2 .Obscur, #bloc_modif' + i + ' #etat2 .Soigné, #bloc_modif' + i + ' #etat2 .Immunisé, #bloc_modif' + i + ' #etat2 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat2 .Alpha, #bloc_modif' + i + ' #etat2 .Fauxminescent, #bloc_modif' + i + ' #etat2 .Événementiel').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('#bloc_modif' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('#bloc_modif' + i + ' #etat1').find('option:selected').text());
          }
          if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('Immunisé') ){
            $('#bloc_modif' + i + ' #etat2 .Normal, #bloc_modif' + i + ' #etat2 .Événementiel, #bloc_modif' + i + ' #etat2 .Obscur, #bloc_modif' + i + ' #etat2 .Soigné, #bloc_modif' + i + ' #etat2 .Alpha, #bloc_modif' + i + ' #etat2 .Fauxminescent, #bloc_modif' + i + ' #etat2 .Immunisé').css('display', 'none');
            $('#bloc_modif' + i + ' #etat2 .Chromatique, #bloc_modif' + i + ' #etat2 .aucun-state').css('display', 'block');
            $('#team__pokemon' + i + ' .condition__state div:first-of-type img').attr('src',$('#bloc_modif' + i + ' #etat1').val());
            $('#team__pokemon' + i + ' .condition__state div:first-of-type').attr('title',$('#bloc_modif' + i + ' #etat1').find('option:selected').text());
          }
      
          if( $('#bloc_modif' + i + ' #etat2 option:selected').hasClass('select-state') ){
            $('#bloc_modif' + i + ' #etat1 .select-state, #bloc_modif' + i + ' #etat1 .Alpha, #bloc_modif' + i + ' #etat1 .Chromatique, #bloc_modif' + i + ' #etat1 .Fauxminescent, #bloc_modif' + i + ' #etat1 .Événementiel, #bloc_modif' + i + ' #etat1 .Obscur, #bloc_modif' + i + ' #etat1 .Soigné, #bloc_modif' + i + ' #etat1 .Immunisé, #bloc_modif' + i + ' #etat1 .Normal').css('display', 'block');
            if($('#bloc_modif' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('#bloc_modif' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:last-of-type').attr('title',$('#bloc_modif' + i + ' #etat2').find('option:selected').text());
            } else{
            }
          }
          if( $('#bloc_modif' + i + ' #etat2 option:selected').hasClass('Alpha') ){
            $('#bloc_modif' + i + ' #etat1 .aucun-state, #bloc_modif' + i + ' #etat1 .Alpha, #bloc_modif' + i + ' #etat1 .Fauxminescent, #bloc_modif' + i + ' #etat1 .Immunisé, #bloc_modif' + i + ' #etat1 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat1 .Chromatique, #bloc_modif' + i + ' #etat1 .Événementiel, #bloc_modif' + i + ' #etat1 .Obscur, #bloc_modif' + i + ' #etat1 .Soigné').css('display', 'block');
            if($('#bloc_modif' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('#bloc_modif' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:last-of-type').attr('title',$('#bloc_modif' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('#bloc_modif' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('#bloc_modif' + i + ' #etat2').val() + `"></div>`);
            }
          }
          if( $('#bloc_modif' + i + ' #etat2 option:selected').hasClass('Chromatique') ){
            $('#bloc_modif' + i + ' #etat1 .aucun-state, #bloc_modif' + i + ' #etat1 .Chromatique, #bloc_modif' + i + ' #etat1 .Fauxminescent, #bloc_modif' + i + ' #etat1 .Obscur, #bloc_modif' + i + ' #etat1 .Soigné, #bloc_modif' + i + ' #etat1 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat1 .Alpha, #bloc_modif' + i + ' #etat1 .Événementiel, #bloc_modif' + i + ' #etat1 .Immunisé').css('display', 'block');
            if($('#bloc_modif' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('#bloc_modif' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:last-of-type').attr('title',$('#bloc_modif' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('#bloc_modif' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('#bloc_modif' + i + ' #etat2').val() + `"></div>`);
            }
          } 
          if( $('#bloc_modif' + i + ' #etat2 option:selected').hasClass('Fauxminescent') ){
            $('#bloc_modif' + i + ' #etat1 .aucun-state, #bloc_modif' + i + ' #etat1 .Alpha, #bloc_modif' + i + ' #etat1 .Chromatique, #bloc_modif' + i + ' #etat1 .Fauxminescent, #bloc_modif' + i + ' #etat1 .Événementiel, #bloc_modif' + i + ' #etat1 .Immunisé, #bloc_modif' + i + ' #etat1 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat1 .Obscur, #bloc_modif' + i + ' #etat1 .Soigné').css('display', 'block');
            if($('#bloc_modif' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('#bloc_modif' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:last-of-type').attr('title',$('#bloc_modif' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('#bloc_modif' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('#bloc_modif' + i + ' #etat2').val() + `"></div>`);
            }
          } 
          if( $('#bloc_modif' + i + ' #etat2 option:selected').hasClass('Événementiel') ){
            $('#bloc_modif' + i + ' #etat1 .aucun-state, #bloc_modif' + i + ' #etat1 .Fauxminescent, #bloc_modif' + i + ' #etat1 .Événementiel, #bloc_modif' + i + ' #etat1 .Immunisé, #bloc_modif' + i + ' #etat1 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat1 .Alpha, #bloc_modif' + i + ' #etat1 .Chromatique #bloc_modif' + i + ' #etat1 .Obscur, #bloc_modif' + i + ' #etat1 .Soigné').css('display', 'block');
            if($('#bloc_modif' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('#bloc_modif' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:last-of-type').attr('title',$('#bloc_modif' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('#bloc_modif' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('#bloc_modif' + i + ' #etat2').val() + `"></div>`);
            }
          } 
          if( $('#bloc_modif' + i + ' #etat2 option:selected').hasClass('Obscur') ){
            $('#bloc_modif' + i + ' #etat1 .aucun-state, #bloc_modif' + i + ' #etat1 .Chromatique, #bloc_modif' + i + ' #etat1 .Obscur, #bloc_modif' + i + ' #etat1 .Soigné, #bloc_modif' + i + ' #etat1 .Immunisé, #bloc_modif' + i + ' #etat1 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat1 .Alpha, #bloc_modif' + i + ' #etat1 .Fauxminescent, #bloc_modif' + i + ' #etat1 .Événementiel').css('display', 'block');
            if($('#bloc_modif' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('#bloc_modif' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:last-of-type').attr('title',$('#bloc_modif' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('#bloc_modif' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('#bloc_modif' + i + ' #etat2').val() + `"></div>`);
            }
          }
          if( $('#bloc_modif' + i + ' #etat2 option:selected').hasClass('Immunisé') ){
            $('#bloc_modif' + i + ' #etat1 .aucun-state, #bloc_modif' + i + ' #etat2 .aucun-state, #bloc_modif' + i + ' #etat1 .Alpha, #bloc_modif' + i + ' #etat1 .Fauxminescent, #bloc_modif' + i + ' #etat1 .Immunisé, #bloc_modif' + i + ' #etat1 .Normal, #bloc_modif' + i + ' #etat1 .Événementiel, #bloc_modif' + i + ' #etat1 .Obscur, #bloc_modif' + i + ' #etat1 .Soigné').css('display', 'none');
            $('#bloc_modif' + i + ' #etat1 .Chromatique').css('display', 'block');
            if($('#bloc_modif' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('#bloc_modif' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:last-of-type').attr('title',$('#bloc_modif' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('#bloc_modif' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('#bloc_modif' + i + ' #etat2').val() + `"></div>`);
            }
          }
          if( $('#bloc_modif' + i + ' #etat2 option:selected').hasClass('Soigné') ){
            $('#bloc_modif' + i + ' #etat1 .aucun-state, #bloc_modif' + i + ' #etat1 .Chromatique, #bloc_modif' + i + ' #etat1 .Obscur, #bloc_modif' + i + ' #etat1 .Soigné, #bloc_modif' + i + ' #etat1 .Immunisé, #bloc_modif' + i + ' #etat1 .Normal').css('display', 'none');
            $('#bloc_modif' + i + ' #etat1 .Alpha, #bloc_modif' + i + ' #etat1 .Fauxminescent, #bloc_modif' + i + ' #etat1 .Événementiel').css('display', 'block');
            if($('#bloc_modif' + i + ' #etat1 option:selected').hasClass('select-state') || $('#team__pokemon' + i + ' .condition__state div').length > 1 ){
              $('#team__pokemon' + i + ' .condition__state div:last-of-type img').attr('src',$('#bloc_modif' + i + ' #etat2').val());
              $('#team__pokemon' + i + ' .condition__state div:last-of-type').attr('title',$('#bloc_modif' + i + ' #etat2').find('option:selected').text());
            } else{
              $('#team__pokemon' + i + ' .condition__state').append(`<div title="`+ $('#bloc_modif' + i + ' #etat2').find('option:selected').text() + `"><img src="` + $('#bloc_modif' + i + ' #etat2').val() + `"></div>`);
            }
          }
      
          if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('Alpha') || $('#bloc_modif' + i + ' #etat2 option:selected').hasClass('Alpha') ){
            if( $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').is('#pvAlpha') ){
              var alphaPV = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').val(),
          alphaAtk = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(2)').val(),
          alphaDef = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(3)').val(),
          alphaSatk = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(4)').val(),
          alphaSdef = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(5)').val(),
          alphaVit = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(6)').val();
            } else {
              var alphaPV = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').text().replace(/-/gi, ""),
          alphaAtk = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(2)').text().replace(/-/gi, ""),
          alphaDef = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(3)').text().replace(/-/gi, ""),
          alphaSatk = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(4)').text().replace(/-/gi, ""),
          alphaSdef = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(5)').text().replace(/-/gi, ""),
          alphaVit = $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(6)').text().replace(/-/gi, "");
            }       
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').replaceWith(`<input class="cell" type="text" id="pvAlpha" placeholder="0" value="` + alphaPV + `"/>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(2)').replaceWith(`<input class="cell" type="text" id="atkAlpha" placeholder="0" value="` + alphaAtk + `"/>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(3)').replaceWith(`<input class="cell" type="text" id="defAlpha" placeholder="0" value="` + alphaDef + `"/>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(4)').replaceWith(`<input class="cell" type="text" id="satkAlpha" placeholder="0" value="` + alphaSatk + `"/>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(5)').replaceWith(`<input class="cell" type="text" id="sdefAlpha" placeholder="0" value="` + alphaSdef + `"/>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(6)').replaceWith(`<input class="cell" type="text" id="speedAlpha" placeholder="0" value="` + alphaVit + `"/>`);
          } else if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('Obscur') || $('#bloc_modif' + i + ' #etat2 option:selected').hasClass('Obscur') && $('#bloc_modif' + i + ' #etat1 option:selected').not('.Alpha') && $('#bloc_modif' + i + ' #etat2 option:selected').not('.Alpha') ){
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').replaceWith(`<div class="cell">×1.25</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(2)').replaceWith(`<div class="cell">×1.25</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(3)').replaceWith(`<div class="cell">×1.25</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(4)').replaceWith(`<div class="cell">×1.25</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(5)').replaceWith(`<div class="cell">×1.25</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(6)').replaceWith(`<div class="cell">×1.25</div>`);
          } else if( $('#bloc_modif' + i + ' #etat1 option:selected').hasClass('Soigné') || $('#bloc_modif' + i + ' #etat2 option:selected').hasClass('Soigné') ){
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').replaceWith(`<div class="cell">×1.15</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(2)').replaceWith(`<div class="cell">×1.15</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(3)').replaceWith(`<div class="cell">×1.15</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(4)').replaceWith(`<div class="cell">×1.15</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(5)').replaceWith(`<div class="cell">×1.15</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(6)').replaceWith(`<div class="cell">×1.15</div>`);
          } else{
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(1)').replaceWith(`<div class="cell">-</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(2)').replaceWith(`<div class="cell">-</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(3)').replaceWith(`<div class="cell">-</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(4)').replaceWith(`<div class="cell">-</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(5)').replaceWith(`<div class="cell">-</div>`);
            $('#team__pokemon' + i + ' .values__table .row:nth-child(2) .cell:nth-child(6)').replaceWith(`<div class="cell">-</div>`);
          }
        });
  });
  
  // Drag & Drop
  $('.trainer-cardV2__team').each(function(){
    $(this).attr('id', 'trainer-cardV2__team');
  });
  function dragdrop() {
    dragula([document.getElementById("trainer-cardV2__team")], {
          moves: function (el, container, handle) {
            return handle.classList.contains('fa-arrows-up-down-left-right');
          }
    });
  }
  dragdrop();


  // Création des boutons pour envoyer
  $('.modifs').append(`<div class="buttons_envoi"><input type="submit" name="preview" value="Prévisualiser" /><input type="submit" name="post" value="Envoyer" /></div>`);
});
