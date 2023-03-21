// IIFE: Immediately Invoked Function Expression, evitar contaminar el scope global
(() => {
  // No usar: [String, Boolean, Number] (se usan en JS),
  // Usar: [string, boolean, number] (types en typescript)

  // --------------------------------------------------------------------//
  // ---------------------------- STRUCTURE -----------------------------//
  // [let, const] = let variable, const constante                        //
  // declaración: tipo = valor
  // --------------------------------------------------------------------//
  let defineType: number; // número
  let noDefineType; // defecto es any

  // --------------------------------------------------------------------//
  // ---------------------------- NUMBERS -------------------------------//
  // [int, float, octal: "0o0771234", hex: "0xfff", binary: "ob1010", NaN//
  // Infinity]                                                           //
  // --------------------------------------------------------------------//
  let productPrice: number = 100;
  let hexNumber: number = 0xfff;
  let binNumber: number = 0b1010;

  // --------------------------------------------------------------------//
  // ---------------------------- BOOLEANS ------------------------------//
  // [true, false]                                                       //
  // --------------------------------------------------------------------//
  let isOpen: boolean = Math.random() > 0.5;

  // --------------------------------------------------------------------//
  // ---------------------------- STRINGS -------------------------------//
  // ["iPhone12", 'iPhone12', `iPhone12`] las comillas                   //
  // --------------------------------------------------------------------//
  const productName: string = `Fernandez`;
  const otherProductName: string = "Susano " + productName;
  const anotherProductName: string = `Laura ${otherProductName}`;

  // --------------------------------------------------------------------//
  // -------------------------- UNION TYPES------------------------------//
  // para poder soportar más de un tipo de dato                          //
  // --------------------------------------------------------------------//
  let myUnionType: number | string | boolean | symbol = 16;

  // --------------------------------------------------------------------//
  // ---------------------------- TYPES ---------------------------------//
  // [alias], crear tipos propios                                        //
  // --------------------------------------------------------------------//
  type Ids = string | number | boolean;
  // La variable userID solo puede ser de un tipo del type Ids
  const userId: Ids = "Laura";

  // --------------------------------------------------------------------//
  // -------------------------- LITERAL TYPES ---------------------------//
  // --------------------------------------------------------------------//
  type Sizes = "S" | "M" | "L" | "XL";
  // La variable productID solo puede tener valores del type Sizes
  const productID: Sizes = "L";

  // --------------------------------------------------------------------//
  // ------------------------------ ARRAYS ------------------------------//
  // [number[], string[], Date[], any[]], cualquier tipo de dato         //
  // --------------------------------------------------------------------//
  const myArray: number[] = [1, 2, 3, 4, 5]; // Arreglo de números
  const myNewArray: Array<number> = [1, 2, 3, 4]; // Arreglo de números
  let prices: (number | string | boolean)[] = ["hola", 2, true]; // Varios

  // --------------------------------------------------------------------//
  // ------------------------------ TUPLES ------------------------------//
  // [number, string, boolean, Date, any], cualquier tipo de dato        //
  // Es un arreglo con una dimensión fija, y con más rendimiento
  // --------------------------------------------------------------------//
  let person: [edad: number, nombre: string, estado: boolean] = [
    1,
    "Steve",
    true
  ];
  let newPerson: [number, string, boolean] = [1, "Steve", true];
  let infiniteTuple: [number, boolean, string[]] = [
    20,
    true,
    ["Laura", "Ximena", "Susano"]
  ];

  // --------------------------------------------------------------------//
  // -------------------------------- ANY -------------------------------//
  // puede ir cualquier cosa, mal uso, pero puede ser usado en migración //
  // --------------------------------------------------------------------//
  let myDinamicVar: any;
  // Casteo: tipar el any, pero no es recomendable
  myDinamicVar = "Laura Susano";
  myDinamicVar = (myDinamicVar as string).toUpperCase(); // Casteo: string
  // Usando genéricos
  myDinamicVar = 2.2333;
  myDinamicVar = (<number>myDinamicVar).toFixed(2); // Casteo: number

  // --------------------------------------------------------------------//
  // ----------------------------- UNKNOWN ------------------------------//
  // Podemos usarlo cuando no tenemos un tipo definido pero,
  // el objeto no podrá ser usado hasta no definirle un tipo
  // --------------------------------------------------------------------//
  const jsonUnknown = (string: string): unknown => JSON.parse(string);
  const unknownObject = jsonUnknown(`{ "name": "Samuel" }`);
  // Para ejecutar alguna propiedad del unknown debemos validar su tipo
  const isUnknown = (input: unknown) => {
    if (typeof input === "string") {
      return "Laura Susano";
    } else if (Array.isArray(input)) {
      return input;
    }
  };

  // --------------------------------------------------------------------//
  // ------------------------------ VOID --------------------------------//
  // Sirve para decir que una función no retorna nada                    //
  // --------------------------------------------------------------------//
  const returnVoid = (name?: string): void => {
    "Just a Void Function";
  };
  returnVoid("Laura");

  // --------------------------------------------------------------------//
  // -------------------------- NULL & UNDEFINED-------------------------//
  // epende el caso de uso para asignar estos valores con union types    //
  // --------------------------------------------------------------------//
  const myName: string | null = "Laura";
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  // Optional chaining, puede ser usado en types, parámetros, interfaces, para decir que es opcional, si myName llegase a ser falsy, asignaría 'Sin nombre'
  const optionalChaining = (myName: string | null): string => {
    return `Optional chaining ${myName?.length || "Sin nombre"}`;
  };
  optionalChaining("Laura");
  optionalChaining(null);

  // --------------------------------------------------------------------//
  // ------------------------------ NEVER -------------------------------//
  // Significa que el valor nunca va a existir, se usa en funciones que  //
  // que lanzan excepciones                                              //
  // --------------------------------------------------------------------//
  function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
  }
  // Inferencia de tipo never
  const withoutEnd = () => {
    while (true) {
      return;
    }
  };

  // --------------------------------------------------------------------//
  // ------------------------ READ ONLY ARRAY ---------------------------//
  // --------------------------------------------------------------------//
  // Evitar mutaciones en los arreglos
  const readArray: ReadonlyArray<number> = [1, 2, 3, 4];
  // El método filter regresa un nuevo arreglo por ende no muta el arreglo original y puede ser usado
  readArray.filter((item) => {
    return item;
  });
})();
