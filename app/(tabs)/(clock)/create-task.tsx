import { View, Text, } from 'react-native'
import React from 'react'
import { themes } from '@/themes/color-theme'
import { Button } from 'react-native-paper';

const CreateTask = () => {

  //console.log(themes["light"]);

  //const styles = StyleSheet.create(themes["light"]);

  // theme seems not working in nativewind v2

  return (
    <View className='h-full w-full items-center justify-center'
      style={ themes["light"]}
    >
      <Button icon="apple-safari" onLongPress={()=> {alert("123")}} className='bg-purple-300'>
        Press me
      </Button>
      <Text className='text-secondary'>Please input your task</Text>
      <Text className='text-gray-400'>Please input your task</Text>
      <Text className='font-pextralight bg-secondary-200'>Please input your task</Text>
    </View>
  )
}

export default CreateTask