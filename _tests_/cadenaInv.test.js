function invertir(cadena) {
    return cadena.split('').reverse().join('');
}

test('Invertir una cadena', () => {
    expect(invertir('hola')).toBe('aloh');
});

test('Invertir una cadena de números', () => {
    expect(invertir('12345')).toBe('54321');
});

test('Invertir una cadena vacía', () => {
    expect(invertir('')).toBe('');
});