$(function() {
//ACHAT CLICHÉS
$("input#changeCliche").click(function(){ $("#changeClicheChamp").toggle(); });


$('.blocCliche').each(function(){


        var cliche1soutien = $('.soutien1').css('display');
        var cliche1combattant = $('.combattant1').css('display');
        var cliche1collectionneur = $('.collectionneur1').css('display');
        var cliche21soutien = $('.soutien2-1').css('display');
        var cliche21combattant = $('.combattant2-1').css('display');
        var cliche21collectionneur = $('.collectionneur2-1').css('display');
        var cliche22soutien = $('.soutien2-2').css('display');
        var cliche22combattant = $('.combattant2-2').css('display');
        var cliche22collectionneur = $('.collectionneur2-2').css('display');
        var cliche3soutien = $('.soutien3').css('display');
        var cliche3combattant = $('.combattant3').css('display');
        var cliche3collectionneur = $('.collectionneur3').css('display');
        var cliche41soutien = $('.soutien4-1').css('display');
        var cliche41combattant = $('.combattant4-1').css('display');
        var cliche41collectionneur = $('.collectionneur4-1').css('display');
        var cliche42soutien = $('.soutien4-2').css('display');
        var cliche42combattant = $('.combattant4-2').css('display');
        var cliche42collectionneur = $('.collectionneur4-2').css('display');
        var cliche43soutien = $('.soutien4-3').css('display');
        var cliche43combattant = $('.combattant4-3').css('display');
        var cliche43collectionneur = $('.collectionneur4-3').css('display');
        var cliche5soutien = $('.soutien5').css('display');
        var cliche5combattant = $('.combattant5').css('display');
        var cliche5collectionneur = $('.collectionneur5').css('display');
        var cliche61soutien = $('.soutien6-1').css('display');
        var cliche61combattant = $('.combattant6-1').css('display');
        var cliche61collectionneur = $('.collectionneur6-1').css('display');
        var cliche62soutien = $('.soutien6-2').css('display');
        var cliche62combattant = $('.combattant6-2').css('display');
        var cliche62collectionneur = $('.collectionneur6-2').css('display');
        var cliche71soutien = $('.soutien7-1').css('display');
        var cliche71combattant = $('.combattant7-1').css('display');
        var cliche71collectionneur = $('.collectionneur7-1').css('display');
        var cliche72soutien = $('.soutien7-2').css('display');
        var cliche72combattant = $('.combattant7-2').css('display');
        var cliche72collectionneur = $('.collectionneur7-2').css('display');
        var cliche8soutien = $('.soutien8').css('display');
        var cliche8combattant = $('.combattant8').css('display');
        var cliche8collectionneur = $('.collectionneur8').css('display');
        var cliche91soutien = $('.soutien9-1').css('display');
        var cliche91combattant = $('.combattant9-1').css('display');
        var cliche91collectionneur = $('.collectionneur9-1').css('display');
        var cliche92soutien = $('.soutien9-2').css('display');
        var cliche92combattant = $('.combattant9-2').css('display');
        var cliche92collectionneur = $('.collectionneur9-2').css('display');
        var cliche10soutien = $('.soutien10').css('display');
        var cliche10combattant = $('.combattant10').css('display');
        var cliche10collectionneur = $('.collectionneur10').css('display');


        $('.blocCliche > div').css('display', 'none');


      //BRANCHE SOUTIEN
        if ( $('.clicheList').text().indexOf('01-01-50') === -1 ){
          $('.soutien1').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('01-01-50') >= 0 && $('.clicheList').text().indexOf('01-02.1-100') === -1 && $('.clicheList').text().indexOf('01-02.2-100') === -1 ){
          $('.soutien1').css('display', 'none');
          $('.soutien2-1').css('display', 'block');
          $('.soutien2-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('01-02.1-100') >= 0 || $('.clicheList').text().indexOf('01-02.2-100') >= 0 && $('.clicheList').text().indexOf('01-03-100') === -1 && $('.clicheList').text().indexOf('02-03-100') === -1 && $('.clicheList').text().indexOf('03-03-100') === -1 ){
          $('.soutien1').css('display', 'none');
          $('.soutien2-1').css('display', 'none');
          $('.soutien2-2').css('display', 'none');
          $('.soutien3').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('01-03-100') >= 0 && $('.clicheList').text().indexOf('01-04.1-150') === -1 && $('.clicheList').text().indexOf('01-04.2-150') === -1 && $('.clicheList').text().indexOf('01-04.3-150') === -1 ){
          $('.soutien1').css('display', 'none');
          $('.soutien2-1').css('display', 'none');
          $('.soutien2-2').css('display', 'none');
          $('.soutien3').css('display', 'none');
          $('.soutien4-1').css('display', 'block');
          $('.soutien4-2').css('display', 'block');
          $('.soutien4-3').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('01-04.1-150') >= 0 || $('.clicheList').text().indexOf('01-04.2-150') >= 0 || $('.clicheList').text().indexOf('01-04.3-150') >= 0 && $('.clicheList').text().indexOf('01-05-200') === -1 ){
          $('.soutien1').css('display', 'none');
          $('.soutien2-1').css('display', 'none');
          $('.soutien2-2').css('display', 'none');
          $('.soutien3').css('display', 'none');
          $('.soutien4-1').css('display', 'none');
          $('.soutien4-2').css('display', 'none');
          $('.soutien4-3').css('display', 'none');
          $('.soutien5').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('01-05-200') >= 0 && $('.clicheList').text().indexOf('01-06.1-250') === -1 && $('.clicheList').text().indexOf('01-06.2-250') === -1 ){
          $('.soutien1').css('display', 'none');
          $('.soutien2-1').css('display', 'none');
          $('.soutien2-2').css('display', 'none');
          $('.soutien3').css('display', 'none');
          $('.soutien4-1').css('display', 'none');
          $('.soutien4-2').css('display', 'none');
          $('.soutien4-3').css('display', 'none');
          $('.soutien5').css('display', 'none');
          $('.soutien6-1').css('display', 'block');
          $('.soutien6-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('01-06.1-250') >= 0 || $('.clicheList').text().indexOf('01-06.2-250') >= 0 && $('.clicheList').text().indexOf('01-07.1-325') === -1 && $('.clicheList').text().indexOf('01-07.2-275') === -1 ){
          $('.soutien1').css('display', 'none');
          $('.soutien2-1').css('display', 'none');
          $('.soutien2-2').css('display', 'none');
          $('.soutien3').css('display', 'none');
          $('.soutien4-1').css('display', 'none');
          $('.soutien4-2').css('display', 'none');
          $('.soutien4-3').css('display', 'none');
          $('.soutien5').css('display', 'none');
          $('.soutien6-1').css('display', 'none');
          $('.soutien6-2').css('display', 'none');
          $('.soutien7-1').css('display', 'block');
          $('.soutien7-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('01-07.1-325') >= 0 || $('.clicheList').text().indexOf('01-07.2-275') >= 0 && $('.clicheList').text().indexOf('01-08-400') === -1 ){
          $('.soutien1').css('display', 'none');
          $('.soutien2-1').css('display', 'none');
          $('.soutien2-2').css('display', 'none');
          $('.soutien3').css('display', 'none');
          $('.soutien4-1').css('display', 'none');
          $('.soutien4-2').css('display', 'none');
          $('.soutien4-3').css('display', 'none');
          $('.soutien5').css('display', 'none');
          $('.soutien6-1').css('display', 'none');
          $('.soutien6-2').css('display', 'none');
          $('.soutien7-1').css('display', 'none');
          $('.soutien7-2').css('display', 'none');
          $('.soutien8').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('01-08-400') >= 0 && $('.clicheList').text().indexOf('01-09.1-475') === -1 && $('.clicheList').text().indexOf('01-09.2-525') === -1 ){
          $('.soutien1').css('display', 'none');
          $('.soutien2-1').css('display', 'none');
          $('.soutien2-2').css('display', 'none');
          $('.soutien3').css('display', 'none');
          $('.soutien4-1').css('display', 'none');
          $('.soutien4-2').css('display', 'none');
          $('.soutien4-3').css('display', 'none');
          $('.soutien5').css('display', 'none');
          $('.soutien6-1').css('display', 'none');
          $('.soutien6-2').css('display', 'none');
          $('.soutien7-1').css('display', 'none');
          $('.soutien7-2').css('display', 'none');
          $('.soutien8').css('display', 'none');
          $('.soutien9-1').css('display', 'block');
          $('.soutien9-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('01-09.1-475') >= 0 || $('.clicheList').text().indexOf('01-09.2-525') >= 0 && $('.clicheList').text().indexOf('01-10-1000') === -1 ){
          $('.soutien1').css('display', 'none');
          $('.soutien2-1').css('display', 'none');
          $('.soutien2-2').css('display', 'none');
          $('.soutien3').css('display', 'none');
          $('.soutien4-1').css('display', 'none');
          $('.soutien4-2').css('display', 'none');
          $('.soutien4-3').css('display', 'none');
          $('.soutien5').css('display', 'none');
          $('.soutien6-1').css('display', 'none');
          $('.soutien6-2').css('display', 'none');
          $('.soutien7-1').css('display', 'none');
          $('.soutien7-2').css('display', 'none');
          $('.soutien8').css('display', 'none');
          $('.soutien9-1').css('display', 'none');
          $('.soutien9-2').css('display', 'none');
          $('.soutien10').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('01-10-1000') >= 0 ){
          $('.soutien1').css('display', 'none');
          $('.soutien2-1').css('display', 'none');
          $('.soutien2-2').css('display', 'none');
          $('.soutien3').css('display', 'none');
          $('.soutien4-1').css('display', 'none');
          $('.soutien4-2').css('display', 'none');
          $('.soutien4-3').css('display', 'none');
          $('.soutien5').css('display', 'none');
          $('.soutien6-1').css('display', 'none');
          $('.soutien6-2').css('display', 'none');
          $('.soutien7-1').css('display', 'none');
          $('.soutien7-2').css('display', 'none');
          $('.soutien8').css('display', 'none');
          $('.soutien9-1').css('display', 'none');
          $('.soutien9-2').css('display', 'none');
          $('.soutien10').css('display', 'none');
        }
        $('.soutien1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien2-1').css('display', 'none');
            $('.soutien2-2').css('display', 'none');
            $('.soutien3').css('display', 'none');
            $('.soutien4-1').css('display', 'none');
            $('.soutien4-2').css('display', 'none');
            $('.soutien4-3').css('display', 'none');
            $('.soutien5').css('display', 'none');
            $('.soutien6-1').css('display', 'none');
            $('.soutien6-2').css('display', 'none');
            $('.soutien7-1').css('display', 'none');
            $('.soutien7-2').css('display', 'none');
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
            $('.collectionneur3').removeClass('removeCliche');
            $('.combattant3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.soutien2-1').css('display', cliche21soutien);
            $('.soutien2-2').css('display', cliche22soutien);
          }
          if( ($(this).prop('checked') == false) && ($('.combattant3 input').prop('checked') == true) ){
            $('.collectionneur3').addClass('removeCliche');
          } else if( ($(this).prop('checked') == false) && ($('.collectionneur3 input').prop('checked') == true) ){
            $('.combattant3').addClass('removeCliche');
          }
        });
        $('.soutien2-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien2-2').css('display', cliche22soutien);
            $('.soutien3').css('display', 'none');
            $('.soutien4-1').css('display', 'none');
            $('.soutien4-2').css('display', 'none');
            $('.soutien4-3').css('display', 'none');
            $('.soutien5').css('display', 'none');
            $('.soutien6-1').css('display', 'none');
            $('.soutien6-2').css('display', 'none');
            $('.soutien7-1').css('display', 'none');
            $('.soutien7-2').css('display', 'none');
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
            $('.collectionneur3').removeClass('removeCliche');
            $('.combattant3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.soutien2-2').css('display', 'none');
            $('.soutien3').css('display', cliche3soutien);
          }
          if( ($(this).prop('checked') == false) && ($('.combattant3 input').prop('checked') == true) ){
            $('.collectionneur3').addClass('removeCliche');
          } else if( ($(this).prop('checked') == false) && ($('.collectionneur3 input').prop('checked') == true) ){
            $('.combattant3').addClass('removeCliche');
          }
        });
        $('.soutien2-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien2-1').css('display', cliche22soutien);
            $('.soutien3').css('display', 'none');
            $('.soutien4-1').css('display', 'none');
            $('.soutien4-2').css('display', 'none');
            $('.soutien4-3').css('display', 'none');
            $('.soutien5').css('display', 'none');
            $('.soutien6-1').css('display', 'none');
            $('.soutien6-2').css('display', 'none');
            $('.soutien7-1').css('display', 'none');
            $('.soutien7-2').css('display', 'none');
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
            $('.collectionneur3').removeClass('removeCliche');
            $('.combattant3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.soutien2-1').css('display', 'none');
            $('.soutien3').css('display', cliche3soutien);
          }
          if( ($(this).prop('checked') == false) && ($('.combattant3 input').prop('checked') == true) ){
            $('.collectionneur3').addClass('removeCliche');
          } else if( ($(this).prop('checked') == false) && ($('.collectionneur3 input').prop('checked') == true) ){
            $('.combattant3').addClass('removeCliche');
          }
        });
        $('.soutien3 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien4-1').css('display', 'none');
            $('.soutien4-2').css('display', 'none');
            $('.soutien4-3').css('display', 'none');
            $('.soutien5').css('display', 'none');
            $('.soutien6-1').css('display', 'none');
            $('.soutien6-2').css('display', 'none');
            $('.soutien7-1').css('display', 'none');
            $('.soutien7-2').css('display', 'none');
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
            $('.collectionneur3').removeClass('removeCliche');
            $('.combattant3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.soutien4-1').css('display', cliche41soutien);
            $('.soutien4-2').css('display', cliche42soutien);
            $('.soutien4-3').css('display', cliche43soutien);
            $('.collectionneur3').addClass('removeCliche');
            $('.combattant3').addClass('removeCliche');
          }
        });
        $('.soutien4-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien4-2').css('display', cliche42soutien);
            $('.soutien4-3').css('display', cliche43soutien);
            $('.soutien5').css('display', 'none');
            $('.soutien6-1').css('display', 'none');
            $('.soutien6-2').css('display', 'none');
            $('.soutien7-1').css('display', 'none');
            $('.soutien7-2').css('display', 'none');
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.soutien4-2').css('display', 'none');
            $('.soutien4-3').css('display', 'none');
            $('.soutien5').css('display', cliche5soutien);
          }
        });
        $('.soutien4-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien4-1').css('display', cliche41soutien);
            $('.soutien4-3').css('display', cliche43soutien);
            $('.soutien5').css('display', 'none');
            $('.soutien6-1').css('display', 'none');
            $('.soutien6-2').css('display', 'none');
            $('.soutien7-1').css('display', 'none');
            $('.soutien7-2').css('display', 'none');
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.soutien4-1').css('display', 'none');
            $('.soutien4-3').css('display', 'none');
            $('.soutien5').css('display', cliche5soutien);
          }
        });
        $('.soutien4-3 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien4-2').css('display', cliche42soutien);
            $('.soutien4-1').css('display', cliche41soutien);
            $('.soutien5').css('display', 'none');
            $('.soutien6-1').css('display', 'none');
            $('.soutien6-2').css('display', 'none');
            $('.soutien7-1').css('display', 'none');
            $('.soutien7-2').css('display', 'none');
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.soutien4-2').css('display', 'none');
            $('.soutien4-1').css('display', 'none');
            $('.soutien5').css('display', cliche5soutien);
          }
        });
        $('.soutien5 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien6-1').css('display', 'none');
            $('.soutien6-2').css('display', 'none');
            $('.soutien7-1').css('display', 'none');
            $('.soutien7-2').css('display', 'none');
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.soutien6-1').css('display', cliche61soutien);
            $('.soutien6-2').css('display', cliche62soutien);
          }
        });
        $('.soutien6-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien6-2').css('display', cliche62soutien);
            $('.soutien7-1').css('display', 'none');
            $('.soutien7-2').css('display', 'none');
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.soutien6-2').css('display', 'none');
            $('.soutien7-1').css('display', cliche71soutien);
            $('.soutien7-2').css('display', cliche72soutien);
          }
        });
        $('.soutien6-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien6-1').css('display', cliche61soutien);
            $('.soutien7-1').css('display', 'none');
            $('.soutien7-2').css('display', 'none');
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.soutien6-1').css('display', 'none');
            $('.soutien7-1').css('display', cliche71soutien);
            $('.soutien7-2').css('display', cliche72soutien);
          }
        });
        $('.soutien7-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien7-2').css('display', cliche72soutien);
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.soutien7-2').css('display', 'none');
            $('.soutien8').css('display', cliche8soutien);
          }
        });
        $('.soutien7-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien7-1').css('display', cliche71soutien);
            $('.soutien8').css('display', 'none');
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.soutien7-1').css('display', 'none');
            $('.soutien8').css('display', cliche8soutien);
          }
        });
        $('.soutien8 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien9-1').css('display', 'none');
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.soutien9-1').css('display', cliche91soutien);
            $('.soutien9-2').css('display', cliche92soutien);
          }
        });
        $('.soutien9-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien9-2').css('display', cliche92soutien);
            $('.soutien10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.soutien9-2').css('display', 'none');
            $('.soutien10').css('display', cliche10soutien);
          }
        });
        $('.soutien9-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.soutien9-1').css('display', cliche91soutien);
            $('.soutien10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.soutien9-1').css('display', 'none');
            $('.soutien10').css('display', cliche10soutien);
          }
        });


      //BRANCHE COMBATTANT
        if ( $('.clicheList').text().indexOf('02-01-50') === -1 ){
          $('.combattant1').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('02-01-50') >= 0 && $('.clicheList').text().indexOf('02-02.1-100') === -1 && $('.clicheList').text().indexOf('02-02.2-100') === -1 ){
          $('.combattant1').css('display', 'none');
          $('.combattant2-1').css('display', 'block');
          $('.combattant2-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('02-02.1-100') >= 0 || $('.clicheList').text().indexOf('02-02.2-100') >= 0 && $('.clicheList').text().indexOf('01-03-100') === -1 && $('.clicheList').text().indexOf('02-03-100') === -1 && $('.clicheList').text().indexOf('03-03-100') === -1 ){
          $('.combattant1').css('display', 'none');
          $('.combattant2-1').css('display', 'none');
          $('.combattant2-2').css('display', 'none');
          $('.combattant3').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('02-03-100') >= 0 && $('.clicheList').text().indexOf('02-04.1-150') === -1 && $('.clicheList').text().indexOf('02-04.2-150') === -1 && $('.clicheList').text().indexOf('02-04.3-150') === -1 ){
          $('.combattant1').css('display', 'none');
          $('.combattant2-1').css('display', 'none');
          $('.combattant2-2').css('display', 'none');
          $('.combattant3').css('display', 'none');
          $('.combattant4-1').css('display', 'block');
          $('.combattant4-2').css('display', 'block');
          $('.combattant4-3').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('02-04.1-150') >= 0 || $('.clicheList').text().indexOf('02-04.2-150') >= 0 || $('.clicheList').text().indexOf('02-04.3-150') >= 0 && $('.clicheList').text().indexOf('02-05-200') === -1 ){
          $('.combattant1').css('display', 'none');
          $('.combattant2-1').css('display', 'none');
          $('.combattant2-2').css('display', 'none');
          $('.combattant3').css('display', 'none');
          $('.combattant4-1').css('display', 'none');
          $('.combattant4-2').css('display', 'none');
          $('.combattant4-3').css('display', 'none');
          $('.combattant5').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('02-05-200') >= 0 && $('.clicheList').text().indexOf('02-06.1-225') === -1 && $('.clicheList').text().indexOf('02-06.2-275') === -1 ){
          $('.combattant1').css('display', 'none');
          $('.combattant2-1').css('display', 'none');
          $('.combattant2-2').css('display', 'none');
          $('.combattant3').css('display', 'none');
          $('.combattant4-1').css('display', 'none');
          $('.combattant4-2').css('display', 'none');
          $('.combattant4-3').css('display', 'none');
          $('.combattant5').css('display', 'none');
          $('.combattant6-1').css('display', 'block');
          $('.combattant6-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('02-06.1-225') >= 0 || $('.clicheList').text().indexOf('02-06.2-275') >= 0 && $('.clicheList').text().indexOf('02-07.1-275') === -1 && $('.clicheList').text().indexOf('02-07.2-325') === -1 ){
          $('.combattant1').css('display', 'none');
          $('.combattant2-1').css('display', 'none');
          $('.combattant2-2').css('display', 'none');
          $('.combattant3').css('display', 'none');
          $('.combattant4-1').css('display', 'none');
          $('.combattant4-2').css('display', 'none');
          $('.combattant4-3').css('display', 'none');
          $('.combattant5').css('display', 'none');
          $('.combattant6-1').css('display', 'none');
          $('.combattant6-2').css('display', 'none');
          $('.combattant7-1').css('display', 'block');
          $('.combattant7-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('02-07.1-275') >= 0 || $('.clicheList').text().indexOf('02-07.2-325') >= 0 && $('.clicheList').text().indexOf('02-08-400') === -1 ){
          $('.combattant1').css('display', 'none');
          $('.combattant2-1').css('display', 'none');
          $('.combattant2-2').css('display', 'none');
          $('.combattant3').css('display', 'none');
          $('.combattant4-1').css('display', 'none');
          $('.combattant4-2').css('display', 'none');
          $('.combattant4-3').css('display', 'none');
          $('.combattant5').css('display', 'none');
          $('.combattant6-1').css('display', 'none');
          $('.combattant6-2').css('display', 'none');
          $('.combattant7-1').css('display', 'none');
          $('.combattant7-2').css('display', 'none');
          $('.combattant8').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('02-08-400') >= 0 && $('.clicheList').text().indexOf('02-09.1-475') === -1 && $('.clicheList').text().indexOf('02-09.2-525') === -1 ){
          $('.combattant1').css('display', 'none');
          $('.combattant2-1').css('display', 'none');
          $('.combattant2-2').css('display', 'none');
          $('.combattant3').css('display', 'none');
          $('.combattant4-1').css('display', 'none');
          $('.combattant4-2').css('display', 'none');
          $('.combattant4-3').css('display', 'none');
          $('.combattant5').css('display', 'none');
          $('.combattant6-1').css('display', 'none');
          $('.combattant6-2').css('display', 'none');
          $('.combattant7-1').css('display', 'none');
          $('.combattant7-2').css('display', 'none');
          $('.combattant8').css('display', 'none');
          $('.combattant9-1').css('display', 'block');
          $('.combattant9-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('02-09.1-475') >= 0 || $('.clicheList').text().indexOf('02-09.2-525') >= 0 && $('.clicheList').text().indexOf('02-10-1000') === -1 ){
          $('.combattant1').css('display', 'none');
          $('.combattant2-1').css('display', 'none');
          $('.combattant2-2').css('display', 'none');
          $('.combattant3').css('display', 'none');
          $('.combattant4-1').css('display', 'none');
          $('.combattant4-2').css('display', 'none');
          $('.combattant4-3').css('display', 'none');
          $('.combattant5').css('display', 'none');
          $('.combattant6-1').css('display', 'none');
          $('.combattant6-2').css('display', 'none');
          $('.combattant7-1').css('display', 'none');
          $('.combattant7-2').css('display', 'none');
          $('.combattant8').css('display', 'none');
          $('.combattant9-1').css('display', 'none');
          $('.combattant9-2').css('display', 'none');
          $('.combattant10').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('02-10-1000') >= 0 ){
          $('.combattant1').css('display', 'none');
          $('.combattant2-1').css('display', 'none');
          $('.combattant2-2').css('display', 'none');
          $('.combattant3').css('display', 'none');
          $('.combattant4-1').css('display', 'none');
          $('.combattant4-2').css('display', 'none');
          $('.combattant4-3').css('display', 'none');
          $('.combattant5').css('display', 'none');
          $('.combattant6-1').css('display', 'none');
          $('.combattant6-2').css('display', 'none');
          $('.combattant7-1').css('display', 'none');
          $('.combattant7-2').css('display', 'none');
          $('.combattant8').css('display', 'none');
          $('.combattant9-1').css('display', 'none');
          $('.combattant9-2').css('display', 'none');
          $('.combattant10').css('display', 'none');
        }
        $('.combattant1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant2-1').css('display', 'none');
            $('.combattant2-2').css('display', 'none');
            $('.combattant3').css('display', 'none');
            $('.combattant4-1').css('display', 'none');
            $('.combattant4-2').css('display', 'none');
            $('.combattant4-3').css('display', 'none');
            $('.combattant5').css('display', 'none');
            $('.combattant6-1').css('display', 'none');
            $('.combattant6-2').css('display', 'none');
            $('.combattant7-1').css('display', 'none');
            $('.combattant7-2').css('display', 'none');
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
            $('.collectionneur3').removeClass('removeCliche');
            $('.soutien3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.combattant2-1').css('display', cliche21combattant);
            $('.combattant2-2').css('display', cliche22combattant);
          }
          if( ($(this).prop('checked') == false) && ($('.soutien3 input').prop('checked') == true) ){
            $('.collectionneur3').addClass('removeCliche');
          } else if( ($(this).prop('checked') == false) && ($('.collectionneur3 input').prop('checked') == true) ){
            $('.soutien3').addClass('removeCliche');
          }
        });
        $('.combattant2-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant2-2').css('display', cliche22combattant);
            $('.combattant3').css('display', 'none');
            $('.combattant4-1').css('display', 'none');
            $('.combattant4-2').css('display', 'none');
            $('.combattant4-3').css('display', 'none');
            $('.combattant5').css('display', 'none');
            $('.combattant6-1').css('display', 'none');
            $('.combattant6-2').css('display', 'none');
            $('.combattant7-1').css('display', 'none');
            $('.combattant7-2').css('display', 'none');
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
            $('.collectionneur3').removeClass('removeCliche');
            $('.soutien3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.combattant2-2').css('display', 'none');
            $('.combattant3').css('display', cliche3combattant);
          }
          if( ($(this).prop('checked') == false) && ($('.soutien3 input').prop('checked') == true) ){
            $('.collectionneur3').addClass('removeCliche');
          } else if( ($(this).prop('checked') == false) && ($('.collectionneur3 input').prop('checked') == true) ){
            $('.soutien3').addClass('removeCliche');
          }
        });
        $('.combattant2-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant2-1').css('display', cliche22combattant);
            $('.combattant3').css('display', 'none');
            $('.combattant4-1').css('display', 'none');
            $('.combattant4-2').css('display', 'none');
            $('.combattant4-3').css('display', 'none');
            $('.combattant5').css('display', 'none');
            $('.combattant6-1').css('display', 'none');
            $('.combattant6-2').css('display', 'none');
            $('.combattant7-1').css('display', 'none');
            $('.combattant7-2').css('display', 'none');
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
            $('.collectionneur3').removeClass('removeCliche');
            $('.soutien3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.combattant2-1').css('display', 'none');
            $('.combattant3').css('display', cliche3combattant);
          }
          if( ($(this).prop('checked') == false) && ($('.soutien3 input').prop('checked') == true) ){
            $('.collectionneur3').addClass('removeCliche');
          } else if( ($(this).prop('checked') == false) && ($('.collectionneur3 input').prop('checked') == true) ){
            $('.soutien3').addClass('removeCliche');
          }
        });
        $('.combattant3 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant4-1').css('display', 'none');
            $('.combattant4-2').css('display', 'none');
            $('.combattant4-3').css('display', 'none');
            $('.combattant5').css('display', 'none');
            $('.combattant6-1').css('display', 'none');
            $('.combattant6-2').css('display', 'none');
            $('.combattant7-1').css('display', 'none');
            $('.combattant7-2').css('display', 'none');
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
            $('.collectionneur3').removeClass('removeCliche');
            $('.soutien3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.combattant4-1').css('display', cliche41combattant);
            $('.combattant4-2').css('display', cliche42combattant);
            $('.combattant4-3').css('display', cliche43combattant);
            $('.collectionneur3').addClass('removeCliche');
            $('.soutien3').addClass('removeCliche');
          }
        });
        $('.combattant4-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant4-2').css('display', cliche42combattant);
            $('.combattant4-3').css('display', cliche43combattant);
            $('.combattant5').css('display', 'none');
            $('.combattant6-1').css('display', 'none');
            $('.combattant6-2').css('display', 'none');
            $('.combattant7-1').css('display', 'none');
            $('.combattant7-2').css('display', 'none');
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.combattant4-2').css('display', 'none');
            $('.combattant4-3').css('display', 'none');
            $('.combattant5').css('display', cliche5combattant);
          }
        });
        $('.combattant4-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant4-1').css('display', cliche41combattant);
            $('.combattant4-3').css('display', cliche43combattant);
            $('.combattant5').css('display', 'none');
            $('.combattant6-1').css('display', 'none');
            $('.combattant6-2').css('display', 'none');
            $('.combattant7-1').css('display', 'none');
            $('.combattant7-2').css('display', 'none');
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.combattant4-1').css('display', 'none');
            $('.combattant4-3').css('display', 'none');
            $('.combattant5').css('display', cliche5combattant);
          }
        });
        $('.combattant4-3 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant4-2').css('display', cliche42combattant);
            $('.combattant4-1').css('display', cliche41combattant);
            $('.combattant5').css('display', 'none');
            $('.combattant6-1').css('display', 'none');
            $('.combattant6-2').css('display', 'none');
            $('.combattant7-1').css('display', 'none');
            $('.combattant7-2').css('display', 'none');
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.combattant4-2').css('display', 'none');
            $('.combattant4-1').css('display', 'none');
            $('.combattant5').css('display', cliche5combattant);
          }
        });
        $('.combattant5 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant6-1').css('display', 'none');
            $('.combattant6-2').css('display', 'none');
            $('.combattant7-1').css('display', 'none');
            $('.combattant7-2').css('display', 'none');
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.combattant6-1').css('display', cliche61combattant);
            $('.combattant6-2').css('display', cliche62combattant);
          }
        });
        $('.combattant6-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant6-2').css('display', cliche62combattant);
            $('.combattant7-1').css('display', 'none');
            $('.combattant7-2').css('display', 'none');
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.combattant6-2').css('display', 'none');
            $('.combattant7-1').css('display', cliche71combattant);
            $('.combattant7-2').css('display', cliche72combattant);
          }
        });
        $('.combattant6-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant6-1').css('display', cliche61combattant);
            $('.combattant7-1').css('display', 'none');
            $('.combattant7-2').css('display', 'none');
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.combattant6-1').css('display', 'none');
            $('.combattant7-1').css('display', cliche71combattant);
            $('.combattant7-2').css('display', cliche72combattant);
          }
        });
        $('.combattant7-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant7-2').css('display', cliche72combattant);
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.combattant7-2').css('display', 'none');
            $('.combattant8').css('display', cliche8combattant);
          }
        });
        $('.combattant7-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant7-1').css('display', cliche71combattant);
            $('.combattant8').css('display', 'none');
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.combattant7-1').css('display', 'none');
            $('.combattant8').css('display', cliche8combattant);
          }
        });
        $('.combattant8 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant9-1').css('display', 'none');
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.combattant9-1').css('display', cliche91combattant);
            $('.combattant9-2').css('display', cliche92combattant);
          }
        });
        $('.combattant9-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant9-2').css('display', cliche92combattant);
            $('.combattant10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.combattant9-2').css('display', 'none');
            $('.combattant10').css('display', cliche10combattant);
          }
        });
        $('.combattant9-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.combattant9-1').css('display', cliche91combattant);
            $('.combattant10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.combattant9-1').css('display', 'none');
            $('.combattant10').css('display', cliche10combattant);
          }
        });


      //BRANCHE COLLECTIONNEUR
        if ( $('.clicheList').text().indexOf('03-01-50') === -1 ){
          $('.collectionneur1').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('03-01-50') >= 0 && $('.clicheList').text().indexOf('03-02.1-125') === -1 && $('.clicheList').text().indexOf('03-02.2-75') === -1 ){
          $('.collectionneur1').css('display', 'none');
          $('.collectionneur2-1').css('display', 'block');
          $('.collectionneur2-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('03-02.1-125') >= 0 || $('.clicheList').text().indexOf('03-02.2-75') >= 0 && $('.clicheList').text().indexOf('01-03-100') === -1 && $('.clicheList').text().indexOf('02-03-100') === -1 && $('.clicheList').text().indexOf('03-03-100') === -1 ){
          $('.collectionneur1').css('display', 'none');
          $('.collectionneur2-1').css('display', 'none');
          $('.collectionneur2-2').css('display', 'none');
          $('.collectionneur3').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('03-03-100') >= 0 && $('.clicheList').text().indexOf('03-04.1-150') === -1 && $('.clicheList').text().indexOf('03-04.2-150') === -1 && $('.clicheList').text().indexOf('03-04.3-150') === -1 ){
          $('.collectionneur1').css('display', 'none');
          $('.collectionneur2-1').css('display', 'none');
          $('.collectionneur2-2').css('display', 'none');
          $('.collectionneur3').css('display', 'none');
          $('.collectionneur4-1').css('display', 'block');
          $('.collectionneur4-2').css('display', 'block');
          $('.collectionneur4-3').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('03-04.1-150') >= 0 || $('.clicheList').text().indexOf('03-04.2-150') >= 0 || $('.clicheList').text().indexOf('03-04.3-150') >= 0 && $('.clicheList').text().indexOf('03-05-200') === -1 ){
          $('.collectionneur1').css('display', 'none');
          $('.collectionneur2-1').css('display', 'none');
          $('.collectionneur2-2').css('display', 'none');
          $('.collectionneur3').css('display', 'none');
          $('.collectionneur4-1').css('display', 'none');
          $('.collectionneur4-2').css('display', 'none');
          $('.collectionneur4-3').css('display', 'none');
          $('.collectionneur5').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('03-05-200') >= 0 && $('.clicheList').text().indexOf('03-06.1-225') === -1 && $('.clicheList').text().indexOf('03-06.2-275') === -1 ){
          $('.collectionneur1').css('display', 'none');
          $('.collectionneur2-1').css('display', 'none');
          $('.collectionneur2-2').css('display', 'none');
          $('.collectionneur3').css('display', 'none');
          $('.collectionneur4-1').css('display', 'none');
          $('.collectionneur4-2').css('display', 'none');
          $('.collectionneur4-3').css('display', 'none');
          $('.collectionneur5').css('display', 'none');
          $('.collectionneur6-1').css('display', 'block');
          $('.collectionneur6-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('03-06.1-225') >= 0 || $('.clicheList').text().indexOf('03-06.2-275') >= 0 && $('.clicheList').text().indexOf('03-07.1-275') === -1 && $('.clicheList').text().indexOf('03-07.2-325') === -1 ){
          $('.collectionneur1').css('display', 'none');
          $('.collectionneur2-1').css('display', 'none');
          $('.collectionneur2-2').css('display', 'none');
          $('.collectionneur3').css('display', 'none');
          $('.collectionneur4-1').css('display', 'none');
          $('.collectionneur4-2').css('display', 'none');
          $('.collectionneur4-3').css('display', 'none');
          $('.collectionneur5').css('display', 'none');
          $('.collectionneur6-1').css('display', 'none');
          $('.collectionneur6-2').css('display', 'none');
          $('.collectionneur7-1').css('display', 'block');
          $('.collectionneur7-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('03-07.1-275') >= 0 || $('.clicheList').text().indexOf('03-07.2-325') >= 0 && $('.clicheList').text().indexOf('03-08-400') === -1 ){
          $('.collectionneur1').css('display', 'none');
          $('.collectionneur2-1').css('display', 'none');
          $('.collectionneur2-2').css('display', 'none');
          $('.collectionneur3').css('display', 'none');
          $('.collectionneur4-1').css('display', 'none');
          $('.collectionneur4-2').css('display', 'none');
          $('.collectionneur4-3').css('display', 'none');
          $('.collectionneur5').css('display', 'none');
          $('.collectionneur6-1').css('display', 'none');
          $('.collectionneur6-2').css('display', 'none');
          $('.collectionneur7-1').css('display', 'none');
          $('.collectionneur7-2').css('display', 'none');
          $('.collectionneur8').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('03-08-400') >= 0 && $('.clicheList').text().indexOf('03-09.1-525') === -1 && $('.clicheList').text().indexOf('03-09.2-475') === -1 ){
          $('.collectionneur1').css('display', 'none');
          $('.collectionneur2-1').css('display', 'none');
          $('.collectionneur2-2').css('display', 'none');
          $('.collectionneur3').css('display', 'none');
          $('.collectionneur4-1').css('display', 'none');
          $('.collectionneur4-2').css('display', 'none');
          $('.collectionneur4-3').css('display', 'none');
          $('.collectionneur5').css('display', 'none');
          $('.collectionneur6-1').css('display', 'none');
          $('.collectionneur6-2').css('display', 'none');
          $('.collectionneur7-1').css('display', 'none');
          $('.collectionneur7-2').css('display', 'none');
          $('.collectionneur8').css('display', 'none');
          $('.collectionneur9-1').css('display', 'block');
          $('.collectionneur9-2').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('03-09.1-525') >= 0 || $('.clicheList').text().indexOf('03-09.2-475') >= 0 && $('.clicheList').text().indexOf('03-10-1000') === -1 ){
          $('.collectionneur1').css('display', 'none');
          $('.collectionneur2-1').css('display', 'none');
          $('.collectionneur2-2').css('display', 'none');
          $('.collectionneur3').css('display', 'none');
          $('.collectionneur4-1').css('display', 'none');
          $('.collectionneur4-2').css('display', 'none');
          $('.collectionneur4-3').css('display', 'none');
          $('.collectionneur5').css('display', 'none');
          $('.collectionneur6-1').css('display', 'none');
          $('.collectionneur6-2').css('display', 'none');
          $('.collectionneur7-1').css('display', 'none');
          $('.collectionneur7-2').css('display', 'none');
          $('.collectionneur8').css('display', 'none');
          $('.collectionneur9-1').css('display', 'none');
          $('.collectionneur9-2').css('display', 'none');
          $('.collectionneur10').css('display', 'block');
        }
        if( $('.clicheList').text().indexOf('03-10-1000') >= 0 ){
          $('.collectionneur1').css('display', 'none');
          $('.collectionneur2-1').css('display', 'none');
          $('.collectionneur2-2').css('display', 'none');
          $('.collectionneur3').css('display', 'none');
          $('.collectionneur4-1').css('display', 'none');
          $('.collectionneur4-2').css('display', 'none');
          $('.collectionneur4-3').css('display', 'none');
          $('.collectionneur5').css('display', 'none');
          $('.collectionneur6-1').css('display', 'none');
          $('.collectionneur6-2').css('display', 'none');
          $('.collectionneur7-1').css('display', 'none');
          $('.collectionneur7-2').css('display', 'none');
          $('.collectionneur8').css('display', 'none');
          $('.collectionneur9-1').css('display', 'none');
          $('.collectionneur9-2').css('display', 'none');
          $('.collectionneur10').css('display', 'none');
        }
        $('.collectionneur1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur2-1').css('display', 'none');
            $('.collectionneur2-2').css('display', 'none');
            $('.collectionneur3').css('display', 'none');
            $('.collectionneur4-1').css('display', 'none');
            $('.collectionneur4-2').css('display', 'none');
            $('.collectionneur4-3').css('display', 'none');
            $('.collectionneur5').css('display', 'none');
            $('.collectionneur6-1').css('display', 'none');
            $('.collectionneur6-2').css('display', 'none');
            $('.collectionneur7-1').css('display', 'none');
            $('.collectionneur7-2').css('display', 'none');
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
            $('.soutien3').removeClass('removeCliche');
            $('.combattant3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur2-1').css('display', cliche21collectionneur);
            $('.collectionneur2-2').css('display', cliche22collectionneur);
          } 
          if( ($(this).prop('checked') == false) && ($('.combattant3 input').prop('checked') == true) ){
            $('.soutien3').addClass('removeCliche');
          } else if( ($(this).prop('checked') == false) && ($('.soutien3 input').prop('checked') == true) ){
            $('.combattant3').addClass('removeCliche');
          }
        });
        $('.collectionneur2-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur2-2').css('display', cliche22collectionneur);
            $('.collectionneur3').css('display', 'none');
            $('.collectionneur4-1').css('display', 'none');
            $('.collectionneur4-2').css('display', 'none');
            $('.collectionneur4-3').css('display', 'none');
            $('.collectionneur5').css('display', 'none');
            $('.collectionneur6-1').css('display', 'none');
            $('.collectionneur6-2').css('display', 'none');
            $('.collectionneur7-1').css('display', 'none');
            $('.collectionneur7-2').css('display', 'none');
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
            $('.soutien3').removeClass('removeCliche');
            $('.combattant3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur2-2').css('display', 'none');
            $('.collectionneur3').css('display', cliche3collectionneur);
          } 
          if( ($(this).prop('checked') == false) && ($('.combattant3 input').prop('checked') == true) ){
            $('.soutien3').addClass('removeCliche');
          } else if( ($(this).prop('checked') == false) && ($('.soutien3 input').prop('checked') == true) ){
            $('.combattant3').addClass('removeCliche');
          }
        });
        $('.collectionneur2-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur2-1').css('display', cliche22collectionneur);
            $('.collectionneur3').css('display', 'none');
            $('.collectionneur4-1').css('display', 'none');
            $('.collectionneur4-2').css('display', 'none');
            $('.collectionneur4-3').css('display', 'none');
            $('.collectionneur5').css('display', 'none');
            $('.collectionneur6-1').css('display', 'none');
            $('.collectionneur6-2').css('display', 'none');
            $('.collectionneur7-1').css('display', 'none');
            $('.collectionneur7-2').css('display', 'none');
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
            $('.soutien3').removeClass('removeCliche');
            $('.combattant3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur2-1').css('display', 'none');
            $('.collectionneur3').css('display', cliche3collectionneur);
          } 
          if( ($(this).prop('checked') == false) && ($('.combattant3 input').prop('checked') == true) ){
            $('.soutien3').addClass('removeCliche');
          } else if( ($(this).prop('checked') == false) && ($('.soutien3 input').prop('checked') == true) ){
            $('.combattant3').addClass('removeCliche');
          }
        });
        $('.collectionneur3 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur4-1').css('display', 'none');
            $('.collectionneur4-2').css('display', 'none');
            $('.collectionneur4-3').css('display', 'none');
            $('.collectionneur5').css('display', 'none');
            $('.collectionneur6-1').css('display', 'none');
            $('.collectionneur6-2').css('display', 'none');
            $('.collectionneur7-1').css('display', 'none');
            $('.collectionneur7-2').css('display', 'none');
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
            $('.soutien3').removeClass('removeCliche');
            $('.combattant3').removeClass('removeCliche');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur4-1').css('display', cliche41collectionneur);
            $('.collectionneur4-2').css('display', cliche42collectionneur);
            $('.collectionneur4-3').css('display', cliche43collectionneur);
            $('.soutien3').addClass('removeCliche');
            $('.combattant3').addClass('removeCliche');
          }
        });
        $('.collectionneur4-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur4-2').css('display', cliche42collectionneur);
            $('.collectionneur4-3').css('display', cliche43collectionneur);
            $('.collectionneur5').css('display', 'none');
            $('.collectionneur6-1').css('display', 'none');
            $('.collectionneur6-2').css('display', 'none');
            $('.collectionneur7-1').css('display', 'none');
            $('.collectionneur7-2').css('display', 'none');
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur4-2').css('display', 'none');
            $('.collectionneur4-3').css('display', 'none');
            $('.collectionneur5').css('display', cliche5collectionneur);
          }
        });
        $('.collectionneur4-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur4-1').css('display', cliche41collectionneur);
            $('.collectionneur4-3').css('display', cliche43collectionneur);
            $('.collectionneur5').css('display', 'none');
            $('.collectionneur6-1').css('display', 'none');
            $('.collectionneur6-2').css('display', 'none');
            $('.collectionneur7-1').css('display', 'none');
            $('.collectionneur7-2').css('display', 'none');
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur4-1').css('display', 'none');
            $('.collectionneur4-3').css('display', 'none');
            $('.collectionneur5').css('display', cliche5collectionneur);
          }
        });
        $('.collectionneur4-3 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur4-2').css('display', cliche42collectionneur);
            $('.collectionneur4-1').css('display', cliche41collectionneur);
            $('.collectionneur5').css('display', 'none');
            $('.collectionneur6-1').css('display', 'none');
            $('.collectionneur6-2').css('display', 'none');
            $('.collectionneur7-1').css('display', 'none');
            $('.collectionneur7-2').css('display', 'none');
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur4-2').css('display', 'none');
            $('.collectionneur4-1').css('display', 'none');
            $('.collectionneur5').css('display', cliche5collectionneur);
          }
        });
        $('.collectionneur5 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur6-1').css('display', 'none');
            $('.collectionneur6-2').css('display', 'none');
            $('.collectionneur7-1').css('display', 'none');
            $('.collectionneur7-2').css('display', 'none');
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur6-1').css('display', cliche61collectionneur);
            $('.collectionneur6-2').css('display', cliche62collectionneur);
          }
        });
        $('.collectionneur6-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur6-2').css('display', cliche62collectionneur);
            $('.collectionneur7-1').css('display', 'none');
            $('.collectionneur7-2').css('display', 'none');
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur6-2').css('display', 'none');
            $('.collectionneur7-1').css('display', cliche71collectionneur);
            $('.collectionneur7-2').css('display', cliche72collectionneur);
          }
        });
        $('.collectionneur6-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur6-1').css('display', cliche61collectionneur);
            $('.collectionneur7-1').css('display', 'none');
            $('.collectionneur7-2').css('display', 'none');
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur6-1').css('display', 'none');
            $('.collectionneur7-1').css('display', cliche71collectionneur);
            $('.collectionneur7-2').css('display', cliche72collectionneur);
          }
        });
        $('.collectionneur7-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur7-2').css('display', cliche72collectionneur);
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur7-2').css('display', 'none');
            $('.collectionneur8').css('display', cliche8collectionneur);
          }
        });
        $('.collectionneur7-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur7-1').css('display', cliche71collectionneur);
            $('.collectionneur8').css('display', 'none');
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur7-1').css('display', 'none');
            $('.collectionneur8').css('display', cliche8collectionneur);
          }
        });
        $('.collectionneur8 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur9-1').css('display', cliche91collectionneur);
            $('.collectionneur9-2').css('display', cliche92collectionneur);
          }
        });
        $('.collectionneur9-1 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur9-2').css('display', cliche92collectionneur);
            $('.collectionneur10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur9-2').css('display', 'none');
            $('.collectionneur10').css('display', cliche10collectionneur);
          }
        });
        $('.collectionneur9-2 input').change(function(){
          if( $(this).prop('checked') == false ){
            $('.collectionneur9-1').css('display', cliche91collectionneur);
            $('.collectionneur10').css('display', 'none');
          } else if( $(this).prop('checked') == true ){
            $('.collectionneur9-1').css('display', 'none');
            $('.collectionneur10').css('display', cliche10collectionneur);
          }
        });


      //Décochage automatique
        $('.blocCliche input').change(function(){
          $('.blocCliche > div[style*="display: none"] input').prop('checked', false);
        });


        if( $('.clicheList').text().indexOf('01-03-100') >= 0 || $('.clicheList').text().indexOf('02-03-100') >= 0 || $('.clicheList').text().indexOf('03-03-100') >= 0 ){
          $('.soutien3').addClass('removeCliche');
          $('.combattant3').addClass('removeCliche');
          $('.collectionneur3').addClass('removeCliche');
        }
        $('.blocCliche input').change(function(){
          if( $('.clicheList').text().indexOf('01-03-100') >= 0 || $('.clicheList').text().indexOf('02-03-100') >= 0 || $('.clicheList').text().indexOf('03-03-100') >= 0 ){
            $('.soutien3').addClass('removeCliche');
            $('.combattant3').addClass('removeCliche');
            $('.collectionneur3').addClass('removeCliche');
          }
        });
  });


});
  //CLICHÉS DANS LE PANIER
      $('.buttonCliche').click(function(){
        if( $('.blocCliche input[type="checkbox"]').is(':checked') ) {
          if( $('#myCart').text().indexOf('Achat Cliché(s)') >= 0 ){
            $('.blocCliche .soutien input[type="checkbox"]:checked').each(function () {
              var clicheSoutien = $(this).val(),
                  clichePx = $(this).closest('label').find('span').text();
              if( $('#myCart').text().indexOf(clicheSoutien) >= 0 ){
                $('.panierCliche').append('');
              } else{
                $('.panierCliche').append(`<p>• J’achète le cliché <clrsoutien><b>` + clicheSoutien + `</b></clrsoutien> pour <clrbw><b>` + clichePx + ` px</b></clrbw>.</p>`);
              }
            });
            $('.blocCliche .combattant input[type="checkbox"]:checked').each(function () {
              var clicheCombat = $(this).val(),
                  clichePx = $(this).closest('label').find('span').text();
              if( $('#myCart').text().indexOf(clicheCombat) >= 0 ){
                $('.panierCliche').append('');
              } else{
                $('.panierCliche').append(`<p>• J’achète le cliché <clrcombat><b>` + clicheCombat + `</b></clrcombat> pour <clrbw><b>` + clichePx + ` px</b></clrbw>.</p>`);
              }
            });
            $('.blocCliche .collectionneur input[type="checkbox"]:checked').each(function () {
              var clicheCollec = $(this).val(),
                  clichePx = $(this).closest('label').find('span').text();
              if( $('#myCart').text().indexOf(clicheCollec) >= 0 ){
                $('.panierCliche').append('');
              } else{
                $('.panierCliche').append(`<p>• J’achète le cliché <clrcollec><b>` + clicheCollec + `</b></clrcollec> pour <clrbw><b>` + clichePx + ` px</b></clrbw>.</p>`);
              }
            });
          } else {
            var templateCliche = `<h4 class="titreCliche">Achat Cliché(s)</h4><div class="panierCliche"><span class="remove_cliche">x</span>`;
            $('.blocCliche .soutien input[type="checkbox"]:checked').each(function () {
              var clicheSoutien = $(this).val(),
                  clichePx = $(this).closest('label').find('span').text();
              templateCliche = templateCliche + `<p>• J’achète le cliché <clrsoutien><b>` + clicheSoutien + `</b></clrsoutien> pour <clrbw><b>` + clichePx + ` px</b></clrbw>.</p>`;
            });
            $('.blocCliche .combattant input[type="checkbox"]:checked').each(function () {
              var clicheCombat = $(this).val(),
                  clichePx = $(this).closest('label').find('span').text();
              templateCliche = templateCliche + `<p>• J’achète le cliché <clrcombat><b>` + clicheCombat + `</b></clrcombat> pour <clrbw><b>` + clichePx + ` px</b></clrbw>.</p>`;
            });
            $('.blocCliche .collectionneur input[type="checkbox"]:checked').each(function () {
              var clicheCollec = $(this).val(),
                  clichePx = $(this).closest('label').find('span').text();
              templateCliche = templateCliche + `<p>• J’achète le cliché <clrcollec><b>` + clicheCollec + `</b></clrcollec> pour <clrbw><b>` + clichePx + ` px</b></clrbw>.</p>`;
            });
              templateCliche = templateCliche + '</div>';
              $('#myCart').append(templateCliche);
              $('.remove_cliche').click(function(){
                $(this).parent().remove();
                $('.titreCliche').remove();
                generateCartButtons();
              });
          }
        } else if( $('.changeCliche input[type="checkbox"]').is(':checked') ){
            if( $('#myCart').text().indexOf('Changement de Cliché(s)') >= 0 ){
              var oldCliche = $('#changeClicheOld').val(),
                  newCliche = $('#changeClicheNew').val(),
                  prixCliche = $('#changeClichePrix').val();
              $('.panierChCliche').append(`<p>• Je change mon cliché ` + oldCliche + ` par le cliché  <clrbw>` + newCliche + `</clrbw> pour  <clrbw>` + prixCliche + ` px</clrbw>.</p>`);
            } else{
              var oldCliche = $('#changeClicheOld').val(),
                  newCliche = $('#changeClicheNew').val(),
                  prixCliche = $('#changeClichePrix').val();
              $('#myCart').append(`<h4 class="titreChCliche">Changement de Cliché(s)</h4><div class="panierChCliche"><span class="remove_chcliche">x</span><p>• Je change mon cliché ` + oldCliche + ` par le cliché  <clrbw>` + newCliche + `</clrbw> pour  <clrbw>` + prixCliche + ` px</clrbw>.</p></div>`);
              $('.remove_chcliche').click(function(){
                $(this).parent().remove();
                $('.titreChCliche').remove();
                generateCartButtons();
              });
            }
        } else {
          alert("Tu dois sélectionner au moins un cliché !");
        }
    generateCartButtons();
    });


