// Esta función recibe dos números y devuelve la división del primero entre el segundo
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b; 
}

// En esta prueba esperamos que la división de 10 / 2 sea igual a 5
test('División de dos números positivos', () => {
    expect(dividir(10, 2)).toBe(5);
});

// En esta prueba esperamos que la división de -6 / -2 sea igual a 3
test('División de dos números negativos', () => {
    expect(dividir(-6, -2)).toBe(3); 
});

// En esta prueba esperamos que la división de -10 / 5 sea igual a -2
test('División de un número negativo y un número positivo', () => {
    expect(dividir(-10, 5)).toBe(-2);
});

// En esta prueba esperamos que la división de 10 / 0 lance un error
test('División por cero', () => {
    expect(() => dividir(10, 0)).toThrow("No se puede dividir por cero");
});