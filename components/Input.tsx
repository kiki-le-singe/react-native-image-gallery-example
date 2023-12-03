import React from 'react';
import { TextInput, View } from 'react-native';
import { useController, FieldErrors, Control, FieldPath, FieldValues } from 'react-hook-form';

import ErrorMessage from './ErrorMessage';

interface InputProps<T extends FieldValues> {
  name: FieldPath<T>;
  placeholder: string;
  control: Control<T>;
  errors: FieldErrors | undefined;
}

export default function Input<T extends FieldValues>({
  name,
  placeholder,
  control,
  errors,
}: InputProps<T>) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: '',
    rules: {
      required: true,
    },
  });

  return (
    <View>
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
        className="bg-white p-3 rounded-md border border-gray-300"
      />

      {errors?.[name] && <ErrorMessage message="This is required." />}
    </View>
  );
}
