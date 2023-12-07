import { Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

import useImageStore, { IImageProps } from '../stores/image';

export default function ImageViewer({ image, title, id }: IImageProps) {
  const { removeItem } = useImageStore();

  function handleRemoveItem() {
    removeItem(id);
  }

  return (
    <View className="flex items-center w-full relative">
      <Link
        href={{
          pathname: '/card/[id]',
          params: { id },
        }}
        asChild>
        <TouchableOpacity className="flex items-center w-[95%] ">
          {image && (
            <Image source={{ uri: image }} className="w-full h-[200px] rounded-md bg-slate-500" />
          )}

          <Text>{title}</Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity
        onPress={handleRemoveItem}
        className="w-5 h-5 absolute bottom-7 bg-red-600 right-[5%]"
      />
    </View>
  );
}
