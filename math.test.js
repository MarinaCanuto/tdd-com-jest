const { soma, subtracao, multiplicacao, divisao } = require("./math");

describe("Funções matemáticas básicas", () => {
  test("deve somar corretamente", () => {
    expect(soma(2, 3)).toBe(5);
  });

  test("deve subtrair corretamente", () => {
    expect(subtracao(5, 3)).toBe(2);
  });

  test("deve multiplicar corretamente", () => {
    expect(multiplicacao(2, 4)).toBe(8);
  });

  test("deve dividir corretamente", () => {
    expect(divisao(10, 2)).toBe(5);
  });

  test("deve lançar erro ao dividir por zero", () => {
    expect(() => divisao(10, 0)).toThrow("Divisão por zero");
  });

  test("deve somar números negativos", () => {
    expect(soma(-2, -3)).toBe(-5);
  });

  test("deve multiplicar por zero", () => {
    expect(multiplicacao(5, 0)).toBe(0);
  });
});
