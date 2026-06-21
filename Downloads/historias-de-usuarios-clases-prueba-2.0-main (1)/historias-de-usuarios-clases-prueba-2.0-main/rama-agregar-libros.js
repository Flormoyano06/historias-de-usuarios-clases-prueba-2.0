class Libro {
    constructor() {
        this.catalogo = [];
    }

    agregarLibro(titulo, autor, genero) {
        const nuevoLibro = {
            titulo: titulo,
            autor: autor,
            genero: genero
        };

        this.catalogo.push(nuevoLibro);
        return "Libro agregado correctamente";
    }
}
