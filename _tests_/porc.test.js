// Esta función recibe dos números y devuelve el porcentaje del primero respecto al segundo
function porcentaje(a, b) {
    if (b === 0) {
        throw new Error("No se puede calcular el porcentaje respecto a cero");
    }
    return (a / b) * 100; 
}

// En esta prueba esperamos que el porcentaje de 50 respecto a 200 sea igual a 25
test('Porcentaje de un número respecto a otro', () => {
    expect(porcentaje(50, 200)).toBe(25);
});

// En esta prueba esperamos que el porcentaje de 30 respecto a 120 sea igual a 25
test('Porcentaje de un número respecto a otro', () => {
    expect(porcentaje(30, 120)).toBe(25); 
});

// En esta prueba esperamos que el porcentaje de 200 respecto a 200 sea igual a 100
test('Porcentaje de un número respecto a sí mismo', () => {
    expect(porcentaje(200, 200)).toBe(100);
});

// En esta prueba esperamos que el porcentaje de 10 respecto a 0 lance un error
test('Porcentaje respecto a cero', () => {
    expect(() => porcentaje(10, 0)).toThrow();
});

// En esta prueba esperamos que el porcentaje de "10" respecto a "2" lance un error
test('Porcentaje con valores no numéricos', () => {
    expect(() => porcentaje("10", "2")).toThrow();
});