$(function() {
  //NOUVELLES ACQUISITIONS
$('.newAcquisition').each(function(){
        if ( $('.clicheList').text().indexOf('01-01-50') >= 0 ){
          $('.newAcquisition').append('<div><label for="potion" class="soutien"><input type="checkbox" id="potion" name="potion" value="×1 Potion" /><div><img src="https://i.imgur.com/SZ4PHca.png"/> ×1 Potion</div></label></div>');
        }
        if ( $('.clicheList').text().indexOf('01-02.1-100') >= 0 ){
          $('.newAcquisition').append('<div><label for="totalsoin" class="soutien"><input type="checkbox" id="totalsoin" name="totalsoin" value="×2 Total-Soin" /><div><img src="https://i.imgur.com/kOlSyZl.png"/> ×2 Total-Soin</div></label></div>');
        }
        if ( $('.clicheList').text().indexOf('01-02.2-100') >= 0 ){
          $('.newAcquisition').append('<div><label for="jardinage" class="soutien"><input type="checkbox" id="jardinage" name="jardinage" value="×2 Baies Tier 1" /><div><img src="https://i.imgur.com/qaBZLtn.png"/> ×2 Baies Tier 1 <select id="jardinage1" style="display: none;"><option value="no-baie" selected>Aucune baie sélectionnée</option><option value="×1 Baie Abriko">×1 Baie Abriko</option><option value="×1 Baie Cherrim">×1 Baie Cherrim</option><option value="×1 Baie Jaboca">×1 Baie Jaboca</option><option value="×1 Baie Kika">×1 Baie Kika</option><option value="×1 Baie Lansat">×1 Baie Lansat</option><option value="×1 Baie Micle">×1 Baie Micle</option><option value="×1 Baie Oran">×1 Baie Oran</option><option value="×1 Baie Prine">×1 Baie Prine</option><option value="×1 Baie Sailak">×1 Baie Sailak</option><option value="×1 Baie Lichii">×1 Baie Lichii</option></select><select id="jardinage2" style="display: none;"><option value="no-baie" selected>Aucune baie sélectionnée</option><option value="×1 Baie Abriko">×1 Baie Abriko</option><option value="×1 Baie Cherrim">×1 Baie Cherrim</option><option value="×1 Baie Jaboca">×1 Baie Jaboca</option><option value="×1 Baie Kika">×1 Baie Kika</option><option value="×1 Baie Lansat">×1 Baie Lansat</option><option value="×1 Baie Micle">×1 Baie Micle</option><option value="×1 Baie Oran">×1 Baie Oran</option><option value="×1 Baie Prine">×1 Baie Prine</option><option value="×1 Baie Sailak">×1 Baie Sailak</option><option value="×1 Baie Lichii">×1 Baie Lichii</option></select></div></label></div>');
          $("input#jardinage").click(function(){ $("select#jardinage1").toggle(); });
          $("input#jardinage").click(function(){ $("select#jardinage2").toggle(); });
        }
        if ( $('.clicheList').text().indexOf('02-01-50') >= 0 ){
          $('.newAcquisition').append('<div><label for="vitamine" class="combattant"><input type="checkbox" id="vitamine" name="vitamine" value="×1 Vitamine" /><div><img src="https://i.servimg.com/u/f24/18/99/97/34/vitami10.png"/> ×1 Vitamine <select id="vitamine" style="display: none;"><option value="no-vitamine" selected>Aucune vitamine sélectionnée</option><option value="×1 Magnésium">×1 Magnésium (PV)</option><option value="×1 Protéine">×1 Protéine (ATK)</option><option value="×1 Fer">×1 Fer (DEF)</option><option value="×1 Calcium">×1 Calcium (S.ATK)</option><option value="×1 Zinc">×1 Zinc (S.DEF)</option><option value="×1 Carbone">×1 Carbone (VIT)</option></select></div></label></div>');
          $("input#vitamine").click(function(){ $("select#vitamine").toggle(); });
        }
        if ( $('.clicheList').text().indexOf('02-02.1-100') >= 0 ){
          $('.newAcquisition').append('<div><label for="ecaille" class="combattant"><input type="checkbox" id="ecaille" name="ecaille" value="×2 Écaille-cœur" /><div><img src="https://i.imgur.com/B1MRDAY.png"/> ×2 Écaille-cœur</div></label></div>');
        }
        if ( $('.clicheList').text().indexOf('03-01-50') >= 0 ){
          $('.newAcquisition').append('<div><label for="pokeball" class="collectionneur"><input type="checkbox" id="pokeball" name="pokeball" value="×3 Pokéball" /><div><img src="https://i.imgur.com/wAPvUFv.png"/> ×3 Pokéball</div></label></div>');
        }
        if ( $('.clicheList').text().indexOf('03-02.2-75') >= 0 ){
          $('.newAcquisition').append('<div><label for="objevo" class="collectionneur"><input type="checkbox" id="objevo" name="objevo" value="×1 Objet Évolutif" /><div><img src="https://i.imgur.com/UviWNBu.png"/> ×1 Objet Évolutif <select id="objevo" style="display: none;"><option value="no-objet" selected>Aucun objet sélectionné</option><option value="×1 Grelot Zen">×1 Grelot Zen</option><option value="×1 Pierre Aube">×1 Pierre Aube</option><option value="×1 Pierre Eau">×1 Pierre Eau</option><option value="×1 Pierre Éclat">×1 Pierre Éclat</option><option value="×1 Pierre Feu">×1 Pierre Feu</option><option value="×1 Pierre Foudre">×1 Pierre Foudre</option><option value="×1 Pierre Glace">×1 Pierre Glace</option><option value="×1 Pierre Lune">×1 Pierre Lune</option><option value="×1 Pierre  Nuit">×1 Pierre  Nuit</option><option value="×1 Pierre Plante">×1 Pierre Plante</option><option value="×1 Pierre Soleil">×1 Pierre Soleil</option><option value="×1 Pointeau ADN">×1 Pointeau ADN</option></select></div></label></div>');
          $("input#objevo").click(function(){ $("select#objevo").toggle(); });
        }
        if ( $('.clicheList').text().indexOf('03-10-1000') >= 0 ){
          $('.newAcquisition').append('<div><label for="masterball" class="collectionneur"><input type="checkbox" id="masterball" name="masterball" value="×2 Masterball" /><div><img src="https://i.imgur.com/3ENnXUf.png"/> ×2 Masterball</div></label></div>');
        }
        if ( $('.clicheList').text().indexOf('01-09.1-475') >= 0 ){
          $('.newAcquisition').append('<div><label for="recolte" class="soutien"><input type="checkbox" id="recolte" name="recolte" value="×2 Ingrédients Tier 3" /><div><img src="https://i.imgur.com/rGYFdqb.png"/> ×2 Ingrédients Tier 3 <select id="recolte1" style="display: none;"><option value="no-recolte" selected>Aucun ingrédient sélectionné</option><option value="×1 Crème fraîche">×1 Crème fraîche</option><option value="×1 Curry instantané">×1 Curry instantané</option><option value="×1 Lait de coco">×1 Lait de coco</option><option value="×1 Os à moelle">×1 Os à moelle</option><option value="×1 Tubercule">×1 Tubercule</option></select><select id="recolte2" style="display: none;"><option value="no-recolte" selected>Aucun ingrédient sélectionné</option><option value="×1 Crème fraîche">×1 Crème fraîche</option><option value="×1 Curry instantané">×1 Curry instantané</option><option value="×1 Lait de coco">×1 Lait de coco</option><option value="×1 Os à moelle">×1 Os à moelle</option><option value="×1 Tubercule">×1 Tubercule</option></select></div></label></div>');
          $("input#recolte").click(function(){ $("select#recolte1").toggle(); });
          $("input#recolte").click(function(){ $("select#recolte2").toggle(); });
        }
        if ( $('.clicheList').text().indexOf('01-09.2-525') >= 0 ){
          $('.newAcquisition').append(`<div><label for="cr" class="soutien"><input type="checkbox" id="cr" name="cr" value="×1 CR" /><div><img src="https://i.imgur.com/LzZJZSA.png"/> ×1 CR <div id="champCR" style="display: none;"><input id="nameCR" placeholder="Nom de la CR choisie"></div></div></label></div>`);
        }


        $('.newAcquisition').append(`<div><label for="autreAcquisition" class="autre"><input type="checkbox" id="autreAcquisition" name="autreAcquisition" value="Autre Acquisition" /><div><img src="https://i.imgur.com/4JmOkQZ.png"/> Autre acquisition <div id="champsAcqui" style="display: none;"><input id="nameAcqui" placeholder="Nom de l'objet acquis"><input id="linkAcqui" placeholder="Lien vers l'acquisition (page event, etc.)"></div></div></label></div>`);
        $("input#autreAcquisition").click(function(){ $("#champsAcqui").toggle(); });
        $("input#cr").click(function(){ $("#champCR").toggle(); });
});
});


  //PANIER ACQUISITION
    $('.buttonAcquisition').click(function(){
      if( $('#myCart').text().indexOf('Nouvelle(s) Acquisition(s)') >= 0 ){
        var templateAcquisition = '';
        $('.newAcquisition input#potion[type="checkbox"]:checked').each(function () {
          var monItem = $(this).val();
          if($('#myCart').text().indexOf(monItem) >= 0 ){
            $('.panierAcqui').append('');
          } else{
            $('.panierAcqui').append(`<p>• Je prépare <clrsoutien><b>` + monItem + `</b></clrsoutien>.</p>`);
          }
        });
        $('.newAcquisition input#totalsoin[type="checkbox"]:checked').each(function () {
          var monItem = $(this).val();
          if($('#myCart').text().indexOf(monItem) >= 0 ){
            $('.panierAcqui').append('');
          } else{
            $('.panierAcqui').append(`<p>• Je concocte <clrsoutien><b>` + monItem + `</b></clrsoutien>.</p>`);
          }
        });
        $('.newAcquisition input#jardinage[type="checkbox"]:checked').each(function () {
          var choixBaie1 = $('select#jardinage1 option:selected').val();
          var choixBaie2 = $('select#jardinage2 option:selected').val();
          if($('#myCart').text().indexOf('cultivé') >= 0){
            $('.panierAcqui').append('');
          } else{
            $('.panierAcqui').append(`<p>• J'ai cultivé <clrsoutien><b>` + choixBaie1 + `</b></clrsoutien> et <clrsoutien><b>` + choixBaie2 + `</b></clrsoutien>.</p>`);
          }
        });
        $('.newAcquisition input#vitamine[type="checkbox"]:checked').each(function () {
          var choixVitamine = $('select#vitamine option:selected').val();
          if($('#myCart').text().indexOf('crée') >= 0){
            $('.panierAcqui').append('');
          } else{
            $('.panierAcqui').append(`<p>• Je crée <clrcombat><b>` + choixVitamine + `</b></clrcombat>.</p>`);
          }
        });
        $('.newAcquisition input#ecaille[type="checkbox"]:checked').each(function () {
          var monItem = $(this).val();
          if($('#myCart').text().indexOf(monItem) >= 0 ){
            $('.panierAcqui').append('');
          } else{
            $('.panierAcqui').append(`<p>• J'ai trouvé <clrcombat><b>` + monItem + `</b></clrcombat>.</p>`);
          }
        });
        $('.newAcquisition input#pokeball[type="checkbox"]:checked').each(function () {
          var monItem = $(this).val();
          if($('#myCart').text().indexOf(monItem) >= 0 ){
            $('.panierAcqui').append('');
          } else{
            $('.panierAcqui').append(`<p>• Je fabrique <clrcollec><b>` + monItem + `</b></clrcollec>.</p>`);
          }
        });
        $('.newAcquisition input#objevo[type="checkbox"]:checked').each(function () {
          var choixObjet = $('select#objevo option:selected').val();
          if($('#myCart').text().indexOf('crafte') >= 0){
            $('.panierAcqui').append('');
          } else{
            $('.panierAcqui').append(`<p>• Je crafte <clrcollec><b>` + choixObjet + `</b></clrcollec>.</p>`);
          }
        });
        $('.newAcquisition input#masterball[type="checkbox"]:checked').each(function () {
          var monItem = $(this).val();
          if($('#myCart').text().indexOf(monItem) >= 0 ){
            $('.panierAcqui').append('');
          } else{
            $('.panierAcqui').append(`<p>• Je fabrique <clrcollec><b>` + monItem + `</b></clrcollec>.</p>`);
          }
        });
        $('.newAcquisition input#recolte[type="checkbox"]:checked').each(function () {
          var choixIng1 = $('select#recolte1 option:selected').val();
          var choixIng2 = $('select#recolte2 option:selected').val();
          if($('#myCart').text().indexOf('récolté') >= 0){
            $('.panierAcqui').append('');
          } else{
            $('.panierAcqui').append(`<p>• J'ai récolté <clrsoutien><b>` + choixIng1 + `</b></clrsoutien> et <clrsoutien><b>` + choixIng2 + `</b></clrsoutien>.</p>`);
          }
        });
        $('.newAcquisition input#cr[type="checkbox"]:checked').each(function () {
          var choixCR = $('input#nameCR').val();
          if($('#myCart').text().indexOf(choixCR) >= 0 ){
            $('.panierAcqui').append('');
          } else{
            $('.panierAcqui').append(`<p>• Je fabrique <clrsoutien><b>×1 CR ` + choixCR + `</b></clrsoutien>.</p>`);
          }
        });


        $('.newAcquisition input#autreAcquisition[type="checkbox"]:checked').each(function () {
          var nameAcqui = $('input#nameAcqui').val(),
              linkAcqui = $('input#linkAcqui').val();
          $('.panierAcqui').append(`<p>• J'ai obtenu <b>` + nameAcqui + `</b> à cet endroit : <clrbw><a href="` + linkAcqui + `">www</a></clrbw>.</p>`);
        });


      } else{
        var templateAcquisition = `<h4 class="titreAcqui">Nouvelle(s) Acquisition(s)</h4><div class="panierAcqui"><span class="remove_acqui">x</span>`;
        $('.newAcquisition input#potion[type="checkbox"]:checked').each(function () {
          templateAcquisition = templateAcquisition + `<p>• Je prépare <clrsoutien><b>` + $(this).val() + `</b></clrsoutien>.</p>`;
        });
        $('.newAcquisition input#totalsoin[type="checkbox"]:checked').each(function () {
          templateAcquisition = templateAcquisition + `<p>• Je concocte <clrsoutien><b>` + $(this).val() + `</b></clrsoutien>.</p>`;
        });
        $('.newAcquisition input#jardinage[type="checkbox"]:checked').each(function () {
          var choixBaie1 = $('select#jardinage1 option:selected').val();
          var choixBaie2 = $('select#jardinage2 option:selected').val();
          templateAcquisition = templateAcquisition + `<p>• J'ai cultivé <clrsoutien><b>` + choixBaie1 + `</b></clrsoutien> et <clrsoutien><b>` + choixBaie2 + `</b></clrsoutien>.</p>`;
        });
        $('.newAcquisition input#vitamine[type="checkbox"]:checked').each(function () {
          var choixVitamine = $('select#vitamine option:selected').val();
          templateAcquisition = templateAcquisition + `<p>• Je crée <clrcombat><b>` + choixVitamine + `</b></clrcombat>.</p>`;
        });
        $('.newAcquisition input#ecaille[type="checkbox"]:checked').each(function () {
          templateAcquisition = templateAcquisition + `<p>• J'ai trouvé <clrcombat><b>` + $(this).val() + `</b></clrcombat>.</p>`;
        });
        $('.newAcquisition input#pokeball[type="checkbox"]:checked').each(function () {
          templateAcquisition = templateAcquisition + `<p>• Je fabrique <clrcollec><b>` + $(this).val() + `</b></clrcollec>.</p>`;
        });
        $('.newAcquisition input#objevo[type="checkbox"]:checked').each(function () {
          var choixObjet = $('select#objevo option:selected').val();
          templateAcquisition = templateAcquisition + `<p>• Je crafte <clrcollec><b>` + choixObjet + `</b></clrcollec>.</p>`;
        });
        $('.newAcquisition input#masterball[type="checkbox"]:checked').each(function () {
          templateAcquisition = templateAcquisition + `<p>• Je fabrique <clrcollec><b>` + $(this).val() + `</b></clrcollec>.</p>`;
        });
        $('.newAcquisition input#recolte[type="checkbox"]:checked').each(function () {
          var choixIng1 = $('select#recolte1 option:selected').val();
          var choixIng2 = $('select#recolte2 option:selected').val();
          templateAcquisition = templateAcquisition + `<p>• J'ai récolté <clrsoutien><b>` + choixIng1 + `</b></clrsoutien> et <clrsoutien><b>` + choixIng2 + `</b></clrsoutien>.</p>`;
        });
        $('.newAcquisition input#cr[type="checkbox"]:checked').each(function () {
          var choixCR = $('input#nameCR').val();
          templateAcquisition = templateAcquisition + `<p>• Je fabrique <clrsoutien><b>×1 CR ` + choixCR + `</b></clrsoutien>.</p>`;
        });
        $('.newAcquisition input#autreAcquisition[type="checkbox"]:checked').each(function () {
          var nameAcqui = $('input#nameAcqui').val(),
              linkAcqui = $('input#linkAcqui').val();
          templateAcquisition = templateAcquisition + `<p>• J'ai obtenu <b>` + nameAcqui + `</b> à cet endroit : <clrbw><a href="` + linkAcqui + `">www</a></clrbw>.</p>`;
        });
      }


        if( $('.newAcquisition input[type="checkbox"]').is(':checked') ) {
          if( $('.newAcquisition input#jardinage[type="checkbox"]').is(':checked') && ( $('select#jardinage1 option:selected').val() == 'no-baie' || $('select#jardinage2 option:selected').val() == 'no-baie') ) {
            alert("Sélectionne les baies qui ont poussé dans ton jardin.");
          } else if( $('.newAcquisition input#vitamine[type="checkbox"]').is(':checked') && ( $('select#vitamine option:selected').val() == 'no-vitamine') ){
            alert("Sélectionne la vitamine que tu veux créer !");
          } else if( $('.newAcquisition input#objevo[type="checkbox"]').is(':checked') && ( $('select#objevo option:selected').val() == 'no-objet') ){
            alert("Sélectionne l'objet évolutif que tu veux créer !");
          } else if( $('.newAcquisition input#recolte[type="checkbox"]').is(':checked') && ( $('select#recolte1 option:selected').val() == 'no-recolte' || $('select#recolte2 option:selected').val() == 'no-recolte') ) {
            alert("Sélectionne les ingrédients que tu veux créer.");
          } else if( $('.newAcquisition input#cr[type="checkbox"]').is(':checked') && ( $('input#nameCR').val() == '') ){
            alert("Le nom de ta CR doit être rempli.");
          } else if( $('.newAcquisition input#autreAcquisition[type="checkbox"]').is(':checked') && ( $('input#nameAcqui').val() == '' || $('input#linkAcqui').val() == '') ){
            alert("Les champs de ta nouvelle acquisition doivent être remplis.");
          } else {
            templateAcquisition = templateAcquisition + '</div>';
            $('#myCart').append(templateAcquisition);
          }
        } else {
          alert("Tu dois cocher au moins une acquisition !");
        }


        //Retirer les acquisitions du panier
        $('.remove_acqui').click(function(){
          $(this).parent().remove();
          $('.titreAcqui').remove();
          generateCartButtons();
        });
    generateCartButtons();
    });


  //CLICHÉ CUISINE
  $('.recetteCuisine select').change(function(){
    //Baie Myrte que dans un rang Dracaufeu
    if( $('.recetteCuisine select#ingredient1 option:selected').hasClass('t5') ){
      $('#ingredient2 .t1, #ingredient2 .t2, #ingredient2 .t3').css('display', 'none');
      $('#ingredient3 .t1, #ingredient3 .t2, #ingredient3 .t3').css('display', 'none');
    } else if( $('.recetteCuisine select#ingredient2 option:selected').hasClass('t5') ){
      $('#ingredient1 .t1, #ingredient1 .t2, #ingredient1 .t3').css('display', 'none');
      $('#ingredient3 .t1, #ingredient3 .t2, #ingredient3 .t3').css('display', 'none');
    } else if( $('.recetteCuisine select#ingredient3 option:selected').hasClass('t5') ){
      $('#ingredient1 .t1, #ingredient1 .t2, #ingredient1 .t3').css('display', 'none');
      $('#ingredient2 .t1, #ingredient2 .t2, #ingredient2 .t3').css('display', 'none');
    } else if( $('.recetteCuisine select option:selected').not('.t5') ) { 
      $('#ingredient1 option, #ingredient2 option, #ingredient3 option').css('display', 'block');
    }


    //1 seule baie par recette
    /*if($('.recetteCuisine select#ingredient1 option:selected').hasClass('baie') ){
      $('#ingredient2 .baie, #ingredient3 .baie').css('display', 'none');
    } else if($('.recetteCuisine select#ingredient2 option:selected').hasClass('baie') ){
      $('#ingredient1 .baie, #ingredient3 .baie').css('display', 'none');
    } else if($('.recetteCuisine select#ingredient3 option:selected').hasClass('baie') ){
      $('#ingredient1 .baie, #ingredient2 .baie').css('display', 'none');
    } else if( $('.recetteCuisine select option:selected').not('.baie') ) { 
      $('#ingredient1 .baie, #ingredient2 .baie, #ingredient3 .baie').css('display', 'block');
    }*/


    //Cacher la baie Myrte si l'ingrédient est pas t4
    if( $('.recetteCuisine select#ingredient1 option:selected').hasClass('t1') || $('.recetteCuisine select#ingredient1 option:selected').hasClass('t2') || $('.recetteCuisine select#ingredient1 option:selected').hasClass('t3') ){
      $('#ingredient2 .t5, #ingredient3 .t5').css('display', 'none');
    } else if( $('.recetteCuisine select#ingredient2 option:selected').hasClass('t1') || $('.recetteCuisine select#ingredient2 option:selected').hasClass('t2') || $('.recetteCuisine select#ingredient2 option:selected').hasClass('t3') ){
      $('#ingredient1 .t5, #ingredient3 .t5').css('display', 'none');
    } else if( $('.recetteCuisine select#ingredient3 option:selected').hasClass('t1') || $('.recetteCuisine select#ingredient3 option:selected').hasClass('t2') || $('.recetteCuisine select#ingredient3 option:selected').hasClass('t3') ){
      $('#ingredient1 .t5, #ingredient2 .t5').css('display', 'none');
    }


    //Calcul du rang et des gains
    var calculTier = 0,
        gainChoix1 = '</br></br><input type="radio" id="cuisineExp" name="gainChoix" value="15"><label for="cuisineExp">15 Exp</label></br></br><input type="radio" id="cuisineP" name="gainChoix" value="150"><label for="cuisineP">150 p$</label>',
        gainChoix2 = '</br></br><input type="radio" id="cuisineExp" name="gainChoix" value="25"><label for="cuisineExp">25 Exp</label></br></br><input type="radio" id="cuisineP" name="gainChoix" value="250"><label for="cuisineP">250 p$</label>',
        gainChoix3 = '</br></br><input type="radio" id="cuisineExp" name="gainChoix" value="35"><label for="cuisineExp">35 Exp</label></br></br><input type="radio" id="cuisineP" name="gainChoix" value="350"><label for="cuisineP">350 p$</label>',
        gainChoix4 = '</br></br><input type="radio" id="cuisineExp" name="gainChoix" value="50"><label for="cuisineExp">50 Exp</label></br></br><input type="radio" id="cuisineP" name="gainChoix" value="500"><label for="cuisineP">500 p$</label>',
        gainChoix5 = '</br></br><input type="radio" id="cuisineExp" name="gainChoix" value="100"><label for="cuisineExp">100 Exp</label></br></br><input type="radio" id="cuisineP" name="gainChoix" value="1000"><label for="cuisineP">1000 p$</label>';


    $('.recetteCuisine select option').each(function(i){
      $('.recetteCuisine select option.t' + i + ':selected').each(function () {
        calculTier = calculTier + i;
      });
    });


    if(calculTier == 13){
      $('.tierRecette').html("<span>Rang Dracaufeu (<span id='lvlRecette'>niveau " + calculTier + "</span>)</span>" + gainChoix5);
    } else if(calculTier == 12){
      $('.tierRecette').html("<span>Rang Pachyradjah (<span id='lvlRecette'>niveau " + calculTier + "</span>)</span>" + gainChoix4);
    } else if(calculTier == 9 || calculTier == 10 || calculTier == 11){
      $('.tierRecette').html("<span>Rang Crèmy (<span id='lvlRecette'>niveau " + calculTier + "</span>)</span>" + gainChoix3);
    } else if(calculTier == 6 || calculTier == 7 || calculTier == 8){
      $('.tierRecette').html("<span>Rang Qulbutoké (<span id='lvlRecette'>niveau " + calculTier + "</span>)</span>" + gainChoix2);
    } else if(calculTier == 3 || calculTier == 4 || calculTier == 5){
      $('.tierRecette').html("<span>Rang Smogo (<span id='lvlRecette'>niveau " + calculTier + "</span>)</span>" + gainChoix1);
    }
    $('.recetteCuisine select option.nothing:selected').each(function () {
      $('.tierRecette').html("Rang : Sélectionne 3 ingrédients !");
    });
  });
  
  //Panier Recettes
