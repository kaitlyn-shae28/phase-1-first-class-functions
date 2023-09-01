function receivesAFunction(callback){
    callback()
}

const namedFunction = function(){
    return "I have a name."
}
function returnsANamedFunction(){
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return function(){}
}