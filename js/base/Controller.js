window.Controller = function(options){
    var init = options.init
    // this.bindEvents = options.bindEvents

    let object= {
        view:null,
        model:null,
        init: function(view,model){
            // console.log('1')
            // console.log(this)
            this.view = view
            this.model = model
            this.model.init()
            init.call(this,view,model)  //把options中的init属性调用出来，这里的this是object
            this.bindEvents.call(this)                            
            }
    }

    // console.log('object')
    // console.log(object)
    // console.log('options')
    // console.log(options)
    for(let key in options){
        if(key !=='init'){   //不需要把init属性弄过去，因为已经有了
        object[key] = options[key]        
        }
    }

    // console.log('新的object')
    // console.log(object)

    return object
   
}