function btnCuisine(){
      var ingredient1 = $('select#ingredient1 option:selected').val(),
          ingredient2 = $('select#ingredient2 option:selected').val(),
          ingredient3 = $('select#ingredient3 option:selected').val(),
          cuisinePokemonrecup = '<li>' + $('#cuisinePokemon').val() + '</li>',
          cuisinePokemon = cuisinePokemonrecup.replace(/\n/g, '</li><li>'),
          cuisineRang = $('.tierRecette #lvlRecette').html(),
          cuisineGain = $('input[name="gainChoix"]:checked').val();
      var myGain = parseInt($('.gainTotal').text()) + parseInt(cuisineGain);


      if(ingredient1 == "nothing" || ingredient2 == "nothing" || ingredient3 == "nothing"){
        alert("Tu dois ajouter 3 ingrédients !");
      } else if(cuisineGain == undefined){
        alert("Choisis le gain (exp ou p$ selon le cliché possédé) !");
      }


      //Contrôle pour pas mélanger exp et p$
      else if( $('recette .cuisineDisplay').text().indexOf('Exp') >= 0 && $('#cuisineP').is(':checked') ){
        alert(`Toutes les recettes doivent avoir le même gain : Exp ou p$ !`);
      } else if( $('recette .cuisineDisplay').text().indexOf('p$') >= 0 && $('#cuisineExp').is(':checked') ){
        alert(`Toutes les recettes doivent avoir le même gain : Exp ou p$ !`);
      }


      //Contrôle pour ne pas dépasser 50 exp ou 500 p$
      else if( ($('#cuisineExp').is(':checked') && cuisineRang != "niveau 13" && myGain > 50) || ($('#cuisineExp').is(':checked') && $('recette').text().indexOf('niveau 13') >= 0 && myGain > 50) || ($('#cuisineExp').is(':checked') && cuisineRang == "niveau 13" && $('recette').text().indexOf('Mes recettes') >= 0) ){
        alert('Tu ne peux pas dépasser 50 Exp par mois, hors recette de rang Dracaufeu (limitée à 1 par mois) !');
      } else if( ($('#cuisineP').is(':checked') && cuisineRang != "niveau 13" && myGain > 500) || ($('#cuisineP').is(':checked') && $('recette').text().indexOf('niveau 13') >= 0 && myGain > 500) || ($('#cuisineP').is(':checked') && cuisineRang == "niveau 13" && $('recette').text().indexOf('Mes recettes') >= 0) ){
        alert('Tu ne peux pas dépasser 500 p$ par mois, hors recette de rang Dracaufeu (limitée à 1 par mois) !');
      }


      else if( $('#myCart').text().indexOf('Mes recettes') >= 0 ){
        if( $('#cuisineP').is(':checked') ){
          $('recette').append('<div class="panierCuisine"><span class="remove_recette" onClick="removeCuisine(this)">x</span><p class="recette_title">Recette de ' + cuisineRang + ' (gain de <span class="gainmaxp"><clrbw><b><gain>' + cuisineGain + '</gain> p$</b></clrbw></span>)</p><p>Je mélange <clrsoutien>' + ingredient1 + '</clrsoutien>, <clrsoutien>' + ingredient2 + '</clrsoutien> et <clrsoutien>' + ingredient3 + '</clrsoutien>.</p></div>');
          gainTotal = parseInt( $('.gainTotal').text() ) + parseInt(cuisineGain);
          $('.gainTotal').html(gainTotal);
        } else {
          $('.distributionExp').before('<div class="panierCuisine"><span class="remove_recette" onClick="removeCuisine(this)">x</span><p class="recette_title">Recette de ' + cuisineRang + ' (gain de <span class="gainmaxp"><clrbw><b><gain>' + cuisineGain + '</gain> Exp</b></clrbw></span>)</p><p>Je mélange <clrsoutien>' + ingredient1 + '</clrsoutien>, <clrsoutien>' + ingredient2 + '</clrsoutien> et <clrsoutien>' + ingredient3 + '</clrsoutien>.</p></div>');
          gainTotal = parseInt( $('.gainTotal').text() ) + parseInt(cuisineGain);
          $('.gainTotal').html(gainTotal);
        }
      } else {
          if( $('#cuisineP').is(':checked') ){
            gainTotal = cuisineGain;
          $('#myCart').append('<recette><h4 class="titreCuisine">Mes recettes</h4><div class="cuisineDisplay">Je gagne au total <clrbw><span class="gainTotal">' + gainTotal + '</span> p$</clrbw>.</div><div class="panierCuisine"><span class="remove_recette" onClick="removeCuisine(this)">x</span><p class="recette_title">Recette de ' + cuisineRang + ' (gain de <span class="gainmaxp"><clrbw><b><gain>' + cuisineGain + '</gain> p$</b></clrbw></span>)</p><p>Je mélange <clrsoutien>' + ingredient1 + '</clrsoutien>, <clrsoutien>' + ingredient2 + '</clrsoutien> et <clrsoutien>' + ingredient3 + '</clrsoutien>.</p></div></recette>');
        } else {
          gainTotal = cuisineGain;
          $('#myCart').append('<recette><h4 class="titreCuisine">Mes recettes</h4><div class="cuisineDisplay">Je gagne au total <clrbw><span class="gainTotal">' + gainTotal + '</span> Exp</clrbw>.</div><div class="panierCuisine"><span class="remove_recette" onClick="removeCuisine(this)">x</span><p class="recette_title">Recette de ' + cuisineRang + ' (gain de <span class="gainmaxp"><clrbw><b><gain>' + cuisineGain + '</gain> Exp</b></clrbw></span>)</p><p>Je mélange <clrsoutien>' + ingredient1 + '</clrsoutien>, <clrsoutien>' + ingredient2 + '</clrsoutien> et <clrsoutien>' + ingredient3 + '</clrsoutien>.</p></div><div class="cuisineDisplay distributionExp">Je donne mes recettes à ce(s) pokémon(s) : <br/><textarea id="cuisinePokemon" placeholder="Espèce lvl 15 (0/10) → lvl 16 (5/10)"></textarea></div></recette>');
        }
      }
generateCartButtons();
}


