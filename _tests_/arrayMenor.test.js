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

// En esta prueba esperamos que el valor mínimo de un array con números y cadenas de texto lance un error
test('Valor mínimo de un array con números y cadenas de texto', () => {
    expect(() => minimo([1, 2, 3, '4', '5'])).toThrow("El array contiene una cadena de texto");
});

// En esta prueba esperamos que el valor mínimo de un array con números y null sea el número más pequeño
test('Valor mínimo de un array con números y null', () => {
    expect(minimo([1, 2, 3, null])).toBe(1);
});

// En esta prueba esperamos que el valor mínimo de un array con números y undefined lance un error
test('Valor mínimo de un array con números y undefined', () => {
    expect(() => minimo([1, 2, 3, undefined])).toThrow("El array contiene NaN");
});

// En esta prueba esperamos que el valor mínimo de un array con números y NaN lance un error
test('Valor mínimo de un array con números y NaN', () => {
    expect(() => minimo([1, 2, 3, NaN])).toThrow("El array contiene NaN");
});

// En esta prueba esperamos que el valor mínimo de un array con solo cadenas de texto lance un error
test('Valor mínimo de un array con solo cadenas de texto', () => {
    expect(() => minimo(['1', '2', '3'])).toThrow("El array contiene una cadena de texto");
});