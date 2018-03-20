//Old code without rest
function getSum() {
    // let sum=0;
    // for (var i=0;i<arguments.length;i++) {
    //     sum+=arguments[i];
    // }
    // return sum;

    let res=Array.prototype.slice.call(arguments,0);
    return res.reduce(function (rez, item) {
        return rez+item;
    })

}


//new code with rest
function getArgsRest(...args) {
    return args.reduce(function (res, item) {
        return res+item;
    })
}

console.log(getArgsRest(2, 1, 89));

export default  getSum;
