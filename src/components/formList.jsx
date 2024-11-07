// components/FormList.jsx
"use client"
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import useLocalStorage from '../hooks/useLocalStorage';
import styles from '../styles/formList.module.css';

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
 


// "use client"
// import React, { useState } from 'react';
// import TaskForm from './TaskForm';
// import TaskItem from './TaskItem';
// import useLocalStorage from '../hooks/useLocalStorage';
// import styles from '../styles/formList.module.css';
// import '../styles/backgroundAnimation.css'; // Asegúrate de que esta línea apunte al archivo CSS donde has colocado el CSS del fondo animado.

// const FormList = () => {
//   const [taskList, setTaskList] = useLocalStorage('tasks', []);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [title, setTitle] = useLocalStorage('title', 'To-Do List');

//   const handleAddOrEditTask = (taskData) => {
//     if (editingIndex !== null) {
//       const updatedTaskList = [...taskList];
//       updatedTaskList[editingIndex] = {
//         ...taskData,
//         isCompleted: updatedTaskList[editingIndex].isCompleted || false,
//       };
//       setTaskList(updatedTaskList);
//       setEditingIndex(null);
//     } else {
//       setTaskList([...taskList, { ...taskData, isCompleted: false }]);
//     }
//   };

//   const handleEdit = (index) => setEditingIndex(index);
//   const handleDelete = (index) => {
//     setTaskList(taskList.filter((_, i) => i !== index));
//   };

//   const handleToggleComplete = (index) => {
//     setTaskList(
//       taskList.map((task, i) =>
//         i === index ? { ...task, isCompleted: !task.isCompleted } : task
//       )
//     );
//   };
 
//   const handleTitleChange = () => {
//     const newTitle = prompt("Please enter a new title:");
//     if (newTitle) {
//       setTitle(newTitle);
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen">
//       {/* Start Background Animation Body */}
//       <div className="area">
//         <ul className="circles">
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>
//       {/* End Background Animation Body */}
      
//       <div className="relative z-10 w-full max-w-md p-6 bg-blue-600 rounded shadow-2xl">
//         <div className='text-center'>
//           <h2 className={`mb-4 text-2xl font-bold ${styles.title}`}>{title}</h2>
//         </div>
//         <button onClick={handleTitleChange} className="p-2 mb-4 text-white bg-blue-800 rounded-md shadow-inner hover:bg-blue-950">
//           Nombre
//         </button>
//         <TaskForm
//           onSubmit={handleAddOrEditTask}
//           editingTask={editingIndex !== null ? taskList[editingIndex] : null}
//         />
//         <ul className="mt-6 space-y-4">
//           {taskList.map((task, index) => (
//             <TaskItem
//               key={index}
//               task={task}
//               onEdit={() => handleEdit(index)}
//               onDelete={() => handleDelete(index)}
//               onToggleComplete={() => handleToggleComplete(index)}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FormList;


// "use client"
// import React, { useState } from 'react';
// import TaskForm from './TaskForm';
// import TaskItem from './TaskItem';
// import useLocalStorage from '../hooks/useLocalStorage';
// import styles from '../styles/formList.module.css';
// import '../styles/backgroundAnimation.css'; // Asegúrate de que esta línea apunte al archivo CSS donde has colocado el CSS del fondo animado.

// const FormList = () => {
//   const [taskList, setTaskList] = useLocalStorage('tasks', []);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [title, setTitle] = useLocalStorage('title', 'To-Do List');

//   const handleAddOrEditTask = (taskData) => {
//     if (editingIndex !== null) {
//       const updatedTaskList = [...taskList];
//       updatedTaskList[editingIndex] = {
//         ...taskData,
//         isCompleted: updatedTaskList[editingIndex].isCompleted || false
//       };
//       setTaskList(updatedTaskList);
//       setEditingIndex(null);
//     } else {
//       setTaskList([...taskList, { ...taskData, isCompleted: false }]);
//     }
//   };

