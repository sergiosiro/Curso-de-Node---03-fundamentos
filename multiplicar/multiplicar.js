const fs = require('fs');
const colors = require('colors').argv;

const crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base } no es un número`);
            return;
        }

        let mensaje = '';
        for (let i = 1; i <= limite; i++) {
            mensaje = mensaje + `${ base } * ${ i } = ${ base * i} \n`;
        };
        fs.writeFile(`./bases/multi-${ base }.txt`, mensaje, (err) => {
            if (err)
                reject(err);
            else
                resolve(`./bases/multi-${ base }.txt`);

        });
    });

}


const listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base } no es un número`);
            return;
        }
        console.log('============================================'.green);
        console.log(`====== tabla del ${ base } con límite ${ limite } =====`.green);
        console.log('============================================'.green);
        let mensaje = '';
        for (let i = 1; i <= limite; i++) {
            mensaje = mensaje + `${ base } * ${ i } = ${ base * i} \n`;
        };
        resolve(mensaje);

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}