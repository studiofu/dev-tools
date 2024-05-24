import { View, Text, ScrollView, StyleSheet, Platform, Button } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import ClockProvider, { useClockContext } from '@/providers/clock-providers'

const ClockPage = () => {
  const router = useRouter();

  const {
    tasks,
    addTask,
    removeTask
  } = useClockContext();

  useEffect(() => {
    console.log(tasks);
  }, [tasks])

  return (
    <>
    <ClockProvider>
    <SafeAreaView className="bg-primary h-full items-center justify-center">
      <ScrollView
        className="bg-primary h-full w-full bg-red-400/30"
        contentContainerStyle={{ flexGrow: 1, height: '100%'}}
        showsVerticalScrollIndicator={false}
      >
        <View className='items-center justify-center' 
        style= {{
            //minHeight: '100%',
          }}
        >
        <Text>Coming Soon.</Text>          
        
        <Button title='Go Base 64' onPress={
          () => {router.push("/base64")}
          }/>

        <Button title='Add Tasks' onPress={
          () => {
            addTask('Task' + Date.now());
          }
          }/>

        </View>        
      </ScrollView>

    </SafeAreaView>
    <StatusBar backgroundColor='#ff9999' style='light'/>
    </ClockProvider>
    </>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  }
})

export default ClockPage