const fs = require('fs');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base introducida ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El límite introducido ${limite} no es un número`);
            return;
        }

        let mensaje = '';
        for (let i = 1; i <= limite; i++) {
            let linea = `${base} * ${i} = ${base*i}\n`;
            mensaje += linea;
        }
        resolve(mensaje);
    });
}

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let mensaje = '';
        for (let i = 1; i <= 10; i++) {
            let linea = `${base} * ${i} = ${base*i}\n`;
            mensaje += linea;
        }

        fs.writeFile(`./bases/tabla-${base}.txt`, mensaje, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}