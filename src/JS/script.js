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
    //   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    //     $(this)
    //       .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    //       .closest('div.container').find('div.catalog__content').removeClass('catalog__content__active').eq($(this).index()).addClass('catalog__content__active');
    //   });
    //   $(`.catalog-item__link`).each(function(i){
    //       $(this).on(`click`, function(e){
    //           e.preventDefault();
    //           $(`.catalog-item__content`).eq(i).toggleClass(`catalog-item__content_active`)
    //           $(`.catalog-item__list`).eq(i).toggleClass(`catalog-item__list_active`)
    //       })
    //   })
    //   $(`.catalog-item__back`).each(function(i){
    //     $(this).on(`click`, function(e){
    //         e.preventDefault();
    //         $(`.catalog-item__content`).eq(i).toggleClass(`catalog-item__content_active`)
    //         $(`.catalog-item__list`).eq(i).toggleClass(`catalog-item__list_active`)
    //     })
    // })  
    let slider = document.querySelector(`.slider__catalog`)    
    for(let item of document.querySelectorAll(`.catalog-item`)){          
        let elem = document.createElement(`div`)
        elem.append(item.cloneNode(true));
        slider.append(elem)   
    }
    let btns = document.querySelectorAll(`.catalog-item__link`)
    let cont = document.querySelectorAll(`.catalog-item__content`)
    let lists = document.querySelectorAll(`.catalog-item__list`)
    let backs = document.querySelectorAll(`.catalog-item__back`)
    btns.forEach((item,i)=>{
      item.addEventListener(`click`,e=>{
        e.preventDefault()
        cont[i].classList.toggle(`catalog-item__content_active`)
        lists[i].classList.toggle(`catalog-item__list_active`)        
      })
    })
    backs.forEach((item,i)=>{
      item.addEventListener(`click`,e=>{
        e.preventDefault()
        cont[i].classList.toggle(`catalog-item__content_active`)
        lists[i].classList.toggle(`catalog-item__list_active`)        
      })
    })

    const tabs = document.querySelectorAll(`.catalog__tab`),
    contents = document.querySelectorAll(`.catalog__content`);
    tabs.forEach((item,i)=>{
      item.addEventListener(`click`, e =>{
        e.preventDefault()
        contents.forEach((item,index)=>{
          item.classList.remove(`catalog__content__active`)
          tabs[index].classList.remove(`catalog__tab_active`)
        })
        tabs[i].classList.toggle(`catalog__tab_active`)
        contents[i].classList.add(`catalog__content__active`)

        // -----------------------------------------
      //   slider.innerHTML = "";
      //   let currContent = contents[i]
      //   for(let i = 0; i < currContent.children.length;i++){
      //     let elem = document.createElement(`div`)
      //     elem.append(currContent.children.item(i).cloneNode(true));
      //     slider.append(elem)
      //   }   
      // $('.slider__catalog').slick({
      //   speed: 1200,
      //   adaptiveHeight: true,
      //   useCSS: true,
      //   dots:false,
      //   prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider_icon_right.jpg" alt=""></button>',
      //   nextArrow: '<button type="button" class="slick-next"><img src="../img/slider_icon_left.jpg" alt=""></button>' ,
      // });
      // ===============================================
      
      })
    })



    $('.slider__catalog').slick({
        speed: 1200,
        adaptiveHeight: true,
        useCSS: true,
        dots:false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider_icon_right.jpg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slider_icon_left.jpg" alt=""></button>' ,
      });

  });


console.log(document.querySelectorAll(`.reviews__wrapper:nth-of-type(2)`))