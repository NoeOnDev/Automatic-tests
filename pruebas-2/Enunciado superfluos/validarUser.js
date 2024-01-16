// "La función validarUsuario() debe comprobar que el usuario exista en la base de datos"

function validarUsuario(usuario) {

    if (buscarEnBaseDeDatos(usuario)) {
      console.log("Usuario válido");
      return true;
    }
    // Enunciado superfluo
    if (usuario.length > 6) {
      console.log("El nombre de usuario debe tener al menos 6 caracteres");
      return false;    
    }
  
    console.log("Usuario inválido");    
    return false;
  
  }