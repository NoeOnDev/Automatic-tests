function calcularPorcentaje(total, cantidad) {
    return (cantidad / total) * 100;
}
describe('calcularPorcentaje', () => {
    test('debería calcular el porcentaje correcto', () => {
        expect(calcularPorcentaje(200, 50)).toBe(25);
        expect(calcularPorcentaje(500, 125)).toBe(25);
        expect(calcularPorcentaje(100, 100)).toBe(100);
    });
});