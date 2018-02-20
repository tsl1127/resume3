!function(){
    var view = window.View('#mySlides')
    // view.style.border = '1px solid red'
    var controller = {
        view:null,
        swiper:null,
        swiperOptions: {
            loop: true,  //是否是无缝的
            pagination: {
              el: '.swiper-pagination',   //是否需要分页器
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
        },
        init:function(view){
            this.view = view
            this.initSwiper()
        },
        initSwiper:function(){
            view = this.view
            this.swiper = new Swiper (view.querySelector('.swiper-container'),this.swiperOptions)
        }
    }
    controller.init(view)
}.call()