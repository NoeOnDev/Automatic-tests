// Esta función recibe un array de números y devuelve el valor mínimo
function minimo(array) {
    return Math.min(...array);
}

// En esta prueba esperamos que el valor mínimo de [1, 2, 3, 4, 5] sea 1
test('Valor mínimo de un array', () => {
    expect(minimo([1, 2, 3, 4, 5])).toBe(1);
});

// En esta prueba esperamos que el valor mínimo de [-1, -2, -3, -4, -5] sea -5
test('Valor mínimo de un array de números negativos', () => {
    expect(minimo([-1, -2, -3, -4, -5])).toBe(-5);
});

// En esta prueba esperamos que el valor mínimo de [0, 0, 0, 0, 0] sea 0
test('Valor mínimo de un array de ceros', () => {
    expect(minimo([0, 0, 0, 0, 0])).toBe(0);
});