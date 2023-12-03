import React from 'react';
import { Text } from 'react-native';

interface ErrorMessageProps {
  message: string | undefined;
}

export default function ErrorMessage({ message = undefined }: ErrorMessageProps) {
  return message && <Text className="text-red-500 text-center">{message}</Text>;
}
