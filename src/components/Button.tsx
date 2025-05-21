// Placeholder for a custom Button component with RTL support
// For now, using default React Native Button

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';

interface CustomButtonProps extends TouchableOpacityProps {
  title?: string; // Optional: if you want to pass text directly
  titleKey?: string; // Optional: if you want to use i18n key
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode; // To allow for custom content like icons
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  titleKey,
  buttonStyle,
  textStyle,
  children,
  ...rest
}) => {
  const { t } = useTranslation();
  const buttonText = titleKey ? t(titleKey) : title;

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} {...rest}>
      {children ||
        (buttonText && (
          <Text style={[styles.text, textStyle]}>{buttonText}</Text>
        ))}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
