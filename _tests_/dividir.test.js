function dividir(a, b) {
    if (typeof b !== 'number') {
        throw new Error("El divisor debe ser un número");
    }
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b; 
}

test('División de dos números positivos', () => {
    expect(dividir(10, 2)).toBe(5);
});

test('División de dos números negativos', () => {
    expect(dividir(-6, -2)).toBe(3); 
});

test('División de un número negativo y un número positivo', () => {
    expect(dividir(-10, 5)).toBe(-2);
});

test('División por cero', () => {
    expect(() => dividir(10, 0)).toThrow("No se puede dividir por cero");
});

// En esta prueba esperamos que dividir un número por 1 devuelva el mismo número
test('División por 1', () => {
    expect(dividir(10, 1)).toBe(10);
});

// En esta prueba esperamos que dividir un número por sí mismo devuelva 1
test('División de un número por sí mismo', () => {
    expect(dividir(5, 5)).toBe(1);
});

// En esta prueba esperamos que dividir 0 por cualquier número devuelva 0
test('División de 0 por cualquier número', () => {
    expect(dividir(0, 5)).toBe(0);
});

// En esta prueba esperamos que dividir un número por un número decimal devuelva el resultado correcto
test('División por un número decimal', () => {
    expect(dividir(1, 0.5)).toBe(2);
});

// En esta prueba esperamos que dividir un número por una cadena de texto lance un error
test('División por una cadena de texto', () => {
    expect(() => dividir(10, "2")).toThrow();
});

// En esta prueba esperamos que dividir un número por null lance un error
test('División por null', () => {
    expect(() => dividir(10, null)).toThrow();
});

// En esta prueba esperamos que dividir un número por undefined lance un error
test('División por undefined', () => {
    expect(() => dividir(10, undefined)).toThrow();
});