!function(){
    var view = document.querySelector('#topNavBar')
    // view.style.border = '1px solid red'
    var controller = function(view){
        window.addEventListener('scroll',function(x){    //加事件监听队列
            if(window.scrollY >0){
                view.classList.add('sticky')
            }else{
                view.classList.remove('sticky')
            }
        })          
        }
        // controller.call(null,view)
        controller(view)
}.call()