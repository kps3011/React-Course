
function getTempCallback(location, callback){

    callback(undefined, 80)
    
    callback('City is not found')
}

getTempCallback('pune', function(err, temp){

    if(err){
        console.log('error', err)
    }
    else{
        console.log('success', temp)
    }
})