//   const handleEdit = (index) => setEditingIndex(index);
//   const handleDelete = (index) => {
//     setTaskList(taskList.filter((_, i) => i !== index));
//   };

//   const handleToggleComplete = (index) => {
//     setTaskList(
//       taskList.map((task, i) =>
//         i === index ? { ...task, isCompleted: !task.isCompleted } : task
//       )
//     );
//   };

//   const handleTitleChange = () => {
//     const newTitle = prompt("Please enter a new title:");
//     if (newTitle) {
//       setTitle(newTitle);
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen">
//       {/* Start Background Animation Body */}
//       <div className="area">
//         <ul className="circles">
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>
//       {/* End Background Animation Body */}
      
//       <div className="relative z-10 w-full max-w-md p-6 bg-blue-600 rounded shadow-2xl">
//         <div className='text-center'>
//           <h2 className={`mb-4 text-2xl font-bold ${styles.title}`}>{title}</h2>
//         </div>
//         <button onClick={handleTitleChange} className="p-2 mb-4 text-white bg-blue-800 rounded-md shadow-inner hover:bg-blue-950">
//           Nombre
//         </button>
//         <TaskForm
//           onSubmit={handleAddOrEditTask}
//           editingTask={editingIndex !== null ? taskList[editingIndex] : null}
//         />
//         <ul className="mt-6 space-y-4">
//           {taskList.map((task, index) => (
//             <TaskItem
//               key={index}
//               task={task}
//               onEdit={() => handleEdit(index)}
//               onDelete={() => handleDelete(index)}
//               onToggleComplete={() => handleToggleComplete(index)}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FormList;




// "use client"
// import React, { useState } from 'react';
// import TaskForm from './TaskForm';
// import TaskItem from './TaskItem';
// import useLocalStorage from '../hooks/useLocalStorage';
// import styles from '../styles/formList.module.css';

// const FormList = () => {
//   const [taskList, setTaskList] = useLocalStorage('tasks', []);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [title, setTitle] = useLocalStorage('title', 'To-Do List'); // Usar useLocalStorage para el título
  
//   const handleAddOrEditTask = (taskData) => {
//     if (editingIndex !== null) {
//       const updatedTaskList = [...taskList];
//       updatedTaskList[editingIndex] = {
//         ...taskData,
//         isCompleted: updatedTaskList[editingIndex].isCompleted || false
//       };
//       setTaskList(updatedTaskList);
//       setEditingIndex(null);
//     } else {
//       setTaskList([...taskList, { ...taskData, isCompleted: false }]);
//     }
//   };

//   const handleEdit = (index) => setEditingIndex(index);
//   const handleDelete = (index) => {
//     setTaskList(taskList.filter((_, i) => i !== index));
//   };

//   const handleToggleComplete = (index) => {
//     setTaskList(
//       taskList.map((task, i) =>
//         i === index ? { ...task, isCompleted: !task.isCompleted } : task
//       )
//     );
//   };

//   const handleTitleChange = () => {
//     const newTitle = prompt("Please enter a new title:");
//     if (newTitle) {
//       setTitle(newTitle); // Esto ahora también actualiza el localStorage
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-900">
//       <div className="w-full max-w-md p-6 bg-blue-600 rounded shadow-2xl">
//         <div className='text-center'>
//           <h2 className={`mb-4 text-2xl font-bold ${styles.title}`}>{title}</h2>
//         </div>
//         <button onClick={handleTitleChange} className="p-2 mb-4 text-white bg-blue-800 rounded-md shadow-inner hover:bg-blue-950">
//           Nombre
//         </button>
//         <TaskForm
//           onSubmit={handleAddOrEditTask}
//           editingTask={editingIndex !== null ? taskList[editingIndex] : null}
//         />
//         <ul className="mt-6 space-y-4">
//           {taskList.map((task, index) => (
//             <TaskItem
//               key={index}
//               task={task}
//               onEdit={() => handleEdit(index)}
//               onDelete={() => handleDelete(index)}
//               onToggleComplete={() => handleToggleComplete(index)}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FormList;
// "use client"
// import React, { useState } from 'react';
// import TaskForm from './TaskForm';
// import TaskItem from './TaskItem';
// import useLocalStorage from '../hooks/useLocalStorage';
// import styles from '../styles/formList.module.css';

