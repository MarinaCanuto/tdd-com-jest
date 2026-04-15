const { spy, assert, stub, mock } = require("sinon");
const { Database } = require("./database");
const { UsuariosController } = require("./controller");

describe("Controller de Usuários", () => {
  let respostaEsperada;

  beforeEach(() => {
    respostaEsperada = [
      {
        id: 19,
        nome: "Marina Sousa",
        email: "marina@teste.com",
      },
    ];
  });

  it("deve retornar lista vazia quando não houver usuários", () => {
    const fakeDatabase = {
      findAll() {
        return [];
      },
    };

    const controller = new UsuariosController(fakeDatabase);
    const response = controller.getAll();

    expect(response).toEqual([]);
  });

  it("deve lançar erro quando o banco falhar", () => {
    const fakeDatabase = {
      findAll() {
        throw new Error("Erro no banco");
      },
    };

    const controller = new UsuariosController(fakeDatabase);

    expect(() => controller.getAll()).toThrow("Erro no banco");
  });

  it("deve retornar todos os usuários (fake)", () => {
    const fakeDatabase = {
      findAll() {
        return respostaEsperada;
      },
    };

    const controller = new UsuariosController(fakeDatabase);
    const response = controller.getAll();

    expect(response).toEqual(respostaEsperada);
  });

  it('deve chamar findAll com "usuarios" (spy)', () => {
    const findAll = spy(Database, "findAll");

    const controller = new UsuariosController(Database);
    controller.getAll();

    assert.calledWith(findAll, "usuarios");
    findAll.restore();
  });

  it("deve retornar dados mockados (stub)", () => {
    const findAll = stub(Database, "findAll");
    findAll.withArgs("usuarios").returns(respostaEsperada);

    const controller = new UsuariosController(Database);
    const response = controller.getAll();

    assert.calledWith(findAll, "usuarios");
    expect(response).toEqual(respostaEsperada);

    findAll.restore();
  });

  it("deve validar chamada com mock", () => {
    const dbMock = mock(Database);
    dbMock.expects("findAll").once().withArgs("usuarios");

    const controller = new UsuariosController(Database);
    controller.getAll();

    dbMock.verify();
    dbMock.restore();
  });
});
