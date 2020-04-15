export class Store {
    FIELDS = [
        { 
            label: "id",
            name: "idRestaurante"
        },
        { 
            label: "Código",
            name: "codigo"
        },
        { 
            label: "Description",
            name: "descripcion"
        },
        { 
            label: "Teléfono",
            name: "telefono"
        },
        { 
            label: "Dirección",
            name: "direccion"
        }
    ];
    idRestaurante: number;
    codigo: string;
    descripcion: string;
    telefono?: string;
    direccion?: string;
}