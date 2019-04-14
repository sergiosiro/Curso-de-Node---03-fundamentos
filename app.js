var colors = require('colors');
const { argv } = require('./config/yargs');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let { base, limite } = argv;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('====================='.green);
        console.log(`==tabla del ${base} al ${limite}==`.green);
        console.log('====================='.green);

        listarTabla(base, limite)
            .then((mensaje) => console.log(mensaje))
            .catch((e) => console.log(e))
        break;
    case 'crear':
        crearArchivo(base)
            .then((archivo) => console.log(`El archivo ${archivo} ha sido creado!!`.rainbow.inverse))
            .catch((e) => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}