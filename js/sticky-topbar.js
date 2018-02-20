!function(){
    var view = window.View('#topNavBar')
    // view.style.border = '1px solid red'
    var controller = {
        view:null,
        init: function(view){
            // console.log('1')
            // console.log(this)
            this.view = view
            this.bindEvents()    //等价于this.bindEvents.call(this)                 
            },
        bindEvents:function(){
            // console.log('2')
            // console.log(this)
            var view = this.view
            window.addEventListener('scroll',(x) => {    //加事件监听队列
                if(window.scrollY >0){
                   this.active() //箭头函数内外this一样，箭头函数不管this
                }else{
                   this.deactive() 
                }
            })
        },
        active: function(){
            this.view.classList.add('sticky')
        },
        deactive: function(){
            this.view.classList.remove('sticky')
        }

    }
    controller.init(view)  //等价于controller.init.call(controller,view)
}.call()