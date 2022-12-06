const { log } = require("console");
const argv = require("./config/yargs");
require("colors");
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();
log(argv);
// const [, , arg3 = "base=6"] = process.argv;
// const [, base = 6] = arg3.split("=");
const base = 5;
crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
