class Prestamo {
    constructor() {
        this.prestamos = [];
    }

    solicitarPrestamo(usuario, libro) {
        const nuevoPrestamo = {
            usuario: usuario,
            libro: libro
        };

        this.prestamos.push(nuevoPrestamo);
        return "Préstamo registrado correctamente";
    }
}
