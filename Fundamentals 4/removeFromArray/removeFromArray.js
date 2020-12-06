const removeFromArray = function(args) {
    const arr = arguments[0];
    for(i=1;i<arguments.length;i++) {
        for(j=0;j<arr.length;j++) {
            if(arguments[i]===arr[j]) {
                arr.splice(j,1)
                j--
            }
        }
    }
    return arr;
}

module.exports = removeFromArray
