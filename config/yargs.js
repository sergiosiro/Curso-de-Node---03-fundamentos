const argv = require('yargs')
    .command('listar', 'Lista en pantalla la tabla de la base informada', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
    })
    .command('crear', 'Crea en un archivo la tabla de la base informada', {
        base: {
            demand: true,
            alias: 'b'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}