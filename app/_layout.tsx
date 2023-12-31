import { Text } from 'react-native';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="card/[id]"
        options={{
          headerShadowVisible: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
