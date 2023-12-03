import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Linking from 'expo-linking';

type PermissionStatus = boolean | null;
type PermissionHandler = () => void;
type ImagePickerPermission = [PermissionStatus, PermissionHandler];

export default function useImagePickerPermission(): ImagePickerPermission {
  const [hasPermission, setHasPermission] = useState<PermissionStatus>(null);

  async function requestPermissions() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    setHasPermission(status === 'granted');
  }

  function openSettings(): void {
    Linking.openSettings();
  }

  function handlePermissionDenied() {
    Alert.alert(
      'Permission Denied',
      'You need to grant camera roll permissions to use this feature. Would you like to open settings?',
      [
        { text: 'Yes', onPress: openSettings },
        { text: 'No', style: 'cancel' },
      ],
      { cancelable: true },
    );
  }

  useEffect(() => {
    requestPermissions();
  }, []);

  useEffect(() => {
    if (hasPermission === false) {
      handlePermissionDenied();
    }
  }, [hasPermission]);

  return [hasPermission, handlePermissionDenied];
}
