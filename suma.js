function sumar (a, b) {
    const a = parseFloat(a);
    const b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Los valores no son numéricos");
    }
    return a + b;
}