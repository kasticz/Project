$(document).ready(function(){
    $('.slider').slick({
        speed: 1200,
        adaptiveHeight: true,
        useCSS: true,
        dots:false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider_icon_right.jpg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slider_icon_left.jpg" alt=""></button>' ,
        responsive: [
            {
              breakpoint: 991,
              settings: { 
                  dots: true,
                  arrows: false
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content__active').eq($(this).index()).addClass('catalog__content__active');
      });
      $(`.catalog-item__link`).each(function(i){
          $(this).on(`click`, function(e){
              e.preventDefault();
              $(`.catalog-item__content`).eq(i).toggleClass(`catalog-item__content_active`)
              $(`.catalog-item__list`).eq(i).toggleClass(`catalog-item__list_active`)
          })
      })
      $(`.catalog-item__back`).each(function(i){
        $(this).on(`click`, function(e){
            e.preventDefault();
            $(`.catalog-item__content`).eq(i).toggleClass(`catalog-item__content_active`)
            $(`.catalog-item__list`).eq(i).toggleClass(`catalog-item__list_active`)
        })
    })
  });