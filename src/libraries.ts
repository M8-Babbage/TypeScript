// Librería que tiene soporte para typescript
// npm install date-fns --save
import { subDays, format } from "date-fns";
// Esta librería de lodash no tiene soporte para TS, por lo que el mismo sistema de ts nos ayuda a detectar los types de la librería con
// npm i -D @types/lodash
import _ from "lodash";

// Generamos una fecha con la clase Date
const date: Date = new Date(2022, 2, 10); // 0:enero, 11:diciembre
// Le restamos 2 días con una función de la librería date-fns
const rta = subDays(date, 2);
// Generamos el formato día, mes y año
const formato = format(rta, "dd/MM/yyyy");

// Usar la librería de lodash que no tiene soporte en TS
const data = [
  {
    username: "Edwin",
    role: "admin"
  },
  {
    username: "Laura",
    role: "seller"
  },
  {
    username: "Nicolas",
    role: "seller"
  },
  {
    username: "Steven",
    role: "customer"
  }
];

// Agrupamos con la librería groupBy de lodash
const rta2 = _.groupBy(data, (item) => item.role);
