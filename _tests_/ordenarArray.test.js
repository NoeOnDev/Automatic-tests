function ordenarArray(array) {
    return array.sort((a, b) => a - b);
}

test('Ordenar un array de números', () => {
    expect(ordenarArray([5, 2, 1, 3, 4])).toEqual([1, 2, 3, 4, 5]);
});

test('Ordenar un array de números con números negativos', () => {
    expect(ordenarArray([5, -2, 1, -3, 4])).toEqual([-3, -2, 1, 4, 5]);
});

test('Ordenar un array de números con números decimales', () => {
    expect(ordenarArray([5.5, 2.2, 1.1, 3.3, 4.4])).toEqual([1.1, 2.2, 3.3, 4.4, 5.5]);
});

test('Ordenar un array vacío', () => {
    expect(ordenarArray([])).toEqual([]);
});

test('Ordenar un array con un solo elemento', () => {
    expect(ordenarArray([5])).toEqual([5]);
});

test('Ordenar un array de números con ceros', () => {
    expect(ordenarArray([0, 5, 2, 1, 3, 4])).toEqual([0, 1, 2, 3, 4, 5]);
});
