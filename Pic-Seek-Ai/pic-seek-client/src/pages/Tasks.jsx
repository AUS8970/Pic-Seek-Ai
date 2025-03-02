import React, { useState } from 'react';
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import Column from '../components/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Input from '../components/Input';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Lorem ipsum dolor sit amet"},
    { id: 2, title: "consectetur adipisicing elit"},
    { id: 3, title: "enim eveniet numquam molestiae"},
  ]);

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, {
      id: tasks.length + 1,
      title
    }])
  }

  const getTaskPosition = id => tasks.findIndex(task => task.id === id)

  const handleDragEnd = event => {
    const {active, over} = event;

    if(active.id === over.id) return;

    setTasks(tasks => {
      const originalPosition = getTaskPosition(active.id);
      const newPosition = getTaskPosition(over.id);
      return arrayMove(tasks, originalPosition, newPosition)
    });
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  console.log(tasks)

  return (
    <div>
      <DndContext 
        sensors={sensors} 
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Input 
          onSubmit={addTask}
        />
        <Column 
          tasks={tasks} 
        />
      </DndContext>
    </div>
  );
};

export default Tasks;