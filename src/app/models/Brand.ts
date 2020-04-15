export class Brand {
    FIELDS = [
        {
            label: "Id",
            name: "idCadena",
        },
        {
            label: "Descripción",
            name: "descripcion",
        },
        {
            label: "Imagen",
            name: "imagen",
        },
        {
            label: "Nombre Comercial",
            name: "nombreComercial",
        }
    ];

    idCadena: number;
    descripcion: string;
    imagen: string;
    nombreComercial: string;
}