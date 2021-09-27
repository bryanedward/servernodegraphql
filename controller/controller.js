const pool = require('../config/config')

var ciudades = () => {
    //obtener todas la ciudades
    try {
        const ciudads = pool.query("select * from tmaeciudad")
        return ciudads.then(value => value.rows)
    } catch (error) {
        
    }
}

var usuarios = () => {
    //obtener todos los usuarios
    try {
        const usuar = pool.query("select * from thistusuar")
        return usuar.then(value => value.rows)
    } catch (error) {
        throw new Error("sin informacion")
    }
}

var buscar = ({ codigo_ciudad }) => {
    // obtener un usuario
    try {
        const usuar = pool.query(`select * from thistusuar where  pkciudad_usuar = $1`,
            [codigo_ciudad]);
        return usuar.then(value => value.rows)
    } catch (error) {

    }
}

//ruta para resolver funciones
var root = {
    consultarUsuario: usuarios,
    buscarUsuario: buscar,
    consultarCiudades: ciudades
}



module.exports = root