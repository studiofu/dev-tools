import { View, ScrollView, StyleSheet, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import ClockProvider, { useClockContext } from '@/providers/clock-providers'
import { Card, Button, Divider, Text } from 'react-native-paper'


const ClockPage = () => {
  const router = useRouter();

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

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
        className="bg-primary h-full w-full bg-red-500/30"
        contentContainerStyle={{ flexGrow: 1, height: '100%'}}
        showsVerticalScrollIndicator={false}
      >
        <View className='items-center justify-center' 
        style= {{
            //minHeight: '100%',
          }}
        >
       

        <Card className='mt-5 w-full'>
        <Card.Title title="Card Title" subtitle="Card Subtitle" titleVariant='displaySmall' />
            {/* <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions> */}
            <Card.Content>
              <Text variant="displayLarge">Card title</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>            
          </Card>          
        <Text>Coming Soon.</Text>          

        <Divider className='h-2' theme={{colors: { primary:'green' }}}/>
        <Text>Mango</Text>

        {/* <Button title='Go Base 64' onPress={
          () => {router.push("/base64")}
          }/> */}

        {/* <Button title='Add Tasks' onPress={
          () => {
            //addTask('Task' + Date.now());
            router.push("/create-task")
          }
          }/> */}

        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
        </Button>          

        <Button 
          icon="apple-safari"          
          onPress={()=> {
            router.push("/create-task")
          }}
          className='bg-white/50'>
          Press me
        </Button>

        </View>        
      </ScrollView>

    </SafeAreaView>
    
    <StatusBar backgroundColor='#ff9999' style='light'/>
    </ClockProvider>
    </>
  )
}

// SafeAreaView is used to avoid the status bar
// if using the SafeAreaView from react-native, it will not work
// and need to use the one from react-native-safe-area-context
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