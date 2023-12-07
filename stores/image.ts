import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

export interface IImageProps {
  image: string;
  title: string;
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
  removeItem: (index) => {
    storage.delete(index);
  },
};

const useImageStore = create(
  persist(
    (set) => ({
      images: [],
      addItem: (item) => set((state) => ({ images: [...state.images, item] })),
      removeItem: (index) =>
        set((state) => ({
          images: state.images.filter((_, i) => i !== index),
        })),
    }),
    {
      name: 'image-store',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export default useImageStore;
