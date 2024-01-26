function restar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Ambos argumentos deben ser números");
    }
    return a - b; 
}

test('Resta de dos números positivos', () => {
    expect(restar(5, 3)).toBe(2);
});

test('Resta de dos números negativos', () => {
    expect(restar(-3, -6)).toBe(3); 
});

test('Resta de un número negativo y un número positivo', () => {
    expect(restar(-10, 5)).toBe(-15);
});

test('Resta de un número y cero', () => {
    expect(restar(5, 0)).toBe(5);
});

test('Resta de un número y el mismo número', () => {
    expect(restar(5, 5)).toBe(0);
});

test('Resta de un número y un número no numérico', () => {
    expect(() => restar(5, "3")).toThrow();
});

test('Resta de un número y null', () => {
    expect(() => restar(5, null)).toThrow();
});

test('Resta de un número y undefined', () => {
    expect(() => restar(5, undefined)).toThrow();
});