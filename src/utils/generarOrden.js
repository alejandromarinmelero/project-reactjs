const generarOrden = (nombre, telefono, email, productos, total) => {
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

export default generarOrden;