// components/TaskItem.jsx
import React, { useState } from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <li
      className="relative flex items-center p-3 space-x-4 text-2xl text-black bg-blue-200 rounded-md shadow-md"
      // onMouseEnter={() => setShowDescription(true)} // Muestra la descripción al hacer hover
      onMouseLeave={() => setShowDescription(false)}
      onClick={() => setShowDescription(!showDescription)} // Alterna al hacer clic
    >
      <img
        src={task.imageUrl}
        alt={task.description}
        width="45"
        height="45"
        className="rounded-full"
      />
      <span
        className={`flex-grow ${task.isCompleted ? 'line-through' : ''}`}
      >
        {task.task}
      </span>
      {showDescription && (
        <div className="absolute left-0 right-0 p-2 mt-2 text-sm text-white bg-blue-800 rounded-md shadow-lg">
          {task.description}
        </div>
      )}
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
 



// // components/TaskItem.jsx
// import React from 'react';

// const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => (
//   <li className="flex items-center p-3 space-x-4 text-2xl text-black bg-blue-200 rounded-md shadow-md">
//     <input
//       type="checkbox"
//       checked={task.isCompleted}
//       onChange={onToggleComplete}
//       className="mr-2"
//     />
//     <img src={task.imageUrl} alt={task.description} width="45" height="45" className="rounded-full"/>
//     <span className={`flex-grow ${task.isCompleted ? 'line-through text-gray-500' : ''}`}>
//       {task.description}
//     </span>
//     <button className="text-yellow-600 hover:text-yellow-700" onClick={onEdit}>
//       &#9998;
//     </button>
//     <button className="text-red-600 hover:text-red-800" onClick={onDelete}>
//       &#x2715;
//     </button>
//   </li>
// );

// export default TaskItem;
