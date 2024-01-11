
function sumar(a, b) {
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