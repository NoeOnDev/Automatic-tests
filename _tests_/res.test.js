// Esta función recibe dos números y devuelve la resta del primero menos el segundo
function restar(a, b) {
    return a - b; 
}

// En esta prueba esperamos que la resta de 5 - 3 sea igual a 2
test('Resta de dos números positivos', () => {
    expect(restar(5, 3)).toBe(2);
});

// En esta prueba esperamos que la resta de -3 - (-6) sea igual a 3
test('Resta de dos números negativos', () => {
    expect(restar(-3, -6)).toBe(3); 
});

// En esta prueba esperamos que la resta de -10 - 5 sea igual a -15
test('Resta de un número negativo y un número positivo', () => {
    expect(restar(-10, 5)).toBe(-15);
});