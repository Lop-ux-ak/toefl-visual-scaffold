import TopicCard from '@/components/TopicCard';
import { Colors, Spacing, FontSizes } from '@/constants/theme';
import { TOPICS } from '@/data/topics';
import { useProgress } from '@/context/ProgressContext';
import { callAI } from '@/lib/ai';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();
  const { progress } = useProgress();

  useEffect(() => {
    callAI('you are helpful', 'say hello')
      .then(result => console.log('[AI test]', result))
      .catch(err => console.error('[AI test error]', err));
  }, []);

  const getTopicProgress = (topicId: string) => {
    const tp = progress.topics[topicId];
    if (!tp) return 0;
    const topic = TOPICS.find(t => t.id === topicId);
    if (!topic) return 0;
    const completed = Object.values(tp.questions).filter(q => q.completed).length;
    return completed / topic.questions.length;
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Visual Scaffold Speaking Practice</Text>
        <Text style={styles.hint}>Choose a topic to start practicing</Text>
      </View>
      <FlatList
        data={TOPICS}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TopicCard
            topic={item}
            progress={getTopicProgress(item.id)}
            onPress={() => router.push(`/topic/${item.id}`)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: FontSizes.md,
    color: Colors.primary,
    fontWeight: '600',
  },
  hint: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  grid: {
    padding: Spacing.sm,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.sm,
  },
});
