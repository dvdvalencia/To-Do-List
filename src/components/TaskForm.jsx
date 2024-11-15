// components/TaskForm.jsx
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editingTask }) => {
  const [task, setTask] = useState(editingTask?.task || '');
  const [imageUrl, setImageUrl] = useState(editingTask?.imageUrl || '');
  const [description, setDescription] = useState(editingTask?.description || ''); // Nuevo estado para la descripción

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.task);
      setImageUrl(editingTask.imageUrl || ''); // Inicializar con la URL existente o vacío
      setDescription(editingTask.description || ''); // Inicializar con la descripción existente o vacío
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onSubmit({ task, imageUrl: imageUrl || "/carrito.jpg", description }); // Envía imageUrl
      setTask('');
      setImageUrl('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        className="p-2 text-black border rounded-md border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Nombre de la tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        className="p-2 text-black border rounded-md border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Descripción de la tarea" // Input para la descripción
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        className="p-2 text-black border rounded-md border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Imagen (opcional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      
      {/* Vista previa de la imagen */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Vista previa"
          className="object-cover w-24 h-24 rounded-md" // Ajusta el tamaño según sea necesario
        />
      )}

      <button
        type="submit"
        className="p-2 text-white transition-colors bg-blue-800 rounded-md hover:bg-blue-950"
      >
        {editingTask ? "Guardar cambios" : "Agregar"}
      </button>
    </form>
  );
};

export default TaskForm;