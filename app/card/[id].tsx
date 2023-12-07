import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';

import useImageDetails from '../../hooks/useImageDetails';

export default function Card() {
  const navigation = useNavigation();
  const imageDetails = useImageDetails();

  if (!imageDetails) {
    return null;
  }

  const { title, image } = imageDetails;

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  return (
    <View className="flex items-center pt-8">
      <Image source={{ uri: image }} className="w-full h-4/6 bg-slate-500" />
    </View>
  );
}