//Retirer la recette du panier
function removeCuisine(recetteremove){
  var nbRecette = $('.panierCuisine').length;
    if( nbRecette > 0){
      $(recetteremove).parent().remove();
      var item = $(recetteremove).parent().find('gain').text();
      var newgain = $('.gainTotal').text();
      $('.gainTotal').html(newgain - item);
    }
    var nbRecette2 = $('.panierCuisine').length;
    if(nbRecette2 == 0){
      $('recette').remove();
      generateCartButtons();
    }
}




//PRIMES DE RECHERCHE


$(document).ready(function() {
var primes = [
    {
      id: 0,
      niveau: "1",
      numero: "01",
      description: "Capturer un Pokémon sur un dé compris entre 1 et 5 inclus.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 1,
      niveau: "1",
      numero: "02",
      description: "Capturer un Pokémon d'expédition.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 2,
      niveau: "1",
      numero: "03",
      description: "Capturer un Pokémon de type Eau ailleurs qu’à Kopadia.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 3,
      niveau: "1",
      numero: "04",
      description: "Capturer un Pokémon à son premier stade d’évolution (forme de base > premier stade > évolution finale ; il s’agit de l’ « évolution du milieu »).",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 4,
      niveau: "1",
      numero: "05",
      description: "Capturer un Pokémon de double type Vol - Normal.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 5,
      niveau: "1",
      numero: "06",
      description: "Capturer un Pokémon avec une Superball.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 6,
      niveau: "1",
      numero: "07",
      description: "Capturer un Pokémon de type Spectre apparu en 9e génération.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 7,
      niveau: "1",
      numero: "08",
      description: "Capturer un Pokémon avec taux de capture de 190 ou 200 selon Poképédia.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 8,
      niveau: "1",
      numero: "09",
      description: "Capturer un Pokémon dont un des talents est apparu en 4e génération.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 9,
      niveau: "1",
      numero: "10",
      description: "Capturer un Pokémon incapable d’apprendre la CT Abri à son stade d’évolution actuel.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 10,
      niveau: "1",
      numero: "11",
      description: "Capturer un Pokémon appartenant au groupe d’œufs Amorphe.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 11,
      niveau: "1",
      numero: "12",
      description: "Capturer un Pokémon dont la couleur principale selon Poképédia est le gris.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 12,
      niveau: "1",
      numero: "13",
      description: "Capturer un Pokémon présentant un dimorphisme sexuel.",
      gain: "[100 p$ / 10 EXP]"
    },
{
      id: 13,
      niveau: "1",
      numero: "14",
      description: "Capturer un Pokémon dont le nom de “catégorie” contient le mot « oiseau ».",
      gain: "[100 p$ / 10 EXP]"
    },
 {
      id: 14,
      niveau: "2",
      numero: "01",
      description: "Capturer un Pokémon évoluant avec une Pierre Foudre.",
      gain: "[200 p$ / 20 EXP]"
    },
 {
      id: 15,
      niveau: "2",
      numero: "02",
      description: "Capturer un Pokémon au niveau 13.",
      gain: "[200 p$ / 20 EXP]"
    },
 {
      id: 16,
      niveau: "2",
      numero: "03",
      description: "Capturer un Pokémon capable d’apprendre la capacité Estocorne, que ce soit par niveau ou par CT.",
      gain: "[200 p$ / 20 EXP]"
    },
 {
      id: 17,
      niveau: "2",
      numero: "04",
      description: "Capturer un Pokémon Starter d’une des 9 générations à son premier stade d'évolution (forme de base > premier stade > évolution finale ; il s’agit de l’évolution du milieu).",
      gain: "[200 p$ / 20 EXP]"
    },
 {
      id: 18,
      niveau: "2",
      numero: "05",
      description: "Capturer un Pokémon dont l'espèce est uniquement femelle.",
      gain: "[200 p$ / 20 EXP]"
    },
 {
      id: 19,
      niveau: "2",
      numero: "06",
      description: "Capturer un Pokémon avec un double-type dont l’un des types est faible à l’autre.",
      gain: "[200 p$ / 20 EXP]"
    },
 {
      id: 20,
      niveau: "2",
      numero: "07",
      description: "Capturer un Pokémon qui possède au moins deux formes différentes non régionales, et qui ne résultent pas d’un dimorphisme sexuel.",
      gain: "[200 p$ / 20 EXP]"
    },
 {
      id: 21,
      niveau: "2",
      numero: "08",
      description: "Capturer un Pokémon de moins de 20 cm.",
      gain: "[200 p$ / 20 EXP]"
    },
 {
      id: 22,
      niveau: "2",
      numero: "09",
      description: "Capturer un Pokémon avec un double-type et qui a au maximum une seule faiblesse, en comptant un éventuel talent immunisant.",
      gain: "[200 p$ / 20 EXP]"
    },
 {
      id: 23,
      niveau: "3",
      numero: "01",
      description: "Capturer un Pokémon possédant Méga-Sangsue dans son movepool (autrement dit, la capacité fait partie de ses possibilités d'apprentissage, même s'il ne la connaît pas).",
      gain: "[300 p$ / 30 EXP]"
    },
 {
      id: 24,
      niveau: "3",
      numero: "02",
      description: "Capturer un Pokémon pouvant apprendre Requiem.",
      gain: "[300 p$ / 30 EXP]"
    },
 {
      id: 25,
      niveau: "3",
      numero: "03",
      description: "Capturer un Pokémon qui serait rouge ou violet et que l’on retrouverait essentiellement dans les milieux urbains, selon Poképédia.",
      gain: "[300 p$ / 30 EXP]"
    },
 {
      id: 26,
      niveau: "3",
      numero: "04",
      description: "Capturer un Pokémon à son dernier stade d’évolution et pouvant méga-évoluer.",
      gain: "[300 p$ / 30 EXP]"
    },
 {
      id: 27,
      niveau: "3",
      numero: "05",
      description: "Capturer un Pokémon qui ne peut se trouver que dans une seule zone sur le forum.",
      gain: "[300 p$ / 30 EXP]"
    },
 {
      id: 28,
      niveau: "3",
      numero: "06",
      description: "Capturer un Pokémon dont l’habitat est un “milieu hostile” selon Poképédia, et qui a déjà évolué au moins une fois.",
      gain: "[300 p$ / 30 EXP]"
    },
  {
      id: 29,
      niveau: "4",
      numero: "01",
      description: "Capturer un Pokémon de niveau 1.",
      gain: "[400 p$ / 40 EXP]"
    },
 {
      id: 30,
      niveau: "4",
      numero: "02",
      description: "Capturer un Pokémon ayant attaqué le joueur 3 fois d'affilée avant capture.",
      gain: "[400 p$ / 40 EXP]"
    },
 {
      id: 31,
      niveau: "4",
      numero: "03",
      description: "Capturer un Pokémon de plus de 4 m.",
      gain: "[400 p$ / 40 EXP]"
    },
 {
      id: 32,
      niveau: "4",
      numero: "04",
      description: "Capturer un Pokémon dont la somme des statistiques de base est supérieure à 535 selon Poképédia.",
      gain: "[400 p$ / 40 EXP]"
    },
 {
      id: 33,
      niveau: "4",
      numero: "05",
      description: "Capturer un Pokémon possédant plus (+) de 6 faiblesses selon Poképédia.",
      gain: "[400 p$ / 40 EXP]"
    },
 {
      id: 34,
      niveau: "4",
      numero: "06",
      description: "Capturer un Pokémon possédant au moins 4 talents selon Poképédia.",
      gain: "[400 p$ / 40 EXP]"
    },
 {
      id: 35,
      niveau: "4",
      numero: "07",
      description: "Capturer un Pokémon qui pèse au moins 400 kg.",
      gain: "[400 p$ / 40 EXP]"
    },
 {
      id: 36,
      niveau: "5",
      numero: "01",
      description: "Capturer un Pokémon introuvable en dessous de la zone 4.",
      gain: "[500 p$ / 50 EXP]"
    },
 {
      id: 37,
      niveau: "5",
      numero: "02",
      description: "Capturer un Pokémon en 4 lancers exactement.",
      gain: "[500 p$ / 50 EXP]"
    },
 {
      id: 38,
      niveau: "5",
      numero: "03",
      description: "Capturer un Pokémon de type Eau OU Feu OU Plante chromatique.",
      gain: "[500 p$ / 50 EXP]"
    },
 {
      id: 39,
      niveau: "5",
      numero: "04",
      description: "Capturer un Pokémon pouvant à la fois posséder le talent Heavy Metal et Light Metal.",
      gain: "[500 p$ / 50 EXP]"
    },
 {
      id: 40,
      niveau: "5",
      numero: "05",
      description: "Capturer un Pokémon “de justesse”, c’est-à-dire sur un dé à la limite du taux de capture (exemple, sur un 15 en Zone verte avec une pokéball).",
      gain: "[500 p$ / 50 EXP]"
    }];


  DisplayProductList(primes);
});


