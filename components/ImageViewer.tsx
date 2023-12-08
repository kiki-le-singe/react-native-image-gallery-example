import { Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

import { IImageProps } from '../stores/image';
import RemoveImage from './RemoveImage';

export default function ImageViewer({ image, title, id }: IImageProps) {
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
            <Image source={{ uri: image }} className="w-full h-[200px] rounded-md bg-slate-400" />
          )}

          <Text>{title}</Text>
        </TouchableOpacity>
      </Link>

      <RemoveImage id={id} classNames="absolute bottom-7 right-[5%]" />
    </View>
  );
}
