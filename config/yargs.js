const args = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Base numerica para contruir la tabla'
            })
            .option('l',{
                alias: 'list',
                type: 'boolean',
                default: false,
                describe: 'Mostrar o no la estructura de lo que imprime en el archivo generado'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'Numero Limite hasta donde se creara la tabla'
            })
            .check( ( args, options) =>{
                if(isNaN( args.b ) ){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            })
            .argv;

module.exports = args;