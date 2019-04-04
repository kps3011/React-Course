function promisedemo(location){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(80),
            reject('City not found')
        },1000)
    })
}

promisedemo('pune').then(function(temp){

    console.log('Promise is success', temp)
}, function(err){
    console.log('error found', err)
})