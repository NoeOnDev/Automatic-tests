import _ from 'lodash';

function invertir(cadena) {
    if (typeof cadena !== 'string') {
        throw new Error('El argumento debe ser una cadena');
    }
    const array = Array.from(cadena);
    const reversedArray = _.reverse(array);
    return reversedArray.join('');
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

test('Invertir una cadena con caracteres de escape', () => {
    expect(invertir('hola\n')).toBe('\naloh');
});

test('Invertir una cadena con emojis', () => {
    expect(invertir('hola 😃')).toBe('😃 aloh');
});

test('Invertir un número', () => {
    expect(() => invertir(12345)).toThrow();
});

test('Invertir un objeto', () => {
    expect(() => invertir({ hola: 'mundo' })).toThrow();
});

test('Invertir un booleano', () => {
    expect(() => invertir(true)).toThrow();
});