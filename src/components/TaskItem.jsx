import React, { useState } from 'react';
import styles from '../styles/TaskItem.module.css';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <li
      className={`${styles.taskItem} relative flex items-center p-3 space-x-4 text-2xl text-black bg-blue-200 rounded-md shadow-md`}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <div
        className={`${styles.card} ${showDescription ? styles.flipped : ''}`}
      >
        <div className={`${styles.front}`}>
          {/* Contenido del frente de la tarjeta */}

          <img
            src={task.imageUrl ? task.imageUrl : "/carrito.jpg"}
            alt={task.imageUrl}
            width="45"
            height="45"
            className="rounded-full"
          />
          <span
            className={`flex-grow ${task.isCompleted ? 'line-through' : ''}`}
          >
            {task.task}
          </span>
        </div>
        <div className={`${styles.back}`}>
          {/* Contenido de la parte trasera de la tarjeta */}
          {task.description}
        </div>
      </div>
      <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={onToggleComplete}
            className="mr-2"
          />
      <button className="text-yellow-600 hover:text-yellow-700" onClick={onEdit}>
        &#9998;
      </button>
      <button className="text-red-600 hover:text-red-800" onClick={onDelete}>
        &#x2715;
      </button>
    </li>
  );
};

export default TaskItem;