function DisplayProductList(prime) {
  var template = "";
  prime.forEach(function(item) {
    template += '<div class="product productshow1 niveau' + item.niveau + '"><span class="item_name"><span class="defi_num">Niveau ' + item.niveau + '</span> - ' + item.numero + '</span><div class="item_cate">Gain : <span class="gain">Exp ou p$ ?</span></div><div class="item_bottom"><p class="item_desc">' + item.description + '</p><input type="text" placeholder="Espèce et niveau du pokémon capturé" class="pokemonPrime"><input type="url" placeholder="Lien vers la capture" class="urlRp"><a class="buttonPrime btn_add" onClick="btnPrime(this)"><div class="btn_hover"></div><div class="btn_text">Ajouter la prime au panier</div></a></div></div></div>';
  });
  $('.primeGain input').change(function(){
      if( $('#primeP').prop('checked') == true ){
        $('.niveau1').each(function(){
          $('.niveau1 span.gain').html('<span>100</span> p$');
        });
        $('.niveau2').each(function(){
          $('.niveau2 span.gain').html('<span>200</span> p$');
        });
        $('.niveau3').each(function(){
          $('.niveau3 span.gain').html('<span>300</span> p$');
        });
        $('.niveau4').each(function(){
          $('.niveau4 span.gain').html('<span>400</span> p$');
        });
        $('.niveau5').each(function(){
          $('.niveau5 span.gain').html('<span>500</span> p$');
        });
      } else if( $('#primeExp').prop('checked') == true ){
        $('.niveau1').each(function(){
          $('.niveau1 span.gain').html('<span>10</span> Exp');
        });
        $('.niveau2').each(function(){
          $('.niveau2 span.gain').html('<span>20</span> Exp');
        });
        $('.niveau3').each(function(){
          $('.niveau3 span.gain').html('<span>30</span> Exp');
        });
        $('.niveau4').each(function(){
          $('.niveau4 span.gain').html('<span>40</span> Exp');
        });
        $('.niveau5').each(function(){
          $('.niveau5 span.gain').html('<span>50</span> Exp');
        });
      }
    });
  $('.products').html(template);
}


