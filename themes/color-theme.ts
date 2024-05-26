import { useColorScheme } from 'nativewind'

import { StyleSheet } from 'react-native';

export function vars<T extends Record<`--${string}`,string|number>>(variables: T) {
  const $variables: Record<string, string> = {};

  for (const [key, value] of Object.entries(variables)) {
    if (key.startsWith("--")) {
      $variables[key] = value.toString();
    } else {
      $variables[`--${key}`] = value.toString();
    }
  }
  return $variables;
}

export const themes = {
  light: vars({
    "--color-primary-default": "#3a5e96",
    "--color-primary-light": "#5bd1e7",
    "--color-secondary-default": "#9b6cca",
    "--color-secondary-light": "#dfbeff",
    "--color-tertiary-default": "#ff88bd",
    "--color-tertiary-light": "#ffc2e6",
    "--color-accent-default": "#f9c04a",
    "--color-accent-light": "#ffeea9",
    "--color-grey-default": "#979797",
    "--color-slate-default": "#38383a",
    "--color-dark-default": "#1f355b",
    "--color-light-default": "#FCFDFD",
    "--color-overlay": "rgba(0, 0, 0, .05)",
    "--color-custom": "#C03867",
    "--color-custom-purple": "#EC23F7",
    "--color-custom-white": "#C1C1C1",    
    // custom: {
    //   DEFAULT: "#C03867",
    //   purple: "#EC23F7",
    //   white: "#C1C1C1",
    // },          
  }),
  dark: vars({
    "--color-primary-default": "#3a5e96",
    "--color-primary-light": "#5bd1e7",
    "--color-secondary-default": "#9b6cca",
    "--color-secondary-light": "#dfbeff",
    "--color-tertiary-default": "#ff88bd",
    "--color-tertiary-light": "#ffc2e6",
    "--color-accent-default": "#f9c04a",
    "--color-accent-light": "#ffeea9",
    "--color-grey-default": "#979797",
    "--color-slate-default": "#38383a",
    "--color-dark-default": "#1f355b",
    "--color-light-default": "#1E1E1E",
    "--color-overlay": "rgba(255, 255, 255, .05)"
  }),
};