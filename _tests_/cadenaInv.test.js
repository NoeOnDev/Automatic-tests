// Esta función recibe una cadena y devuelve la cadena invertida
function invertir(cadena) {
    return cadena.split('').reverse().join('');
}

// En esta prueba esperamos que la cadena invertida de 'hola' sea 'aloh'
test('Invertir una cadena', () => {
    expect(invertir('hola')).toBe('aloh');
});

// En esta prueba esperamos que la cadena invertida de '12345' sea '54321'
test('Invertir una cadena de números', () => {
    expect(invertir('12345')).toBe('54321');
});

// En esta prueba esperamos que la cadena invertida de '' (cadena vacía) sea '' (cadena vacía)
test('Invertir una cadena vacía', () => {
    expect(invertir('')).toBe('');
});