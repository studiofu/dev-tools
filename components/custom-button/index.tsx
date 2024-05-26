import { View, Text, Button } from 'react-native'
import React, { ComponentProps } from 'react'

type CustomButtonProps = {
  //title: string;
  //onPress: () => void;
  //props?: any;
  [x: string]: any;
} | React.ComponentProps<typeof Button>;



export const CustomButton = (  
  props: CustomButtonProps
) => {

  const {title, ...rest } = props;
  
  return (
    <View>
      <Button title={props.title} {...rest} />
    </View>
  )
}

// export const CustomButton2 = (
//   props: CustomButtonProps
// ) => {  
  
//   return (
//     <View>
//       <Button {...props} />
//     </View>
//   )
// }


interface CustomButton3Props extends ComponentProps<typeof Button> {
  title: string;
  onPress: () => void;
} ;


export const CustomButton3 = (
  {title, onPress, ...rest}: CustomButton3Props
) => {
  return (
    <View>
      <Button title={title} onPress={()=>onPress()}  {...rest} />
    </View>
  );
}