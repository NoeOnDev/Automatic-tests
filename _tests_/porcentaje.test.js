function calcularPorcentaje(total, cantidad) {
    if (total === 0) {
        return NaN;
    }
    return (cantidad / total) * 100;
}

describe('calcularPorcentaje', () => {
    test('debería calcular el porcentaje correcto', () => {
        expect(calcularPorcentaje(200, 50)).toBe(25);
        expect(calcularPorcentaje(500, 125)).toBe(25);
        expect(calcularPorcentaje(100, 100)).toBe(100);
        expect(calcularPorcentaje(100, 0)).toBe(0);
    });

    test('debería devolver NaN cuando el total es 0', () => {
        expect(calcularPorcentaje(0, 50)).toBeNaN();
    });
});