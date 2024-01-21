function multiplicar(a, b) {
    return a * b; 
}

test('Multiplicación de dos números positivos', () => {
    expect(multiplicar(10, 2)).toBe(20);
});

test('Multiplicación de dos números negativos', () => {
    expect(multiplicar(-6, -2)).toBe(12); 
});

test('Multiplicación de un número negativo y un número positivo', () => {
    expect(multiplicar(-10, 5)).toBe(-50);
});

test('Multiplicación por cero', () => {
    expect(multiplicar(10, 0)).toBe(0);
});