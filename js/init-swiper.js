!function(){
    var view = document.querySelector('#mySlides')
    // view.style.border = '1px solid red'
    var controller = function(view){
        var mySwiper = new Swiper (view.querySelector('.swiper-container'), {
            // Optional parameters
            // direction: 'vertical',//垂直的不要
            loop: true,  //是否是无缝的
        
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',   //是否需要分页器
            },
        
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        
            // And if we need scrollbar
            // scrollbar: {
            //   el: '.swiper-scrollbar',   //是否需要滚动条
            // },
          })
    }
    controller(view)
}.call()