// const FormList = () => {
//   const [taskList, setTaskList] = useLocalStorage('tasks', []);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [title, setTitle] = useLocalStorage('title', 'To-Do List'); // Cambiado a useLocalStorage
  
//   const handleAddOrEditTask = (taskData) => {
//     if (editingIndex !== null) {
//       const updatedTaskList = [...taskList];
//       updatedTaskList[editingIndex] = {
//         ...taskData,
//         isCompleted: updatedTaskList[editingIndex].isCompleted || false
//       };
//       setTaskList(updatedTaskList);
//       setEditingIndex(null);
//     } else {
//       setTaskList([...taskList, { ...taskData, isCompleted: false }]);
//     }
//   };

//   const handleEdit = (index) => setEditingIndex(index);
//   const handleDelete = (index) => {
//     setTaskList(taskList.filter((_, i) => i !== index));
//   };

//   const handleToggleComplete = (index) => {
//     setTaskList(
//       taskList.map((task, i) =>
//         i === index ? { ...task, isCompleted: !task.isCompleted } : task
//       )
//     );
//   };

//   const handleTitleChange = () => {
//     const newTitle = prompt("Please enter a new title:");
//     if (newTitle) {
//       setTitle(newTitle); // Esto ahora también actualiza el localStorage
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-900">
//       <div className="w-full max-w-md p-6 bg-blue-600 rounded shadow-2xl">
//         <div className='text-center'>
//           <h2 className={`mb-4 text-2xl font-bold ${styles.title}`}>{title}</h2>
//         </div>
//         <button onClick={handleTitleChange} className="p-2 mb-4 text-white bg-blue-800 rounded-md shadow-inner hover:bg-blue-950">
//           Nombre
//         </button>
//         <TaskForm
//           onSubmit={handleAddOrEditTask}
//           editingTask={editingIndex !== null ? taskList[editingIndex] : null}
//         />
//         <ul className="mt-6 space-y-4">
//           {taskList.map((task, index) => (
//             <TaskItem
//               key={index}
//               task={task}
//               onEdit={() => handleEdit(index)}
//               onDelete={() => handleDelete(index)}
//               onToggleComplete={() => handleToggleComplete(index)}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FormList;


// "use client"
// import React, { useState } from 'react';
// import TaskForm from './TaskForm';
// import TaskItem from './TaskItem';
// import useLocalStorage from '../hooks/useLocalStorage';
// import styles from '../styles/formList.module.css';

// const FormList = () => {
//   const [taskList, setTaskList] = useLocalStorage('tasks', []);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [title, setTitle] = useState('To-Do List');
  
//   const handleAddOrEditTask = (taskData) => {
//     if (editingIndex !== null) {
//       const updatedTaskList = [...taskList];
//       updatedTaskList[editingIndex] = {
//         ...taskData,
//         isCompleted: updatedTaskList[editingIndex].isCompleted || false
//       };
//       setTaskList(updatedTaskList);
//       setEditingIndex(null);
//     } else {
//       setTaskList([...taskList, { ...taskData, isCompleted: false }]);
//     }
//   };

//   const handleEdit = (index) => setEditingIndex(index);
//   const handleDelete = (index) => {
//     setTaskList(taskList.filter((_, i) => i !== index));
//   };

//   const handleToggleComplete = (index) => {
//     setTaskList(
//       taskList.map((task, i) =>
//         i === index ? { ...task, isCompleted: !task.isCompleted } : task
//       )
//     );
//   };

