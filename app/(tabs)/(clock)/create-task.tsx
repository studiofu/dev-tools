import { View, Text, } from 'react-native'
import React from 'react'
import { themes } from '@/themes/color-theme'
import { Button, Icon, TextInput  } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useClockContext } from '@/providers/clock-providers';

const CreateTask = () => {

  const [title, setTitle] = React.useState('');
  const [effort, setEffort] = React.useState(0);

  const router = useRouter();

  const {
    addTask,
  } = useClockContext();

  const saveTask = () => {
    addTask(title, effort);
    setEffort(0);
    setTitle('');
    router.back();
  }

  const increaseEffort = () => {
    setEffort((state) => state + 1);
  }
  const decreaseEffort = () => {
    setEffort((state) => state - 1 < 0 ? 0 : state - 1);
  }

  return (
    <View className='h-full w-full items-center justify-center gap-2 p-4'>

      <View className='w-full p-2 m-2'>
        <Text>Please input...</Text>
        <TextInput 
          label="What are you working on?" 
          placeholder='Task Title' className='w-full'
          onChangeText={(text) => setTitle(text)}
           />
      </View>
      <View className='flex flex-row items-center gap-2'>
        <Text>Estimated Effort</Text>
        <TextInput className='w-20' value={effort.toString()}/>
        <Button mode="text" onPress={()=>{ increaseEffort()}}>
            <Icon source="arrow-up-thick" size={20} />
        </Button>
        <Button mode="text" onPress={()=>{ decreaseEffort()}}>
            <Icon source="arrow-down-thick" size={20} />
        </Button>        
      </View>
      <View className='bg-gray-200 justify-between flex flex-row w-full'>        
          <Button onPress={() => router.back()}>Cancel</Button>
          <Button onPress={()=> saveTask()}>Save</Button>
      </View>
   </View>
  )
}

export default CreateTask