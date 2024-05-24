import { createContext, useContext, useState } from "react";


type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface ClockContextProps {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
}

const ClockContext = createContext<ClockContextProps>({} as ClockContextProps);

export const useClockContext = () => {
  return useContext(ClockContext);
}

interface ClockProviderProps {
  children: React.ReactNode;
}

const ClockProvider = (
  { children }: ClockProviderProps
) => {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask = {
      id: String(new Date().getTime()),
      title,
      isCompleted: false
    }
    setTasks([...tasks, newTask]);
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <ClockContext.Provider value={{
      tasks,
      addTask,
      removeTask
    }}>
      {children}
    </ClockContext.Provider>
  )

}

export default ClockProvider;
