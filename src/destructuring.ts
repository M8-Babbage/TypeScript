(() => {
  // --------------------------------------------------------------------//
  // ------------------------- DESTRUCTURING ----------------------------//
  // --------------------------------------------------------------------//

  // Type user para hacer pruebas en las funciones
  type User = { user: string; id: number; param: number; otherParam: number };

  // Parámetros Rest - mismo tipo
  const restParams = (
    first: string,
    second: string,
    ...rest: string[]
  ): string => {
    return `1. First: ${first}, Second: ${second}, Rest: ${JSON.stringify(
      rest
    )}`;
  };
  restParams("Laura", "Ximena", "Susano", "Fernandez", "16");

  const anyParams = (
    first: string,
    second: string,
    ...rest: (number | boolean)[]
  ): string => {
    return `2. First: ${first}, Second: ${second}, Rest: ${JSON.stringify(
      rest
    )}`;
  };
  anyParams("Laura", "Susano", 4, true);


  // interface User = { user: string; id: number; param: number; otherParam: number };
  // Con un Type dentro de la función
  const typeDestructuring = (usuario: User): string => {
    const { user, id, ...rest } = usuario;
    return `3. User: ${user}, ID: ${id}, Rest: ${JSON.stringify(rest)}`;
  };
  const laurita: User = { user: "Laura", id: 16, param: 1, otherParam: 2 };
  typeDestructuring(laurita);

  // Destructuring dentro de los parámetros
  const anotherTypeDestructuring = ({ user, id, ...rest }: User): string => {
    return `4. User: ${user}, ID: ${id}, Rest: ${JSON.stringify(rest)}`;
  };
  anotherTypeDestructuring({ user: "Laura", id: 22, param: 1, otherParam: 2 });

  // Destructuring en arreglos
  const arrayDestructuring = (games: string[]): string => {
    const [lol, smite, albion] = games;
    return `5. Juego 1: ${lol}, Juego 2: ${smite}, Juego 3: ${albion}`;
  };
  arrayDestructuring(["League Of Legends", "Smite", "Albion Online"]);
})();
