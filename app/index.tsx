import { View, Text, SafeAreaView, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useTheme } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const IndexPage = () => {
  const scheme = useColorScheme();
  const { colors } = useTheme();  

  
  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='flex-1 items-center justify-center'>
        <FontAwesome5 name="tools" size={24} color="black" />
        <Text className='p-5'>Hello, this app contains some tools for application developer to use.</Text>
        <Link href="/base64" className='bg-blue-700 rounded-md text-white p-2 w-20 justify-center items-center text-center'>Start</Link>
      </View>
    </SafeAreaView>
  )
}

export default IndexPage