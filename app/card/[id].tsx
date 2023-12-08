import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';

import useImageDetails from '../../hooks/useImageDetails';

import { router } from 'expo-router';
import RemoveImage from '../../components/RemoveImage';

export default function Card() {
  const navigation = useNavigation();
  const imageDetails = useImageDetails();

  if (!imageDetails) {
    return null;
  }

  const { title, image, id } = imageDetails;

  function redirectToHome() {
    router.back();
  }

  useEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => <RemoveImage id={id} action={redirectToHome} />,
    });
  }, [navigation, title]);

  return (
    <ScrollView>
      <Image source={{ uri: image }} className="w-full h-80 bg-slate-400" />
    </ScrollView>
  );
}
