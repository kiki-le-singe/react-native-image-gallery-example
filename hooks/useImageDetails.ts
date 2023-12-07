import { useLocalSearchParams } from 'expo-router';
import useImageStore, { IImageProps } from '../stores/image';

export default function useImageDetails(): IImageProps | undefined {
  const { id } = useLocalSearchParams();
  const { getItem } = useImageStore();

  if (!id || typeof id !== 'string') {
    return;
  }

  return getItem(id);
}
