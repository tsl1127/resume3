var APP_ID = 'L1qdr63Ikg3s8ayQefGU95T0-gzGzoHsz';
var APP_KEY = 'IdAeyhOVHECra46oe039Np0E';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
.then(
    function (messages) {
    // console.log(messages)
    // console.log(messages[0].attributes)
    // console.log(messages[1].attributes)
    let array = messages.map((item)=>item.attributes)
    // console.log(array)
    array.forEach((item)=>{
        let li=document.createElement('li')
        li.innerText=`${item.name}:${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    })},
     function (error) {
         alert('提交失败')
     }
    )
.then(()=>{},(error)=>{
    console.log(error)
})

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
let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit',function(e){
    e.preventDefault()  //不阻止则会刷新页面
    let content=myForm.querySelector('input[name=content]').value  //找到用户输入的内容
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message()
    message.save({
        'name':name,
        'content': content
      }).then(function(object) {
        //   window.location.reload()
        let li=document.createElement('li')
        li.innerText=`${object.attributes.name}:${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value=''
        myForm.querySelector('input[name=name]').value=''
        // console.log(object)
      })
})

