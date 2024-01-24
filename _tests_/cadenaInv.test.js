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

test('Invertir una cadena con espacios', () => {
    expect(invertir('h o l a')).toBe('a l o h');
});

test('Invertir una cadena con caracteres especiales', () => {
    expect(invertir('hola!')).toBe('!aloh');
});

test('Invertir una cadena con mayúsculas y minúsculas', () => {
    expect(invertir('HoLa')).toBe('aLoH');
});

test('Invertir null', () => {
    expect(() => invertir(null)).toThrow();
});

test('Invertir undefined', () => {
    expect(() => invertir(undefined)).toThrow();
});