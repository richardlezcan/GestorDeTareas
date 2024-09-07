let tareas = [];

function agregarTarea() {
    const tareaInput = document.getElementById("tarea");
    const tarea = tareaInput.value.trim();
    
    if (tarea !== "") {
        tareas.push(tarea);
        actualizarListaTareas();
        tareaInput.value = "";
        console.log("Nueva tarea agregada:", tarea);
        console.log("Lista actualizada de tareas:", JSON.stringify(tareas));
    } else {
        console.log("Intento de agregar tarea vacía");
    }
}

function eliminarTarea(index) {
    const tareaEliminada = tareas.splice(index, 1)[0];
    actualizarListaTareas();
    console.log("Tarea eliminada:", tareaEliminada);
    console.log("Lista actualizada de tareas:", JSON.stringify(tareas));
}

function actualizarListaTareas() {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";
    
    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = tarea;
        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "eliminar";
        botonEliminar.onclick = () => eliminarTarea(index);
        
        li.appendChild(botonEliminar);
        listaTareas.appendChild(li);
    });

    console.log("Lista de tareas actualizada en el DOM");
}


document.addEventListener('DOMContentLoaded', function() {
    const agregarBtn = document.getElementById('agregarBtn');
    if (agregarBtn) {
        agregarBtn.addEventListener('click', agregarTarea);
    }
    console.log("Script de tareas cargado. La consola está funcionando.");
});