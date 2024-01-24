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

test('Valor máximo de un array con un solo elemento', () => {
    expect(maximo([7])).toBe(7);
});

test('Valor máximo de un array con elementos repetidos', () => {
    expect(maximo([2, 2, 2, 2, 2])).toBe(2);
});

test('Valor máximo de un array con números decimales', () => {
    expect(maximo([0.1, 0.2, 0.3, 0.4, 0.5])).toBe(0.5);
});

test('Valor máximo de un array vacío', () => {
    expect(maximo([])).toBe(-Infinity);
});