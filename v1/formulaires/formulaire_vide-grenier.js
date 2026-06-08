function decimalAdjust(type, value, exp) {
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }


    // Decimal round
    if (!Math.round10) {
        Math.round10 = function(value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
    
    Number.prototype.toFixed10 = function(precision) {
        return Math.round10(this, -precision).toFixed(precision);
    }




//AFFICHAGE DES ITEMS
function DisplayProductList(product) {
  
  var template = "";
  product.forEach(function(item) {


    if(item.categories == "yellow"){
      var itemPrice = item.price;
    } else {
      var itemPrice = (item.price * 0.75).toFixed(0);
    }


    if(item.qty > 0){
      template += '<div class="product ' + item.categories + '"><span class="item_name">'
    + item.name + '</span><div class="item_cate"></div><div class="item_img"><img src="'
    + item.imageUrl + '" /></div><div class="item_bottom"><div class="item_quantity"><span class="item_subtitle">Stock</span><span id="stock">' + item.qty + '</span></div><div class="item_price"><span class="item_subtitle">Prix (unitaire)</span> <span id="nbprix">'
    + itemPrice + '</span> p$</div><p class="item_desc">'
    + item.description + '</p><button class="add-to-cart" onClick="addToCart(this)" type="button">Ajouter au panier</button></div></div></div>';
    }


  });
  $('.products').append(template);




  //Catégories des items
  $('.survie .item_cate').append('Objet de survie');
  $('.équipement .item_cate').append('Équipement de combat');
  $('.capture .item_cate').append('Objet de capture');
  $('.ct .item_cate').append('Capsule technique');
  $('.cs .item_cate').append('Permis Z7');
  $('.dressage .item_cate').append('Objet de dressage');
  $('.comestible .item_cate').append('Ingrédient de cuisine');
  $('.évolutif .item_cate').append("Objet d'évolution");
  $('.yellow .item_cate').append('Objet Or');
      
  var heightFrame = $('#vide-grenier').length;
  localStorage.setItem("heightFrame", heightFrame);
}


//Calcul du total déposé
function calculPoseTotal(){
  var totaltotal = 0;
  $('.item_depose').each(function(){
    if( $(this).find('.autoComplete').val() !== '' ){
      var qtyPose = parseInt($(this).find('.qtypose').val()),
          thepricePose = parseFloat($(this).find('.pricepose').text());
      $('.total_pose #total_countpose').html(qtyPose*thepricePose);
      totaltotal = totaltotal + (qtyPose * thepricePose);
      $('#total_countpose').html(totaltotal);
    } else{
      $('#total_countpose').html(totaltotal);
    }
  });
}


$('.qtypose').change(function(){
  calculPoseTotal();
});


//Ajouter un item à déposer
$('.buttonDepose').click(function(){
  var nbItems = $('.item_depose').length,
      idNewItem = nbItems + 1;
  $(`<div class="item_depose"><div class="autoComplete_wrapper"><input class="autoComplete" type="text" tabindex="1" required="required" autocomplete="off" placeholder="Nom de l'objet" id="autocomplete` + idNewItem + `"><input type="number" class="qtypose" value="1" min="1" max="3"> à <span class="pricepose" id="pricepose` + idNewItem + `">0</span> p$ l'unité.<button type='button' class='button_delete' onclick='removePoseItem(this)'>X</button></div></div>`).insertBefore(this);
  calculPoseTotal();
  $('.qtypose').change(function(){
    calculPoseTotal();
  });
});


//Supprimer 1 item déposé
function removePoseItem(itemremovei) {
    $(itemremovei).closest('.item_depose').remove();
    calculPoseTotal();
}


//Faire revenir le bouton quand l'objet disparaît du panier
function rerunButton() {
  $('.product').each(function(){
    var itemInCart = $('.cart_product').find('.product_name').text();
    var itemInList = $(this).find('.item_name').text();
    if( itemInCart.indexOf(itemInList) === -1 ){
      $(this).find('.noPrice').replaceWith(`<button class="add-to-cart" onClick="addToCart(this)" type="button">Ajouter au panier</button>`);
    } else{}
  });
}


//VENTE OBJETS


//Calcul du total vendu
function calculVenteTotal(){
  var totaltotal = 0;
  $('.item_vente').each(function(){
    if( $(this).find('.autoComplete').val() !== '' ){
      var qtyPose = parseInt($(this).find('.qtyvente').val()),
          thepricePose = parseFloat($(this).find('.pricepose').text());
      $('.total_vente #total_countvente').html((qtyPose*thepricePose).toFixed(0));
      totaltotal = totaltotal + (qtyPose * thepricePose);
      $('#total_countvente').html(totaltotal.toFixed(0));
    } else{
      $('#total_countvente').html(totaltotal.toFixed(0));
    }
  });
}


$('.qtyvente').change(function(){
  calculVenteTotal();
});


//Supprimer 1 item vendu
function removeVenteItem(itemremovei) {
    $(itemremovei).closest('.item_vente').remove();
    var nbVente = $('.item_vente').length;
    if(nbVente == 0){
      $('.sectionVente').remove();
    }
    calculVenteTotal();
}


//FILTRE HAUT
$('.shop_filter #trocFiltre').change(function(){
  $('.shop_filter > a').removeClass('filtchecked');
  $('#venteFiltre').prop('checked', false);
  $('#transformFiltre').prop('checked', false);


  $('.troc').css('display', 'block');
  $('.vente').css('display', 'none');
  $('.transformateur').css('display', 'none');
  if($('.shop_filter input:checkbox:checked').length > 0){} else{
      noFilter();
  }
});
$('.shop_filter #venteFiltre').change(function(){
  $('.shop_filter > a').removeClass('filtchecked');
  $('#trocFiltre').prop('checked', false);
  $('#transformFiltre').prop('checked', false);


  $('.troc').css('display', 'none');
  $('.vente').css('display', 'block');
  $('.transformateur').css('display', 'none');
  if($('.shop_filter input:checkbox:checked').length > 0){} else{
      noFilter();
  }
});
$('.shop_filter #transformFiltre').change(function(){
  $('.shop_filter > a').removeClass('filtchecked');
  $('#trocFiltre').prop('checked', false);
  $('#venteFiltre').prop('checked', false);


  $('.troc').css('display', 'none');
  $('.vente').css('display', 'none');
  $('.transformateur').css('display', 'block');
  if($('.shop_filter input:checkbox:checked').length > 0){} else{
      noFilter();
  }
});


function addToCart(element) {
    var productParent = $(element).closest('div.product');


    var price = $(productParent).find('.item_price #nbprix').text();
    var productName = $(productParent).find('.item_name').text();
    var stock = $(productParent).find('.item_quantity #stock').text();


    var button = $(productParent).find('.add-to-cart').replaceWith('<div class="noPrice"></div>');


  var grandTotal = 0;
  var subTotal = 0;


  var cartRowHTML = "<div class='cart_product'><span class='item_input'><button type='button' class='btn_minus' onclick='minCartItem(this)'>-</button>" +
      "<input type='number' class='input_nb_object' value='1' max='"+ stock +"' data-prix='"+ price +"' onchange='calculTotal()' readonly>" +
      "<button type='button' class='btn_plus' onclick='plusCartItem(this)'>+</button>" +
      "<span class='item'><span class='product_name'>"+ productName +" </span>" +
      " à <span class='price_unit'>"+ price +"</span> p$ l'unité.</span>" + 
      "  <button type='button' class='button_delete' onclick='removeCartItem(this)'>X</button></span></div>";


      grandTotal += subTotal;


    if ($('#myCart').html() == "Mon panier est vide.") {
      $('#myCart').html("<h4 class='titlePrend'>Je prends</h4><div class='total_pris'>Pour un total de <b><clrbw><span id='total_count'>" + grandTotal + "</span> p$</clrbw></b>.</div>" + cartRowHTML);
      $('.sectionDepose').css("display","flex");
    }
    else {
      var addCartRow = $('#myCart').html();
      addCartRow = addCartRow + cartRowHTML;
      $('#myCart').html(addCartRow);
    }
    $('#total_count').text(grandTotal.toFixed(0));
    calculTotal();
    rerunButton();
}


//Effacer le panier
function emptyCart() {
    if(confirm("Êtes-vous sûr·e de vouloir vider le panier ?")) {
        $('#myCart').html('Mon panier est vide.');
        $('.sectionDepose').css("display","none");
        $('.sectionVente').remove();
        $('.transformCT').html('');
        $('.transformObj').html('');
      calculTotal();
      rerunButton();
    }
}


//Retirer 1 item
function removeCartItem(itemremovei) {
    $(itemremovei).closest('.cart_product').remove();
    if ($('.cart_product').length == 0 ) { 
      $('#myCart').html("Mon panier est vide.");
      $('.sectionDepose').css("display","none");
    }
    calculTotal();
    rerunButton();
}


//Bouton +
function plusCartItem(itemadd) {
    var curritem = parseInt($(itemadd).prev().val());
    var quantity2 = curritem + 1;
    if( curritem < $(itemadd).prev().attr('max') ){
      $(itemadd).prev().attr('value', quantity2);
    } else{}
    calculTotal();
}


//Bouton -
function minCartItem(minitem) {
    var curritem = parseInt($(minitem).next().val());
    var quantity2 = curritem - 1;
    $(minitem).next().attr('value', quantity2);
  
  if(quantity2 == 0){
  $(minitem).closest('.cart_product').remove();
    if ($('.cart_product').length == 0 ) {
      $('#myCart').html("Mon panier est vide.");
      $('.sectionDepose').css("display","none");
    }
  rerunButton();
  }
  calculTotal();
}


function calculTotal() {
    var noTotal = 0;
        totaltotal = 0;


    $('.item_input').each(function(){
      if (parseInt($(this).find('.input_nb_object:first').val()) < 1) {
        $(this).remove();
      }
      var thePrice = parseFloat($(this).find('.input_nb_object:first').attr('data-prix'));
      var theQty = parseInt($(this).find('.input_nb_object:first').val());
      $(this).find('.price_tot:first').html((thePrice * theQty));
      totaltotal = totaltotal + (thePrice * theQty);
    });
    if ($('#myCart').html() == '' ) {
      $('#myCart').html("Mon panier est vide.");
      $('#total_count').html(noTotal);
      $('.sectionDepose').css("display","none");
    }
    else {
      $('#total_count').html(totaltotal.toFixed(0));
    }
}


// PARTIE TRANSFORMATEUR
$(document).ready(function(){
var CTlist = [
  {
      name: "CT N°001 - Bélier",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°002 - Charme",
      imageUrl: "https://www.pokepedia.fr/images/f/f1/Capsule_Fée.png"
    },
{
      name: "CT N°003 - Croco Larme",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°004 - Hâte",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°005 - Coud’Boue",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°006 - Grimace",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°007 - Abri",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°008 - Crocs Feu",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°009 - Crocs Éclair",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°010 - Crocs Givre",
      imageUrl: "https://www.pokepedia.fr/images/8/8c/Capsule_Glace.png"
    },
{
      name: "CT N°011 - Vibraqua",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°012 - Balayage",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°013 - Bombe Acide",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Poison.png"
    },
{
      name: "CT N°014 - Acrobatie",
      imageUrl: "https://www.pokepedia.fr/images/a/ac/Capsule_Vol.png"
    },
{
      name: "CT N°015 - Survinsecte",
      imageUrl: "https://www.pokepedia.fr/images/2/20/Capsule_Insecte.png"
    },
{
      name: "CT N°016 - Rafale Psy",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°017 - Onde Folie",
      imageUrl: "https://www.pokepedia.fr/images/6/62/Capsule_Spectre.png"
    },
{
      name: "CT N°018 - Larcin",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°019 - Voix Enjôleuse",
      imageUrl: "https://www.pokepedia.fr/images/f/f1/Capsule_Fée.png"
    },
{
      name: "CT N°020 - Désherbaffe",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°021 - Bond",
      imageUrl: "https://www.pokepedia.fr/images/2/20/Capsule_Insecte.png"
    },
{
      name: "CT N°022 - Douche Froide",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°023 - Rayon Chargé",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°024 - Danse Flammes",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°025 - Façade",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
    {
      name: "CT N°026 - Queue-Poison",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Poison.png"
    },
{
      name: "CT N°027 - Aéropique",
      imageUrl: "https://www.pokepedia.fr/images/a/ac/Capsule_Vol.png"
    },
{
      name: "CT N°028 - Piétisol",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°029 - Châtiment",
      imageUrl: "https://www.pokepedia.fr/images/6/62/Capsule_Spectre.png"
    },
{
      name: "CT N°030 - Aboiement",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°031 - Griffe Acier",
      imageUrl: "https://www.pokepedia.fr/images/3/3b/Capsule_Acier.png"
    },
{
      name: "CT N°032 - Météores",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°033 - Feuille Magik",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°034 - Vent Glace",
      imageUrl: "https://www.pokepedia.fr/images/8/8c/Capsule_Glace.png"
    },
{
      name: "CT N°035 - Tir de Boue",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°036 - Tomberoche",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Roche.png"
    },
{
      name: "CT N°037 - Vampibaiser",
      imageUrl: "https://www.pokepedia.fr/images/f/f1/Capsule_Fée.png"
    },
{
      name: "CT N°038 - Nitrocharge",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°039 - Balayette",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°040 - Tranch’Air",
      imageUrl: "https://www.pokepedia.fr/images/a/ac/Capsule_Vol.png"
    },
{
      name: "CT N°041 - Force Ajoutée",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°042 - Ombre Nocturne",
      imageUrl: "https://www.pokepedia.fr/images/6/62/Capsule_Spectre.png"
    },
{
      name: "CT N°043 - Dégommage",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°044 - Draco-Queue",
      imageUrl: "https://www.pokepedia.fr/images/2/25/Capsule_Dragon.png"
    },
{
      name: "CT N°045 - Choc Venin",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Poison.png"
    },
{
      name: "CT N°046 - Avalanche",
      imageUrl: "https://www.pokepedia.fr/images/8/8c/Capsule_Glace.png"
    },
{
      name: "CT N°047 - Ténacité",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°048 - Change Éclair",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°049 - Zénith",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°050 - Danse-Pluie",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
    {
      name: "CT N°051 - Tempête de Sable",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Roche.png"
    },
{
      name: "CT N°052 - Chute de Neige",
      imageUrl: "https://www.pokepedia.fr/images/8/8c/Capsule_Glace.png"
    },
{
      name: "CT N°053 - Estocorne",
      imageUrl: "https://www.pokepedia.fr/images/3/3b/Capsule_Acier.png"
    },
{
      name: "CT N°054 - Choc Psy",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°055 - Tunnel",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°056 - Balle Graine",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°057 - Faux-Chage",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°058 - Casse-Brique",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°059 - Psykoud'Boul",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°060 - Demi-Tour",
      imageUrl: "https://www.pokepedia.fr/images/2/20/Capsule_Insecte.png"
    },
{
      name: "CT N°061 - Griffe Ombre",
      imageUrl: "https://www.pokepedia.fr/images/6/62/Capsule_Spectre.png"
    },
{
      name: "CT N°062 - Tricherie",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°063 - Psycho-Croc",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°064 - Gonflette",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°065 - Lame d’Air",
      imageUrl: "https://www.pokepedia.fr/images/a/ac/Capsule_Vol.png"
    },
{
      name: "CT N°066 - Plaquage",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°067 - Poing Feu",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°068 - Poing Éclair",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°069 - Poing Glace",
      imageUrl: "https://www.pokepedia.fr/images/8/8c/Capsule_Glace.png"
    },
{
      name: "CT N°070 - Blabla Dodo",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°071 - Canon Graine",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°072 - Boule Élek",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°073 - Vampi-Poing",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°074 - Protection",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°075 - Mur Lumière",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
    {
      name: "CT N°076 - Boule Roc",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Roche.png"
    },
{
      name: "CT N°077 - Cascade",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°078 - Draco-Griffe",
      imageUrl: "https://www.pokepedia.fr/images/2/25/Capsule_Dragon.png"
    },
{
      name: "CT N°079 - Éclat Magique",
      imageUrl: "https://www.pokepedia.fr/images/f/f1/Capsule_Fée.png"
    },
{
      name: "CT N°080 - Métronome",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°081 - Nœud Herbe",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°082 - Cage Éclair",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°083 - Direct Toxik",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Poison.png"
    },
{
      name: "CT N°084 - Trépignement",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°085 - Repos",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°086 - Éboulement",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Roche.png"
    },
{
      name: "CT N°087 - Provoc",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°088 - Danse Lames",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°089 - Big Splash",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°090 - Picots",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°091 - Pics Toxik",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Poison.png"
    },
{
      name: "CT N°092 - Possessif",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°093 - Luminocanon",
      imageUrl: "https://www.pokepedia.fr/images/3/3b/Capsule_Acier.png"
    },
{
      name: "CT N°094 - Vibrobscur",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°095 - Vampirisme",
      imageUrl: "https://www.pokepedia.fr/images/2/20/Capsule_Insecte.png"
    },
{
      name: "CT N°096 - Ondes Étranges",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°097 - Vol",
      imageUrl: "https://www.pokepedia.fr/images/a/ac/Capsule_Vol.png"
    },
{
      name: "CT N°098 - Échange",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°099 - Tête de Fer",
      imageUrl: "https://www.pokepedia.fr/images/3/3b/Capsule_Acier.png"
    },
{
      name: "CT N°100 - Danse Draco",
      imageUrl: "https://www.pokepedia.fr/images/2/25/Capsule_Dragon.png"
    },
    {
      name: "CT N°101 - Rayon Gemme",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Roche.png"
    },
{
      name: "CT N°102 - Détricanon",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Poison.png"
    },
{
      name: "CT N°103 - Clonage",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°104 - Mur de Fer",
      imageUrl: "https://www.pokepedia.fr/images/3/3b/Capsule_Acier.png"
    },
{
      name: "CT N°105 - Plaie Croix",
      imageUrl: "https://www.pokepedia.fr/images/2/20/Capsule_Insecte.png"
    },
{
      name: "CT N°106 - Tunnelier",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°107 - Feu Follet",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°108 - Mâchouille",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°109 - Tour de Magie",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°110 - Aqua-Brèche",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°111 - Giga-Sangsue",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°112 - Aurasphère",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°113 - Vent Arrière",
      imageUrl: "https://www.pokepedia.fr/images/a/ac/Capsule_Vol.png"
    },
{
      name: "CT N°114 - Ball’Ombre",
      imageUrl: "https://www.pokepedia.fr/images/6/62/Capsule_Spectre.png"
    },
{
      name: "CT N°115 - Draco-Choc",
      imageUrl: "https://www.pokepedia.fr/images/2/25/Capsule_Dragon.png"
    },
{
      name: "CT N°116 - Piège de Roc",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Roche.png"
    },
{
      name: "CT N°117 - Mégaphone",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°118 - Canicule",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°119 - Éco-Sphère",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°120 - Psyko",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°121 - Tacle Lourd",
      imageUrl: "https://www.pokepedia.fr/images/3/3b/Capsule_Acier.png"
    },
{
      name: "CT N°122 - Encore",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°123 - Surf",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°124 - Cryo-Pirouette",
      imageUrl: "https://www.pokepedia.fr/images/8/8c/Capsule_Glace.png"
    },
{
      name: "CT N°125 - Lance-Flammes",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
    {
      name: "CT N°126 - Tonnerre",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°127 - Câlinerie",
      imageUrl: "https://www.pokepedia.fr/images/f/f1/Capsule_Fée.png"
    },
{
      name: "CT N°128 - Amnésie",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°129 - Plénitude",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°130 - Coup d’Main",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°131 - Boule Pollen",
      imageUrl: "https://www.pokepedia.fr/images/2/20/Capsule_Insecte.png"
    },
{
      name: "CT N°132 - Relais",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°133 - Telluriforce",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°134 - Contre",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°135 - Laser Glace",
      imageUrl: "https://www.pokepedia.fr/images/8/8c/Capsule_Glace.png"
    },
{
      name: "CT N°136 - Champ Électrifié",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°137 - Champ Herbu",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°138 - Champ Psychique",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°139 - Champ Brumeux",
      imageUrl: "https://www.pokepedia.fr/images/f/f1/Capsule_Fée.png"
    },
{
      name: "CT N°140 - Machination",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°141 - Déflagration",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°142 - Hydrocanon",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°143 - Blizzard",
      imageUrl: "https://www.pokepedia.fr/images/8/8c/Capsule_Glace.png"
    },
{
      name: "CT N°144 - Aire de Feu",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°145 - Aire d’Eau",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°146 - Aire d’Herbe",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°147 - Éclair Fou",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°148 - Bombe Beurk",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Poison.png"
    },
{
      name: "CT N°149 - Séisme",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°150 - Lame de Roc",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Roche.png"
    },
    {
      name: "CT N°151 - Hantise",
      imageUrl: "https://www.pokepedia.fr/images/6/62/Capsule_Spectre.png"
    },
{
      name: "CT N°152 - Giga Impact",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°153 - Rafale Feu",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°154 - Hydroblast",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°155 - Végé-Attaque",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°156 - Colère",
      imageUrl: "https://www.pokepedia.fr/images/2/25/Capsule_Dragon.png"
    },
{
      name: "CT N°157 - Surchauffe",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°158 - Exploforce",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°159 - Tempête Verte",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°160 - Vent Violent",
      imageUrl: "https://www.pokepedia.fr/images/a/ac/Capsule_Vol.png"
    },
{
      name: "CT N°161 - Distorsion",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°162 - Bourdon",
      imageUrl: "https://www.pokepedia.fr/images/2/20/Capsule_Insecte.png"
    },
{
      name: "CT N°163 - Ultralaser",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°164 - Rapace",
      imageUrl: "https://www.pokepedia.fr/images/a/ac/Capsule_Vol.png"
    },
{
      name: "CT N°165 - Boutefeu",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°166 - Fatal-Foudre",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°167 - Close Combat",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°168 - Lance-Soleil",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°169 - Draco-Météore",
      imageUrl: "https://www.pokepedia.fr/images/2/25/Capsule_Dragon.png"
    },
{
      name: "CT N°170 - Métalaser",
      imageUrl: "https://www.pokepedia.fr/images/3/3b/Capsule_Acier.png"
    },
{
      name: "CT N°171 - Téra Explosion",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°172 - Hurlement",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°173 - Chargeur",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°174 - Buée Noire",
      imageUrl: "https://www.pokepedia.fr/images/8/8c/Capsule_Glace.png"
    },
{
      name: "CT N°175 - Toxik",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Poison.png"
    },
{
      name: "CT N°176 - Tourbi-Sable",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°177 - Dépit",
      imageUrl: "https://www.pokepedia.fr/images/6/62/Capsule_Spectre.png"
    },
{
      name: "CT N°178 - Gravité",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°179 - Anti-Air",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Roche.png"
    },
{
      name: "CT N°180 - Gyroballe",
      imageUrl: "https://www.pokepedia.fr/images/3/3b/Capsule_Acier.png"
    },
{
      name: "CT N°181 - Sabotage",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°182 - Piqûre",
      imageUrl: "https://www.pokepedia.fr/images/2/20/Capsule_Insecte.png"
    },
{
      name: "CT N°183 - Croc Fatal",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°184 - Onde Vide",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°185 - Furie-Bond",
      imageUrl: "https://www.pokepedia.fr/images/2/20/Capsule_Insecte.png"
    },
{
      name: "CT N°186 - Cavalerie Lourde",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°187 - Stalactite",
      imageUrl: "https://www.pokepedia.fr/images/8/8c/Capsule_Glace.png"
    },
{
      name: "CT N°188 - Ébullition",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°189 - Tacle Feu",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°190 - Lame Solaire",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°191 - Brouhaha",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°192 - Mitra-Poing",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°193 - Ball’Météo",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°194 - Gliss’Herbe",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°195 - Feu Envieux",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°196 - Eau Revoir",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°197 - Double Volée",
      imageUrl: "https://www.pokepedia.fr/images/a/ac/Capsule_Vol.png"
    },
{
      name: "CT N°198 - Esprit Frappeur",
      imageUrl: "https://www.pokepedia.fr/images/6/62/Capsule_Spectre.png"
    },
{
      name: "CT N°199 - Cent Rancunes",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°200 - Rafale Écailles",
      imageUrl: "https://www.pokepedia.fr/images/2/25/Capsule_Dragon.png"
    },
{
      name: "CT N°201 - Explo-Brume",
      imageUrl: "https://www.pokepedia.fr/images/f/f1/Capsule_Fée.png"
    },
{
      name: "CT N°202 - Balance",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°203 - Boost",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°204 - Damoclès",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°205 - Effort",
      imageUrl: "https://www.pokepedia.fr/images/6/67/Capsule_Normal.png"
    },
{
      name: "CT N°206 - Tempête Florale",
      imageUrl: "https://www.pokepedia.fr/images/1/12/Capsule_Plante.png"
    },
{
      name: "CT N°207 - Indignition",
      imageUrl: "https://www.pokepedia.fr/images/4/49/Capsule_Feu.png"
    },
{
      name: "CT N°208 - Siphon",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°209 - Ocroupi",
      imageUrl: "https://www.pokepedia.fr/images/0/06/Capsule_Eau.png"
    },
{
      name: "CT N°210 - Volt Assaut",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°211 - Toile Élek",
      imageUrl: "https://www.pokepedia.fr/images/7/71/Capsule_Électrik.png"
    },
{
      name: "CT N°212 - Triple Axel",
      imageUrl: "https://www.pokepedia.fr/images/8/8c/Capsule_Glace.png"
    },
{
      name: "CT N°213 - Coaching",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    },
{
      name: "CT N°214 - Cradovague",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Poison.png"
    },
{
      name: "CT N°215 - Sable Ardent",
      imageUrl: "https://www.pokepedia.fr/images/5/50/Capsule_Sol.png"
    },
{
      name: "CT N°216 - Danse Plumes",
      imageUrl: "https://www.pokepedia.fr/images/a/ac/Capsule_Vol.png"
    },
{
      name: "CT N°217 - Prescience",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°218 - Vaste Pouvoir",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°219 - Ravage Rampant",
      imageUrl: "https://www.pokepedia.fr/images/2/20/Capsule_Insecte.png"
    },
{
      name: "CT N°220 - Laser Météore",
      imageUrl: "https://www.pokepedia.fr/images/b/b9/Capsule_Roche.png"
    },
{
      name: "CT N°221 - Exécu-Son",
      imageUrl: "https://www.pokepedia.fr/images/1/1b/Capsule_Ténèbres.png"
    },
{
      name: "CT N°222 - Abattage",
      imageUrl: "https://www.pokepedia.fr/images/2/25/Capsule_Dragon.png"
    },
{
      name: "CT N°223 - Strido-Son",
      imageUrl: "https://www.pokepedia.fr/images/3/3b/Capsule_Acier.png"
    },
{
      name: "CT N°224 - Malédiction",
      imageUrl: "https://www.pokepedia.fr/images/6/62/Capsule_Spectre.png"
    },
{
      name: "CT N°225 - Pression Extrême",
      imageUrl: "https://www.pokepedia.fr/images/3/3b/Capsule_Acier.png"
    },
{
      name: "CT N°226 - Cri Draconique",
      imageUrl: "https://www.pokepedia.fr/images/2/25/Capsule_Dragon.png"
    },
{
      name: "CT N°227 - Voix Envoûtante",
      imageUrl: "https://www.pokepedia.fr/images/f/f1/Capsule_Fée.png"
    },
{
      name: "CT N°228 - Dissonance Psy",
      imageUrl: "https://www.pokepedia.fr/images/7/74/Capsule_Psy.png"
    },
{
      name: "CT N°229 - Prio-Parade",
      imageUrl: "https://www.pokepedia.fr/images/b/be/Capsule_Combat.png"
    }
  ];


  $('.buttonTransformCT').click(function(){
    var nbCT = $('.ct_transform').length,
      idNewCT = nbCT + 1;
    if( nbCT < 1 ){
      $('.transformCT').html(`<div class='content_text'><h4 class='titleVente'>Transformation de CT</h4><div class="ct_transform">Je viens échanger ma <input class="autoComplete" type="text" tabindex="1" required="required" autocomplete="off" placeholder="CT N°..." id="autocompleteCT"> ! <button type='button' class='button_delete' onclick='removeTransformCT(this)'>X</button></div></div>`);
    }


    var CTString = JSON.stringify(CTlist),
          CTData = JSON.parse(CTString),
          arrName = [];


      for(let i = 0; i < CTData.length; i++){
        arrName.push(CTData[i].name);
      }
      $("#autocompleteCT").autocomplete({
          source: arrName
      });
  });
});


  $('.buttonTransformObj').click(function(){
        var nbObjet = $('.item_transform').length,
          idNewObj = nbObjet + 1;
        if( nbObjet < 1 ){
          $('.transformObj').html(`<div class='content_text'><h4 class='titleVente'>Transformation d'objets</h4><div class="item_transform"><button type='button' class='btn_minus' onclick='minCartObj(this)'>-</button><input type='number' class='input_nb_object' value='5' onchange='countObj()' readonly><button type='button' class='btn_plus' onclick='plusCartObj(this)'>+</button> <select id="objtransform` + idNewObj + `" class="objtransform"><option value="no-obj" selected>Aucun objet sélectionné</option><option value="Pokéball">Pokéball</option><option value="Superball">Superball</option><option value="Potion">Potion</option><option value="Super Potion">Super Potion</option></select> → <span class="grosObj">Sélectionne un objet !</span><button type='button' class='button_delete' onclick='removeTransformObj(this)'>X</button></div><a class="btnTransformObj btn_add"><div class="btn_hover"></div><div class="btn_text">Ajouter un objet</div></a></div>`);


          $('.btnTransformObj').click(function(){
            $(`<div class="item_transform"><button type='button' class='btn_minus' onclick='minCartObj(this)'>-</button><input type='number' class='input_nb_object' value='5' onchange='countObj()' readonly><button type='button' class='btn_plus' onclick='plusCartObj(this)'>+</button> <select id="objtransform` + idNewObj + `" class="objtransform"><option value="no-obj" selected>Aucun objet sélectionné</option><option value="Pokéball">Pokéball</option><option value="Superball">Superball</option><option value="Potion">Potion</option><option value="Super Potion">Super Potion</option></select> → <span class="grosObj">Sélectionne un objet !</span><button type='button' class='button_delete' onclick='removeTransformObj(this)'>X</button></div>`).insertBefore(this);
          });


          $('.transformObj').click(function(){
            $('.objtransform').change(function(){
              if( $(this).val() == "Pokéball" ){
                $(this).closest('.item_transform').find('.grosObj').html(`<img src="https://www.pokemontrash.com/pokedex/images/items/great-ball.png" /> ×<span class="nb_gros_obj">1</span> Superball`);
                $(this).css('background', 'url("https://www.pokemontrash.com/pokedex/images/items/poke-ball.png") 40px center / contain no-repeat');
              } else if( $(this).val() == "Superball" ){
                $(this).closest('.item_transform').find('.grosObj').html(`<img src="https://www.pokemontrash.com/pokedex/images/items/ultra-ball.png" /> ×<span class="nb_gros_obj">1</span> Hyperball`);
                $(this).css('background', 'url("https://www.pokemontrash.com/pokedex/images/items/great-ball.png") 36px center / contain no-repeat');
              } else if( $(this).val() == "Potion" ){
                $(this).closest('.item_transform').find('.grosObj').html(`<img src="https://www.pokemontrash.com/pokedex/images/items/super-potion.png" /> ×<span class="nb_gros_obj">1</span> Super Potion`);
                $(this).css('background', 'url("https://www.pokemontrash.com/pokedex/images/items/potion.png") 47px center / contain no-repeat');
              } else if( $(this).val() == "Super Potion" ){
                $(this).closest('.item_transform').find('.grosObj').html(`<img src="https://www.pokemontrash.com/pokedex/images/items/hyper-potion.png" /> ×<span class="nb_gros_obj">1</span> Hyper Potion`);
                $(this).css('background', 'url("https://www.pokemontrash.com/pokedex/images/items/super-potion.png") 27px center / contain no-repeat');
              } else {
                $(this).closest('.item_transform').find('.grosObj').html('Sélectionne un objet !');
                $(this).css('background', 'none');
              }
              countObj();
            });
          });
        }
  });


  $('.buttonTransformBaie').click(function(){
        var nbBaie = $('.baie_transform').length;
        if( nbBaie < 1 ){
            $('.transformBaie').html(`<div class='content_text'><h4 class='titleVente'>Transformation de Baies</h4><div class="baie_transform"><select id="baietransform1" class="baietransform"><option value="no-obj" selected>Aucune Baie</option><option value="×5 Baie Abriko">×5 Baie Abriko</option><option value="×5 Baie Cherrim">×5 Baie Cherrim</option><option value="×5 Baie Jaboca">×5 Baie Jaboca</option><option value="×5 Baie Kika">×5 Baie Kika</option><option value="×5 Baie Lansatt">×5 Baie Lansatt</option><option value="×5 Baie Lichii">×5 Baie Lichii</option><option value="×5 Baie Micle">×5 Baie Micle</option><option value="×5 Baie Oran">×5 Baie Oran</option><option value="×5 Baie Prine">×5 Baie Prine</option><option value="×5 Baie Sailak">×5 Baie Sailak</option></select> + <select id="baietransform2" class="baietransform"><option value="no-obj" selected>Aucune Baie</option><option value="×5 Baie Abriko">×5 Baie Abriko</option><option value="×5 Baie Cherrim">×5 Baie Cherrim</option><option value="×5 Baie Jaboca">×5 Baie Jaboca</option><option value="×5 Baie Lansatt">×5 Baie Lansatt</option><option value="×5 Baie Lichii">×5 Baie Lichii</option><option value="×5 Baie Micle">×5 Baie Micle</option><option value="×5 Baie Oran">×5 Baie Oran</option><option value="×5 Baie Prine">×5 Baie Prine</option><option value="×5 Baie Sailak">×5 Baie Sailak</option></select> → ×1 Baie T2 au hasard<button type='button' class='button_delete' onclick='removeTransformBaie(this)'>X</button></div><a class="btnTransformBaie btn_add"><div class="btn_hover"></div><div class="btn_text">Ajouter une Baie</div></a></div>`);
           
            $('.btnTransformBaie').click(function(){
                $(`<div class="baie_transform"><select id="baietransform1" class="baietransform"><option value="no-obj" selected>Aucune Baie</option><option value="×5 Baie Abriko">×5 Baie Abriko</option><option value="×5 Baie Cherrim">×5 Baie Cherrim</option><option value="×5 Baie Jaboca">×5 Baie Jaboca</option><option value="×5 Baie Kika">×5 Baie Kika</option><option value="×5 Baie Lansatt">×5 Baie Lansatt</option><option value="×5 Baie Lichii">×5 Baie Lichii</option><option value="×5 Baie Micle">×5 Baie Micle</option><option value="×5 Baie Oran">×5 Baie Oran</option><option value="×5 Baie Prine">×5 Baie Prine</option><option value="×5 Baie Sailak">×5 Baie Sailak</option></select> + <select id="baietransform2" class="baietransform"><option value="no-obj" selected>Aucune Baie</option><option value="×5 Baie Abriko">×5 Baie Abriko</option><option value="×5 Baie Cherrim">×5 Baie Cherrim</option><option value="×5 Baie Jaboca">×5 Baie Jaboca</option><option value="×5 Baie Kika">×5 Baie Kika</option><option value="×5 Baie Lansatt">×5 Baie Lansatt</option><option value="×5 Baie Lichii">×5 Baie Lichii</option><option value="×5 Baie Micle">×5 Baie Micle</option><option value="×5 Baie Oran">×5 Baie Oran</option><option value="×5 Baie Prine">×5 Baie Prine</option><option value="×5 Baie Sailak">×5 Baie Sailak</option></select> → ×1 Baie T2 au hasard<button type='button' class='button_delete' onclick='removeTransformBaie(this)'>X</button></div></div>`).insertBefore(this);
            });
        }
  });


//Nombre d'items produits
function countObj() {
  var total = 0;
  $('.item_transform').each(function(){
    var nbObj = 0.2;
    var qtyObj = parseInt($(this).find('.input_nb_object').val());
    $(this).find('.nb_gros_obj').html((nbObj * qtyObj));
  });
}


//Bouton +
function plusCartObj(itemadd) {
    var curritem = parseInt($(itemadd).prev().val());
    var quantity2 = curritem + 5;
    $(itemadd).prev().attr('value', quantity2);
    countObj();
}


//Bouton -
function minCartObj(minitem) {
  var curritem = parseInt($(minitem).next().val());
  var quantity2 = curritem - 5;
  if(quantity2 != 0){
    $(minitem).next().attr('value', quantity2);
    countObj();
  }
}


//Bouton croix
function removeTransformObj(itemremovei){
  var nbObjet = $('.item_transform').length;
  if(nbObjet == 1){
    $(itemremovei).closest('.content_text').remove();
  } else {
    $(itemremovei).closest('.item_transform').remove();
  }
}


function removeTransformCT(itemremovei){
    $(itemremovei).closest('.content_text').remove();
}


function removeTransformBaie(itemremovei){
  var nbBaie = $('.baie_transform').length;
  if(nbBaie == 1){
    $(itemremovei).closest('.content_text').remove();
  } else {
    $(itemremovei).closest('.baie_transform').remove();
  }
}


$(document).ready(function() {
  
//liste des catégories : yellow, ct, cs, survie, dressage, équipement, comestible, capture, évolutif


var productsVente = [
    {
      name: "Accro griffe",
      price: 325
    },
    {
      name: "Bande étreinte",
      price: 350,
    },
    {
      name: "Bandeau choix",
      price: 500,
    },
    {
      name: "Bandeau muscle",
      price: 425,
    },
    {
      name: "Bouton fuite",
      price: 300,
    },
    {
      name: "Cape Obscure",
      price: 450,
    },
    {
      name: "Carton rouge",
      price: 350,
    },
    {
      name: "Casque brut",
      price: 550,
    },
    {
      name: "Ceinture force",
      price: 475,
    },
    {
      name: "Ceinture pro",
      price: 475,
    },
    {
      name: "Dé Pipé",
      price: 500,
    },
    {
      name: "Émulateur",
      price: 575,
    },
    {
      name: "Évoluroc",
      price: 450,
    },
    {
      name: "Gant de Boxe",
      price: 450,
    },
    {
      name: "Grelot coque",
      price: 425,
    },
    {
      name: "Griffe rasoir",
      price: 375,
    },
    {
      name: "Grosses bottes",
      price: 350,
    },
    {
      name: "Grosse racine",
      price: 450,
    },
    {
      name: "Herbe Blanche",
      price: 475,
    },
    {
      name: "Herbe Pouvoir",
      price: 475,
    },
    {
      name: "Lentille Zoom",
      price: 500,
    },
    {
      name: "Loupe",
      price: 325,
    },
    {
      name: "Lumargile",
      price: 300,
    },
    {
      name: "Lunettes choix",
      price: 500,
    },
    {
      name: "Lunettes Filtre",
      price: 450,
    },
    {
      name: "Lunettes sages",
      price: 425,
    },
    {
      name: "Mouchoir choix",
      price: 500,
    },
    {
      name: "Orbe flamme",
      price: 300,
    },
    {
      name: "Orbe toxique",
      price: 300,
    },
    {
      name: "Orbe vie",
      price: 475,
    },
    {
      name: "Plaque élémentaire Acier",
      price: 500,
    },
    {
      name: "Plaque élémentaire Combat",
      price: 500,
    },
    {
      name: "Plaque élémentaire Dragon",
      price: 500,
    },
    {
      name: "Plaque élémentaire Eau",
      price: 500,
    },
    {
      name: "Plaque élémentaire Fée",
      price: 500,
    },
    {
      name: "Plaque élémentaire Feu",
      price: 500,
    },
    {
      name: "Plaque élémentaire Électrik",
      price: 500,
    },
    {
      name: "Plaque élémentaire Glace",
      price: 500,
    },
    {
      name: "Plaque élémentaire Insecte",
      price: 500,
    },
    {
      name: "Plaque élémentaire Normal",
      price: 500,
    },
    {
      name: "Plaque élémentaire Plante",
      price: 500,
    },
    {
      name: "Plaque élémentaire Poison",
      price: 500,
    },
    {
      name: "Plaque élémentaire Psy",
      price: 500,
    },
    {
      name: "Plaque élémentaire Roche",
      price: 500,
    },
    {
      name: "Plaque élémentaire Sol",
      price: 500,
    },
    {
      name: "Plaque élémentaire Spectre",
      price: 500,
    },
    {
      name: "Plaque élémentaire Ténèbres",
      price: 500,
    },
    {
      name: "Plaque élémentaire Vol",
      price: 500,
    },
    {
      name: "Restes",
      price: 525,
    },
    {
      name: "Roche météo",
      price: 300,
    },
    {
      name: "Roche royale",
      price: 375,
    },
    {
      name: "Spray Gorge",
      price: 450,
    },
    {
      name: "Veste de combat",
      price: 500,
    },
    {
      name: "Vulné-assurance",
      price: 525,
    },
    {
      name: "CS Coupe",
      price: 350,
    },
    {
      name: "CS Escalade",
      price: 350,
    },
    {
      name: "CS Éclate-Roc",
      price: 350,
    },
    {
      name: "CS Surf",
      price: 350,
    },
    {
      name: "CS Cascade",
      price: 350,
    },
    {
      name: "Corde sortie",
      price: 500,
    },
    {
      name: "Pokéball",
      price: 50,
    },
    {
      name: "Superball",
      price: 150,
    },
    {
      name: "Hyperball",
      price: 300,
    },
    {
      name: "Potion",
      price: 150,
    },
    {
      name: "Super Potion",
      price: 250,
    },
    {
      name: "Hyper Potion",
      price: 350,
    },
    {
      name: "Total Soin",
      price: 250,
    },
    {
      name: "Rappel",
      price: 500,
    },
    {
      name: "Super Repousse",
      price: 750,
    },
    {
      name: "Écaille cœur",
      price: 150,
    },
    {
      name: "Nœud Destin",
      price: 350,
    },
    {
      name: "Pilule talent",
      price: 250,
    },
    {
      name: "Grelot zen",
      price: 250,
    },
    {
      name: "Pierre Aube",
      price: 250,
    },
    {
      name: "Pierre Eau",
      price: 250,
    },
    {
      name: "Pierre Éclat",
      price: 250,
    },
    {
      name: "Pierre Feu",
      price: 250,
    },
    {
      name: "Pierre Foudre",
      price: 250,
    },
    {
      name: "Pierre Glace",
      price: 250,
    },
    {
      name: "Pierre Lune",
      price: 250,
    },
    {
      name: "Pierre Nuit",
      price: 250,
    },
    {
      name: "Pierre Plante",
      price: 250,
    },
    {
      name: "Pierre Soleil",
      price: 250,
    },
    {
      name: "Pointeau ADN",
      price: 250,
    },
    {
      name: "Magnésium",
      price: 150,
    },
    {
      name: "Protéine",
      price: 150,
    },
    {
      name: "Fer",
      price: 150,
    },
    {
      name: "Calcium",
      price: 150,
    },
    {
      name: "Zinc",
      price: 150,
    },
    {
      name: "Carbone",
      price: 150,
    },
    {
      name: "Baie Grena",
      price: 450,
    },
    {
      name: "Baie Alga",
      price: 450,
    },
    {
      name: "Baie Qualot",
      price: 450,
    },
    {
      name: "Baie Lonme",
      price: 450,
    },
    {
      name: "Baie Resin",
      price: 450,
    },
    {
      name: "Baie Tamato",
      price: 450,
    },
    {
      name: "Baie Abriko",
      price: 150,
    },
    {
      name: "Baie Cherrim",
      price: 150,
    },
    {
      name: "Baie Jaboca",
      price: 150,
    },
    {
      name: "Baie Kika",
      price: 150,
    },
    {
      name: "Baie Lansatt",
      price: 150,
    },
    {
      name: "Baie Lichii",
      price: 150,
    },
    {
      name: "Baie Micle",
      price: 150,
    },
    {
      name: "Baie Oran",
      price: 150,
    },
    {
      name: "Baie Prine",
      price: 150,
    },
    {
      name: "Baie Sailak",
      price: 150,
    },
    {
      name: "CT N°001 - Bélier",
      price: 425,
    },
{
      name: "CT N°002 - Charme",
      price: 425,
    },
{
      name: "CT N°003 - Croco Larme",
      price: 425,
    },
{
      name: "CT N°004 - Hâte",
      price: 425,
    },
{
      name: "CT N°005 - Coud’Boue",
      price: 425,
    },
{
      name: "CT N°006 - Grimace",
      price: 425,
    },
{
      name: "CT N°007 - Abri",
      price: 425,
    },
{
      name: "CT N°008 - Crocs Feu",
      price: 425,
    },
{
      name: "CT N°009 - Crocs Éclair",
      price: 425,
    },
{
      name: "CT N°010 - Crocs Givre",
      price: 425,
    },
{
      name: "CT N°011 - Vibraqua",
      price: 425,
    },
{
      name: "CT N°012 - Balayage",
      price: 425,
    },
{
      name: "CT N°013 - Bombe Acide",
      price: 425,
    },
{
      name: "CT N°014 - Acrobatie",
      price: 425,
    },
{
      name: "CT N°015 - Survinsecte",
      price: 425,
    },
{
      name: "CT N°016 - Rafale Psy",
      price: 425,
    },
{
      name: "CT N°017 - Onde Folie",
      price: 425,
    },
{
      name: "CT N°018 - Larcin",
      price: 425,
    },
{
      name: "CT N°019 - Voix Enjôleuse",
      price: 425,
    },
{
      name: "CT N°020 - Désherbaffe",
      price: 425,
    },
{
      name: "CT N°021 - Bond",
      price: 425,
    },
{
      name: "CT N°022 - Douche Froide",
      price: 425,
    },
{
      name: "CT N°023 - Rayon Chargé",
      price: 425,
    },
{
      name: "CT N°024 - Danse Flammes",
      price: 425,
    },
{
      name: "CT N°025 - Façade",
      price: 425,
    },
    {
      name: "CT N°026 - Queue-Poison",
      price: 425,
    },
{
      name: "CT N°027 - Aéropique",
      price: 425,
    },
{
      name: "CT N°028 - Piétisol",
      price: 425,
    },
{
      name: "CT N°029 - Châtiment",
      price: 425,
    },
{
      name: "CT N°030 - Aboiement",
      price: 425,
    },
{
      name: "CT N°031 - Griffe Acier",
      price: 425,
    },
{
      name: "CT N°032 - Météores",
      price: 425,
    },
{
      name: "CT N°033 - Feuille Magik",
      price: 425,
    },
{
      name: "CT N°034 - Vent Glace",
      price: 425,
    },
{
      name: "CT N°035 - Tir de Boue",
      price: 425,
    },
{
      name: "CT N°036 - Tomberoche",
      price: 425,
    },
{
      name: "CT N°037 - Vampibaiser",
      price: 425,
    },
{
      name: "CT N°038 - Nitrocharge",
      price: 425,
    },
{
      name: "CT N°039 - Balayette",
      price: 425,
    },
{
      name: "CT N°040 - Tranch’Air",
      price: 425,
    },
{
      name: "CT N°041 - Force Ajoutée",
      price: 425,
    },
{
      name: "CT N°042 - Ombre Nocturne",
      price: 425,
    },
{
      name: "CT N°043 - Dégommage",
      price: 425,
    },
{
      name: "CT N°044 - Draco-Queue",
      price: 425,
    },
{
      name: "CT N°045 - Choc Venin",
      price: 425,
    },
{
      name: "CT N°046 - Avalanche",
      price: 425,
    },
{
      name: "CT N°047 - Ténacité",
      price: 425,
    },
{
      name: "CT N°048 - Change Éclair",
      price: 425,
    },
{
      name: "CT N°049 - Zénith",
      price: 425,
    },
{
      name: "CT N°050 - Danse-Pluie",
      price: 425,
    },
    {
      name: "CT N°051 - Tempête de Sable",
      price: 425,
    },
{
      name: "CT N°052 - Chute de Neige",
      price: 425,
    },
{
      name: "CT N°053 - Estocorne",
      price: 425,
    },
{
      name: "CT N°054 - Choc Psy",
      price: 425,
    },
{
      name: "CT N°055 - Tunnel",
      price: 425,
    },
{
      name: "CT N°056 - Balle Graine",
      price: 425,
    },
{
      name: "CT N°057 - Faux-Chage",
      price: 425,
    },
{
      name: "CT N°058 - Casse-Brique",
      price: 425,
    },
{
      name: "CT N°059 - Psykoud'Boul",
      price: 425,
    },
{
      name: "CT N°060 - Demi-Tour",
      price: 425,
    },
{
      name: "CT N°061 - Griffe Ombre",
      price: 425,
    },
{
      name: "CT N°062 - Tricherie",
      price: 425,
    },
{
      name: "CT N°063 - Psycho-Croc",
      price: 425,
    },
{
      name: "CT N°064 - Gonflette",
      price: 425,
    },
{
      name: "CT N°065 - Lame d’Air",
      price: 425,
    },
{
      name: "CT N°066 - Plaquage",
      price: 425,
    },
{
      name: "CT N°067 - Poing Feu",
      price: 425,
    },
{
      name: "CT N°068 - Poing Éclair",
      price: 425,
    },
{
      name: "CT N°069 - Poing Glace",
      price: 425,
    },
{
      name: "CT N°070 - Blabla Dodo",
      price: 425,
    },
{
      name: "CT N°071 - Canon Graine",
      price: 425,
    },
{
      name: "CT N°072 - Boule Élek",
      price: 425,
    },
{
      name: "CT N°073 - Vampi-Poing",
      price: 425,
    },
{
      name: "CT N°074 - Protection",
      price: 425,
    },
{
      name: "CT N°075 - Mur Lumière",
      price: 425,
    },
    {
      name: "CT N°076 - Boule Roc",
      price: 425,
    },
{
      name: "CT N°077 - Cascade",
      price: 425,
    },
{
      name: "CT N°078 - Draco-Griffe",
      price: 425,
    },
{
      name: "CT N°079 - Éclat Magique",
      price: 425,
    },
{
      name: "CT N°080 - Métronome",
      price: 425,
    },
{
      name: "CT N°081 - Nœud Herbe",
      price: 425,
    },
{
      name: "CT N°082 - Cage Éclair",
      price: 425,
    },
{
      name: "CT N°083 - Direct Toxik",
      price: 425,
    },
{
      name: "CT N°084 - Trépignement",
      price: 425,
    },
{
      name: "CT N°085 - Repos",
      price: 425,
    },
{
      name: "CT N°086 - Éboulement",
      price: 425,
    },
{
      name: "CT N°087 - Provoc",
      price: 425,
    },
{
      name: "CT N°088 - Danse Lames",
      price: 425,
    },
{
      name: "CT N°089 - Big Splash",
      price: 425,
    },
{
      name: "CT N°090 - Picots",
      price: 425,
    },
{
      name: "CT N°091 - Pics Toxik",
      price: 425,
    },
{
      name: "CT N°092 - Possessif",
      price: 425,
    },
{
      name: "CT N°093 - Luminocanon",
      price: 425,
    },
{
      name: "CT N°094 - Vibrobscur",
      price: 425,
    },
{
      name: "CT N°095 - Vampirisme",
      price: 425,
    },
{
      name: "CT N°096 - Ondes Étranges",
      price: 425,
    },
{
      name: "CT N°097 - Vol",
      price: 425,
    },
{
      name: "CT N°098 - Échange",
      price: 425,
    },
{
      name: "CT N°099 - Tête de Fer",
      price: 425,
    },
{
      name: "CT N°100 - Danse Draco",
      price: 425,
    },
    {
      name: "CT N°101 - Rayon Gemme",
      price: 425,
    },
{
      name: "CT N°102 - Détricanon",
      price: 425,
    },
{
      name: "CT N°103 - Clonage",
      price: 425,
    },
{
      name: "CT N°104 - Mur de Fer",
      price: 425,
    },
{
      name: "CT N°105 - Plaie Croix",
      price: 425,
    },
{
      name: "CT N°106 - Tunnelier",
      price: 425,
    },
{
      name: "CT N°107 - Feu Follet",
      price: 425,
    },
{
      name: "CT N°108 - Mâchouille",
      price: 425,
    },
{
      name: "CT N°109 - Tour de Magie",
      price: 425,
    },
{
      name: "CT N°110 - Aqua-Brèche",
      price: 425,
    },
{
      name: "CT N°111 - Giga-Sangsue",
      price: 425,
    },
{
      name: "CT N°112 - Aurasphère",
      price: 425,
    },
{
      name: "CT N°113 - Vent Arrière",
      price: 425,
    },
{
      name: "CT N°114 - Ball’Ombre",
      price: 425,
    },
{
      name: "CT N°115 - Draco-Choc",
      price: 425,
    },
{
      name: "CT N°116 - Piège de Roc",
      price: 425,
    },
{
      name: "CT N°117 - Mégaphone",
      price: 425,
    },
{
      name: "CT N°118 - Canicule",
      price: 425,
    },
{
      name: "CT N°119 - Éco-Sphère",
      price: 425,
    },
{
      name: "CT N°120 - Psyko",
      price: 425,
    },
{
      name: "CT N°121 - Tacle Lourd",
      price: 425,
    },
{
      name: "CT N°122 - Encore",
      price: 425,
    },
{
      name: "CT N°123 - Surf",
      price: 425,
    },
{
      name: "CT N°124 - Cryo-Pirouette",
      price: 425,
    },
{
      name: "CT N°125 - Lance-Flammes",
      price: 425,
    },
    {
      name: "CT N°126 - Tonnerre",
      price: 425,
    },
{
      name: "CT N°127 - Câlinerie",
      price: 425,
    },
{
      name: "CT N°128 - Amnésie",
      price: 425,
    },
{
      name: "CT N°129 - Plénitude",
      price: 425,
    },
{
      name: "CT N°130 - Coup d’Main",
      price: 425,
    },
{
      name: "CT N°131 - Boule Pollen",
      price: 425,
    },
{
      name: "CT N°132 - Relais",
      price: 425,
    },
{
      name: "CT N°133 - Telluriforce",
      price: 425,
    },
{
      name: "CT N°134 - Contre",
      price: 425,
    },
{
      name: "CT N°135 - Laser Glace",
      price: 425,
    },
{
      name: "CT N°136 - Champ Électrifié",
      price: 425,
    },
{
      name: "CT N°137 - Champ Herbu",
      price: 425,
    },
{
      name: "CT N°138 - Champ Psychique",
      price: 425,
    },
{
      name: "CT N°139 - Champ Brumeux",
      price: 425,
    },
{
      name: "CT N°140 - Machination",
      price: 425,
    },
{
      name: "CT N°141 - Déflagration",
      price: 425,
    },
{
      name: "CT N°142 - Hydrocanon",
      price: 425,
    },
{
      name: "CT N°143 - Blizzard",
      price: 425,
    },
{
      name: "CT N°144 - Aire de Feu",
      price: 425,
    },
{
      name: "CT N°145 - Aire d’Eau",
      price: 425,
    },
{
      name: "CT N°146 - Aire d’Herbe",
      price: 425,
    },
{
      name: "CT N°147 - Éclair Fou",
      price: 425,
    },
{
      name: "CT N°148 - Bombe Beurk",
      price: 425,
    },
{
      name: "CT N°149 - Séisme",
      price: 425,
    },
{
      name: "CT N°150 - Lame de Roc",
      price: 425,
    },
    {
      name: "CT N°151 - Hantise",
      price: 425,
    },
{
      name: "CT N°152 - Giga Impact",
      price: 425,
    },
{
      name: "CT N°153 - Rafale Feu",
      price: 425,
    },
{
      name: "CT N°154 - Hydroblast",
      price: 425,
    },
{
      name: "CT N°155 - Végé-Attaque",
      price: 425,
    },
{
      name: "CT N°156 - Colère",
      price: 425,
    },
{
      name: "CT N°157 - Surchauffe",
      price: 425,
    },
{
      name: "CT N°158 - Exploforce",
      price: 425,
    },
{
      name: "CT N°159 - Tempête Verte",
      price: 425,
    },
{
      name: "CT N°160 - Vent Violent",
      price: 425,
    },
{
      name: "CT N°161 - Distorsion",
      price: 425,
    },
{
      name: "CT N°162 - Bourdon",
      price: 425,
    },
{
      name: "CT N°163 - Ultralaser",
      price: 425,
    },
{
      name: "CT N°164 - Rapace",
      price: 425,
    },
{
      name: "CT N°165 - Boutefeu",
      price: 425,
    },
{
      name: "CT N°166 - Fatal-Foudre",
      price: 425,
    },
{
      name: "CT N°167 - Close Combat",
      price: 425,
    },
{
      name: "CT N°168 - Lance-Soleil",
      price: 425,
    },
{
      name: "CT N°169 - Draco-Météore",
      price: 425,
    },
{
      name: "CT N°170 - Métalaser",
      price: 425,
    },
{
      name: "CT N°171 - Téra Explosion",
      price: 425,
    },
{
      name: "CT N°172 - Hurlement",
      price: 425,
    },
{
      name: "CT N°173 - Chargeur",
      price: 425,
    },
{
      name: "CT N°174 - Buée Noire",
      price: 425,
    },
{
      name: "CT N°175 - Toxik",
      price: 425,
    },
{
      name: "CT N°176 - Tourbi-Sable",
      price: 425,
    },
{
      name: "CT N°177 - Dépit",
      price: 425,
    },
{
      name: "CT N°178 - Gravité",
      price: 425,
    },
{
      name: "CT N°179 - Anti-Air",
      price: 425,
    },
{
      name: "CT N°180 - Gyroballe",
      price: 425,
    },
{
      name: "CT N°181 - Sabotage",
      price: 425,
    },
{
      name: "CT N°182 - Piqûre",
      price: 425,
    },
{
      name: "CT N°183 - Croc Fatal",
      price: 425,
    },
{
      name: "CT N°184 - Onde Vide",
      price: 425,
    },
{
      name: "CT N°185 - Furie-Bond",
      price: 425,
    },
{
      name: "CT N°186 - Cavalerie Lourde",
      price: 425,
    },
{
      name: "CT N°187 - Stalactite",
      price: 425,
    },
{
      name: "CT N°188 - Ébullition",
      price: 425,
    },
{
      name: "CT N°189 - Tacle Feu",
      price: 425,
    },
{
      name: "CT N°190 - Lame Solaire",
      price: 425,
    },
{
      name: "CT N°191 - Brouhaha",
      price: 425,
    },
{
      name: "CT N°192 - Mitra-Poing",
      price: 425,
    },
{
      name: "CT N°193 - Ball’Météo",
      price: 425,
    },
{
      name: "CT N°194 - Gliss’Herbe",
      price: 425,
    },
{
      name: "CT N°195 - Feu Envieux",
      price: 425,
    },
{
      name: "CT N°196 - Eau Revoir",
      price: 425,
    },
{
      name: "CT N°197 - Double Volée",
      price: 425,
    },
{
      name: "CT N°198 - Esprit Frappeur",
      price: 425,
    },
{
      name: "CT N°199 - Cent Rancunes",
      price: 425,
    },
{
      name: "CT N°200 - Rafale Écailles",
      price: 425,
    },
{
      name: "CT N°201 - Explo-Brume",
      price: 425,
    },
{
      name: "CT N°202 - Balance",
      price: 425,
    },
{
      name: "CT N°203 - Boost",
      price: 425,
    },
{
      name: "CT N°204 - Damoclès",
      price: 425,
    },
{
      name: "CT N°205 - Effort",
      price: 425
    },
{
      name: "CT N°206 - Tempête Florale",
      price: 425
    },
{
      name: "CT N°207 - Indignition",
      price: 425
    },
{
      name: "CT N°208 - Siphon",
      price: 425
    },
{
      name: "CT N°209 - Ocroupi",
      price: 425
    },
{
      name: "CT N°210 - Volt Assaut",
      price: 425
    },
{
      name: "CT N°211 - Toile Élek",
      price: 425
    },
{
      name: "CT N°212 - Triple Axel",
      price: 425
    },
{
      name: "CT N°213 - Coaching",
      price: 425
    },
{
      name: "CT N°214 - Cradovague",
      price: 425
    },
{
      name: "CT N°215 - Sable Ardent",
      price: 425
    },
{
      name: "CT N°216 - Danse Plumes",
      price: 425
    },
{
      name: "CT N°217 - Prescience",
      price: 425
    },
{
      name: "CT N°218 - Vaste Pouvoir",
      price: 425
    },
{
      name: "CT N°219 - Ravage Rampant",
      price: 425
    },
{
      name: "CT N°220 - Laser Météore",
      price: 425
    },
{
      name: "CT N°221 - Exécu-Son",
      price: 425
    },
{
      name: "CT N°222 - Abattage",
      price: 425
    },
{
      name: "CT N°223 - Strido-Son",
      price: 425
    },
{
      name: "CT N°224 - Malédiction",
      price: 425
    },
{
      name: "CT N°225 - Pression Extrême",
      price: 425
    },
{
      name: "CT N°226 - Cri Draconique",
      price: 425
    },
{
      name: "CT N°227 - Voix Envoûtante",
      price: 425
    },
{
      name: "CT N°228 - Dissonance Psy",
      price: 425
    },
{
      name: "CT N°229 - Prio-Parade",
      price: 425
    },
{
      name: "Aérozélite",
      price: 600
    },
{
      name: "Aquazélite",
      price: 600
    },
{
      name: "Combazélite",
      price: 600
    },
{
      name: "Cryozélite",
      price: 600
    },
{
      name: "Dracozélite",
      price: 600
    },
{
      name: "Florazélite",
      price: 600
    },
{
      name: "Insectozélite",
      price: 600
    },
{
      name: "Métallozélite",
      price: 600
    },
{
      name: "Normazélite",
      price: 600
    },
{
      name: "Nymphézélite",
      price: 600
    },
{
      name: "Psychézélite",
      price: 600
    },
{
      name: "Pyrozélite",
      price: 600,
    },
{
      name: "Rocazélite",
      price: 600,
    },
{
      name: "Spectrozélite",
      price: 600
    },
{
      name: "Ténébrozélite",
      price: 600
    },
{
      name: "Terrazélite",
      price: 600,
    },
{
      name: "Toxizélite",
      price: 600,
    },
{
      name: "Voltazélite",
      price: 600,
    },
{
      name: "Aloraïzélite",
      price: 600
    },
{
      name: "Archézélite",
      price: 600
    },
{
      name: "Ékaïzélite",
      price: 600
    },
{
      name: "Évolizélite",
      price: 600
    },
{
      name: "Félinozélite",
      price: 600
    },
{
      name: "Lougarozélite",
      price: 600
    },
{
      name: "Mimiquizélite",
      price: 600
    },
{
      name: "Oratozélite",
      price: 600
    },
{
      name: "Pikachazélite",
      price: 600
    },
{
      name: "Pikazélite",
      price: 600
    },
{
      name: "Ronflézélite",
      price: 600
    }
  ];




  $('.sectionDepose').click(function(){
    $('.item_depose').each(function(n){
      var n = n+1;
      var autocompleteId = "autocomplete" + n,
          pricePose = "pricepose" + n;
      $(this).find(".autoComplete").attr("id",autocompleteId);
      $(this).find(".pricepose").attr("id",pricePose);
    
      var productsString = JSON.stringify(productsVente),
          productsData = JSON.parse(productsString),
          arrName = [],
          arrPrice = [];


      for(let i = 0; i < productsData.length; i++){
        arrName.push(productsData[i].name);
        arrPrice.push(productsData[i].price);
      }
      $("#autocomplete" + n).autocomplete({
          source: arrName
      });
      $("#autocomplete" + n).change(function(){
        var selectionItem = $("#autocomplete" + n).val();
        const allList = productsVente.filter((f) => f.name === selectionItem);
        const itemPose = allList.map((value) => `${value.price}`).join('\n');
        if( selectionItem !== '' ){
          $("#pricepose" + n).html(itemPose);
        } else{
          $("#pricepose" + n).html("0");
        }
        calculPoseTotal();
      });
    });
  });




//VENDRE DES OBJETS
$('.buttonVente').click(function(){
  var nbVente = $('.item_vente').length,
      idNewVente = nbVente + 1;
  if( nbVente < 1 ){
    $(`<div class="sectionVente content_text"><h4 class='titleVente'>Je vends</h4><div class='total_vente'>Pour un total de <b><clrbw><span id='total_countvente'>0</span> p$</clrbw></b>.</div><div class="item_vente"><div class="autoComplete_wrapper"><input class="autoComplete" type="text" tabindex="1" required="required" autocomplete="off" placeholder="Nom de l'objet" id="autocompletev` + idNewVente + `"><input type="number" class="qtyvente" value="1" min="1"> pour <span class="pricepose" id="priceposev` + idNewVente + `">0</span> p$ l'unité.<button type='button' class='button_delete' onclick='removeVenteItem(this)'>X</button></div></div><a class="buttonAddVente btn_add"><div class="btn_hover"></div><div class="btn_text">Ajouter une vente</div></a></div>`).insertAfter('.sectionDepose');
    
    $('.qtyvente').change(function(){
       calculVenteTotal();
    });
    $('.buttonAddVente').click(function(){
      $(`<div class="item_vente"><div class="autoComplete_wrapper"><input class="autoComplete" type="text" tabindex="1" required="required" autocomplete="off" placeholder="Nom de l'objet" id="autocompletev` + idNewVente + `"><input type="number" class="qtyvente" value="1" min="1"> pour <span class="pricepose" id="priceposev` + idNewVente + `">0</span> p$ l'unité.<button type='button' class='button_delete' onclick='removeVenteItem(this)'>X</button></div></div>`).insertBefore(this);
      $('.qtyvente').change(function(){
        calculVenteTotal();
      });
    });
  }


  $('.sectionVente').click(function(){
    $('.item_vente').each(function(n){
      var n = n+1;
      var autocompleteId = "autocompletev" + n,
          pricePose = "priceposev" + n;
      $(this).find(".autoComplete").attr("id",autocompleteId);
      $(this).find(".pricepose").attr("id",pricePose);
    
      var productsString = JSON.stringify(productsVente),
          productsData = JSON.parse(productsString),
          arrName = [],
          arrPrice = [];


      for(let i = 0; i < productsData.length; i++){
        arrName.push(productsData[i].name);
        arrPrice.push(productsData[i].price);
      }
      $("#autocompletev" + n).autocomplete({
          source: arrName
      });
      $("#autocompletev" + n).change(function(){
        var selectionItem = $("#autocompletev" + n).val();
        const allList = productsVente.filter((f) => f.name === selectionItem);
        const itemPose = allList.map((value) => `${value.price}`).join('\n');
        if( $('.clicheList').text().indexOf('02-04.2-150') >= 0){
          var itemPrice = (itemPose * 0.5).toFixed10(2);
        } else {
          var itemPrice = (itemPose * 0.25).toFixed10(2);
        }
        if( selectionItem !== '' ){
          $("#priceposev" + n).html(itemPrice);
        } else{
          $("#priceposev" + n).html("0");
        }
        calculVenteTotal();
      });
    });
  });
});
});


$('#vide-grenier').click(function(){
  var totalPris = parseInt($('#total_count').text()),
      totalPose = parseInt($('#total_countpose').text());
  if( ($('#myCart').text().indexOf('Je prends') >= 0  && totalPris > totalPose) || ( $('#myCart').text().indexOf('Je prends') === -1 && $('.newBW_V2_content').text().indexOf('Je vends') === -1 && $('.newBW_V2_content').text().indexOf('Transformation de CT') === -1 && $('.newBW_V2_content').text().indexOf("Transformation d'objets") === -1 && $('.newBW_V2_content').text().indexOf("Transformation de Baies") === -1 ) ){
    $('.btn-empty, .btn-previ, .btn-pay').css('display', 'none');
  } else if( ( $('#myCart').text().indexOf('Je prends') >= 0  && totalPris <= totalPose) || ( $('#myCart').text().indexOf('Je prends') === -1 && $('.newBW_V2_content').text().indexOf('Je vends') >= 0 ) || ( $('#myCart').text().indexOf('Je prends') === -1 && $('.newBW_V2_content').text().indexOf('Transformation de CT') >= 0 ) || ( $('#myCart').text().indexOf('Je prends') === -1 && $('.newBW_V2_content').text().indexOf("Transformation d'objets") >= 0 ) || ( $('#myCart').text().indexOf('Je prends') === -1 && $('.newBW_V2_content').text().indexOf("Transformation de Baies") >= 0 ) ) {
    $('.btn-empty, .btn-previ, .btn-pay').css('display', 'inline-block');
  }
});
