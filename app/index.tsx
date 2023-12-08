import { View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import ImageList from '../components/ImageList';

export default function Home() {
  return (
    <View className="flex-1">
      <ImageList />

      <Link href="/modal" asChild>
        <TouchableOpacity className="absolute bottom-7 right-5 w-12 h-12 bg-blue-500 rounded-full items-center justify-center">
          <Ionicons name="create" size={24} color="white" />
        </TouchableOpacity>
      </Link>
    </View>
  );
}
