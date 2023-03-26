(() => {
  // --------------------------------------------------------------------//
  // --------------------------- ABSTRACT ------------------------------//
  // --------------------------------------------------------------------//

  // Las clases abstractas no pueden ser instanciadas, se aplica herencia y después su uso

  // Con las clases abstractas podemos definir los contratos usando los tipos de acceso, lo que no permiten las interface
  abstract class Base {
    protected abstract height: number;
    protected abstract getName(name: string): string;
  }

  class Derived extends Base {
    constructor(protected height: number = 5) {
      super();
    }
    public getName(name: string) {
      return "hello " + name;
    }
  }

  const user = new Derived(10);
  console.log(user.getName("Laura"));
})();
