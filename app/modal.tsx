import { View } from 'react-native';
import { Link } from 'expo-router';

import ImageForm from '../components/ImageForm';

export default function Modal() {
  return (
    <View className="flex-1 items-center justify-center px-3">
      <ImageForm />

      <Link className="absolute top-6 right-6" href="../">
        Close
      </Link>
    </View>
  );
}
