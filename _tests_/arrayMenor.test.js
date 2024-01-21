function minimo(array) {
    return Math.min(...array);
}

test('Valor mínimo de un array', () => {
    expect(minimo([1, 2, 3, 4, 5])).toBe(1);
});

test('Valor mínimo de un array de números negativos', () => {
    expect(minimo([-1, -2, -3, -4, -5])).toBe(-5);
});

test('Valor mínimo de un array de ceros', () => {
    expect(minimo([0, 0, 0, 0, 0])).toBe(0);
});