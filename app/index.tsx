import { View, Text, SafeAreaView, useColorScheme, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useTheme } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomTomatoDashButton from '@/components/custom-tomato-dash-button';

const IndexPage = () => {
  const scheme = useColorScheme();
  const { colors } = useTheme();  

  
  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='flex-1 items-center justify-center'>
        <FontAwesome5 name="tools" size={48} color="black"/>
        <View className='pt-5'></View>
        <CustomTomatoDashButton onPress={() => {}} isActive>
          <Text className='text-black/50'>
            Hello, this app contains some tools for application developer to use. Please enjoy.
          </Text>
        </CustomTomatoDashButton>
        <Link href="/(tabs)" asChild>
          <TouchableOpacity className='w-full m-2 p-2'>          
          <View className='flex bg-blue-700 rounded-md text-white justify-center items-center text-center m-2 p-5'>
          <Text className='text-white font-bold'>
          CONTINUE
          </Text>          
          </View>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default IndexPage