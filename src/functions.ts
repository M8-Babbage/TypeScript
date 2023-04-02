(() => {
  // --------------------------------------------------------------------//
  // -------------------------- DECLARATIVE -----------------------------//
  // --------------------------------------------------------------------//
  function getUser(
    name: string, // Parámetro obligatorio
    lastname: string = "Susano", // Parámetro por defecto
    status?: boolean // Parámetro opcional
  ): string {
    // Retorna un string
    return `My name is ${name} ${lastname}, status: ${
      status ? status : "Desconocido"
    }`;
  }
  getUser("Laura", "Susano", true);

  // --------------------------------------------------------------------//
  // ------------------ ARROW FUNCTIONS - EXPRESION ---------------------//
  // --------------------------------------------------------------------//
  const getOldUser = (
    name: string, // Parámetro obligatorio
    lastname: string = "Susano", // Parámetro por defecto
    status?: boolean // Parámetro opcional
  ): string => {
    // retorna un string
    return `2. My name is ${name} ${lastname}, status: ${
      status ? status : "Desconocido"
    }
3. ${status ?? "Status null: Nullish coalescing"}`;
  };
  getOldUser("Laura", "Susano");
  getOldUser("Laura", "Susano", true);

  // --------------------------------------------------------------------//
  // ---------------------------- OVERLOAD ------------------------------//
  // --------------------------------------------------------------------//
  // Buenas practicas, si hay un any o un unkown en el overload se deja al final
  function parseStr(input: string): string[];
  function parseStr(input: string[]): string;
  function parseStr(input: unknown): unknown {
    if (Array.isArray(input)) {
      return input.join(""); // string
    } else if (typeof input === "string") {
      return input.split(""); // string[]
    }
  }
  parseStr(["L", "a", "u", "r", "a"]);
  parseStr("Laura");
})();
