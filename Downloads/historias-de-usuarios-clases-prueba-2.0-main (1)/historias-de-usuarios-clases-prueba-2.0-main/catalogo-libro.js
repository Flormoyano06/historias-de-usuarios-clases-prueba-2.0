class Libro {
    constructor() {
        this.catalogo = [
            { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
            { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
            { titulo: "El Principito", autor: "Antoine de Saint-Exupéry" }
        ];
    }

    mostrarCatalogo() {
        return this.catalogo;
    }
}