function btnPrime(element){
  var primeParent = $(element).closest('div.product'),
      lvlPrime = $(primeParent).find('.item_name').text(),
      primeGain = $(primeParent).find('span.gain span').text(),
      primeDesc = $(primeParent).find('.item_desc').html(),
      primePoke = $(primeParent).find('.pokemonPrime').val(),
      primeLink = $(primeParent).find('.urlRp').val();
  var myPGain = parseInt($('.primeTotal').text()) + parseInt(primeGain);


  if(primePoke == "" || primeLink == ""){
    alert("Tous les champs doivent être remplis !");
  } else if(primeGain == ""){
    alert("Sélectionne les gains selon ton cliché : Exp ou p$ ?");
  }


  //Contrôle pour pas mélanger exp et p$
      else if( $('prime .primeDisplay').text().indexOf('Exp') >= 0 && $('#primeP').is(':checked') ){
        alert(`Toutes les primes doivent avoir le même gain : Exp ou p$ !`);
      } else if( $('prime .primeDisplay').text().indexOf('p$') >= 0 && $('#primeExp').is(':checked') ){
        alert(`Toutes les primes doivent avoir le même gain : Exp ou p$ !`);
      }


      //Contrôle pour ne pas dépasser 50 exp ou 500 p$
      else if( $('#primeExp').is(':checked') && myPGain > 50 ){
        alert('Tu ne peux pas dépasser 50 Exp par mois !');
      } else if( $('#primeP').is(':checked') && myPGain > 500 ){
        alert('Tu ne peux pas dépasser 500 p$ par mois !');
      }


  else if( $('#myCart').text().indexOf('Mes primes') >= 0 ){
        if( $('#primeP').is(':checked') ){
          $('prime').append('<div class="panierPrime"><span class="remove_prime" onClick="removePrime(this)">x</span><p class="prime_title">Prime de ' + lvlPrime + ' (gain de <span class="gainmaxp"><clrbw><b><gain>' + primeGain + '</gain> p$</b></clrbw></span>)</p><p class="rappelPrime">Rappel de la prime : ' + primeDesc + '</p><p class="prime_pokemon">J’ai attrapé un <clrbw>' + primePoke + '</clrbw> à cet endroit : <clrbw><a href="' + primeLink + '">www</a></clrbw></p></div>');
          primeTotal = parseInt( $('.primeTotal').text() ) + parseInt(primeGain);
          $('.primeTotal').html(primeTotal);
        } else {
          $('.pdistributionExp').before('<div class="panierPrime"><span class="remove_prime" onClick="removePrime(this)">x</span><p class="prime_title">Prime de ' + lvlPrime + ' (gain de <span class="gainmaxp"><clrbw><b><gain>' + primeGain + '</gain> Exp</b></clrbw></span>)</p><p class="rappelPrime">Rappel de la prime : ' + primeDesc + '</p><p class="prime_pokemon">J’ai attrapé un <clrbw>' + primePoke + '</clrbw> à cet endroit : <clrbw><a href="' + primeLink + '">www</a></clrbw></p></div>');
          primeTotal = parseInt( $('.primeTotal').text() ) + parseInt(primeGain);
          $('.primeTotal').html(primeTotal);
        }
  } else {
    if( $('#primeP').is(':checked') ){
            primeTotal = primeGain;
          $('#myCart').append('<prime><h4 class="titrePrime">Mes primes</h4><div class="primeDisplay">Je gagne au total <clrbw><span class="primeTotal">' + primeTotal + '</span> p$</clrbw>.</div><div class="panierPrime"><span class="remove_prime" onClick="removePrime(this)">x</span><p class="prime_title">Prime de ' + lvlPrime + ' (gain de <span class="gainmaxp"><clrbw><b><gain>' + primeGain + '</gain> p$</b></clrbw></span>)</p><p class="rappelPrime">Rappel de la prime : ' + primeDesc + '</p><p>J’ai attrapé un <clrbw>' + primePoke + '</clrbw> à cet endroit : <clrbw><a href="' + primeLink + '">www</a></clrbw></p></div></prime>');
        } else {
          primeTotal = primeGain;
          $('#myCart').append('<prime><h4 class="titrePrime">Mes primes</h4><div class="primeDisplay">Je gagne au total <clrbw><span class="primeTotal">' + primeTotal + '</span> Exp</clrbw>.</div><div class="panierPrime"><span class="remove_prime" onClick="removePrime(this)">x</span><p class="prime_title">Prime de ' + lvlPrime + ' (gain de <span class="gainmaxp"><clrbw><b><gain>' + primeGain + '</gain> Exp</b></clrbw></span>)</p><p class="rappelPrime">Rappel de la prime : ' + primeDesc + '</p><p>J’ai attrapé un <clrbw>' + primePoke + '</clrbw> à cet endroit : <clrbw><a href="' + primeLink + '">www</a></clrbw></p></div><div class="primeDisplay pdistributionExp">Je donne mes gains à ce(s) pokémon(s) : <br/><textarea id="primePokemon" placeholder="Espèce lvl 15 (0/10) → lvl 16 (5/10)"></textarea></div></prime>');
        }
  }
generateCartButtons();
}
//Retirer la prime du panier
function removePrime(primeremove){
  var nbPrime = $('.panierPrime').length;
    if( nbPrime > 0){
      $(primeremove).parent().remove();
      var item = $(primeremove).parent().find('gain').text();
      var newgain = $('.primeTotal').text();
      $('.primeTotal').html(newgain - item);
    }
    var nbPrime2 = $('.panierPrime').length;
    if(nbPrime2 == 0){
      $('prime').remove();
      generateCartButtons();
    }
}


//EXPLOITS DU COMBATTANT


$(document).ready(function() {
var exploits = [
{
      id: 0,
      niveau: "1",
      numero: "01",
      description: "Faire 3 OS d’affilée en PVE dans le même sujet.",
      nb_champs: 3,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 1,
      niveau: "1",
      numero: "02",
      description: "Vaincre un adversaire en étant faible à au moins un de ses types.",
      nb_champs: 1,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 2,
      niveau: "1",
      numero: "03",
      description: "Utiliser 3 capacités non offensives.",
      nb_champs: 3,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 3,
      niveau: "1",
      numero: "04",
      description: "Utiliser 3 capacités super efficaces.",
      nb_champs: 3,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 4,
      niveau: "1",
      numero: "05",
      description: "Utiliser 3 capacités bénéficiant du STAB.",
      nb_champs: 3,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 5,
      niveau: "1",
      numero: "06",
      description: "Vaincre 3 Pokémon en zone verte.",
      nb_champs: 3,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 6,
      niveau: "1",
      numero: "07",
      description: "Déclencher une météo durant un combat, à l’aide d’une capacité ou d’un talent.",
      nb_champs: 1,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 7,
      niveau: "1",
      numero: "08",
      description: "Vaincre un adversaire en PVE sans avantage de niveau.",
      nb_champs: 1,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 8,
      niveau: "1",
      numero: "09",
      description: "Paralyser ou brûler 5 adversaires. Les statuts sont combinables, c’est-à-dire que paralyser 3 fois et brûler 2 fois compterait, par exemple.",
      nb_champs: 5,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 9,
      niveau: "1",
      numero: "10",
      description: "Terminer un combat face à un autre joueur, qu’il soit remporté ou perdu.",
      nb_champs: 1,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 10,
      niveau: "1",
      numero: "11",
      description: "Utiliser une capacité de zone ou multicible, de manière à ce qu’elle touche effectivement plusieurs cibles. Elle peut être offensive ou non offensive, au choix.",
      nb_champs: 1,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 11,
      niveau: "1",
      numero: "12",
      description: "Utiliser à 3 reprises un objet sur son Pokémon au combat via une action dresseur. « Au combat » signifie qu’un combat doit être en cours, et qu’il ne peut s’agir que du Pokémon de tête, celui qui combat effectivement.",
      nb_champs: 3,
      gain: "[150 p$ / 15 EXP]"
    },
{
      id: 12,
      niveau: "2",
      numero: "01",
      description: "Faire 5 OS d’affilée en PVE dans le même sujet.",
      nb_champs: 5,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 13,
      niveau: "2",
      numero: "02",
      description: "Vaincre un adversaire en étant doublement faible à l’un de ses types.",
      nb_champs: 1,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 14,
      niveau: "2",
      numero: "03",
      description: "Utiliser 7 capacités non offensives.",
      nb_champs: 7,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 15,
      niveau: "2",
      numero: "04",
      description: "Utiliser 7 capacités super efficaces.",
      nb_champs: 7,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 16,
      niveau: "2",
      numero: "05",
      description: "Utiliser 7 capacités bénéficiant du STAB.",
      nb_champs: 7,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 17,
      niveau: "2",
      numero: "06",
      description: "Vaincre 3 Pokémon en zone orange.",
      nb_champs: 3,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 18,
      niveau: "2",
      numero: "07",
      description: "Remporter un combat sous la Pluie et un combat sous le Soleil.",
      nb_champs: 2,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 19,
      niveau: "2",
      numero: "08",
      description: "Vaincre un adversaire en PVE avec au moins 5 niveaux d’écart (au désavantage du joueur).",
      nb_champs: 1,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 20,
      niveau: "2",
      numero: "09",
      description: "Apeurer 5 fois un adversaire.",
      nb_champs: 5,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 21,
      niveau: "2",
      numero: "10",
      description: "Outspeed 3 Pokémon. Ce qu’on entend par « outspeed » c’est, en tant que Joueur n° 2, agir en premier grâce à une vitesse ou une priorité plus importante.",
      nb_champs: 3,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 22,
      niveau: "2",
      numero: "11",
      description: "Vaincre 6 espèces de Pokémon différentes.",
      nb_champs: 6,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 23,
      niveau: "2",
      numero: "12",
      description: "Déclencher un talent en combat à 4 reprises. Ce peut être le même talent ou des talents différents, et ce peut être dans des combats différents.",
      nb_champs: 4,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 24,
      niveau: "2",
      numero: "13",
      description: "Vaincre un Pokémon obscur sauvage.",
      nb_champs: 1,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 25,
      niveau: "2",
      numero: "14",
      description: "Vaincre un adversaire avec uniquement des aléas 1 ou 2.",
      nb_champs: 1,
      gain: "[250 p$ / 25 EXP]"
    },
{
      id: 26,
      niveau: "3",
      numero: "01",
      description: "Faire 7 OS d’affilée en PVE dans le même sujet.",
      nb_champs: 7,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 27,
      niveau: "3",
      numero: "02",
      description: "Vaincre 2 adversaires à l’aide d’une ou plusieurs capacités auxquelles ils sont résistants uniquement.",
      nb_champs: 2,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 28,
      niveau: "3",
      numero: "03",
      description: "Utiliser 11 capacités non offensives.",
      nb_champs: 11,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 29,
      niveau: "3",
      numero: "04",
      description: "Utiliser 11 capacités super efficaces.",
      nb_champs: 11,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 30,
      niveau: "3",
      numero: "05",
      description: "Utiliser 11 capacités bénéficiant du STAB.",
      nb_champs: 11,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 31,
      niveau: "3",
      numero: "06",
      description: "Vaincre 5 Pokémon en zone orange.",
      nb_champs: 5,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 32,
      niveau: "3",
      numero: "07",
      description: "Remporter 3 combats, sous 3 météos différentes (un par météo).",
      nb_champs: 3,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 33,
      niveau: "3",
      numero: "08",
      description: "Vaincre un adversaire en PVE avec au moins 7 niveaux d’écart (au désavantage du joueur).",
      nb_champs: 1,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 34,
      niveau: "3",
      numero: "09",
      description: "Geler ou endormir 5 fois un adversaire. Les statuts sont combinables, c’est-à-dire que geler 3 fois et endormir 2 fois compterait, par exemple.",
      nb_champs: 5,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 35,
      niveau: "3",
      numero: "10",
      description: "Remporter un combat PVP en 4vs4, 5vs5 ou 6vs6.",
      nb_champs: 1,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 36,
      niveau: "3",
      numero: "11",
      description: "Vaincre 9 espèces de Pokémon différentes.",
      nb_champs: 9,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 37,
      niveau: "3",
      numero: "12",
      description: "Déclencher un talent en combat à 6 reprises. Ce peut être le même talent ou des talents différents, et ce peut être dans des combats différents.",
      nb_champs: 6,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 38,
      niveau: "3",
      numero: "13",
      description: "Vaincre un Pokémon Alpha.",
      nb_champs: 1,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 39,
      niveau: "3",
      numero: "14",
      description: "Faire Méga-Évoluer un Pokémon.",
      nb_champs: 1,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 40,
      niveau: "3",
      numero: "15",
      description: "Faire un coup critique.",
      nb_champs: 1,
      gain: "[350 p$ / 35 EXP]"
    },
{
      id: 41,
      niveau: "4",
      numero: "01",
      description: "Faire 9 OS d’affilée en PVE dans le même sujet.",
      nb_champs: 9,
      gain: "[500 p$ / 50 EXP]"
    },
{
      id: 42,
      niveau: "4",
      numero: "02",
      description: "Encaisser 3 capacités super efficaces et y survivre.",
      nb_champs: 3,
      gain: "[500 p$ / 50 EXP]"
    },
{
      id: 43,
      niveau: "4",
      numero: "03",
      description: "Utiliser 14 capacités non offensives.",
      nb_champs: 14,
      gain: "[500 p$ / 50 EXP]"
    },
{
      id: 44,
      niveau: "4",
      numero: "04",
      description: "Utiliser 14 capacités super efficaces.",
      nb_champs: 14,
      gain: "[500 p$ / 50 EXP]"
    },
{
      id: 45,
      niveau: "4",
      numero: "05",
      description: "Utiliser 14 capacités bénéficiant du STAB.",
      nb_champs: 14,
      gain: "[500 p$ / 50 EXP]"
    },
{
      id: 46,
      niveau: "4",
      numero: "06",
      description: "Vaincre 2 Pokémon en zone rouge.",
      nb_champs: 2,
      gain: "[500 p$ / 50 EXP]"
    },
{
      id: 47,
      niveau: "4",
      numero: "07",
      description: "Remporter 5 combats, sous 5 météos différentes (un par météo).",
      nb_champs: 5,
      gain: "[500 p$ / 50 EXP]"
    },
{
      id: 48,
      niveau: "4",
      numero: "08",
      description: "Vaincre un adversaire en PVE avec au moins 10 niveaux d’écart (au désavantage du joueur).",
      nb_champs: 1,
      gain: "[500 p$ / 50 EXP]"
    },
{
      id: 49,
      niveau: "4",
      numero: "09",
      description: "Réussir de justesse une capacité avec une précision baissée, c’est-à-dire en obtenant au dé le résultat équivalent à la valeur de précision ou jusqu’à 4 de moins.<br/>Par exemple, si la précision est de 70 %, l’exploit est réussi si le dé sort 66, 67, 68, 69 ou 70.",
      nb_champs: 1,
      gain: "[500 p$ / 50 EXP]"
    },
{
      id: 50,
      niveau: "4",
      numero: "10",
      description: "Remporter une saison à l’Arena Caelestia ou être sacré champion·ne de son île.",
      nb_champs: 1,
      gain: "[500 p$ / 50 EXP]"
    },
{
      id: 51,
      niveau: "4",
      numero: "11",
      description: "Remporter un combat en PVE de plus de 4 tours.",
      nb_champs: 1,
      gain: "[500 p$ / 50 EXP]"
    },
{
      id: 52,
      niveau: "4",
      numero: "12",
      description: "Encaisser un coup critique et y survivre.",
      nb_champs: 1,
      gain: "[500 p$ / 50 EXP]"
    }];


  DisplayExploitList(exploits);
});


