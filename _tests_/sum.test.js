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

  // En esta prueba esperamos que sumar dos números decimales retorne la suma correcta
test('Suma de dos números decimales', () => {
  expect(sumar(0.1, 0.2)).toBeCloseTo(0.3);
});

// En esta prueba esperamos que sumar un número y cero retorne el mismo número
test('Suma de un número y cero', () => {
  expect(sumar(5, 0)).toBe(5);
});

// En esta prueba esperamos que sumar un número y NaN lance un error
test('Suma de un número y NaN', () => {
  expect(() => sumar(5, NaN)).toThrow();
});

// En esta prueba esperamos que sumar un número y un string numérico lance un error
test('Suma de un número y un string numérico', () => {
  expect(() => sumar(5, '5')).toThrow();
});

// En esta prueba esperamos que sumar un número y un objeto lance un error
test('Suma de un número y un objeto', () => {
  expect(() => sumar(5, {})).toThrow();
});

// En esta prueba esperamos que sumar un número y un booleano lance un error
test('Suma de un número y un booleano', () => {
  expect(() => sumar(5, true)).toThrow();
});