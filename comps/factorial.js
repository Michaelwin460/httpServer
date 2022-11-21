// let x = process.argv[2]

function factor(x) {
    let y = 1
    for(i=1; i <=x; i++){
        y = i*y 
    }
    console.log(y);
    return y
}
// factor()
module.exports.factor = factor