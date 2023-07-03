import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import db from './Firebase.js';
import Task from './Task';

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        const taskData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(taskData);
      } catch (error) {
        console.error('Error getting tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const deleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(db, 'tasks', taskId));
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      console.log('Document successfully deleted!');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            taskName={task.taskName}
            taskDescription={task.taskDescription}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <div>No tasks available</div>
      )}
    </div>
  );
}

export default Tasks;