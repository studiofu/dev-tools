import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

export enum TimerType {
  Pomodoro = 'Pomodoro',
  ShortBreak = 'Short Break',
  LongBreak = 'Long Break'
}

type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
  count: number;  
}

interface ClockContextProps {
  tasks: Task[];
  timer: number;
  timerType: TimerType;
  setTimerType: (type: TimerType) => void;  
  addTask: (title: string, estimatedEffort?: number) => void;
  removeTask: (id: string) => void;
  timerColor: string;  
  startTimer: () => void;
  stopTimer: () => void;
  timerActive: boolean;
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
  const [timer, setTimer] = useState<number>(0);
  const [timerType, setTimerType] = useState<TimerType>(TimerType.Pomodoro);
  const [timerColor, setTimerColor] = useState<string>('#BA4949');
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    switch(timerType) {
      case TimerType.Pomodoro:
        setTimer(1500);
        setTimerColor('#BA4949');
        break;
      case TimerType.ShortBreak:
        setTimer(300);
        setTimerColor('#38858A');
        break;
      case TimerType.LongBreak:
        setTimer(900);
        setTimerColor('#397097');
        break;
    }
  }, [timerType])

  const addTask = (title: string, estimatedEffort: number = 0) => {
    const newTask = {
      id: String(new Date().getTime()),
      title,
      isCompleted: false,
      count: estimatedEffort
    }
    setTasks([...tasks, newTask]);
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const startTimer = useCallback(() => {
    if(!timerRef.current) {
      setTimerActive(true);
      timerRef.current = setInterval(() => {
        setTimer((state) => state - 1);
      }, 1000);  
      return () => clearInterval(timerRef.current);
    }
  }, [])

  const stopTimer = useCallback(() => {
    if(timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = undefined;
      setTimerActive(false);
    }

  }, [])


  return (
    <ClockContext.Provider value={{
      timer, 
      tasks,
      addTask,
      removeTask,
      timerType,
      setTimerType,
      timerColor,
      startTimer,
      stopTimer,
      timerActive      
    }}>
      {children}
    </ClockContext.Provider>
  )

}

export default ClockProvider;
