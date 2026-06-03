class Usuario {
    constructor() {
        this.usuarios = [];
    }

    registrarse(nombre, correo, usuario, contraseña) {
        const nuevoUsuario = {
            nombre,
            correo,
            usuario,
            contraseña
        };

        this.usuarios.push(nuevoUsuario);
        return "Usuario registrado correctamente";
    }
}
