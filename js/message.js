!function(){
    var view = document.querySelector('section.message')
    var model ={
        init:function(){
            var APP_ID = 'L1qdr63Ikg3s8ayQefGU95T0-gzGzoHsz'
            var APP_KEY = 'IdAeyhOVHECra46oe039Np0E'
            
            AV.init({
              appId: APP_ID,
              appKey: APP_KEY
            })
        },
        //获取数据
        fetch:function(){
            var query = new AV.Query('Message');
            return query.find()   //Promise对象
        },
        //创建数据
        save:function(name,content){
            var Message = AV.Object.extend('Message');
            var message = new Message()
            return message.save({   //Promise对象
                'name':name,
                'content': content
              })
        }
    }

    var controller={
        view:null,
        messageList:null,
        model:null,
        form:null,
        init:function(view,model){
            this.view=view
            this.model = model
            this.model.init()
            this.messageList=view.querySelector('#messageList')
            this.form = view.querySelector('#postMessageForm')           
            this.loadMessages()
            this.bindEvents()
        },     
        loadMessages:function(){
            this.model.fetch().then(
                 (messages)=> {
                // console.log(messages)
                // console.log(messages[0].attributes)
                // console.log(messages[1].attributes)
                let array = messages.map((item)=>item.attributes)
                // console.log(array)
                array.forEach((item)=>{
                    let li=document.createElement('li')
                    li.innerText=`${item.name}:${item.content}`                   
                    this.messageList.appendChild(li)
                })}
                )          
        },
        bindEvents:function(){           
            this.form.addEventListener('submit',(e)=>{
                e.preventDefault()  //不阻止则会刷新页面
                this.saveMessage()
            })
        },
        saveMessage:function(){
            let myForm = this.form
            let content=myForm.querySelector('input[name=content]').value  //找到用户输入的内容
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name,content).then((object)=> {
                //   window.location.reload()
                let li=document.createElement('li')
                li.innerText=`${object.attributes.name}:${object.attributes.content}`
                // let messageList = document.querySelector('#messageList')
                this.messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value=''
                myForm.querySelector('input[name=name]').value=''
                // console.log(object)
              })
        }
        
    }
    controller.init(view,model)
    




/*
console.log('运行到这里没有报错')
//创建TestObject表
var TestObject = AV.Object.extend('TestObject');  //TestObject是个函数
//在表中创建一行数据
var testObject = new TestObject();    //testObject是new出之后的对象
//数据内容是hello world，保存
//如果保存成功了，则运行alert
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/

}.call()


