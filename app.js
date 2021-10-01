const args = require('./config/yargs');
const colors = require('colors');
const { multiplicar } = require('./Helpers/multiplicar')

console.log( args )

multiplicar( args.b, args.l, args.h )
    .then( res =>  console.log(`${ res.rainbow } creado!`) )
    .catch( err => console.log(`Ha fallado la creacion del archivo: ${ err }`) )


