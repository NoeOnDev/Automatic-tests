function sumar (a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Los valores no son numéricos");
    }
    return console.log(a + b);
}

let a = 5;
let b = 6;

sumar(a, b);

function restar (a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Los valores no son numéricos");
    }
    return console.log(a - b);
}