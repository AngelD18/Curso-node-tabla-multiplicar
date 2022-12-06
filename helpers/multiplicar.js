const colors = require("colors");
const fs = require("fs");
// const crearArchivo = (base = 5) => {
//   return new Promise((res, req) => {
//     console.log("=====================");
//     console.log(`Tabla del ${base}`);
//     console.log("=====================");
//     let salida = "";
//     for (let index = 1; index <= 10; index++) {
//       salida += `${base} x ${index} = ${base * index}\n`;
//     }
//     // fs.writeFile("tabla-5.txt", salida, (err) => {
//     //   if (err) throw err;
//     //   console.log('tabla-5.txt creada');
//     // });
//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     res(`tabla-${base}.txt`);
//     console.log(salida);
//   });
// };
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";
    for (let index = 1; index <= hasta; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
      consola += `${base} ${colors.green("x")} ${index} ${colors.green("=")} ${
        base * index
      }\n`;
    }
    fs.writeFileSync(`./exit/tabla-${base}.txt`, salida);
    if (listar) {
      console.log("=====================".green);
      console.log(`Tabla del ${colors.blue(base)}`.green);
      console.log("=====================".green);
      console.log(consola);
    }
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  crearArchivo,
};
