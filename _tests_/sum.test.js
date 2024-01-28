function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      throw new Error('Ambos argumentos deben ser números y no pueden ser NaN');
  }
  return a + b;
}
 
  test('Suma de dos números positivos', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('Suma de dos números negativos', () => {
    expect(sumar(-3, -6)).toBe(-9); 
  });

  test('Suma de positivo y negativo', () => {
    expect(sumar(-10, 5)).toBe(-5);
  });

  test('Suma con valores no numéricos', () => {
    expect(() => sumar("2", "3")).toThrow();
  });

  test('Suma con valor null', () => {
    expect(() => sumar(null, 3)).toThrow();
  });

  test('Suma con valor undefined', () => {
    expect(() => sumar(undefined, 3)).toThrow();
  });

  test('Suma de dos números decimales', () => {
    expect(sumar(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('Suma de un número y cero', () => {
    expect(sumar(5, 0)).toBe(5);
  });

  test('Suma de un número y NaN', () => {
    expect(() => sumar(5, NaN)).toThrow();
  });

  test('Suma de un número y un string numérico', () => {
    expect(() => sumar(5, '5')).toThrow();
  });

  test('Suma de un número y un objeto', () => {
    expect(() => sumar(5, {})).toThrow();
  });

  test('Suma de un número y un booleano', () => {
    expect(() => sumar(5, true)).toThrow();
  });