function maximo(array) {
    if (array.some(isNaN)) {
        throw new Error("El array contiene NaN");
    }
    if (array.some(x => typeof x === 'string')) {
        throw new Error("El array contiene una cadena de texto");
    }
    const filteredArray = array.filter(x => typeof x === 'number');
    return Math.max(...filteredArray);
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

test('Valor máximo de un array con números y cadenas de texto', () => {
    expect(() => maximo([1, 2, 3, '4', '5'])).toThrow("El array contiene una cadena de texto");
});