//   const handleTitleChange = () => {
//     const newTitle = prompt("Please enter a new title:");
//     if (newTitle) {
//       setTitle(newTitle);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-900">
//       <div className="w-full max-w-md p-6 bg-blue-600 rounded shadow-2xl">
//         <div className='text-center'>
//         <h2 className={`mb-4 text-2xl font-bold ${styles.title}`}>{title}</h2>
//         </div>
//         <button onClick={handleTitleChange} className="p-2 mb-4 text-white bg-blue-800 rounded-md shadow-inner hover:bg-blue-950">
//           Nombre
//         </button>
//         <TaskForm
//           onSubmit={handleAddOrEditTask}
//           editingTask={editingIndex !== null ? taskList[editingIndex] : null}
//         />
//         <ul className="mt-6 space-y-4">
//           {taskList.map((task, index) => (
//             <TaskItem
//               key={index}
//               task={task}
//               onEdit={() => handleEdit(index)}
//               onDelete={() => handleDelete(index)}
//               onToggleComplete={() => handleToggleComplete(index)}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FormList;



// // components/FormList.jsx

// "use client"
// import React, { useState } from 'react';
// import TaskForm from './TaskForm';
// import TaskItem from './TaskItem';
// import useLocalStorage from '../hooks/useLocalStorage';

// const FormList = () => {
//   const [taskList, setTaskList] = useLocalStorage('tasks', []);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleAddOrEditTask = (taskData) => {
//     if (editingIndex !== null) {
//       const updatedTaskList = [...taskList];
//       updatedTaskList[editingIndex] = {
//         ...taskData,
//         isCompleted: updatedTaskList[editingIndex].isCompleted || false
//       };
//       setTaskList(updatedTaskList);
//       setEditingIndex(null);
//     } else {
//       setTaskList([...taskList, { ...taskData, isCompleted: false }]);
//     }
//   };

//   const handleEdit = (index) => setEditingIndex(index);

//   const handleDelete = (index) => {
//     setTaskList(taskList.filter((_, i) => i !== index));
//   };

//   const handleToggleComplete = (index) => {
//     setTaskList(
//       taskList.map((task, i) =>
//         i === index ? { ...task, isCompleted: !task.isCompleted } : task
//       )
//     );
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-900">
//       <div className="w-full max-w-md p-6 bg-blue-600 rounded-lg shadow-lg">
//         <h2 className="mb-4 text-2xl font-bold text-center">To-Do List</h2>
//         <TaskForm
//           onSubmit={handleAddOrEditTask}
//           editingTask={editingIndex !== null ? taskList[editingIndex] : null}
//         />
//         <ul className="mt-6 space-y-4">
//           {taskList.map((task, index) => (
//             <TaskItem
//               key={index}
//               task={task}
//               onEdit={() => handleEdit(index)}
//               onDelete={() => handleDelete(index)}
//               onToggleComplete={() => handleToggleComplete(index)}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FormList;






// "use client"
// import React, { useState } from 'react'


// const FormList = () => {
//   const [task, setTask] = useState([]);
//   const [img, setImg] = useState('');
//   const handleInputChange = (e) => {
//     setListName(e.target.value)
//   }
  
//   const handleSubmit = (e) => {
//     e.preventDefault()


//     if(task.length > 0) {
//       task,
//       img || "/carrito.jpg"
//   }
//   setTask("");
//   setImg("");
  
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className=''>
//         <label htmlFor='task'>Tarea:</label>
//         <input type='text' id='task' name='task' onChange={handleInputChange} />
//         <label htmlFor='img'>Imagen:</label>
//         <input type='text' id='img' name='img' onChange={handleInputChange} />
//         <button type='submit'>Agregar</button>
//       </form>
//     </div>
//   )
// }
// }
// export default FormList;

// "use client";
// import React, { useState } from 'react';

