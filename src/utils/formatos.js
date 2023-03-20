
export const formatoFecha = (fecha) =>{
    const fechaNueva = new Date();
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones);
}

export const formatearMoneda = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })
}

export const modales = [
    {id: 1, titulo: 'por Libranza',  texto: 'Descuento directamente de tu mesada pensional. Así, no tendrás que preocuparte por el pago de tu cuota'},
    {id: 2, titulo: 'Amplios Plazos',    texto: 'Plazos amplios para que tu cupo de crédito te sirva para todo lo que realmente necesitas'},
    {id: 3, titulo: 'Atencíon Personalizada',  texto: 'Nuestro asesores están disponobles para brindarte toda la atención que requieras en tu solicitud. Ninguno te pedirá comisión ni anticipos por tu solicitud'},
    {id: 4, titulo: 'Completamente en línea',  texto: 'Solicitud en línea para que todo lo puedashacer desde tu celular y sin salir de casa.'}
]