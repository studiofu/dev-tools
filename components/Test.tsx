import { View, Text, Button } from 'react-native'
import React, { Component, ComponentProps } from 'react'

type ButtonProps = ComponentProps<typeof Button>;

const TestComponent = () => {

  return (
    <View>
      <Text>TestComponent</Text>
    </View>
  )
}

export default TestComponent