// const FormList = () => {
//   const [task, setTask] = useState('');
//   const [img, setImg] = useState('');
//   const [taskList, setTaskList] = useState([]); // lista con las tareas

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     // if (name === 'task') {
//     //   setTask(value);
//     // } else if (name === 'img') {
//     //   setImg(value);
//     // }
//     name === 'task' ? setTask(value) : name === 'img' ? setImg(value) : null;
// };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (task.trim().length > 0) {
//       // Agregar la nueva tarea a la lista
//       const prevList = setTaskList((e) => [
//         ...e,
//         { description: task, imageUrl: img || "/carrito.jpg" }
//       ]);
//        // Limpiar los input
//       setTask(""); 
//       setImg(""); 
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor='task'>Tarea:</label>
//         <input type='text' id='task' name='task' value={task} onChange={handleInputChange} />
//         <label htmlFor='img'>Imagen:</label>
//         <input type='text' id='img' name='img' value={img} onChange={handleInputChange} />
//         <button type='submit'>Agregar</button>
//       </form>
//       <ul>
//         {taskList.map((item, index) => (
//           <li key={index}>
//             <img src={item.imageUrl} alt={item.description} width="50" height="50" />
//             {item.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FormList;

// "use client";
// import React, { useState, useEffect } from 'react';

// const FormList = () => {
//   const [task, setTask] = useState('');
//   const [img, setImg] = useState('');
//   const [taskList, setTaskList] = useState([]);

//   // Cargar tareas desde localStorage al montar el componente
//   useEffect(() => {
//     const storedTasks = localStorage.getItem('tasks');
//     if (storedTasks) {
//       setTaskList(JSON.parse(storedTasks));
//     }
//   }, []);

//   // Guardar tareas en localStorage cada vez que taskList cambia
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(taskList));
//   }, [taskList]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     name === 'task' ? setTask(value) : name === 'img' ? setImg(value) : null;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Agregar la nueva tarea a la lista
//     if (task.trim().length > 0) {
//       setTaskList((prevList) => [
//         ...prevList,
//         { description: task, imageUrl: img || "/carrito.jpg" }
//       ]);
//       // Limpiar los input 
//       setTask(""); 
//       setImg(""); 
//     }
    
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//     <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="mb-4 text-2xl font-bold text-center">To-Do List</h2>
//       <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className="p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           id="task"
//           placeholder="Tarea"
//           name="task"
//           value={task}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           className="p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Imagen (opcional)"
//           id="img"
//           name="img"
//           value={img}
//           onChange={handleInputChange}
//         />
//         <button
//           type="submit"
//           className="p-2 text-white transition-colors bg-blue-800 rounded-md hover:bg-blue-600"
//         >
//           Agregar
//         </button>
//       </form>
//       <ul className="mt-6 space-y-4">
//         {taskList.map((item, index) => (
//           <li key={index} className="flex items-center p-3 space-x-4 rounded-md shadow-md bg-gray-50">
//             <img src={item.imageUrl} alt={item.description} width="45" height="45" className="rounded-full"/>
//             <span className="flex-grow">{item.description}</span>
//             <button className="text-red-500 hover:text-red-700">
//               &#x2715;
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );
// };

// export default FormList;



// "use client";
// import React, { useState, useEffect } from 'react';

// const FormList = () => {
//   const [task, setTask] = useState('');
//   const [img, setImg] = useState('');
//   const [taskList, setTaskList] = useState([]);

//   // Cargar tareas desde localStorage al montar el componente
//   useEffect(() => {
//     const storedTasks = localStorage.getItem('tasks');
//     if (storedTasks) {
//       setTaskList(JSON.parse(storedTasks));
//     }
//   }, []);

//   // Guardar tareas en localStorage cada vez que taskList cambia
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(taskList));
//   }, [taskList]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'task') {
//       setTask(value);
//     } else if (name === 'img') {
//       setImg(value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (task.trim().length > 0) {
//       // Agregar la nueva tarea a la lista
//       setTaskList((prevList) => [
//         ...prevList,
//         { description: task, imageUrl: img || "/carrito.jpg" }
//       ]);
//       setTask(""); // Limpiar el input de tarea
//       setImg(""); // Limpiar el input de imagen
//     }
//   };

//   // Función para eliminar una tarea
//   const handleDelete = (index) => {
//     setTaskList((prevList) => prevList.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-900">
//       <div className="w-full max-w-md p-6 bg-blue-600 rounded-lg shadow-lg">
//         <h2 className="mb-4 text-2xl font-bold text-center">To-Do List</h2>
//         <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className="p-2 text-black border rounded-md border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             id="task"
//             placeholder="Tarea"
//             name="task"
//             value={task}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             className="p-2 text-black border rounded-md border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Imagen (opcional)"
//             id="img"
//             name="img"
//             value={img}
//             onChange={handleInputChange}
//           />
//           <button
//             type="submit"
//             className="p-2 text-white transition-colors bg-blue-800 rounded-md hover:bg-blue-950"
//           >
//             Agregar
//           </button>
//         </form>
//         <ul className="mt-6 space-y-4">
//           {taskList.map((item, index) => (
//             <li key={index} className="flex items-center p-3 space-x-4 text-2xl text-black bg-blue-200 rounded-md shadow-md">
//               <img src={item.imageUrl} alt={item.description} width="45" height="45" className="rounded-full"/>
//               <span className="flex-grow">{item.description}</span>
//               <button 
//                 className="text-red-500 hover:text-red-700"
//                 onClick={() => handleDelete(index)} // Llama a handleDelete con el índice
//               >
//                 &#x2715;
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FormList;




// "use client";

// import React, { useState, useEffect } from 'react';

// const FormList = () => {
//   const [task, setTask] = useState('');
//   const [img, setImg] = useState('');
//   const [taskList, setTaskList] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null); // Nuevo estado para el índice de edición

//   // Cargar tareas desde localStorage al montar el componente
//   useEffect(() => {
//     const storedTasks = localStorage.getItem('tasks');
//     if (storedTasks) {
//       setTaskList(JSON.parse(storedTasks));
//     }
//   }, []);

//   // Guardar tareas en localStorage cada vez que taskList cambia
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(taskList));
//   }, [taskList]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     name === 'task' ? setTask(value) : name === 'img' ? setImg(value) : null;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (task.trim().length > 0) {
//       if (editingIndex !== null) {
//         // Editar la tarea existente
//         const updatedTaskList = [...taskList];
//         updatedTaskList[editingIndex] = { description: task, imageUrl: img || "/carrito.jpg" };
//         setTaskList(updatedTaskList);
//         setEditingIndex(null); // Termina la edición
//       } else {
//         // Agregar una nueva tarea
//         setTaskList((prevList) => [
//           ...prevList,
//           { description: task, imageUrl: img || "/carrito.jpg" }
//         ]);
//       }

//       setTask(""); // Limpiar el input de tarea
//       setImg(""); // Limpiar el input de imagen
//     }
//   };

//   const handleEdit = (index) => {
//     const taskToEdit = taskList[index];
//     setTask(taskToEdit.description);
//     setImg(taskToEdit.imageUrl);
//     setEditingIndex(index); // Establece el índice en edición
//   };

//   const handleDelete = (index) => {
//     setTaskList((prevList) => prevList.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-900">
//       <div className="w-full max-w-md p-6 bg-blue-600 rounded-lg shadow-lg">
//         <h2 className="mb-4 text-2xl font-bold text-center">To-Do List</h2>
//         <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className="p-2 text-black border rounded-md border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             id="task"
//             placeholder="Tarea"
//             name="task"
//             value={task}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             className="p-2 text-black border rounded-md border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Imagen (opcional)"
//             id="img"
//             name="img"
//             value={img}
//             onChange={handleInputChange}
//           />
//           <button
//             type="submit"
//             className="p-2 text-white transition-colors bg-blue-800 rounded-md hover:bg-blue-950"
//           >
//             {editingIndex !== null ? "Guardar cambios" : "Agregar"}
//           </button>
//         </form>
//         <ul className="mt-6 space-y-4">
//           {taskList.map((item, index) => (
//             <li key={index} className="flex items-center p-3 space-x-4 text-2xl text-black bg-blue-200 rounded-md shadow-md">
//               <img src={item.imageUrl} alt={item.description} width="45" height="45" className="rounded-full"/>
//               <span className="flex-grow">{item.description}</span>
//               <button
//                 className="text-yellow-600 hover:text-yellow-700"
//                 onClick={() => handleEdit(index)} // Llama a handleEdit con el índice
//               >
//                 &#9998; {/* Icono de lápiz para edición */}
//               </button>
//               <button 
//                 className="text-red-600 hover:text-red-800"
//                 onClick={() => handleDelete(index)}
//               >
//                 &#x2715;
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FormList;








