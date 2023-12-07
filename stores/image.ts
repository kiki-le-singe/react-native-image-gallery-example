import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';
import { generateRandomId } from '../utils';

export interface IImageProps {
  image: string;
  title: string;
  id: string;
}

export interface IPersistImageStore {
  images: IImageProps[];
  addItem: (item: IImageProps) => void;
  removeItem: (id: string) => void;
  getItem: (id: string) => IImageProps | undefined;
}

const storage = new MMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    storage.set(name, JSON.stringify(value));
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ? JSON.parse(value) : null;
  },
  removeItem: (id) => {
    storage.delete(id);
  },
};

const useImageStore = create<IPersistImageStore, [['zustand/persist', IPersistImageStore]]>(
  persist(
    (set, get) => ({
      images: [],
      addItem: (item) =>
        set((state) => {
          const id = generateRandomId();

          return { images: [...state.images, { ...item, id }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          images: state.images.filter((image) => image.id !== id),
        })),
      getItem: (id) => {
        const images = get().images;

        return images.find((images) => images.id === id);
      },
    }),
    {
      name: 'image-store',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export default useImageStore;
