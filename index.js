function receivesAFunction(callback){
    return callback()
}
receivesAFunction(()=>"Hello, world!")

function returnsANamedFunction(){
    return function namedFunc(){
        return "Hello, world!"
    }
}
returnsANamedFunction()

const returnsAnAnonymousFunction = function(){
    return function (){
        return "Hello, world"
    }
}
returnsAnAnonymousFunction()
