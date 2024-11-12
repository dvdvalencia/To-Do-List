// components/TaskForm.jsx
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editingTask }) => {
  const [task, setTask] = useState(editingTask?.task || '');
  const [img, setImg] = useState(editingTask?.img || '');
  const [description, setDescription] = useState(editingTask?.description || ''); // Nuevo estado para la descripción

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.task);
      setImg(editingTask.img);
      setDescription(editingTask.description || ''); // Inicializar con la descripción existente o vacío
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onSubmit({ task, img, description }); // Incluye la descripción al enviar
      setTask('');
      setImg('');
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
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />

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


 