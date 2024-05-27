import { View, Text } from 'react-native'
import React from 'react'
import ClockProvider from '@/providers/clock-providers';
import { Slot, Stack } from 'expo-router';



const ClockLayout = () => {
  return (
    
    <ClockProvider>
      <Stack>
        
        <Stack.Screen name="clock" options={{ headerShown: false }} />
        <Stack.Screen name="create-task" 
          options={{ headerShown: true ,
            title: 'Create Task',
            presentation: 'modal'
          }} 
        />
        
      </Stack>      
    </ClockProvider>
  )
}

export default ClockLayout