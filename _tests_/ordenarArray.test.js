function ordenarArray(array) {
    return array.sort((a, b) => a - b);
}

test('Ordenar un array de números', () => {
    expect(ordenarArray([5, 2, 1, 3, 4])).toEqual([1, 2, 3, 4, 5]);
});

test('Ordenar un array de números con números negativos', () => {
    expect(ordenarArray([5, -2, 1, -3, 4])).toEqual([-3, -2, 1, 4, 5]);
});