// "use client";

// import React, { useState, useEffect } from 'react';

// const FormList = () => {
//   const [task, setTask] = useState(''); // Estado inicial en string vacío
//   const [img, setImg] = useState('');   // Estado inicial en string vacío
//   const [taskList, setTaskList] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   useEffect(() => {
//     const storedTasks = localStorage.getItem('tasks');
//     if (storedTasks) {
//       setTaskList(JSON.parse(storedTasks));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(taskList));
//   }, [taskList]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'task') {
//       setTask(value);
//     } else if (name === 'img') {
//       setImg(value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (task.trim().length > 0) {
//       if (editingIndex !== null) {
//         const updatedTaskList = [...taskList];
//         updatedTaskList[editingIndex] = {
//           description: task,
//           imageUrl: img || "/carrito.jpg",
//           isCompleted: updatedTaskList[editingIndex].isCompleted || false
//         };
//         setTaskList(updatedTaskList);
//         setEditingIndex(null);
//       } else {
//         setTaskList((prevList) => [
//           ...prevList,
//           { description: task, imageUrl: img || "/carrito.jpg", isCompleted: false }
//         ]);
//       }

//       setTask(""); // Limpiar el input de tarea
//       setImg("");  // Limpiar el input de imagen
//     }
//   };

//   const handleEdit = (index) => {
//     const taskToEdit = taskList[index];
//     setTask(taskToEdit.description);
//     setImg(taskToEdit.imageUrl);
//     setEditingIndex(index);
//   };

//   const handleDelete = (index) => {
//     setTaskList((prevList) => prevList.filter((_, i) => i !== index));
//   };

//   const handleToggleComplete = (index) => {
//     setTaskList((prevList) =>
//       prevList.map((task, i) =>
//         i === index ? { ...task, isCompleted: !task.isCompleted } : task
//       )
//     );
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-900">
//       <div className="w-full max-w-md p-6 bg-blue-600 rounded-lg shadow-lg">
//         <h2 className="mb-4 text-2xl font-bold text-center">To-Do List</h2>
//         <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className="p-2 text-black border rounded-md border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             id="task"
//             placeholder="Tarea"
//             name="task"
//             value={task || ""} // Asegurar que el valor es un string
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             className="p-2 text-black border rounded-md border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Imagen (opcional)"
//             id="img"
//             name="img"
//             value={img || ""} // Asegurar que el valor es un string
//             onChange={handleInputChange}
//           />
//           <button
//             type="submit"
//             className="p-2 text-white transition-colors bg-blue-800 rounded-md hover:bg-blue-950"
//           >
//             {editingIndex !== null ? "Guardar cambios" : "Agregar"}
//           </button>
//         </form>
//         <ul className="mt-6 space-y-4">
//           {taskList.map((item, index) => (
//             <li key={index} className="flex items-center p-3 space-x-4 text-2xl text-black bg-blue-200 rounded-md shadow-md">
//               <input
//                 type="checkbox"
//                 checked={item.isCompleted}
//                 onChange={() => handleToggleComplete(index)}
//                 className="mr-2"
//               />
//               <img src={item.imageUrl} alt={item.description} width="45" height="45" className="rounded-full"/>
//               <span className={`flex-grow ${item.isCompleted ? 'line-through text-gray-500' : ''}`}>
//                 {item.description}
//               </span>
//               <button
//                 className="text-yellow-600 hover:text-yellow-700"
//                 onClick={() => handleEdit(index)}
//               >
//                 &#9998;
//               </button>
//               <button 
//                 className="text-red-600 hover:text-red-800"
//                 onClick={() => handleDelete(index)}
//               >
//                 &#x2715;
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FormList;

