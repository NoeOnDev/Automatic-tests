function restar(a, b) {
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