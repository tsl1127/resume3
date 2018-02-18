//添加offset类	
!function (){
let specialTags = document.querySelectorAll('[data-x]')
for(let i=0;i<specialTags.length;i++){
	specialTags[i].classList.add('offset')
}

setTimeout(function(){
	findClosest()	
},1000)

window.addEventListener('scroll',function(x){
    findClosest()
})




function findClosest(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(let i=1;i<specialTags.length;i++){
    if(Math.abs(specialTags[i].offsetTop-window.scrollY)<Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
        minIndex = i   //哪一个与最上面的距离最小，就把哪一个找出来
        }
    }
    //minIndex就是离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    // console.log(minIndex)
    // for(let i =0;i<specialTags.length;i++){   //把所有的效果去掉
    // 	specialTags[i].classList.remove('active')
    // }
    // specialTags[minIndex].classList.add('active')  //只是在最小的地方加active
    let id = specialTags[minIndex].id
    // console.log(id)
    let a =document.querySelector('a[href="#'+ id +'"]')    //从div找到a标签
    //id =='siteAbout'   'a[href="#siteAbout"]'  
    let li = a.parentNode   //找到a标签的父亲
    let brothersAndMe = li.parentNode.children
    for(let i=0;i<brothersAndMe.length;i++)
    {
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}
}.call()