function DisplayExploitList(exploit) {
  var template = "";
  exploit.forEach(function(item) {


    template = template + '<div class="exploitproduct exploitproductshow1 exploitniveau' + item.niveau + '"><span class="item_name"><span class="defi_num">Niveau ' + item.niveau + '</span> - ' + item.numero + '</span><div class="item_cate">Gain : <span class="gain">Exp ou p$ ?</span></div><div class="item_bottom"><p class="item_desc">' + item.description + '</p><div><div class="exploit_scroll">';


    for(let i = 0; i < item.nb_champs; i++){
      template = template + `<span><input type="text" placeholder="Espèce et niveau" class="pokemonExploit"><input type="url" placeholder="Lien vers le post" class="urlExploit"></span>`;
    }
    
    template = template + '</div></div><a class="buttonExploit btn_add" onClick="btnExploit(this)"><div class="btn_hover"></div><div class="btn_text">Ajouter l’exploit au panier</div></a></div></div></div>';
  });
  $('.exploitGain input').change(function(){
      if( $('#exploitP').prop('checked') == true ){
        $('.exploitniveau1').each(function(){
          $('.exploitniveau1 span.gain').html('<span>150</span> p$');
        });
        $('.exploitniveau2').each(function(){
          $('.exploitniveau2 span.gain').html('<span>250</span> p$');
        });
        $('.exploitniveau3').each(function(){
          $('.exploitniveau3 span.gain').html('<span>350</span> p$');
        });
        $('.exploitniveau4').each(function(){
          $('.exploitniveau4 span.gain').html('<span>500</span> p$');
        });
      } else if( $('#exploitExp').prop('checked') == true ){
        $('.exploitniveau1').each(function(){
          $('.exploitniveau1 span.gain').html('<span>15</span> Exp');
        });
        $('.exploitniveau2').each(function(){
          $('.exploitniveau2 span.gain').html('<span>25</span> Exp');
        });
        $('.exploitniveau3').each(function(){
          $('.exploitniveau3 span.gain').html('<span>35</span> Exp');
        });
        $('.exploitniveau4').each(function(){
          $('.exploitniveau4 span.gain').html('<span>50</span> Exp');
        });
      }
    });
  $('.exploitProducts').html(template);
}


function btnExploit(element){
  var exploitParent = $(element).closest('div.exploitproduct'),
      lvlExploit = $(exploitParent).find('.item_name').text(),
      exploitGain = $(exploitParent).find('span.gain span').text(),
      exploitDesc = $(exploitParent).find('.item_desc').html();
  var myPGain = parseInt($('.exploitTotal').text()) + parseInt(exploitGain);


  if( $(exploitParent).find('.exploit_scroll span:nth-child(1) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(1) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(2) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(2) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(3) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(3) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(4) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(4) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(5) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(5) .urlExploit').val() == "" || 
      $(exploitParent).find('.exploit_scroll span:nth-child(6) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(6) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(7) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(7) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(8) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(8) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(9) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(9) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(10) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(10) .urlExploit').val() == "" || 
      $(exploitParent).find('.exploit_scroll span:nth-child(11) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(11) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(12) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(12) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(13) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(13) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(14) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(14) .urlExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(15) .pokemonExploit').val() == "" || $(exploitParent).find('.exploit_scroll span:nth-child(15) .urlExploit').val() == ""){
    alert("Tous les champs doivent être remplis !");
  }


  else if(exploitGain == ""){
    alert("Sélectionne les gains selon ton cliché : Exp ou p$ ?");
  }


  //Contrôle pour pas mélanger exp et p$
      else if( $('exploit .exploitDisplay').text().indexOf('Exp') >= 0 && $('#exploitP').is(':checked') ){
        alert(`Tous les exploits doivent avoir le même gain : Exp ou p$ !`);
      } else if( $('exploit .exploitDisplay').text().indexOf('p$') >= 0 && $('#exploitExp').is(':checked') ){
        alert(`Tous les exploits doivent avoir le même gain : Exp ou p$ !`);
      }


      //Contrôle pour ne pas dépasser 50 exp ou 500 p$
      else if( $('#exploitExp').is(':checked') && myPGain > 50 ){
        alert('Tu ne peux pas dépasser 50 Exp par mois !');
      } else if( $('#exploitP').is(':checked') && myPGain > 500 ){
        alert('Tu ne peux pas dépasser 500 p$ par mois !');
      }


  else if( $('#myCart').text().indexOf('Mes exploits') >= 0 ){
        if( $('#exploitP').is(':checked') ){
          var templateExploit = `<div class="panierExploit"><span class="remove_exploit" onClick="removeExploit(this)">x</span><p class="exploit_title">Exploit de ` + lvlExploit + ` (gain de <span class="gainmaxp"><clrbw><b><gain>` + exploitGain + `</gain> p$</b></clrbw></span>)</p><p class="rappelExploit">Rappel de l’exploit : `  + exploitDesc + `</p>`;
          $(exploitParent).find('.exploit_scroll span').each(function(){
            var exploitPoke = $(this).find('.pokemonExploit').val();
            var exploitLink = $(this).find('.urlExploit').val();
            templateExploit = templateExploit + `<p class="exploit_pokemon">• J’ai combattu un <clrbw>` + exploitPoke + `</clrbw> à cet endroit : <clrbw><a href="` + exploitLink + `">www</a></clrbw></p>`;
          });
          var templateExploit = templateExploit + `</div>`;
          $('exploit').append(templateExploit);
          exploitTotal = parseInt( $('.exploitTotal').text() ) + parseInt(exploitGain);
          $('.exploitTotal').html(exploitTotal);
        } else {
          var templateExploit = `<div class="panierExploit"><span class="remove_exploit" onClick="removeExploit(this)">x</span><p class="exploit_title">Exploit de ` + lvlExploit + ` (gain de <span class="gainmaxp"><clrbw><b><gain>` + exploitGain + `</gain> Exp</b></clrbw></span>)</p><p class="rappelExploit">Rappel de l’exploit : `  + exploitDesc + `</p>`;
          $(exploitParent).find('.exploit_scroll span').each(function(){
            var exploitPoke = $(this).find('.pokemonExploit').val();
            var exploitLink = $(this).find('.urlExploit').val();
            templateExploit = templateExploit + `<p class="exploit_pokemon">• J’ai combattu un <clrbw>` + exploitPoke + `</clrbw> à cet endroit : <clrbw><a href="` + exploitLink + `">www</a></clrbw></p>`;
          });
          var templateExploit = templateExploit + `</div>`;
          $('.pdistributionExp').before(templateExploit);
          exploitTotal = parseInt( $('.exploitTotal').text() ) + parseInt(exploitGain);
          $('.exploitTotal').html(exploitTotal);
        }
  } else {
    if( $('#exploitP').is(':checked') ){
            exploitTotal = exploitGain;
            var templateExploit = `<exploit><h4 class="titreExploit">Mes exploits</h4><div class="exploitDisplay">Je gagne au total <clrbw><span class="exploitTotal">` + exploitTotal + `</span> p$</clrbw>.</div><div class="panierExploit"><span class="remove_exploit" onClick="removeExploit(this)">x</span><p class="exploit_title">Exploit de ` + lvlExploit + ` (gain de <span class="gainmaxp"><clrbw><b><gain>` + exploitGain + `</gain> p$</b></clrbw></span>)</p><p class="rappelExploit">Rappel de l’exploit : `  + exploitDesc + `</p>`;
          $(exploitParent).find('.exploit_scroll span').each(function(){
            var exploitPoke = $(this).find('.pokemonExploit').val();
            var exploitLink = $(this).find('.urlExploit').val();
            templateExploit = templateExploit + `<p class="exploit_pokemon">• J’ai combattu un <clrbw>` + exploitPoke + `</clrbw> à cet endroit : <clrbw><a href="` + exploitLink + `">www</a></clrbw></p>`;
          });
          var templateExploit = templateExploit + `</div></exploit>`;
          $('#myCart').append(templateExploit);
        } else {
          exploitTotal = exploitGain;
          var templateExploit = `<exploit><h4 class="titreExploit">Mes exploits</h4><div class="exploitDisplay">Je gagne au total <clrbw><span class="exploitTotal">` + exploitTotal + `</span> Exp</clrbw>.</div><div class="panierExploit"><span class="remove_exploit" onClick="removeExploit(this)">x</span><p class="exploit_title">Exploit de ` + lvlExploit + ` (gain de <span class="gainmaxp"><clrbw><b><gain>` + exploitGain + `</gain> Exp</b></clrbw></span>)</p><p class="rappelExploit">Rappel de l’exploit : `  + exploitDesc + `</p>`;
          $(exploitParent).find('.exploit_scroll span').each(function(){
            var exploitPoke = $(this).find('.pokemonExploit').val();
            var exploitLink = $(this).find('.urlExploit').val();
            templateExploit = templateExploit + `<p class="exploit_pokemon">• J’ai combattu un <clrbw>` + exploitPoke + `</clrbw> à cet endroit : <clrbw><a href="` + exploitLink + `">www</a></clrbw></p>`;
          });
          var templateExploit = templateExploit + `</div><div class="exploitDisplay pdistributionExp">Je donne mes gains à ce(s) pokémon(s) : <br/><textarea id="exploitPokemon" placeholder="Espèce lvl 15 (0/10) → lvl 16 (5/10)"></textarea></div></exploit>`;
          $('#myCart').append(templateExploit);
        }
  }
generateCartButtons();
}
//Retirer l’exploit du panier
function removeExploit(exploitremove){
  var nbExploit = $('.panierExploit').length;
    if( nbExploit > 0){
      $(exploitremove).parent().remove();
      var item = $(exploitremove).parent().find('gain').text();
      var newgain = $('.exploitTotal').text();
      $('.exploitTotal').html(newgain - item);
    }
    var nbExploit2 = $('.panierExploit').length;
    if(nbExploit2 == 0){
      $('exploit').remove();
      generateCartButtons();
    }
}




//REPRODUCTION
$('.buttonRepro').click(function(){
      var reproMaman = $('#reproMaman').val(),
          Fchromatique = $('#Fchromatique:checked').val();
      if(Fchromatique == undefined){
        var Fchromatique = 'non-chromatique';
      }
      var reproPapa = $('#reproPapa').val(),
          Mchromatique = $('#Mchromatique:checked').val();
      if(Mchromatique == undefined){
        var Mchromatique = 'non-chromatique';
      }
      var lienObtention = $('#lienObtention').val();


      if(reproMaman == '' || reproPapa == ''){
        alert("L'œuf doit avoir 2 parents !");
      } else if(lienObtention == ''){
        alert("Tu dois mettre le lien de l'obtention (vers le Rp ou vers l'événement) !");
      } 


      else if( $('#myCart').text().indexOf('Reproduction Pokémon') >= 0 ){
        if( $('.clicheList').text().indexOf('01-08-400') >= 0 ) {
          $('oeuf').append(`<div class="panierRepro"><span class="remove_oeuf">x</span><p class="repro_title"><clrbw><b>Mon pokémon a ramené un œuf !</b></clrbw></p><p>Sa mère est une <clrbw><strong>` + reproMaman + `</strong></clrbw> ` + Fchromatique + ` et son père est un <clrbw><strong>` + reproPapa + `</strong></clrbw> ` + Mchromatique + ` !</p><p>Je possède le <clrsoutien>Cliché 08 Reproduction</clrsoutien> !</p><p>J'ai obtenu l'œuf ici : <clrbw><a href="` + lienObtention + `">www</a></clrbw></p></div>`);
        } else {
          $('oeuf').append(`<div class="panierRepro"><span class="remove_oeuf">x</span><p class="repro_title"><clrbw><b>Mon pokémon a ramené un œuf !</b></clrbw></p><p>Sa mère est une <clrbw><strong>` + reproMaman + `</strong></clrbw> ` + Fchromatique + ` et son père est un <clrbw><strong>` + reproPapa + `</strong></clrbw> ` + Mchromatique + ` !</p><p>Je l'ai obtenu ici : <clrbw><a href="` + lienObtention + `">www</a></clrbw></p></div>`);
        }
      } else{
        if( $('.clicheList').text().indexOf('01-08-400') >= 0 ) {
          $('#myCart').append(`<oeuf><h4 class="titreRepro">Reproduction Pokémon</h4><div class="panierRepro"><span class="remove_oeuf">x</span><p class="repro_title"><clrbw><b>Mon pokémon a ramené un œuf !</b></clrbw></p><p>Sa mère est une <clrbw><strong>` + reproMaman + `</strong></clrbw> ` + Fchromatique + ` et son père est un <clrbw><strong>` + reproPapa + `</strong></clrbw> ` + Mchromatique + ` !</p><p>Je possède le <clrsoutien>Cliché 08 Reproduction</clrsoutien> !</p><p>J'ai obtenu l'œuf ici : <clrbw><a href="` + lienObtention + `">www</a></clrbw></p></div></oeuf>`);
        } else {
          $('#myCart').append(`<oeuf><h4 class="titreRepro">Reproduction Pokémon</h4><div class="panierRepro"><span class="remove_oeuf">x</span><p class="repro_title"><clrbw><b>Mon pokémon a ramené un œuf !</b></clrbw></p><p>Sa mère est une <clrbw><strong>` + reproMaman + `</strong></clrbw> ` + Fchromatique + ` et son père est un <clrbw><strong>` + reproPapa + `</strong></clrbw> ` + Mchromatique + ` !</p><p>Je l'ai obtenu ici : <clrbw><a href="` + lienObtention + `">www</a></clrbw></p></div></oeuf>`);
        }
      }


    //Retirer l'oeuf du panier
    $('.panierRepro').each(function(i){
        $('.remove_oeuf').click(function(){
          var nbOeuf = $('.panierRepro').length;
          if( nbOeuf > 0){
            $(this).parent().remove();
          }
          var nbOeuf2 = $('.panierRepro').length;
          if(nbOeuf2 == 0){
            $('oeuf').remove();
            generateCartButtons();
          }
        });
    });
generateCartButtons();
});




// PENSION POKÉMON


$('input#pensionExp').change(function(){
  var expValue = parseInt($(this).val());
  $('.pension_bloc > div > span > span').html(expValue * 10);
});


