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

// En esta prueba esperamos que invertir una cadena con espacios conserve los espacios en las posiciones invertidas
test('Invertir una cadena con espacios', () => {
    expect(invertir('h o l a')).toBe('a l o h');
});

// En esta prueba esperamos que invertir una cadena con caracteres especiales conserve los caracteres especiales en las posiciones invertidas
test('Invertir una cadena con caracteres especiales', () => {
    expect(invertir('hola!')).toBe('!aloh');
});

// En esta prueba esperamos que invertir una cadena con mayúsculas y minúsculas conserve las mayúsculas y minúsculas en las posiciones invertidas
test('Invertir una cadena con mayúsculas y minúsculas', () => {
    expect(invertir('HoLa')).toBe('aLoH');
});

// En esta prueba esperamos que invertir null lance un error
test('Invertir null', () => {
    expect(() => invertir(null)).toThrow();
});

// En esta prueba esperamos que invertir undefined lance un error
test('Invertir undefined', () => {
    expect(() => invertir(undefined)).toThrow();
});