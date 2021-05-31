import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle.length > 0) {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks([...tasks, data]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    let taskList = [...tasks];
    const taskId = taskList.findIndex((task) => task.id === id);
    taskList[taskId].done = !taskList[taskId].done;

    setTasks(taskList);
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleSwitchTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <SafeAreaView style={[darkTheme ? { backgroundColor: '#1F1F1F' } : { backgroundColor: '#FFF' }, { flex: 1 }]}>
      <Header usingDarkTheme={ darkTheme } handleDarkTheme={ handleSwitchTheme } />

      <TodoInput usingDarkTheme={ darkTheme } addTask={ handleAddTask } />

      <MyTasksList
        usingDarkTheme={ darkTheme }
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </SafeAreaView>
  )
}
