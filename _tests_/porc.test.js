function porcentaje(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error("Los argumentos deben ser números y no pueden ser NaN");
    }
    if (b === 0) {
        throw new Error("No se puede calcular el porcentaje respecto a cero");
    }
    return (a / b) * 100; 
}

test('Porcentaje de un número respecto a otro', () => {
    expect(porcentaje(50, 200)).toBe(25);
});

test('Porcentaje de un número respecto a otro', () => {
    expect(porcentaje(30, 120)).toBe(25); 
});

test('Porcentaje de un número respecto a sí mismo', () => {
    expect(porcentaje(200, 200)).toBe(100);
});

test('Porcentaje respecto a cero', () => {
    expect(() => porcentaje(10, 0)).toThrow();
});

test('Porcentaje con valores no numéricos', () => {
    expect(() => porcentaje("10", "2")).toThrow();
});

test('Porcentaje de un número decimal respecto a otro', () => {
    expect(porcentaje(0.5, 2)).toBeCloseTo(25);
});

test('Porcentaje de un número respecto a NaN', () => {
    expect(() => porcentaje(5, NaN)).toThrow();
});

test('Porcentaje de un número respecto a un string numérico', () => {
    expect(() => porcentaje(5, '5')).toThrow();
});

// En esta prueba esperamos que calcular el porcentaje de un número respecto a un objeto lance un error
test('Porcentaje de un número respecto a un objeto', () => {
    expect(() => porcentaje(5, {})).toThrow();
});

// En esta prueba esperamos que calcular el porcentaje de un número respecto a un booleano lance un error
test('Porcentaje de un número respecto a un booleano', () => {
    expect(() => porcentaje(5, true)).toThrow();
});

// En esta prueba esperamos que calcular el porcentaje de un número respecto a Infinity retorne 0
test('Porcentaje de un número respecto a Infinity', () => {
    expect(porcentaje(5, Infinity)).toBe(0);
});

// En esta prueba esperamos que calcular el porcentaje de Infinity respecto a un número retorne Infinity
test('Porcentaje de Infinity respecto a un número', () => {
    expect(porcentaje(Infinity, 5)).toBe(Infinity);
});

// En esta prueba esperamos que calcular el porcentaje de Infinity respecto a Infinity retorne NaN
test('Porcentaje de Infinity respecto a Infinity', () => {
    expect(porcentaje(Infinity, Infinity)).toBeNaN();
});