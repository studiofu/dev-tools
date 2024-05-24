import { View, Text } from 'react-native'
import React from 'react'
import ClockProvider from '@/providers/clock-providers';
import { Slot } from 'expo-router';



const ClockLayout = () => {
  return (
    <ClockProvider> 
      <Slot />
    </ClockProvider>
  )
}

export default ClockLayout