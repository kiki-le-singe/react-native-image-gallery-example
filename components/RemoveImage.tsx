import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import useImageStore from '../stores/image';

interface RemoveImageProps {
  id: string;
  classNames?: string;
  action?: () => void;
}

export default function RemoveImage({ id, action, classNames = '' }: RemoveImageProps) {
  const { removeItem } = useImageStore();

  function handleRemoveItem() {
    removeItem(id);
    action?.();
  }

  return (
    <TouchableOpacity onPress={handleRemoveItem} className={classNames}>
      <Entypo name="trash" size={24} color="red" />
    </TouchableOpacity>
  );
}
