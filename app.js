// Ambas funcionan igual, en la 2 da estoy usando desustructuración de objetos
//const crearArchivo = require('./multiplicar/multiplicar').crearArchivo;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors').argv;


// let argv = process.argv;
// console.log(argv);
let base = argv.base;
let limite = argv.limite;

switch (argv._[0]) {
    case 'listar':
        listarTabla(base, limite)
            .then((tabla) => console.log(tabla.red))
            .catch((err) => { console.log(err); });
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then((archivo) => { console.log(`El archivo ${ archivo } fue creado con éxito!!!`.green); })
            .catch((err) => { console.log(err); });
        break;
    default:
        console.log('Comando no reconocido');
}