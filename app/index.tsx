import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const IndexPage = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='flex-1 items-center justify-center'>
        <Text className='p-5'>Hello, this app contains some tools for application developer to use.</Text>      
        <Link href="/base64" className='bg-blue-700 rounded-md text-white p-2 w-20 justify-center items-center text-center'>Start</Link>
      </View>
    </SafeAreaView>
  )
}

export default IndexPage