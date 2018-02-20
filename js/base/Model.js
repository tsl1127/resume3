window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init:function(){
            var APP_ID = 'L1qdr63Ikg3s8ayQefGU95T0-gzGzoHsz'
            var APP_KEY = 'IdAeyhOVHECra46oe039Np0E'
            
            AV.init({
              appId: APP_ID,
              appKey: APP_KEY
            })
        },
        fetch:function(){
            var query = new AV.Query(resourceName);
            return query.find()   //Promise对象
        },
        save:function(object){
            var X = AV.Object.extend(resourceName);
            var x = new X()
            return x.save(object)
        }
    }
}