!function(){
    var view = document.querySelector('#topNavBar')
    // view.style.border = '1px solid red'
    var controller = {
        view:null,
        init: function(view){
            console.log('1')
            console.log(this)
            this.view = view
            this.bindEvents()    //等价于this.bindEvents.call(this)                 
            },
        bindEvents:function(){
            console.log('2')
            console.log(this)
            var view = this.view
            window.addEventListener('scroll',function(x){    //加事件监听队列
                if(window.scrollY >0){
                    view.classList.add('sticky')
                }else{
                    view.classList.remove('sticky')
                }
            })
        }
    }
    controller.init(view)  //等价于controller.init.call(controller,view)
}.call()