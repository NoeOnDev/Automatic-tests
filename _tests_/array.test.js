// Esta función recibe un array de números y devuelve el valor máximo
function maximo(array) {
    return Math.max(...array);
}

// En esta prueba esperamos que el valor máximo de [1, 2, 3, 4, 5] sea 5
test('Valor máximo de un array', () => {
    expect(maximo([1, 2, 3, 4, 5])).toBe(5);
});

// En esta prueba esperamos que el valor máximo de [-1, -2, -3, -4, -5] sea -1
test('Valor máximo de un array de números negativos', () => {
    expect(maximo([-1, -2, -3, -4, -5])).toBe(-1);
});

// En esta prueba esperamos que el valor máximo de [0, 0, 0, 0, 0] sea 0
test('Valor máximo de un array de ceros', () => {
    expect(maximo([0, 0, 0, 0, 0])).toBe(0);
});