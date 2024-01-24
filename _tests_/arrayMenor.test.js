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

test('Valor mínimo de un array con un solo elemento', () => {
    expect(minimo([7])).toBe(7);
});

test('Valor mínimo de un array con elementos repetidos', () => {
    expect(minimo([2, 2, 2, 2, 2])).toBe(2);
});

test('Valor mínimo de un array con números decimales', () => {
    expect(minimo([0.1, 0.2, 0.3, 0.4, 0.5])).toBe(0.1);
});

test('Valor mínimo de un array vacío', () => {
    expect(minimo([])).toBe(Infinity);
});