class Usuario {
    constructor(usuario, contraseña) {
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

    iniciarSesion(usuarioIngresado, contraseñaIngresada) {
        if (
            this.usuario === usuarioIngresado &&
            this.contraseña === contraseñaIngresada
        ) {
            return "Inicio de sesión exitoso";
        } else {
            return "Usuario o contraseña incorrectos";
        }
    }
}

// Ejemplo de uso
const usuario1 = new Usuario("florencia", "1234");

console.log(usuario1.iniciarSesion("florencia", "1234"));