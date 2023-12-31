$(document).ready(function(){
    $(".review_carousel").owlCarousel({
        loop:true, 
        nav:false,
        dots:false,
        items:2.4,
        margin: 49,
        // autoplay:true,
        responsive : { 
          0 : {
              items:1.2, 
              margin: 11,
          }, 
          480 : {
              items:1.2, 
          }, 
          768 : {
              items:1.4,  
          },
          991 : {
              items:2.4,  
              margin: 49,
          },
          1200 : {
              items:2.1,  
              margin: 49,
          }
      }
    });
    $(".blog_carousel").owlCarousel({
        loop:true, 
        nav:true,
        dots:false,
        items:3,
        margin: 45,
        autoplay:true,
        navText: ["<img src='assets/images/home/blog/prev.png'>","<img src='assets/images/home/blog/next.png'>"],
        responsive : { 
          0 : {
              items:1, 
              margin: 20,
              dots:true,
              nav:false,
          }, 
          480 : {
              items:1,              
              margin: 20,
              dots:true,
              nav:false, 
          }, 
          768 : {
              items:3,
              dots:false,
              nav:true,
          }, 
      }
    });


    $(document).on('click','.banner_tab_click', function(){
       var img_path =  $(this).attr('img_path');  
       var style_path =' url('+ img_path +') no-repeat scroll center center / cover';
       $('.banner_bg').css('background', style_path);
       $('.banner_tab_click').removeClass('active');
       $(this).addClass('active');
       
       var data_id =  $(this).attr('data_id');   

       if(data_id == 1){
         $('.banner_content').hide();
         $('.banner_first_first').delay(400).show();
       }
       else if (data_id == 2){
         $('.banner_content').hide();
         $('.banner_first_second').delay(400).show();
       }
       else if (data_id == 3){
         $('.banner_content').hide();
         $('.banner_first_third').delay(400).show();
       }
       else if (data_id == 4){
         $('.banner_content').hide();
         $('.banner_first_four').delay(400).show();
       }
       else if (data_id == 5){
         $('.banner_content').hide();
         $('.banner_first_five').delay(400).show();
       }
       
        return false;
    });


    $(document).on('click','.search_click',function(){
      $('.search_header').slideToggle();
    });

    $(document).on('click','.banner_tab ul li a img',function(){
        $('.banner_drop_down').hide();
        var get_drop =   $(this).closest('.banner_tab ul li').find('.banner_drop_down').show();
 
        if(get_drop.length == 1){  
          $(this).closest('.banner_tab ul').addClass('paddng_bottom_banner');
        }else{ 
          $(this).closest('.banner_tab ul').removeClass('paddng_bottom_banner');
        }
    });
 
    // var windowsize = $(window).width(); 
    
    // if (windowsize < 576) {
    //    $('.deal_main_carousel').addClass('deal_mobile_carousel');
    //    $('.deal_main_carousel').addClass('owl-carousel');
    //    $('.deal_main_carousel').addClass('owl-theme'); 
    // }

    $(".deal_main_carousel").owlCarousel({
      loop:true, 
      nav:false,
      dots:true,
      items:1,
      margin: 20,
      autoplay:true, 
      responsive : {  
        0 : {
          margin: 50,
        },
        767 : { 
          margin: 30,
        }, 
    }
  });
    $(".blog_mobile_carousel").owlCarousel({
      loop:true, 
      nav:false,
      dots:true,
      items:1,
      margin: 20,
      autoplay:true 
  });
    $(".mobile_comming_carousle").owlCarousel({
      loop:true, 
      nav:false,
      dots:true,
      items:1,
      margin: 20,
      autoplay:true, 
  });
    $(".offers_mobile_carousel").owlCarousel({
      loop:true, 
      nav:false,
      dots:true,
      items:1,
      margin: 20,
      autoplay:true, 
  });
    $(".comming_soon").owlCarousel({
      loop:true, 
      nav:true,
      dots:false,
      items:4,
      margin: 30,
      autoplay:true, 
      navText: ["<img src='assets/images/home/blog/prev.png'>","<img src='assets/images/home/blog/next.png'>"],
      responsive : {  
        1200 : { 
          margin: 30,
        }, 
    }
  });

    $(".game_main").owlCarousel({
      loop:true, 
      nav:true,
      dots:false,
      items:4,
      margin: 30,
      autoplay:true, 
      navText: ["<img src='assets/images/home/blog/prev.png'>","<img src='assets/images/home/blog/next.png'>"],
      responsive : {  
        0 : { 
          items:1,
        }, 
        450 : { 
          items:2,
        }, 
        991 : { 
          items:4,
        }, 
        1200 : { 
          margin: 30,
        }, 
    }
  });
    $(".product_revies_row").owlCarousel({
      loop:true, 
      nav:true,
      dots:false,
      items:3,
      margin: 30,
      autoplay:true, 
      navText: ["<img src='assets/images/home/blog/prev.png'>","<img src='assets/images/home/blog/next.png'>"],
      responsive : {  
        0 : { 
          items:1,
        }, 
        991 : { 
          items:3,
        }, 
        1200 : { 
          margin: 30,
        }, 
    }
  });

  
  $(document).on('click','.filter_by',function(){
    $('.shop_list_filter').slideToggle();

    return false;
  });

  $(document).on('click','.doller_currency_link',function(){
    $('.currency_tab').slideToggle();

    return false;
  });


})

// file upload juel
function importData() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {
    // you can use this method to get file and perform respective operations
            let files =   Array.from(input.files);
            console.log(files);
        };
  input.click();
  
}