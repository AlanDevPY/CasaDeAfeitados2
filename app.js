// Función para calcular el monto total y mostrarlo en la consola
function calcularMontoTotal(valoresSeleccionados) {
    let montoTotal = 0;

    valoresSeleccionados.forEach((valor) => {
        montoTotal += parseFloat(valor.valor);
    });

    console.log('Monto Total:', montoTotal.toFixed(3)); // Muestra el monto total en la consola
}

// Función para actualizar la tabla y el monto total
function actualizarTabla() {
    // Obtén una referencia a la tabla por su ID
    const tabla = document.querySelector('table tbody');

    // Limpia la tabla antes de actualizar
    tabla.innerHTML = '';

    // Obtiene los datos almacenados en el localStorage
    const valoresAlmacenados = localStorage.getItem('valoresSeleccionados');

    if (valoresAlmacenados) {
        const valoresSeleccionados = JSON.parse(valoresAlmacenados);

        // Itera sobre los valores almacenados y crea filas en la tabla
        valoresSeleccionados.forEach((valor, index) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${index + 1}</td>
                <td data-nombre="${valor.titulo}">${valor.titulo}</td>
                <td data-valor="${valor.valor}">${parseFloat(valor.valor).toFixed(3)}</td>
            `;
            tabla.appendChild(fila);
        });

        // Calcula y muestra el monto total en la consola
        calcularMontoTotal(valoresSeleccionados);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Obtén una referencia al botón "Save" por su id
    const saveButton = document.getElementById('saveButton');

    // Agrega un evento clic al botón "Save"
    saveButton.addEventListener('click', () => {
        // Cierra el modal utilizando jQuery
        $('#modal-1').modal('hide');

        // Recupera los datos almacenados actualmente en el localStorage
        let valoresSeleccionados = JSON.parse(localStorage.getItem('valoresSeleccionados')) || [];

        // Obtiene los datos seleccionados en esta instancia
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        checkboxes.forEach((checkbox) => {
            const titulo = checkbox.getAttribute('data-nombre');
            const valor = checkbox.getAttribute('data-valor');
            valoresSeleccionados.push({ titulo, valor });
        });

        // Guarda los datos actualizados en el localStorage
        localStorage.setItem('valoresSeleccionados', JSON.stringify(valoresSeleccionados));

        // Actualiza la tabla y el monto total
        actualizarTabla();
    });

    // Llama a la función para cargar los datos al cargar la página
    actualizarTabla();
});


document.addEventListener('DOMContentLoaded', function () {
    // Obtén una referencia al botón "Delete Caja" por su id
    const deleteCajaButton = document.getElementById('deleteCaja');

    // Agrega un evento clic al botón "Delete Caja"
    deleteCajaButton.addEventListener('click', () => {
        // Elimina la base de datos del localStorage
        localStorage.removeItem('valoresSeleccionados');

        // Recarga la página para empezar de nuevo
        location.reload();
    });
});

// Función para calcular el monto total y mostrarlo en la consola
function calcularMontoTotal(valoresSeleccionados) {
    let montoTotal = 0;

    valoresSeleccionados.forEach((valor) => {
        montoTotal += parseFloat(valor.valor);
    });

    console.log('Monto Total:', montoTotal.toFixed(2)); // Muestra el monto total en la consola

    // Obtén una referencia al botón por su id
    const botonTotal = document.getElementById('total');

    // Establece el contenido del botón con el monto total
    botonTotal.textContent = `Total: ${montoTotal.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function () {
    // ...

    // Calcula y muestra el monto total en la consola
    calcularMontoTotal(valoresSeleccionados);
});
