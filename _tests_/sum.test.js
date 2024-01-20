// Esta función recibe dos números y devuelve la suma de los mismos
function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error("Los argumentos deben ser números");
  }
  return a + b; 
}
 
  // En esta prueba esperamos que la suma de 2 + 3 sea igual a 5
  test('Suma de dos números positivos', () => {
    expect(sumar(2, 3)).toBe(5);
  });
  // En esta prueba esperamos que la suma de -3 + -6 sea igual a -9
  test('Suma de dos números negativos', () => {
    expect(sumar(-3, -6)).toBe(-9); 
  });
  //En esta prueba esperamos que la suma de -10 + 5 sea igual a -5
  test('Suma de positivo y negativo', () => {
    expect(sumar(-10, 5)).toBe(-5);
  });

  // En esta prueba esperamos que la suma de "2" y "3" lance un error
  test('Suma con valores no numéricos', () => {
    expect(() => sumar("2", "3")).toThrow();
  });