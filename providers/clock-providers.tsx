import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS} from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { LargeSecureStore } from "@/lib/large-secure-store";
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum TimerType {
  Pomodoro = 'Pomodoro',
  ShortBreak = 'Short Break',
  LongBreak = 'Long Break'
}

type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
  effortCount: number;
  effortSpent: number;
}

interface ClockContextProps {
  tasks: Task[];
  timer: number;
  timerType: TimerType;  
  setTimerTypeWrapper: (timerType: TimerType) => void;
  addTask: (title: string, estimatedEffort?: number) => void;
  removeTask: (id: string) => void;
  clearTasks: () => void;
  
  timerColor: string;  
  startTimer: () => void;
  stopTimer: () => void;
  timerActive: boolean;

  activeTask: Task | null;
  setActiveTask: (task: Task) => void;
}

const ClockContext = createContext<ClockContextProps>({} as ClockContextProps);

export const useClockContext = () => {
  return useContext(ClockContext);
}

interface ClockProviderProps {
  children: React.ReactNode;
}


const largeSecureStore = new LargeSecureStore();

const ClockProvider = (
  { children }: ClockProviderProps
) => {
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [timer, setTimer] = useState<number>(0);
  const [timerType, setTimerType] = useState<TimerType>(TimerType.Pomodoro);
  const [timerColor, setTimerColor] = useState<string>('#BA4949');
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [sound, setSound] = useState<Sound | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    // largeSecureStore.getItem('DevTools.Clock.Tasks').then((value) => {
    //   if (value) {
    //     console.log('DevTools.Clock.Tasks value', value);
    //     const parsedValue = JSON.parse(value);
    //     setTasks(parsedValue);
    //   }
    // });
    AsyncStorage.getItem('DevToolsClock.Tasks').then((value) => {
        if(value) {
          console.log('DevTools.Clock.Tasks value', value);
          const parsedValue = JSON.parse(value);
          setTasks(parsedValue);
        }
     });    
  }, []);  

  useEffect(() => {
    console.log('tasks changed', tasks);
    //largeSecureStore.setItem('DevToolsClock.Tasks', JSON.stringify(tasks));
    AsyncStorage.setItem('DevToolsClock.Tasks', JSON.stringify(tasks));
  }, [tasks]);  

  useEffect(() => {
    
    console.log('init sound');
    Audio.setAudioModeAsync({
        // staysActiveInBackground: true,
        // playsInSilentModeIOS: true,
        // interruptionModeIOS: InterruptionModeIOS.DuckOthers,
        // interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
        // shouldDuckAndroid: true,
        // playThroughEarpieceAndroid: true,
    });
    return sound
      ? () => {
        console.log('clean up sound')
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    const { sound: playbackObject } = await Audio.Sound.createAsync(
      //require('@/assets/sound/positive-notification-digital-twinkle-betacut-1-00-03.mp3')
      require('@/assets/sound/ringtone-2-133354.mp3')
    );
    setSound(playbackObject);    

    //console.log(playbackObject);
    await playbackObject.playAsync();
    //await playbackObject.unloadAsync();
  }

  const initialTimer = (timerType: TimerType) => {
    switch(timerType) {
      case TimerType.Pomodoro:
        setTimer(3);
        setTimerColor('#BA4949');
        break;
      case TimerType.ShortBreak:
        setTimer(3);
        setTimerColor('#38858A');
        break;
      case TimerType.LongBreak:
        setTimer(900);
        setTimerColor('#397097');
        break;
    }    
  }

  useEffect(() => {
    console.log('timerType changed', timerType)    
    switch(timerType) {
      case TimerType.Pomodoro:        
        setTimerColor('#BA4949');
        break;
      case TimerType.ShortBreak:        
        setTimerColor('#38858A');
        break;
      case TimerType.LongBreak:        
        setTimerColor('#397097');
        break;
    }       
  }, [timerType])

  const addTask = (title: string, estimatedEffort: number = 1) => {
    const newTask = {
      id: String(new Date().getTime()),
      title,
      isCompleted: false,
      effortCount: estimatedEffort,
      effortSpent: 0
    }
    setTasks([...tasks, newTask]);
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const resetTimer = () => {    
    initialTimer(timerType);
  }

  const clearTasks = () => {
    setTasks([]);
  }


  const startTimer = () => {
    
    if (!timerRef.current) {
      setTimerActive(true);
      timerRef.current = setInterval(() => {
        setTimer((state) => {
          console.log('timer', state);
          if (state - 1 <= 0) {
            stopTimer();
            playSound();
            

            if(activeTask && timerType === TimerType.Pomodoro) {
              const updatedTasks = tasks.map(task => {
                if(task.id === activeTask.id) {
                  return {
                    ...task,
                    effortSpent: task.effortSpent + 1
                  }
                }
                return task;
              });
              setTasks(updatedTasks);              
            }

            if(timerType == TimerType.Pomodoro) {
              setTimerType(TimerType.ShortBreak);
            }
            
            console.log('before reset timerType', timerType);
            resetTimer();
          }          

          return state - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  };

  const stopTimer = () => {
    if(timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = undefined;
      setTimerActive(false);
    }
  }

  const setTimerTypeWrapper = (t: TimerType) => {
    console.log('setTimerTypeWrapper', t)
    setTimerType(t);
    initialTimer(t);
    console.log('after set', timerType);
  };
  
  return (
    <ClockContext.Provider value={{
      timer, 
      tasks,
      addTask,
      removeTask,
      clearTasks,
      timerType,
      setTimerTypeWrapper,
      timerColor,
      startTimer,
      stopTimer,
      timerActive,
      activeTask,
      setActiveTask
    }}>
      {children}
    </ClockContext.Provider>
  )

}

export default ClockProvider;
