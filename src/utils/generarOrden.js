//Función para generar la orden del pedido con los datos del formulario y los vinilos comprados
const generateOrder = (nombre, telefono, email, productos, total) => {
    return {
        buyer: {
            Nombre: nombre,
            Telefono: telefono,
            Email: email
        },
        Vinilos: productos,
        Total: total
    }
}

export default generateOrder;