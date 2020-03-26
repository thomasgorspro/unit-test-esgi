function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function avg(tab) {
    if (tab.length) {
        return tab.reduce((acc, value, index, array) => {
            acc += value;
            return index === array.length-1
                ? acc/array.length
                : acc;
        });
    }
}
console.log(avg([]));
module.exports = {
    add: add,
    sub: sub,
    mul: mul,
    div: div,
    avg: avg,
};