import { StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import useImageStore, { IImageProps } from '../stores/image';
import ImageViewer from './ImageViewer';
import ItemSeparator from './ItemSeparator';

interface ImageViewerProps {
  item: IImageProps;
  index: number;
}

export default function ImageList() {
  const { images } = useImageStore();
  const reversedImages = [...images].reverse();

  return (
    <FlashList
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({ item }: ImageViewerProps) => <ImageViewer {...item} />}
      ItemSeparatorComponent={ItemSeparator}
      numColumns={2}
      estimatedItemSize={200}
      data={reversedImages}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 30,
  },
});
