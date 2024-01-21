function maximo(array) {
    return Math.max(...array);
}

test('Valor máximo de un array', () => {
    expect(maximo([1, 2, 3, 4, 5])).toBe(5);
});

test('Valor máximo de un array de números negativos', () => {
    expect(maximo([-1, -2, -3, -4, -5])).toBe(-1);
});

test('Valor máximo de un array de ceros', () => {
    expect(maximo([0, 0, 0, 0, 0])).toBe(0);
});