$('.buttonPension1').click(function(){
  var especePension = $('#pensionEspece').val(),
      dresseurPension = $('#pensionDresseur').val();


  if( $('#myCart').text().indexOf('Pension Pokémon') >= 0 ){
    $('pension').append(`<div class="panierPension"><span class="remove_pension">x</span><p class="pension_title"><clrbw><b>J'accueille un Pokémon en pension !</b></clrbw></p><p>Il s'agit du <clrbw>` + especePension + `</clrbw> appartenant à <clrbw>` + dresseurPension + `</clrbw>.</p></div>`);
  } else {
    $('#myCart').append(`<pension><h4 class="titrePension">Pension Pokémon</h4><div class="panierPension"><span class="remove_pension">x</span><p class="pension_title"><clrbw><b>J'accueille un Pokémon en pension !</b></clrbw></p><p>Il s'agit du <clrbw>` + especePension + `</clrbw> appartenant à <clrbw>` + dresseurPension + `</clrbw>.</p></div></pension>`);
  }


  //Retirer du panier
  $('.panierPension').each(function(i){
    $('.remove_pension').click(function(){
      var nbPension = $('.panierPension').length;
      if( nbPension > 0){
        $(this).parent().remove();
      }
      var nbPension2 = $('.panierPension').length;
      if(nbPension2 == 0){
        $('pension').remove();
        generateCartButtons();
      }
    });
  });


generateCartButtons();
});


$('.buttonPension2').click(function(){
  var expPension = $('#pensionExp').val(),
      accueilPension = $('#pensionAccueil').val(),
      redevancePension = $('#pensionRedevance').val(),
      montantPension = $('.pension_bloc > div > span span').html();


  if(expPension == '' || accueilPension == '' || redevancePension == ''){
    alert("Tous les champs doivent être remplis !");
  } else if( $('#myCart').text().indexOf('Pension Pokémon') >= 0 ){
    $('pension').append(`<div class="panierPension"><span class="remove_pension">x</span><p class="pension_title"><clrbw><b>Acquisition des gains !</b></clrbw></p><p>Le Pokémon en pension a reçu <clrbw>` + expPension + ` exp</clrbw> depuis son arrivée (<clrbw><a href="` + accueilPension + `" target="_blank">www</a></clrbw>). Je gagne donc <clrbw>` + montantPension + `&nbsp;p$</clrbw> et la redevance m'a été versée <clrbw><a href="` + redevancePension + `" target="_blank">ici</a></clrbw>.</p></div>`);
  } else {
    $('#myCart').append(`<pension><h4 class="titrePension">Pension Pokémon</h4><div class="panierPension"><span class="remove_pension">x</span><p class="pension_title"><clrbw><b>Acquisition des gains !</b></clrbw></p><p>Le Pokémon en pension a reçu <clrbw>` + expPension + ` exp</clrbw> depuis son arrivée (<clrbw><a href="` + accueilPension + `" target="_blank">www</a></clrbw>). Je gagne donc <clrbw>` + montantPension + `&nbsp;p$</clrbw> et la redevance m'a été versée <clrbw><a href="` + redevancePension + `" target="_blank">ici</a></clrbw>.</p></div></pension>`);
  }


  //Retirer du panier
  $('.panierPension').each(function(i){
    $('.remove_pension').click(function(){
      var nbPension = $('.panierPension').length;
      if( nbPension > 0){
        $(this).parent().remove();
      }
      var nbPension2 = $('.panierPension').length;
      if(nbPension2 == 0){
        $('pension').remove();
        generateCartButtons();
      }
    });
  });


generateCartButtons();
});




//Effacer tout le panier
function emptyCart() {
  if(confirm("Êtes-vous sûr·e de vouloir vider le panier ?")) {
    $('#myCart').html('');
  }
  generateCartButtons();
}


//FILTRE HAUT
function noFilter() {
  $('.shop_filter input').prop('checked', false);
  $('.shop_filter > a').addClass('filtchecked');
  $('.sectionCliche, .sectionAcquisition, .sectionCuisine, .sectionPrime, .sectionExploit, .sectionRepro, .sectionPension').css('display', 'block');
}


$('.shop_filter #clicheFiltre').change(function(){
  $('.shop_filter > a').removeClass('filtchecked');
  $('#acquisitionFiltre').prop('checked', false);
  $('#cuisineFiltre').prop('checked', false);
  $('#primeFiltre').prop('checked', false);
  $('#exploitFiltre').prop('checked', false);
  $('#reproFiltre').prop('checked', false);
  $('#pensionFiltre').prop('checked', false);


  $('.sectionCliche').css('display', 'block');
  $('.sectionAcquisition').css('display', 'none');
  $('.sectionCuisine').css('display', 'none');
  $('.sectionPrime').css('display', 'none');
  $('.sectionExploit').css('display', 'none');
  $('.sectionRepro').css('display', 'none');
  $('.sectionPension').css('display', 'none');
  if($('.shop_filter input:checkbox:checked').length > 0){} else{
      noFilter();
  }
});
$('.shop_filter #acquisitionFiltre').change(function(){
  $('.shop_filter > a').removeClass('filtchecked');
  $('#clicheFiltre').prop('checked', false);
  $('#cuisineFiltre').prop('checked', false);
  $('#primeFiltre').prop('checked', false);
  $('#exploitFiltre').prop('checked', false);
  $('#reproFiltre').prop('checked', false);
  $('#pensionFiltre').prop('checked', false);


  $('.sectionCliche').css('display', 'none');
  $('.sectionAcquisition').css('display', 'block');
  $('.sectionCuisine').css('display', 'none');
  $('.sectionPrime').css('display', 'none');
  $('.sectionExploit').css('display', 'none');
  $('.sectionRepro').css('display', 'none');
  $('.sectionPension').css('display', 'none');
  if($('.shop_filter input:checkbox:checked').length > 0){} else{
      noFilter();
  }
});
$('.shop_filter #cuisineFiltre').change(function(){
  $('.shop_filter > a').removeClass('filtchecked');
  $('#clicheFiltre').prop('checked', false);
  $('#acquisitionFiltre').prop('checked', false);
  $('#primeFiltre').prop('checked', false);
  $('#exploitFiltre').prop('checked', false);
  $('#reproFiltre').prop('checked', false);
  $('#pensionFiltre').prop('checked', false);


  $('.sectionCliche').css('display', 'none');
  $('.sectionAcquisition').css('display', 'none');
  $('.sectionCuisine').css('display', 'block');
  $('.sectionPrime').css('display', 'none');
  $('.sectionExploit').css('display', 'none');
  $('.sectionRepro').css('display', 'none');
  $('.sectionPension').css('display', 'none');
  if($('.shop_filter input:checkbox:checked').length > 0){} else{
      noFilter();
  }
});
$('.shop_filter #primeFiltre').change(function(){
  $('.shop_filter > a').removeClass('filtchecked');
  $('#clicheFiltre').prop('checked', false);
  $('#acquisitionFiltre').prop('checked', false);
  $('#cuisineFiltre').prop('checked', false);
  $('#exploitFiltre').prop('checked', false);
  $('#reproFiltre').prop('checked', false);
  $('#pensionFiltre').prop('checked', false);


  $('.sectionCliche').css('display', 'none');
  $('.sectionAcquisition').css('display', 'none');
  $('.sectionCuisine').css('display', 'none');
  $('.sectionPrime').css('display', 'block');
  $('.sectionExploit').css('display', 'none');
  $('.sectionRepro').css('display', 'none');
  $('.sectionPension').css('display', 'none');
  if($('.shop_filter input:checkbox:checked').length > 0){} else{
      noFilter();
  }
});


$('.shop_filter #exploitFiltre').change(function(){
  $('.shop_filter > a').removeClass('filtchecked');
  $('#clicheFiltre').prop('checked', false);
  $('#acquisitionFiltre').prop('checked', false);
  $('#cuisineFiltre').prop('checked', false);
  $('#reproFiltre').prop('checked', false);
  $('#primeFiltre').prop('checked', false);
  $('#pensionFiltre').prop('checked', false);


  $('.sectionCliche').css('display', 'none');
  $('.sectionAcquisition').css('display', 'none');
  $('.sectionCuisine').css('display', 'none');
  $('.sectionPrime').css('display', 'none');
  $('.sectionExploit').css('display', 'block');
  $('.sectionRepro').css('display', 'none');
  $('.sectionPension').css('display', 'none');
  if($('.shop_filter input:checkbox:checked').length > 0){} else{
      noFilter();
  }
});


$('.shop_filter #reproFiltre').change(function(){
  $('.shop_filter > a').removeClass('filtchecked');
  $('#clicheFiltre').prop('checked', false);
  $('#acquisitionFiltre').prop('checked', false);
  $('#cuisineFiltre').prop('checked', false);
  $('#exploitFiltre').prop('checked', false);
  $('#primeFiltre').prop('checked', false);
  $('#pensionFiltre').prop('checked', false);


  $('.sectionCliche').css('display', 'none');
  $('.sectionAcquisition').css('display', 'none');
  $('.sectionCuisine').css('display', 'none');
  $('.sectionPrime').css('display', 'none');
  $('.sectionExploit').css('display', 'none');
  $('.sectionRepro').css('display', 'block');
  $('.sectionPension').css('display', 'none');
  if($('.shop_filter input:checkbox:checked').length > 0){} else{
      noFilter();
  }
});


$('.shop_filter #pensionFiltre').change(function(){
  $('.shop_filter > a').removeClass('filtchecked');
  $('#clicheFiltre').prop('checked', false);
  $('#acquisitionFiltre').prop('checked', false);
  $('#cuisineFiltre').prop('checked', false);
  $('#exploitFiltre').prop('checked', false);
  $('#primeFiltre').prop('checked', false);
  $('#reproFiltre').prop('checked', false);


  $('.sectionCliche').css('display', 'none');
  $('.sectionAcquisition').css('display', 'none');
  $('.sectionCuisine').css('display', 'none');
  $('.sectionPrime').css('display', 'none');
  $('.sectionExploit').css('display', 'none');
  $('.sectionRepro').css('display', 'none');
  $('.sectionPension').css('display', 'block');
  if($('.shop_filter input:checkbox:checked').length > 0){} else{
      noFilter();
  }
});


//FILTRE PRIMES
function noFilterPrime() {
  $('.prime_filter input').prop('checked', false);
  $('.prime_filter > a').addClass('filtprimechecked');
  $('.niveau1, .niveau2, .niveau3, .niveau4, .niveau5').css('display', 'block');
}


$('.prime_filter #prime1Filtre').change(function(){
  $('.prime_filter > a').removeClass('filtprimechecked');
  $('#prime2Filtre').prop('checked', false);
  $('#prime3Filtre').prop('checked', false);
  $('#prime4Filtre').prop('checked', false);
  $('#prime5Filtre').prop('checked', false);


  $('.niveau1').css('display', 'block');
  $('.niveau2').css('display', 'none');
  $('.niveau3').css('display', 'none');
  $('.niveau4').css('display', 'none');
  $('.niveau5').css('display', 'none');
  if($('.prime_filter input:checkbox:checked').length > 0){} else{
      noFilterPrime();
  }
});
$('.prime_filter #prime2Filtre').change(function(){
  $('.prime_filter > a').removeClass('filtprimechecked');
  $('#prime1Filtre').prop('checked', false);
  $('#prime3Filtre').prop('checked', false);
  $('#prime4Filtre').prop('checked', false);
  $('#prime5Filtre').prop('checked', false);


  $('.niveau1').css('display', 'none');
  $('.niveau2').css('display', 'block');
  $('.niveau3').css('display', 'none');
  $('.niveau4').css('display', 'none');
  $('.niveau5').css('display', 'none');
  if($('.prime_filter input:checkbox:checked').length > 0){} else{
      noFilterPrime();
  }
});
$('.prime_filter #prime3Filtre').change(function(){
  $('.prime_filter > a').removeClass('filtprimechecked');
  $('#prime1Filtre').prop('checked', false);
  $('#prime2Filtre').prop('checked', false);
  $('#prime4Filtre').prop('checked', false);
  $('#prime5Filtre').prop('checked', false);


  $('.niveau1').css('display', 'none');
  $('.niveau2').css('display', 'none');
  $('.niveau3').css('display', 'block');
  $('.niveau4').css('display', 'none');
  $('.niveau5').css('display', 'none');
  if($('.prime_filter input:checkbox:checked').length > 0){} else{
      noFilterPrime();
  }
});
$('.prime_filter #prime4Filtre').change(function(){
  $('.prime_filter > a').removeClass('filtprimechecked');
  $('#prime1Filtre').prop('checked', false);
  $('#prime2Filtre').prop('checked', false);
  $('#prime3Filtre').prop('checked', false);
  $('#prime5Filtre').prop('checked', false);


  $('.niveau1').css('display', 'none');
  $('.niveau2').css('display', 'none');
  $('.niveau3').css('display', 'none');
  $('.niveau4').css('display', 'block');
  $('.niveau5').css('display', 'none');
  if($('.prime_filter input:checkbox:checked').length > 0){} else{
      noFilterPrime();
  }
});


$('.prime_filter #prime5Filtre').change(function(){
  $('.prime_filter > a').removeClass('filtprimechecked');
  $('#prime1Filtre').prop('checked', false);
  $('#prime2Filtre').prop('checked', false);
  $('#prime3Filtre').prop('checked', false);
  $('#prime4Filtre').prop('checked', false);


  $('.niveau1').css('display', 'none');
  $('.niveau2').css('display', 'none');
  $('.niveau3').css('display', 'none');
  $('.niveau4').css('display', 'none');
  $('.niveau5').css('display', 'block');
  if($('.prime_filter input:checkbox:checked').length > 0){} else{
      noFilterPrime();
  }
});


 //FILTRE EXPLOITS
function noFilterExploit() {
  $('.exploit_filter input').prop('checked', false);
  $('.exploit_filter > a').addClass('filtexploitchecked');
  $('.exploitniveau1, .exploitniveau2, .exploitniveau3, .exploitniveau4, .exploitniveau5').css('display', 'flex');
}


$('.exploit_filter #exploit1Filtre').change(function(){
  $('.exploit_filter > a').removeClass('filtexploitchecked');
  $('#exploit2Filtre').prop('checked', false);
  $('#exploit3Filtre').prop('checked', false);
  $('#exploit4Filtre').prop('checked', false);
  $('#exploit5Filtre').prop('checked', false);


  $('.exploitniveau1').css('display', 'flex');
  $('.exploitniveau2').css('display', 'none');
  $('.exploitniveau3').css('display', 'none');
  $('.exploitniveau4').css('display', 'none');
  $('.exploitniveau5').css('display', 'none');
  if($('.exploit_filter input:checkbox:checked').length > 0){} else{
      noFilterExploit();
  }
});
$('.exploit_filter #exploit2Filtre').change(function(){
  $('.exploit_filter > a').removeClass('filtexploitchecked');
  $('#exploit1Filtre').prop('checked', false);
  $('#exploit3Filtre').prop('checked', false);
  $('#exploit4Filtre').prop('checked', false);
  $('#exploit5Filtre').prop('checked', false);


  $('.exploitniveau1').css('display', 'none');
  $('.exploitniveau2').css('display', 'flex');
  $('.exploitniveau3').css('display', 'none');
  $('.exploitniveau4').css('display', 'none');
  $('.exploitniveau5').css('display', 'none');
  if($('.exploit_filter input:checkbox:checked').length > 0){} else{
      noFilterExploit();
  }
});
$('.exploit_filter #exploit3Filtre').change(function(){
  $('.exploit_filter > a').removeClass('filtexploitchecked');
  $('#exploit1Filtre').prop('checked', false);
  $('#exploit2Filtre').prop('checked', false);
  $('#exploit4Filtre').prop('checked', false);
  $('#exploit5Filtre').prop('checked', false);


  $('.exploitniveau1').css('display', 'none');
  $('.exploitniveau2').css('display', 'none');
  $('.exploitniveau3').css('display', 'flex');
  $('.exploitniveau4').css('display', 'none');
  $('.exploitniveau5').css('display', 'none');
  if($('.exploit_filter input:checkbox:checked').length > 0){} else{
      noFilterExploit();
  }
});
$('.exploit_filter #exploit4Filtre').change(function(){
  $('.exploit_filter > a').removeClass('filtexploitchecked');
  $('#exploit1Filtre').prop('checked', false);
  $('#exploit2Filtre').prop('checked', false);
  $('#exploit3Filtre').prop('checked', false);
  $('#exploit5Filtre').prop('checked', false);


  $('.exploitniveau1').css('display', 'none');
  $('.exploitniveau2').css('display', 'none');
  $('.exploitniveau3').css('display', 'none');
  $('.exploitniveau4').css('display', 'flex');
  $('.exploitniveau5').css('display', 'none');
  if($('.exploit_filter input:checkbox:checked').length > 0){} else{
      noFilterExploit();
  }
});


$('.exploit_filter #exploit5Filtre').change(function(){
  $('.exploit_filter > a').removeClass('filtexploitchecked');
  $('#exploit1Filtre').prop('checked', false);
  $('#exploit2Filtre').prop('checked', false);
  $('#exploit3Filtre').prop('checked', false);
  $('#exploit4Filtre').prop('checked', false);


  $('.exploitniveau1').css('display', 'none');
  $('.exploitniveau2').css('display', 'none');
  $('.exploitniveau3').css('display', 'none');
  $('.exploitniveau4').css('display', 'none');
  $('.exploitniveau5').css('display', 'flex');
  if($('.exploit_filter input:checkbox:checked').length > 0){} else{
      noFilterExploit();
  }
});


var generateCartButtons = function() {
  var generateCartButton = $('#myCart').text();
  if(generateCartButton == ''){
    $('.btn-pay').css('display','none');
    $('.btn-empty').css('display','none');
    $('.btn-previ').css('display','none');
    $('#myCart').html('')
  } else {
    $('.btn-pay').css('display','inline-block');
    $('.btn-empty').css('display','inline-block');
    $('.btn-previ').css('display','inline-block');
  }
};
