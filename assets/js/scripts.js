$(document).ready(function(){
    $(".review_carousel").owlCarousel({
        loop:true, 
        nav:false,
        dots:false,
        items:2.4,
        margin: 50,
        autoplay:true
    });
    $(".blog_carousel").owlCarousel({
        loop:true, 
        nav:true,
        dots:false,
        items:2,
        margin: 30,
        autoplay:true,
        navText: ["<img src='assets/images/home/blog/prev.png'>","<img src='assets/images/home/blog/next.png'>"]
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




})