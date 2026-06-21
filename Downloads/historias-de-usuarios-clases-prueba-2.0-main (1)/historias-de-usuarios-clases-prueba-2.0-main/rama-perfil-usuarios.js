class Usuario {
    constructor(nombre, correo, usuario) {
        this.nombre = nombre;
        this.correo = correo;
        this.usuario = usuario;
    }

    verPerfil() {
        return {
            nombre: this.nombre,
            correo: this.correo,
            usuario: this.usuario
        };
    }
}
