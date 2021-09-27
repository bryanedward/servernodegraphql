var { buildSchema } = require('graphql');

//constructor del esquema
var schema = buildSchema(`
    type thistusuar{
    ced_usuar: String
    nomb_usuar: String
	apell_usuar: String
	telef_usuar: String
    foto_usuar: String
    }

    type tmaeciudad{
        cod_ciudad: String
        nomb_ciudad: String
        descrip_ciudad: String 
    }

    type Query {
        consultarUsuario : [thistusuar]
        consultarCiudades : [tmaeciudad]
        buscarUsuario(codigo_ciudad: String): [thistusuar]
        
    }
    
`)

module.exports = schema