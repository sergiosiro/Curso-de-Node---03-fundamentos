const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Muestra la tabla de multiplicar en consola', opciones)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opciones)
    .argv;

module.exports = {
    argv
}