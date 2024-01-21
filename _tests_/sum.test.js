function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error("Los argumentos deben ser números");
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