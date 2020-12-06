const sumAll = function(args) {
    if(typeof arguments[0]!="number" || typeof arguments[1]!="number")
        return "ERROR"
    else if(arguments[0]<0 || arguments[1]<0)
        return "ERROR"
    let first = Math.min(arguments[0], arguments[1])
    let second = Math.max(arguments[0], arguments[1])
    let sum = 0;
    for(i=first;i<=second;i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
