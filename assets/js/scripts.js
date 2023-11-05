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
        navText: ["<img src='assets/images/blog/prev.png'>","<img src='assets/images/blog/next.png'>"]
    });
})