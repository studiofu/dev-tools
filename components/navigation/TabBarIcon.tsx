// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { Entypo, MaterialIcons } from '@expo/vector-icons';
type EntypoIconProps = React.ComponentProps<typeof Entypo>;

type Props = {
  materialIconName: keyof typeof MaterialIcons.glyphMap;
}

type a = ComponentProps<typeof Ionicons>;
type b = ComponentProps<typeof Ionicons>['name'];
type r = IconProps<ComponentProps<typeof Ionicons>['name']>;

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function TabBarEntypoIcon({ style, ...rest }: IconProps<ComponentProps<typeof Entypo>['name']>) {
  return <Entypo size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}


export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
