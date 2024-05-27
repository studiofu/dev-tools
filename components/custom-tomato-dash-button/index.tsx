import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomTomatoDashButtonProps {  
  onPress: () => void;
  isActive: boolean;
  children?: React.ReactNode;
}

const CustomTomatoDashButton = (
  {children, onPress, isActive}: CustomTomatoDashButtonProps
) => {
  const additionalClassname = isActive ? 'bg-black/10' : 'bg-transparent';
  return (
    <TouchableOpacity onPress={onPress}>
      <View className={`${additionalClassname} rounded-md p-2 m-2 items-center justify-center`}
        style={{
        borderRadius : 1,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'rgba(161,155,183,1)'}}
      >
        <Text className={`text-xl font-bold text-white`}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomTomatoDashButton