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

// En esta prueba esperamos que el valor máximo de un array con un solo elemento sea ese elemento
test('Valor máximo de un array con un solo elemento', () => {
    expect(maximo([7])).toBe(7);
});

// En esta prueba esperamos que el valor máximo de un array con elementos repetidos sea el elemento repetido
test('Valor máximo de un array con elementos repetidos', () => {
    expect(maximo([2, 2, 2, 2, 2])).toBe(2);
});

// En esta prueba esperamos que el valor máximo de un array con números decimales sea el decimal más grande
test('Valor máximo de un array con números decimales', () => {
    expect(maximo([0.1, 0.2, 0.3, 0.4, 0.5])).toBe(0.5);
});

// En esta prueba esperamos que el valor máximo de un array vacío sea -Infinity (comportamiento predeterminado de Math.max con arrays vacíos)
test('Valor máximo de un array vacío', () => {
    expect(maximo([])).toBe(-Infinity);
});