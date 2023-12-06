import React, { useEffect } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FieldPath, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import ErrorMessage from './ErrorMessage';
import useImagePickerPermission from '../hooks/useImagePickerPermission';

interface ImageInputProps<T extends FieldValues> {
  errorMessage: string | undefined;
  setValue: UseFormSetValue<T>;
  register: UseFormRegister<T>;
  image: string;
  name: FieldPath<T>;
}

export default function ImageInput<T extends FieldValues>({
  errorMessage = undefined,
  setValue,
  name,
  image,
  register,
}: ImageInputProps<T>) {
  const [hasPermission, handlePermissionDenied] = useImagePickerPermission();

  async function pickImageAsync() {
    if (!hasPermission) {
      return handlePermissionDenied();
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // @ts-ignore
      setValue(name, result.assets[0].uri, { shouldValidate: true });
    } else {
      alert('You did not select any image.');
    }
  }

  useEffect(() => {
    register(name, { required: 'Image is required' });
  }, [register]);

  return (
    <View className="flex items-center">
      {image && <Image source={{ uri: image }} className="w-52 h-52" />}
      <Button title="Pick an Image" onPress={pickImageAsync} />

      {errorMessage && <ErrorMessage message={errorMessage} />}
    </View>
  );
}
