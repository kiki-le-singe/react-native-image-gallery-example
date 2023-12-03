import React from 'react';
import { View, Button } from 'react-native';
import { useForm, SubmitHandler } from 'react-hook-form';

import Input from './Input';
import ImageInput from './ImageInput';

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
  const image = getValues('image');

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    debugger;
    setValue('title', '');
    setValue('image', '');
  };

  return (
    <View className="bg-violet-400 w-full gap-y-4">
      <Input<FormValues> name="title" placeholder="title" control={control} errors={errors} />

      <ImageInput<FormValues>
        errorMessage={errors.image?.message}
        register={register}
        setValue={setValue}
        image={image}
      />

      <Button title="Add Image" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
