(() => {
  // --------------------------------------------------------------------//
  // --------------------------- ABSTRACT ------------------------------//
  // --------------------------------------------------------------------//

  // Las clases abstractas no pueden ser instanciadas, se aplica herencia y después su uso

  // Con las clases abstractas podemos definir los contratos usando los tipos de acceso, lo que no permiten las interface
  abstract class Base {
    protected abstract getName(name: string): string;
    protected abstract height: number;
  }

  class Derived extends Base {
    constructor(protected height: number = 5, public newName: string) {
      super();
    }
    protected getName(name: string) {
      return "world" + name;
    }
  }

  const test = new Derived(10, "Laura");
})();
