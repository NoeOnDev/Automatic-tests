function sumar (a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Los valores no son numéricos");
    }
    return console.log(a + b);
}

function restar (a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Los valores no son numéricos");
    }
    return console.log(a - b);
}

let a = Number(process.argv[2]);
let b = Number(process.argv[3]);

restar(a, b);