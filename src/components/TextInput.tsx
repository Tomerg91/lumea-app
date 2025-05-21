// Placeholder for a custom TextInput component with enhanced RTL support
// For now, using default React Native TextInput

import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  View,
  Text,
  I18nManager,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';

interface CustomTextInputProps extends RNTextInputProps {
  label?: string;
  labelKey?: string;
  error?: string;
  errorKey?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  labelKey,
  error,
  errorKey,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  ...rest
}) => {
  const { t } = useTranslation();
  const renderedLabel = labelKey ? t(labelKey) : label;
  const renderedError = errorKey ? t(errorKey) : error;

  return (
    <View style={[styles.container, containerStyle]}>
      {renderedLabel && (
        <Text style={[styles.label, labelStyle]}>{renderedLabel}</Text>
      )}
      <RNTextInput
        style={[
          styles.input,
          I18nManager.isRTL && styles.inputRTL,
          inputStyle,
          error ? styles.inputError : null,
        ]}
        placeholderTextColor="#A0A0A0" // Softer placeholder
        {...rest}
      />
      {renderedError && (
        <Text style={[styles.errorText, errorStyle]}>{renderedError}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    // fontFamily: 'Alef-Regular',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  input: {
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#FFF',
    // fontFamily: 'Alef-Regular',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  inputRTL: {
    textAlign: 'right',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 3,
    // fontFamily: 'Alef-Regular',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
});

export default CustomTextInput;
