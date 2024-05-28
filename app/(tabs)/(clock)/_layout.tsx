import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import ClockProvider from '@/providers/clock-providers';
import { Slot, Stack } from 'expo-router';



const ClockLayout = () => {

  useEffect(() => { 
    console.log('ClockLayout mounted');
  }, [])

  return (
    
    <ClockProvider>
      <Stack>
        
        <Stack.Screen name="clock" options={{ headerShown: false }} />
        {/* <Stack.Screen name="create-task" 
          options={{ headerShown: true ,
            title: 'Create Task',
            presentation: 'modal'
          }} 
        /> */}
        
      </Stack>      
    </ClockProvider>
  )
}

export default ClockLayout