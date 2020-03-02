$(document).ready(function(){
        $(".page-header__nav-menu").on("click touchend",".page-header__nav-link", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    });

//Слайдер прошлых картинок
var slideNowMember = 0;
var slideCountMember = $(".members-last__img-list").children().length;
var slideInterval = 7000;

$(document).ready (function () {
        var window = $(document).width();

            if(window > 1280) {
                widthMember = 233 * slideCountMember/2;
            } else if (window < 1280 && window > 768) {
                widthMember = 233 * slideCountMember
            }    else {
                widthMember = 320 * slideCountMember;
            };
                
            $(".members-last__img-list").css("width", widthMember);

            // обновление прошлых
            
            //обновление экспертов

});

$(window).resize(function () {
    var window = $(document).width();
        if(window > 1280) {
            widthMember = 233 * slideCountMember/2 - 2;
        } else if (window < 1280 && window > 768) {
            widthMember = 233 * slideCountMember - 2
        }    else {
            widthMember = 320 * slideCountMember;
        };
            
        $(".members-last__img-list").css("width", widthMember);
        $(".members-last__img-list").css('transform', 'translate(0, 0)');
                slideNowMember=0;
});


$(document).ready (function () {
    var switchInterval = setInterval(nextSlideMember, slideInterval);
        $('.members-last__btn-right-left-wrapper').hover(function(){
            clearInterval(switchInterval);
            },function() {
                 switchInterval = setInterval(nextSlideMember, slideInterval);
            });
});

function nextSlideMember() {
    if($(document).width() > 1400) {
        if(slideCountMember <= 12){
            $(".members-last__img-list").css('transform', 'translate(0, 0)');
                slideNowMember=0;
        }
        else {
            if(slideNowMember >= (slideCountMember/2 - 6)) {
                $(".members-last__img-list").css('transform', 'translate(0, 0)');
                slideNowMember=0;
            }
    
            else {
                var translateWidth = -$(".members-last__img-list").width() * slideNowMember / slideCountMember * 2 + (translateWidth = -$(".members-last__img-list").width() / slideCountMember * 2);

                $(".members-last__img-list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowMember++;
            }            
        }
    } else if ($(document).width() < 1400 && $(document).width() > 1280) {
        var window = $(document).width();
        var ddd = 233 - (1400 - $(document).width());
        var maxtranslateWidth = -$(".members-last__img-list").width() / (slideCountMember / 2) * (slideCountMember / 2 - 5) + ddd;
        if(slideNowMember >= (slideCountMember/2 - 5)) {
            $(".members-last__img-list").css('transform', 'translate(0, 0)');
            slideNowMember=0;
        } else if (slideNowMember < slideCountMember/2 - 5){
            var translateWidth = -$(".members-last__img-list").width() * slideNowMember / slideCountMember * 2 + (translateWidth = -$(".members-last__img-list").width() / slideCountMember * 2);
            if (translateWidth < maxtranslateWidth) {
                $(".members-last__img-list").css({
                    'transform': 'translate(' + maxtranslateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + maxtranslateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + maxtranslateWidth + 'px, 0)',
                   });
                   slideNowMember++;
            } else {
                $(".members-last__img-list").css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                   });
                   slideNowMember++;
            }
        }             
    } else if ($(document).width() < 1280 && $(document).width() > 768) {
        if (slideNowMember == slideCountMember - 2) {
            $(".members-last__img-list").css('transform', 'translate(0, 0)');
                slideNowMember=0;
        } else if (slideNowMember < slideCountMember - 3) {
            var translateWidth = -233 * slideNowMember ;
            $(".members-last__img-list").css({
             'transform': 'translate(' + translateWidth + 'px, 0)',
             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNowMember++;
            } else if (slideNowMember < slideCountMember - 2) {
                var translateWidth = -233 * slideNowMember + 69;
                $(".members-last__img-list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowMember++;
                }   
    }
     else {
        if(slideNowMember == slideCountMember || slideNowMember <= 0 || slideNowMember > slideCountMember) {
            $(".members-last__img-list").css("transform", "transplate(0,0)");
            slideNowMember=1;
        }

        else {
            var translateWidth = -$(".member-last__slide-wrapper").width()*slideNowMember;
            $(".members-last__img-list").css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNowMember++;
        }
    };
}


function prevSlideMember() {
    if($(document).width() > 1280) {
        if(slideCountMember <= 12){
            $(".members-last__img-list").css('transform', 'translate(0, 0)');
                slideNow=0;
        }
        else {
            if(slideNowMember == 1|| slideNowMember <= 0 || slideNowMember > $(".members-last__img-list").children().length/2 - 6) {
                $(".members-last__img-list").css('transform', 'translate(0, 0)');
                slideNowMember=1;
            }
    
            else {
                var translateWidth = -$(".members-last__img-list").width() * (slideNowMember -1) / slideCountMember * 2;
                $(".members-last__img-list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowMember--;
            }            
        }
    }

    else if ($(document).width() < 1280 && $(document).width() > 768) {
        if (slideNowMember > 1) {
            var translateWidth = -233 * (slideNowMember - 2) ;
            $(".members-last__img-list").css({
             'transform': 'translate(' + translateWidth + 'px, 0)',
             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNowMember--;
            }  
    }

    else {
        if(slideNow == 1 || slideNow <= 0 || slideNow > slideCountMember) {
            $(".members-last__img-list").css("transform", "transplate(0,0)");
            slideNow=1;
        }

        else {
            var translateWidth = -$(".member-last__slide-wrapper").width()*(slideNow-2);
            $(".members-last__img-list").css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow--;
        }
    };
};

$('.members-last__btn-right').click(function() {
    nextSlideMember();
});

$(".members-last__btn-right").on("touchend", function() {
    nextSlideMember();
});

$('.members-last__btn-left').click(function() {
    prevSlideMember();
});

$(".members-last__btn-left").on("touchend", function() {
    prevSlideMember();
});

if ($(document).width() < 1280) {
    $(".members-last").swipe( {
        swipeLeft:leftSwipeMember,
        swipeRight:rightSwipeMember,
        threshold:0
    })
    function leftSwipeMember(event){
        nextSlideMember();
    }
    function rightSwipeMember(event){
        prevSlideMember();
    }
}




// слфйдер экспертов

var slideNowExperts = 0;
var slideCountExperts = $(".experts__list").children().length;


$(document).ready (function () {
    var window = $(document).width();
    if(window > 768 && window < 1280 || window > 1400) {
        widthExperts = (290+60) * slideCountExperts - 60;
        
    }   else if(window > 1280 && window < 1400) {
        widthExperts = (290+30) * slideCountExperts - 60;
    } else {
            widthExperts = (274 + 40) * slideCountExperts - 40;
        };
        
    $(".experts__list").css("width", widthExperts);
});

$(window).resize( function () {
    var window = $(document).width();
    if(window > 768 && window < 1280 || window > 1400) {
        widthExperts = (290+60) * slideCountExperts - 60;
        
    }   else if(window > 1280 && window < 1400) {
        widthExperts = (290+30) * slideCountExperts - 60;
    } else {
            widthExperts = (274 + 40) * slideCountExperts - 40;
        };
        
    $(".experts__list").css("width", widthExperts);
    $(".experts__list").css({
        'transform': 'translate(' + 0 + 'px, 0)',
        '-webkit-transform': 'translate(' + 0 + 'px, 0)',
        '-ms-transform': 'translate(' + 0 + 'px, 0)',
       });
       slideNowExperts=0;
       activeBtnExperts = 0;
       $('#slider-switch-experts .slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
        $("#slider-switch-experts .slider-switch__item").eq(activeBtnExperts).children().addClass("slider-switch__button--active");


});

function nextSlideExperts() { 
    var window = $(document).width();
    if ( slideNowExperts < 0) {
        slideNowExperts = 0;
    }

    if(window > 1280 && slideNowExperts >= slideCountExperts) {
        slideNowExperts = slideCountExperts - 4
        
    }   else if (window > 768 && window < 1280 && slideNowExperts >= slideCountExperts) {
        slideNowExperts = slideCountExperts - 2
        } else if (slideNowExperts >= slideCountExperts){
            slideNowExperts = slideCountExperts - 1 
        };

    if (($(document).width() > 1280 && slideNowExperts+4 < slideCountExperts) || ($(document).width() < 1280 && $(document).width() > 768 && slideNowExperts+2 < slideCountExperts) || ($(document).width() <= 768)  && slideNowExperts < slideCountExperts - 1) {
        if (($(document).width() < 1280 && $(document).width() > 768 && slideNowExperts+2 < slideCountExperts)) {
            var translateWidth = -$(".experts__list").width() / slideCountExperts  *  slideNowExperts + (-$(".experts__list").width() / slideCountExperts) + 12;
        } else {
            var translateWidth = -$(".experts__list").width() / slideCountExperts  *  slideNowExperts + (-$(".experts__list").width() / slideCountExperts) + 4;
        }
        
                $(".experts__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowExperts++;
    }  
    if(window > 1280) {
        var activeBtnExperts = Math.ceil(slideNowExperts/ 4)
        
    }   else if (window > 768 && window < 1280) {
        var activeBtnExperts = Math.ceil(slideNowExperts/ 2)
        } else {
            var activeBtnExperts = Math.ceil(slideNowExperts)           
        };
        $('#slider-switch-experts .slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
        $("#slider-switch-experts .slider-switch__item").eq(activeBtnExperts).children().addClass("slider-switch__button--active"); 
};

function prevSlideExperts() {
    var window = $(document).width();

    if ( slideNowExperts < 0) {
        slideNowExperts = 0;
    }

    if(window > 1280 && slideNowExperts >= slideCountExperts || window > 1280 &&  slideNowExperts >= 4 *Math.ceil(slideCountExperts/4 - 1) ) {
        slideNowExperts = slideCountExperts - 4
        
    }   else if (window > 768 && window < 1280 && slideNowExperts >= slideCountExperts || window > 768 && window < 1280 &&  slideNowExperts >= 2 * Math.ceil(slideCountExperts/2-1) ) {
        slideNowExperts = slideCountExperts - 2
        } else if (slideNowExperts >= slideCountExperts){
            slideNowExperts = slideCountExperts - 1 
        };

     if (slideNowExperts > 0) {
               var translateWidth = -$(".experts__list").width() / slideCountExperts  *  (slideNowExperts - 1);
                $(".experts__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowExperts--;
            }
            if(window > 1280) {
                var activeBtnExperts = Math.ceil(slideNowExperts/ 4)
                
            }   else if (window > 768 && window < 1280) {
                var activeBtnExperts = Math.ceil(slideNowExperts/ 2)
                } else {
                    var activeBtnExperts = Math.ceil(slideNowExperts)           
                };
                $('#slider-switch-experts .slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
                $("#slider-switch-experts .slider-switch__item").eq(activeBtnExperts).children().addClass("slider-switch__button--active");
};

$(".experts__btn-right").click(function(){
    nextSlideExperts();
});

$(".experts__btn-right").on("touchend", function() {
    nextSlideExperts();
});

$(".experts__btn-left").click(function(){
    prevSlideExperts();
});

$(".experts__btn-left").on("touchend", function() {
    prevSlideExperts();
});

if ($(document).width() < 1280) {
    $(".experts").swipe( {
        swipeLeft:leftSwipeExp,
        swipeRight:rightSwipeExp,
        threshold:0
    })
    function leftSwipeExp(event){
        nextSlideExperts();
    }
    function rightSwipeExp(event){
        prevSlideExperts();
    }
}




$(document).ready (function () {
    var btnQuntityExperts;
    var window = $(document).width();
    $('#slider-switch-experts').children().remove();
    if (window > 1280) {
         btnQuntityExperts = Math.ceil(slideCountExperts/4);
    } else if (window < 1280 && window > 768) {
         btnQuntityExperts = Math.ceil(slideCountExperts/2);
    } else {
         btnQuntityExperts = slideCountExperts;
    }
    for (let i=0; i < btnQuntityExperts; i++) {
        $('#slider-switch-experts').append('<li class="slider-switch__item"><button class="slider-switch__button"></button></li>');
    }

    $("#slider-switch-experts .slider-switch__item").eq(0).children().addClass("slider-switch__button--active");
});

$(window).resize (function () {
    $('#slider-switch-experts').children().remove();
    var btnQuntityExperts;
    var window = $(document).width();
    
    if (window > 1280) {
         btnQuntityExperts = Math.ceil(slideCountExperts/4);
    } else if (window < 1280 && window > 768) {
         btnQuntityExperts = Math.ceil(slideCountExperts/2);
    } else {
         btnQuntityExperts = slideCountExperts;
    }
    for (let i=0; i < btnQuntityExperts; i++) {
        $('#slider-switch-experts').append('<li class="slider-switch__item"><button class="slider-switch__button"></button></li>');
    }

    $("#slider-switch-experts .slider-switch__item").eq(0).children().addClass("slider-switch__button--active");
});

$(document).on("click touchend", "#slider-switch-experts .slider-switch__button", function () {
    var window = $(document).width();
    var slideNowExpertsBtn = $(this).closest('.slider-switch__item').index();
    $(this).closest('.slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
    $(this).addClass("slider-switch__button--active");
    if (window > 1280) {
       var maxtranslateWidth = -$(".experts__list").width() / slideCountExperts * (slideCountExperts - 4) + 4;
       var translateWidth = -$(".experts__list").width() / slideCountExperts  * 4 * slideNowExpertsBtn + 4;
       slideNowExperts = 4 * slideNowExpertsBtn
       
   } else if (window < 1280 && window > 768) {
       var maxtranslateWidth = -$(".experts__list").width() / slideCountExperts * (slideCountExperts - 2)+4;
       var translateWidth = -$(".experts__list").width() / slideCountExperts  * 2 * slideNowExpertsBtn+4;
       slideNowExperts = 2 * slideNowExpertsBtn
   } else {
       var maxtranslateWidth = -$(".experts__list").width() / slideCountExperts * (slideCountExperts - 1);
       var translateWidth = -$(".experts__list").width() / slideCountExperts  * 1 * slideNowExpertsBtn;
       slideNowExperts = 1 * slideNowExpertsBtn
   }

   if (maxtranslateWidth >= translateWidth) {
    $(".experts__list").css({
        'transform': 'translate(' + maxtranslateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + maxtranslateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + maxtranslateWidth + 'px, 0)',
       });
   } else {
    $(".experts__list").css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
       });
   }
   
})

// Слайдер участников

var slideNowFeedback = 0;
var slideCountFeedback = $(".feedback__list").children().length;

$(document).ready (function () {
    var window = $(document).width();
    if(window > 1280) {
        widthFeedback = (290+160) * slideCountFeedback;
        
    }   else if (window > 768 && window < 1280) {
            widthFeedback = (290+90) * slideCountFeedback;
        } else {
            widthFeedback = (290) * slideCountFeedback;            
        };
        
    $(".feedback__list").css("width", widthFeedback);
});

$(window).resize (function () {
    var window = $(document).width();
    if(window > 1280) {
        widthFeedback = (290+160) * slideCountFeedback;
        
    }   else if (window > 768 && window < 1280) {
            widthFeedback = (290+90) * slideCountFeedback;
        } else {
            widthFeedback = (290) * slideCountFeedback;            
        };
        
    $(".feedback__list").css("width", widthFeedback);
    $(".feedback__list").css({
        'transform': 'translate(' + 0 + 'px, 0)',
        '-webkit-transform': 'translate(' + 0 + 'px, 0)',
        '-ms-transform': 'translate(' + 0 + 'px, 0)',
       });
       slideNowFeedback=0;
       activeBtnFeedback = 0;
       $('#slider-switch-feedback .slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
       $("#slider-switch-feedback .slider-switch__item").eq(activeBtnFeedback).children().addClass("slider-switch__button--active");
});

function nextSlideFeedback() {
    var window = $(document).width();
    if(window > 1280) {
        widthFeedback = (290+160) * slideCountFeedback;
        
    }   else if (window > 768 && window < 1280) {
            widthFeedback = (290+90) * slideCountFeedback;
        } else {
            widthFeedback = (290 + 30) * slideCountFeedback;            
        };
        if ( slideNowFeedback < 0) {
            slideNowFeedback = 0;
        }
        if (($(document).width() > 1280 && slideNowFeedback + 3 < slideCountFeedback) || ($(document).width() < 1280 && $(document).width() > 768 && slideNowFeedback + 2 < slideCountFeedback) || ($(document).width() <= 768)  && slideNowFeedback < slideCountFeedback - 1) {
            var translateWidth = -widthFeedback / slideCountFeedback  *  slideNowFeedback + (-widthFeedback / slideCountFeedback);
                $(".feedback__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowFeedback++;
              }
             if(window > 1280) {
                 var activeBtnFeedback = Math.ceil(slideNowFeedback/ 3)
             }   else if (window > 768 && window < 1280) {
                 var activeBtnFeedback = Math.ceil(slideNowFeedback/ 2)
                 } else {
                     var activeBtnFeedback = Math.ceil(slideNowFeedback)           
                 };
                 $('#slider-switch-feedback .slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
                 $("#slider-switch-feedback .slider-switch__item").eq(activeBtnFeedback).children().addClass("slider-switch__button--active");
}

function prevSlideFeedback() {
    var window = $(document).width();
    if(window > 1280) {
        widthFeedback = (290+160) * slideCountFeedback;
        
    }   else if (window > 768 && window < 1280) {
            widthFeedback = (290+90) * slideCountFeedback;
        } else {
            widthFeedback = (290 + 30) * slideCountFeedback;            
        };
        if ( slideNowFeedback < 0) {
            slideNowFeedback = 0;
        }
        if(window > 1280 && slideNowFeedback >= slideCountFeedback) {
            slideNowFeedback = slideCountFeedback - 3
            
        }   else if (window > 768 && window < 1280 && slideNowFeedback >= slideCountFeedback) {
            slideNowFeedback = slideCountFeedback - 2
            } else if (slideNowFeedback >= slideCountFeedback){
                slideNowFeedback = slideCountFeedback - 1 
            };

        if (slideNowFeedback >= slideCountFeedback) {
            var translateWidth = -widthFeedback / slideCountFeedback  *  (slideNowFeedback - (slideCountFeedback-slideNowFeedback));
                $(".feedback__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowFeedback--;
         }    

        if (slideNowFeedback > 0) {
            var translateWidth = -widthFeedback / slideCountFeedback  *  (slideNowFeedback - 1);
                $(".feedback__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowFeedback--;
         }    
         if(window > 1280) {
            var activeBtnFeedback = Math.ceil(slideNowFeedback/ 3)
            
        }   else if (window > 768 && window < 1280) {
            var activeBtnFeedback = Math.ceil(slideNowFeedback/ 2)
            } else {
                var activeBtnFeedback = Math.ceil(slideNowFeedback)           
            };
            $('#slider-switch-feedback .slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
            $("#slider-switch-feedback .slider-switch__item").eq(activeBtnFeedback).children().addClass("slider-switch__button--active");
};

$(".feedback__btn-right").click(function(){
    nextSlideFeedback();
});

$(".feedback__btn-right").on("touchend", function() {
    nextSlideFeedback();
});

$(".feedback__btn-left").click(function(){
    prevSlideFeedback();
});

$(".feedback__btn-left").on("touchend", function() {
    prevSlideFeedback();
});

$(document).ready (function () {

    var btnQuntityFeedback;
    var window = $(document).width();
    $("#slider-switch-feedback").children().remove();
    if (window > 1280) {
         btnQuntityFeedback = Math.ceil(slideCountFeedback/3);
    } else if (window < 1280 && window > 768) {
         btnQuntityFeedback = Math.ceil(slideCountFeedback/2);
    } else {
         btnQuntityFeedback = slideCountFeedback;
    }
    for (let i=0; i < btnQuntityFeedback; i++) {
        $('#slider-switch-feedback').append('<li class="slider-switch__item"><button class="slider-switch__button"></button></li>');
    }

    $("#slider-switch-feedback .slider-switch__item").eq(0).children().addClass("slider-switch__button--active");
});

$(window).resize (function () {
    $("#slider-switch-feedback").children().remove();
    var btnQuntityFeedback;
    var window = $(document).width();
    if (window > 1280) {
         btnQuntityFeedback = Math.ceil(slideCountFeedback/3);
    } else if (window < 1280 && window > 768) {
         btnQuntityFeedback = Math.ceil(slideCountFeedback/2);
    } else {
         btnQuntityFeedback = slideCountFeedback;
    }
    for (let i=0; i < btnQuntityFeedback; i++) {
        $('#slider-switch-feedback').append('<li class="slider-switch__item"><button class="slider-switch__button"></button></li>');
    }

    $("#slider-switch-feedback .slider-switch__item").eq(0).children().addClass("slider-switch__button--active");
});

$(document).on("click touchend", "#slider-switch-feedback .slider-switch__button", function () {
    if(window > 1280) {
        widthFeedback = (290+160) * slideCountFeedback;
        
    }   else if (window > 768 && window < 1280) {
            widthFeedback = (290+90) * slideCountFeedback;
        } else {
            widthFeedback = (290 + 30) * slideCountFeedback;            
        };
    var window = $(document).width();
    var slideNowFeedbackBtn = $(this).closest('.slider-switch__item').index();
    $(this).closest('.slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
    $(this).addClass("slider-switch__button--active");
    
    if (window > 1280) {
       var maxtranslateWidth = -$(".feedback__list").width() / slideCountFeedback * (slideCountFeedback - 3);
       var translateWidth = -$(".feedback__list").width() / slideCountFeedback  * 3 * slideNowFeedbackBtn;
       slideNowFeedback = slideCountFeedback * slideNowFeedbackBtn
       
   } else if (window < 1280 && window > 768) {
       var maxtranslateWidth = -$(".feedback__list").width() / slideCountFeedback * (slideCountFeedback - 2);
       var translateWidth = -$(".feedback__list").width() / slideCountFeedback  * 2 * slideNowFeedbackBtn;
        slideNowFeedback = slideCountFeedback * slideNowFeedbackBtn
   } else {
       var maxtranslateWidth = -widthFeedback / slideCountFeedback * (slideCountFeedback - 1);
       var translateWidth = -widthFeedback / slideCountFeedback  * slideNowFeedbackBtn -1;
       slideNowFeedback = 1 * slideNowFeedbackBtn
   }
   
   if (maxtranslateWidth >= translateWidth) {
    $(".feedback__list").css({
        'transform': 'translate(' + maxtranslateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + maxtranslateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + maxtranslateWidth + 'px, 0)',
       });
   } else {
    $(".feedback__list").css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
       });
   }
   
   
})

if ($(document).width() < 1280) {
    $(".feedback").swipe( {
        swipeLeft:leftSwipeFeedback,
        swipeRight:rightSwipeFeedback,
        threshold:0
    })
    function leftSwipeFeedback(event){
        nextSlideFeedback();
    }
    function rightSwipeFeedback(event){
        prevSlideFeedback();
    }
}


// fedback popip


var slideCountFeedbackPopup = $(".feedback-popup__list").children().length;
var slideNowFeedbackPopup = 0;

$(document).ready (function () {
    var window = $(document).width();
    var widthlist = $(".feedback-popup__item").outerWidth(true) * slideCountFeedbackPopup;
    $(".feedback-popup__list").css("width", widthlist);
    $(".sponsors__list").children().eq(1).css('display', 'none');
});

$(window).resize (function () {
    var window = $(document).width();
    var widthlist = $(".feedback-popup__item").outerWidth(true) * slideCountFeedbackPopup;
    $(".feedback-popup__list").css("width", widthlist);
    $(".feedback-popup__list").css({
        'transform': 'translate(' + 0 + 'px, 0)',
        '-webkit-transform': 'translate(' + 0 + 'px, 0)',
        '-ms-transform': 'translate(' + 0 + 'px, 0)',
       });

        slideNowFeedbackPopup = 1;
       var activeBtnFeedbackPopup = 0;   
        $('#slider-switch-feedback-popup .slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
        $("#slider-switch-feedback-popup .slider-switch__item").eq(activeBtnFeedbackPopup).children().addClass("slider-switch__button--active");
        if (window > 768) {
            var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup).children(".feedback-popup__desc").height() ;
        } else {
            var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup).children(".feedback-popup__desc").height();
            ddda = ddda + 60;
        }
        $(".feedback-popup__wrapper").css("height", (ddda+329) + "px");
});

$(".feedback__desc-btn").click(function() {
    $(".feedback__list").on("click", ".feedback__desc-btn", function() {
        var window = $(document).width();
        var widthlist = $(".feedback-popup__item").outerWidth(true) * slideCountFeedbackPopup;
        slideNowFeedbackPopup = $(this).closest('.feedback__card').index();
        $(".feedback-popup").show(500);
        $(".feedback-popup").css({"display": "flex"});
        var translateWidth = -widthlist / slideCountFeedbackPopup  *  slideNowFeedbackPopup;
                $(".feedback-popup__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowFeedbackPopup++;
                if (window > 768) {
                    var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height() ;
                } else {
                    var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height();
                    ddda = ddda + 60;
                }
                $(".feedback-popup__wrapper").css("height", (ddda+329) + "px");
                var activeBtnFeedbackPopup = slideNowFeedbackPopup;        
                $('#slider-switch-feedback-popup .slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
                $("#slider-switch-feedback-popup .slider-switch__item").eq(activeBtnFeedbackPopup-1).children().addClass("slider-switch__button--active");
    }); 

    $(".feedback__list").on("touchend", ".feedback__desc-btn", function() {
        var window = $(document).width();
        var widthlist = $(".feedback-popup__item").outerWidth(true) * slideCountFeedbackPopup;
        slideNowFeedbackPopup = $(this).closest('.feedback__card').index();
        $(".feedback-popup").show(500);
        $(".feedback-popup").css({"display": "flex"});
        var translateWidth = -widthlist / slideCountFeedbackPopup  *  slideNowFeedbackPopup;
                $(".feedback-popup__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowFeedbackPopup++;
                if (window > 768) {
                    var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height() ;
                } else {
                    var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height();
                    ddda = ddda + 60;
                }
                $(".feedback-popup__wrapper").css("height", (ddda+329) + "px");
    }); 
    
});

$(".feedback__desc-btn").on("touchend", function() {
    $(".feedback__list").on("touchend", ".feedback__desc-btn", function() {
        var window = $(document).width();
        var widthlist = $(".feedback-popup__item").outerWidth(true) * slideCountFeedbackPopup;
        slideNowFeedbackPopup = $(this).closest('.feedback__card').index();
        $(".feedback-popup").show(500);
        $(".feedback-popup").css({"display": "flex"});
        var translateWidth = -widthlist / slideCountFeedbackPopup  *  slideNowFeedbackPopup;
                $(".feedback-popup__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowFeedbackPopup++;
                if (window > 768) {
                    var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height() ;
                } else {
                    var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height();
                    ddda = ddda + 60;
                }
                $(".feedback-popup__wrapper").css("height", (ddda+329) + "px");
    }); 
    
});


function nextSlideFeedbackPopup() {
    var window = $(document).width();
    var widthlist = $(".feedback-popup__item").outerWidth(true) * slideCountFeedbackPopup;
    if (slideNowFeedbackPopup < slideCountFeedback ) {  
        var translateWidth = -widthlist / slideCountFeedbackPopup  *  slideNowFeedbackPopup;
                $(".feedback-popup__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowFeedbackPopup++;
    }
    var activeBtnFeedbackPopup = Math.ceil(slideNowFeedbackPopup)           
    $('#slider-switch-feedback-popup .slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
    $("#slider-switch-feedback-popup .slider-switch__item").eq(activeBtnFeedbackPopup-1).children().addClass("slider-switch__button--active");
    if (window > 768) {
        var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height() ;
    } else {
        var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height();
        ddda = ddda + 60;
    }
    $(".feedback-popup__wrapper").css("height", (ddda+329) + "px");
};

function prevSlideFeedbackPopup() {
    var window = $(document).width();
    var widthlist = $(".feedback-popup__item").outerWidth(true) * slideCountFeedbackPopup;
    if (slideNowFeedbackPopup > 1) {
        var translateWidth = -widthlist / slideCountFeedbackPopup  *  (slideNowFeedbackPopup - 2);
                $(".feedback-popup__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNowFeedbackPopup--;
    }
    var activeBtnFeedbackPopup = Math.ceil(slideNowFeedbackPopup)           
    $('#slider-switch-feedback-popup .slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
    $("#slider-switch-feedback-popup .slider-switch__item").eq(activeBtnFeedbackPopup-1).children().addClass("slider-switch__button--active");
    if (window > 768) {
        var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height() ;
    } else {
        var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height();
        ddda = ddda + 60;
    }
    $(".feedback-popup__wrapper").css("height", (ddda+329) + "px");
};

$(document).ready (function () {
    var btnQuntityFeedback;
    var window = $(document).width();
     btnQuntityFeedbackPopup = slideCountFeedbackPopup

    for (let i=0; i < btnQuntityFeedbackPopup; i++) {
        $('#slider-switch-feedback-popup').append('<li class="slider-switch__item"><button class="slider-switch__button"></button></li>');
    }

    $("#slider-switch-feedback-popup .slider-switch__item").eq(0).children().addClass("slider-switch__button--active");
});

$(document).on("click", "#slider-switch-feedback-popup .slider-switch__button", function () {
    var window = $(document).width();
    var widthlist = $(".feedback-popup__item").outerWidth(true) * slideCountFeedbackPopup;
    var slideNowFeedbackPopupBtn = $(this).closest('.slider-switch__item').index();
    $(this).closest('.slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
    $(this).addClass("slider-switch__button--active");
     var maxtranslateWidth = -widthlist / slideCountFeedbackPopup * (slideCountFeedbackPopup - 1);
     var translateWidth = -widthlist / slideCountFeedbackPopup  * 1 * slideNowFeedbackPopupBtn;
     slideNowFeedbackPopup = slideNowFeedbackPopupBtn + 1


   if (maxtranslateWidth >= translateWidth) {
    $(".feedback-popup__list").css({
        'transform': 'translate(' + maxtranslateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + maxtranslateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + maxtranslateWidth + 'px, 0)',
       });
   } else {
    $(".feedback-popup__list").css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
       });
   }
   var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height() ;
   if (window > 768) {
    var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height() ;
} else {
    var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height();
    ddda = ddda + 60;
}
$(".feedback-popup__wrapper").css("height", (ddda+329) + "px");
})

$(document).on("touchend", "#slider-switch-feedback-popup .slider-switch__button", function () {
    var window = $(document).width();
    var widthlist = $(".feedback-popup__item").outerWidth(true) * slideCountFeedbackPopup;
    var slideNowFeedbackPopupBtn = $(this).closest('.slider-switch__item').index();
    $(this).closest('.slider-switch__item').siblings().children().removeClass("slider-switch__button--active");
    $(this).addClass("slider-switch__button--active");
     var maxtranslateWidth = -widthlist / slideCountFeedbackPopup * (slideCountFeedbackPopup - 1);
     var translateWidth = -widthlist / slideCountFeedbackPopup  * 1 * slideNowFeedbackPopupBtn;
     slideNowFeedbackPopup = slideNowFeedbackPopupBtn + 1


   if (maxtranslateWidth >= translateWidth) {
    $(".feedback-popup__list").css({
        'transform': 'translate(' + maxtranslateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + maxtranslateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + maxtranslateWidth + 'px, 0)',
       });
   } else {
    $(".feedback-popup__list").css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
       });
   }
   var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height() ;
   if (window > 768) {
    var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height() ;
} else {
    var ddda = $(".feedback-popup__list").children(".feedback-popup__item").eq(slideNowFeedbackPopup-1).children(".feedback-popup__desc").height();
    ddda = ddda + 60;
}
$(".feedback-popup__wrapper").css("height", (ddda+329) + "px");
})


if ($(document).width() < 1280) {
    $(".feedback-popup__wrapper").swipe( {
        swipeLeft:leftSwipeFeedbackPopup,
        swipeRight:rightSwipeFeedbackPopup,
        threshold:0
    })
    function leftSwipeFeedbackPopup(event){
        nextSlideFeedbackPopup();
    }
    function rightSwipeFeedbackPopup(event){
        prevSlideFeedbackPopup();
    }
}


// Слайдер организаторов

var slideNowSponsors = 0;
var slideCountSponsors = $(".sponsors__list").children().length;

$(window).resize (function () {
    var window = $(document).width();
    $(".sponsors__list").css({
        'transform': 'translate(' + 0 + 'px, 0)',
        '-webkit-transform': 'translate(' + 0 + 'px, 0)',
        '-ms-transform': 'translate(' + 0 + 'px, 0)',
        'z-index': 40000,
        'position': 'relative',
       });
       var slideNowSponsors = 0;
});

function nextSlideSponsors() {
    var window = $(document).width();
    if(window > 1280) {
        widthSponsors = (1240) * slideCountSponsors;
        
    }   else if (window > 768 && window < 1280) {
            widthSponsors = (728) * slideCountSponsors;
        } else {
            widthSponsors = (305) * slideCountSponsors;            
        };
        if (slideNowSponsors < slideCountSponsors - 1) {
            var translateWidth = -widthSponsors / slideCountSponsors  *  slideNowSponsors + (-widthSponsors / slideCountSponsors);
                $(".sponsors__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                 'z-index': 40000,
                 'position': 'relative',
                });
                $(".sponsors__card").css({
                    'z-index': 40000,
                    'position': 'relative',
                })
                $(".sponsors__list").children().eq(slideNowSponsors+1).css('display', 'flex');
                slideNowSponsors++;
}
};

function prevSlideSponsors() {
    var window = $(document).width();
    if(window > 1280) {
        widthSponsors = (1240) * slideCountSponsors;
        
    }   else if (window > 768 && window < 1280) {
            widthSponsors = (728) * slideCountSponsors;
        } else {
            widthSponsors = (305) * slideCountSponsors;            
        };
        if (slideNowSponsors > 0) {
            var translateWidth = -widthSponsors / slideCountSponsors  *  (slideNowSponsors - 1);
                $(".sponsors__list").css({
                 'transform': 'translate(' + translateWidth + 'px, 0)',
                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                 'z-index': 40000,
                 'position': 'relative',
                });
                $(".sponsors__card").css({
                    'z-index': 40000,
                    'position': 'relative',
                })
                slideNowSponsors--;
}
};

$(".sponsors__btn-right").click(function(){
    nextSlideSponsors();
});

$(".sponsors__btn-right").on("touchend", function() {
    nextSlideSponsors();
});


$(".sponsors__btn-left").click(function(){
    prevSlideSponsors();
});

$(".sponsors__btn-left").on("touchend", function() {
    prevSlideSponsors();
});


if ($(document).width() < 1280) {
    $(".sponsors").swipe( {
        swipeLeft:leftSwipeSponsors,
        swipeRight:rightSwipeSponsors,
        threshold:0
    })
    function leftSwipeSponsors(event){
        nextSlideSponsors();
    }
    function rightSwipeSponsors(event){
        prevSlideSponsors();
    }
}



//Попапы

$(".main-info__button").click(function(event) {
    
    event.preventDefault();
    $(".form-popup__wrapper").show(500);
    $(".form-popup__wrapper").css("display", "flex");
});

$(".main-info__button").on("touchend", function(event) {
    event.preventDefault();
    $(".form-popup__wrapper").show(500);
    $(".form-popup__wrapper").css("display", "flex");
});

$(".contacts__btn").click(function(event) {
    
    event.preventDefault();
    $(".form-popup__wrapper").show(500);
    $(".form-popup__wrapper").css("display", "flex");
});

$(".contacts__btn").on("touchend", function(event) {
    event.preventDefault();
    $(".form-popup__wrapper").show(500);
    $(".form-popup__wrapper").css("display", "flex");
});


$(".page-header__burger").click(function() {
    $(".page-header__nav-menu").show(200);
    $(".page-header__nav-menu").css({"display": "flex"});
    $(".page-header__burger").css({"display": "none"});
    $(".page-header__burger-close").css({"display": "block"});
});

$(".page-header__burger").on("touchend", function(event) {
    event.preventDefault();
    $(".page-header__nav-menu").show(200);
    $(".page-header__nav-menu").css({"display": "flex"});
    $(".page-header__burger").css({"display": "none"});
    $(".page-header__burger-close").css({"display": "block"});
});

$(".page-header__burger-close").click(function() {
    $(".page-header__nav-menu").hide();
    $(".page-header__burger").css({"display": "block"});
    $(".page-header__burger-close").css({"display": "none"});
});

$(".page-header__burger-close").on("touchend", function(event) {
    event.preventDefault();
    $(".page-header__nav-menu").hide(200);
    $(".page-header__burger").css({"display": "block"});
    $(".page-header__burger-close").css({"display": "none"});
});









$(".feedback-popup__btn-right").click(function () {
    nextSlideFeedbackPopup();
});

$(".feedback-popup__btn-right").on("touchend", function() {
    nextSlideFeedbackPopup();
});

$(".feedback-popup__btn-left").click(function () {
    prevSlideFeedbackPopup();
});

$(".feedback-popup__btn-left").on("touchend", function() {
    prevSlideFeedbackPopup();
});

$(".feedback-popup__close").click(function () {
    $(".feedback-popup").hide(500);
});

$(".feedback-popup__close").on("touchend", function() {
    $(".feedback-popup").hide(500);
});


$(".form-popup__close").click(function (event) {
    event.preventDefault();
    $(".form-popup__wrapper").hide(500);
});

$(".form-popup__close").on("touchend", function(event) {
    event.preventDefault();
    $(".form-popup__wrapper").hide(500);
});

$(".sponsors-btn").click(function () {
    $(this).prev().children().last().slideToggle(1000);
});

$(".sponsors-btn").on("touchend", function() {
    $(this).prev().children().last().slideToggle(1000);
});

$("#video-button").on("click touchend", function(){
    $(".video-popup").show(500);
    $(".video-popup").css({"display": "flex"})
    $(".video-popup__wrapper").append("<embed src="+"https://www.youtube.com/embed/1reoMaxECqc " + "frameborder=" + "0" + " allow=" + "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture " + "allowfullscreen>")
})


jQuery(function($){
	$(".feedback-popup").on("click touchend", function (e) { // событие клика по веб-документу
		var div = $(".feedback-popup__wrapper"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".feedback-popup").hide(500); // скрываем его
		}
	});
});

jQuery(function($){
	$(".form-popup__wrapper").on("click touchend", function (e) { // событие клика по веб-документу
		var div = $(".form-popup"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".form-popup__wrapper").hide(500); // скрываем его
		}
	});
});

jQuery(function($){
	$(".video-popup").on("click touchend", function (e) { // событие клика по веб-документу
		var div = $(".video-popup__wrapper"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".video-popup").hide(500);
                function delvideo() {
                    $(".video-popup__wrapper").children().remove();
                }
                setTimeout(delvideo, 500)
		}
	});
});