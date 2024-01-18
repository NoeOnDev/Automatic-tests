// Esta función recibe dos números y devuelve la multiplicación de ambos
function multiplicar(a, b) {
    return a * b; 
}

// En esta prueba esperamos que la multiplicación de 10 * 2 sea igual a 20
test('Multiplicación de dos números positivos', () => {
    expect(multiplicar(10, 2)).toBe(20);
});

// En esta prueba esperamos que la multiplicación de -6 * -2 sea igual a 12
test('Multiplicación de dos números negativos', () => {
    expect(multiplicar(-6, -2)).toBe(12); 
});

// En esta prueba esperamos que la multiplicación de -10 * 5 sea igual a -50
test('Multiplicación de un número negativo y un número positivo', () => {
    expect(multiplicar(-10, 5)).toBe(-50);
});

// En esta prueba esperamos que la multiplicación de 10 * 0 sea igual a 0
test('Multiplicación por cero', () => {
    expect(multiplicar(10, 0)).toBe(0);
});