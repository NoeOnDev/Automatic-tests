function calcularPorcentaje(total, cantidad) {
    return (cantidad / total) * 100;
}
describe('calcularPorcentaje', () => {
    test('debería calcular el porcentaje correcto', () => {
        expect(calcularPorcentaje(200, 50)).toBe(25);
    });
});