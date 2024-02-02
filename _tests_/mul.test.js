function multiplicar(a, b) {
    return a * b; 
}

test('Multiplicación de dos números positivos', () => {
    expect(multiplicar(10, 2)).toBe(20);
});

test('Multiplicación de dos números negativos', () => {
    expect(multiplicar(-6, -2)).toBe(12); 
});

test('Multiplicación de un número negativo y un número positivo', () => {
    expect(multiplicar(-10, 5)).toBe(-50);
});

test('Multiplicación por cero', () => {
    expect(multiplicar(10, 0)).toBe(0);
});

test('Multiplicación de dos números decimales', () => {
    expect(multiplicar(0.5, 0.2)).toBeCloseTo(0.1);
});

test('Multiplicación de un número decimal y un número entero', () => {
    expect(multiplicar(0.5, 2)).toBe(1);
});

test('Multiplicación de un número muy grande y un número muy pequeño', () => {
    expect(multiplicar(1e+307, 1e-307)).toBeCloseTo(1);
});

test('Multiplicación de dos números muy grandes', () => {
    expect(() => multiplicar(1e+308, 1e+308)).toThrow();
});

test('Multiplicación de dos números muy pequeños', () => {
    expect(multiplicar(1e-308, 1e-308)).toBeCloseTo(0);
});

test('Multiplicación de un número y NaN', () => {
    expect(multiplicar(10, NaN)).toBeNaN();
});

test('Multiplicación de un número y undefined', () => {
    expect(multiplicar(10, undefined)).toBeNaN();
});

test('Multiplicación de un número y un string', () => {
    expect(multiplicar(10, '5')).toBe(50);
    expect(multiplicar(10, 'hola')).toBeNaN();
});