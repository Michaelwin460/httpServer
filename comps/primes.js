
function findPrime(arg) {
    let check
    let prime = []

    for(i=2; i < arg; i++){
        check = 0
        for(j=2; j < i; j++){
            if(i % j == 0){
                check = 1
                break
            } 
        }
        if(check == 0 ){
            prime.push(i)
        }
    }
    console.log(prime)
    return prime
}
module.exports.findPrime = findPrime

