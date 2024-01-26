function minimo(array) {
    if (array.some(isNaN)) {
        throw new Error("El array contiene NaN");
    }
    if (array.some(x => typeof x === 'string')) {
        throw new Error("El array contiene una cadena de texto");
    }
    const filteredArray = array.filter(x => typeof x === 'number' && x !== null);
    return Math.min(...filteredArray);
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

test('Valor mínimo de un array con números y cadenas de texto', () => {
    expect(() => minimo([1, 2, 3, '4', '5'])).toThrow("El array contiene una cadena de texto");
});

test('Valor mínimo de un array con números y null', () => {
    expect(minimo([1, 2, 3, null])).toBe(1);
});

test('Valor mínimo de un array con números y undefined', () => {
    expect(() => minimo([1, 2, 3, undefined])).toThrow("El array contiene NaN");
});

test('Valor mínimo de un array con números y NaN', () => {
    expect(() => minimo([1, 2, 3, NaN])).toThrow("El array contiene NaN");
});

test('Valor mínimo de un array con solo cadenas de texto', () => {
    expect(() => minimo(['1', '2', '3'])).toThrow("El array contiene una cadena de texto");
});