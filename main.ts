interface Recurso {
    id: number;
    nombre: string;
    total: number;
    disponibles: number;
}

const recursos = [
    { id: 1, nombre: "Proyector", total: 2, disponibles: 2 },
    { id: 2, nombre: "Cable HDMI", total: 5, disponibles: 5 },
    { id: 3, nombre: "Adaptador USB-C", total: 3, disponibles: 3 },
    { id: 4, nombre: "Teclado", total: 4, disponibles: 4 },
    { id: 5, nombre: "Mouse", total: 4, disponibles: 4 },
    { id: 6, nombre: "Cámara web", total: 2, disponibles: 2 }
];


const selector = document.querySelector<HTMLSelectElement>("#recurso");
if (selector){
    for ( const recurso of recursos){
        const opcion = document.createElement("option")
        opcion.value = String(recurso.id);
        opcion.textContent = recurso.nombre;
        selector.appendChild(opcion)
    }
}

function mostrarRecursos (recursosAMostrar: Recurso[]): void {
    const cuerpo = document.querySelector<HTMLTableSectionElement>("#lista")
    if(!cuerpo) return;
    cuerpo.innerHTML= ""; 
    for ( const recurso of recursosAMostrar){
        const fila = cuerpo.insertRow();
        fila.insertCell().textContent = recurso.nombre;
        fila.insertCell().textContent = String(recurso.total);
        fila.insertCell().textContent = String(recurso.disponibles);
    }
}

mostrarRecursos(recursos);