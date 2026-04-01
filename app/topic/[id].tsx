import LevelCard from '@/components/LevelCard';
import { Colors, FontSizes, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/ProgressContext';
import { TOPICS } from '@/data/topics';
import { useLocalSearchParams, useRouter, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TopicDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const navigation = useNavigation();
  const { progress } = useProgress();

  const topic = TOPICS.find(t => t.id === id);

  useEffect(() => {
    if (topic) {
      navigation.setOptions({ title: topic.title });
    }
  }, [topic]);

  if (!topic) {
    return (
      <View style={styles.center}>
        <Text>Topic not found.</Text>
      </View>
    );
  }

  const topicProgress = progress.topics[topic.id];

  const isLevelUnlocked = (level: number) => {
    if (level === 1) return true;
    const prev = topicProgress?.levels[level - 1];
    return !!prev?.completed;
  };

  const getLevelProgress = (level: number) => {
    return topicProgress?.levels[level];
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={[styles.topicBanner, { backgroundColor: topic.color }]}>
        <Text style={styles.topicEmojis}>{topic.emojis}</Text>
        <Text style={styles.topicTitle}>{topic.title}</Text>
        <Text style={styles.topicSubtitle}>Complete all 5 levels to master this topic</Text>
      </View>
      <FlatList
        data={topic.levels}
        keyExtractor={item => String(item.level)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <LevelCard
            levelData={item}
            unlocked={isLevelUnlocked(item.level)}
            levelProgress={getLevelProgress(item.level)}
            color={topic.color}
            onPress={() => {
              if (isLevelUnlocked(item.level)) {
                router.push(`/level/${topic.id}/${item.level}`);
              }
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  topicBanner: {
    padding: Spacing.lg,
    alignItems: 'center',
  },
  topicEmojis: {
    fontSize: 36,
    marginBottom: Spacing.xs,
  },
  topicTitle: {
    fontSize: FontSizes.xl,
    fontWeight: 'bold',
    color: '#fff',
  },
  topicSubtitle: {
    fontSize: FontSizes.sm,
    color: 'rgba(255,255,255,0.8)',
    marginTop: Spacing.xs,
  },
  list: {
    padding: Spacing.md,
    gap: Spacing.sm,
  },
});
