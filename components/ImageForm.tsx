import React from 'react';
import { View, Button } from 'react-native';
import { useForm, SubmitHandler } from 'react-hook-form';
import { router } from 'expo-router';

import Input from './Input';
import ImageInput from './ImageInput';
import useImageStore from '../stores/image';

interface FormValues {
  title: string;
  image: string;
}

export default function ImageForm() {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: '',
      image: '',
    },
  });
  const { addItem } = useImageStore();

  const image = getValues('image');

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addItem(data);

    // clean up form
    setValue('title', '');
    setValue('image', '');

    // close modal and redirect to home
    router.back();
  };

  return (
    <View className="w-full gap-y-4">
      <Input<FormValues> name="title" placeholder="title" control={control} errors={errors} />

      <View>
        <ImageInput<FormValues>
          errorMessage={errors.image?.message}
          register={register}
          setValue={setValue}
          image={image}
          name="image"
        />
      </View>

      <Button title="Add Image" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
