import { ProgressContext } from '@/context/ProgressContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProgressProvider } from '../context/ProgressContext';

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#4A90D9' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: '#F8F9FA' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'TOEFL Speaking' }} />
      <Stack.Screen name="topic/[id]" options={{ title: 'Topic Levels' }} />
      <Stack.Screen name="level/[topicId]/[level]" options={{ title: 'Practice' }} />
      <Stack.Screen name="results" options={{ title: 'Results', headerBackVisible: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ProgressProvider>
        <RootLayoutNav />
        <StatusBar style="light" />
      </ProgressProvider>
    </SafeAreaProvider>
  );
}
