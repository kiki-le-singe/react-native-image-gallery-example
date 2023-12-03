import { Text, View, TouchableOpacity } from 'react-native';

import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 gap-10 items-center justify-center bg-white">
      <Text>Home</Text>

      <Link href="/card">Card Details</Link>

      <Link href="/modal" asChild>
        <TouchableOpacity className="flex bg-blue-500 rounded-full p-5 items-center justify-center">
          <Text>Modal</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
