import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const ClockPage = () => {
  return (
    <SafeAreaView className="bg-primary h-full items-center justify-center">
      <ScrollView
        className="bg-primary h-full w-full bg-red-400/30"
        contentContainerStyle={{ flexGrow: 1, minHeight: '100%'}}
        showsVerticalScrollIndicator={false}
      >

        <View className='items-center justify-center'>
        <Text>Coming Soon.</Text>          
        </View>
      </ScrollView>
      

                
    </SafeAreaView>
  )
}

export default ClockPage