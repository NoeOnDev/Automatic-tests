function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b; 
}

test('División de dos números positivos', () => {
    expect(dividir(10, 2)).toBe(5);
});

test('División de dos números negativos', () => {
    expect(dividir(-6, -2)).toBe(3); 
});

test('División de un número negativo y un número positivo', () => {
    expect(dividir(-10, 5)).toBe(-2);
});

test('División por cero', () => {
    expect(() => dividir(10, 0)).toThrow("No se puede dividir por cero");
});