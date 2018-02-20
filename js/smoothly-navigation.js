!function(){
    var view =window.View('nav.menu')
    // view.style.border = '1px solid red'
    var controller = {
        view:null,
        initAnimation:function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
                }
                requestAnimationFrame(animate);
        },
        scrollToElement:function(element){           
            let top = element.offsetTop
            // let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop
            //等于上面4句
            let currentTop = window.scrollY
            let targetTop =  top-80
            let s = targetTop - currentTop
            var coords = { y: currentTop }; 
            var t = Math.abs((s/100)*300)  //求绝对值
        
            if(t>500){
                t=500
            }
            var tween = new TWEEN.Tween(coords) 
            .to({ y: targetTop }, t) 
            .easing(TWEEN.Easing.Quadratic.InOut) //
            .onUpdate(function() {
              window.scrollTo(0,coords.y)
            })
            .start(); 
        },
        // active: function(){

        // },
        // deactive:function(){

        // },       
        bindEvents:function(){
            let liTags = this.view.querySelectorAll('nav.menu >ul >li')
            for (let i = 0 ;i<liTags.length;i++){
                liTags[i].onmouseenter = function(x){
                    x.currentTarget.classList.add('active')
                }
                liTags[i].onmouseleave = function(x){
                    x.currentTarget.classList.remove('active')
                }
            }

            let aTags = this.view.querySelectorAll('nav.menu >ul >li >a')
            for(let i=0;i<aTags.length;i++){
                aTags[i].onclick = (x)=>{
                    x.preventDefault()   //
                    let a = x.currentTarget
                    let href = a.getAttribute('href')  //'#siteAbout'
                    let element = document.querySelector(href)
                    this.scrollToElement(element)
                }
                }
        },
        init:function(view){
            this.view = view
            this.initAnimation()
            this.bindEvents()           
        }
    }
    controller.init(view)
}.call()