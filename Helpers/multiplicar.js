const fs = require('fs');
const colors = require('colors');

const createFileAsync =  ( salida, base = 5 ) => {
    try{
        fs.writeFileSync (`./files/tabla-del-${ base }.txt` , salida )
        return `tabla-del-${ base }.txt` 

    }catch(err){
        throw err;
    }
}

const multiplicar = async ( base = 5, list = false, hasta = 10) => {

    try{
        console.clear()

        let salida = '';
        let consola = '';

        consola += '==================\n'.rainbow
        consola += `  Tabla del ${ colors.green( base ) }\n`
        consola += '==================\n'.rainbow

        salida += '==================\n'
        salida += `  Tabla del ${ base }\n`
        salida += '==================\n'

        for (let index = 1; index <= hasta; index++) {
            consola += `${ colors.yellow( base ) } x ${ colors.yellow( index )} = ${ colors.green( base * index ) }\n`
            salida  += `${ base } x ${ index } = ${ base * index }\n`

        }

        if( list ) {
            console.log( consola );
        }
       
        let res = createFileAsync( salida, base );
        return res;
    }catch(err){
        throw err;
    }    
}

module.exports = {
    multiplicar
}
