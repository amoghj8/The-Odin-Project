const repeatString = function(str, count) {
    if(count<0)
        return 'ERROR';
    else
        return str.repeat(count);
}

module.exports = repeatString
