import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomTomatoButtonProps {  
  onPress: () => void;
  isActive: boolean;
  children?: React.ReactNode;
}

const CustomTomatoButton = (
  {children, onPress, isActive}: CustomTomatoButtonProps
) => {
  const additionalClassname = isActive ? 'bg-black/10' : 'bg-transparent';
  return (
    <TouchableOpacity onPress={onPress}>
      <View className={`${additionalClassname} rounded-md p-2`}>
        <Text className={`text-xl font-bold text-white`}>
          {children}
        </Text>    
      </View>
    </TouchableOpacity>
  )
}

export default CustomTomatoButton