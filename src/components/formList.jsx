"use client"
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import useLocalStorage from '../hooks/useLocalStorage';
import styles from '../styles/formList.module.css';
import '../styles/backgroundAnimation.css';
const FormList = () => {
  const [taskList, setTaskList] = useLocalStorage('tasks', []);
  const [editingIndex, setEditingIndex] = useState(null);
  const [title, setTitle] = useLocalStorage('title', 'To-Do List');

  const handleAddOrEditTask = (taskData) => {
    if (editingIndex !== null) {
      const updatedTaskList = [...taskList];
      updatedTaskList[editingIndex] = {
        ...taskData,
        isCompleted: updatedTaskList[editingIndex].isCompleted || false,
      };
      setTaskList(updatedTaskList);
      setEditingIndex(null);
    } else {
      // Establecer la imagen por defecto si no se proporciona
      const newTask = {
        ...taskData,
        img: taskData.img || "/carrito.jpg", // Imagen por defecto
        isCompleted: false,
      };
      setTaskList([...taskList, newTask]);
    }
  };

  const handleEdit = (index) => setEditingIndex(index);
  const handleDelete = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setTaskList(
      taskList.map((task, i) =>
        i === index ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleTitleChange = () => {
    const newTitle = prompt("Please enter a new title:");
    if (newTitle) {
      setTitle(newTitle);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Start Background Animation Body */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {/* End Background Animation Body */}
      
      <div className="relative z-10 w-full max-w-md p-6 bg-blue-600 rounded shadow-2xl">
        <div className='text-center'>
          <h2 className={`mb-4 text-2xl font-bold ${styles.title}`}>{title}</h2>
        </div>
        <button onClick={handleTitleChange} className="p-2 mb-4 text-white bg-blue-800 rounded-md shadow-inner hover:bg-blue-950">
          Nombre
        </button>
        <TaskForm
          onSubmit={handleAddOrEditTask}
          editingTask={editingIndex !== null ? taskList[editingIndex] : null}
        />
        <ul className="mt-6 space-y-4">
          {taskList.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
              onToggleComplete={() => handleToggleComplete(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormList;
 
 