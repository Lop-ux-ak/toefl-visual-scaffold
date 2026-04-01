import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { useProgress } from '@/context/ProgressContext';
import { TOPICS } from '@/data/topics';
import { TOEFLQuestion } from '@/data/types';
import { useLocalSearchParams, useRouter, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
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

  const getQuestionProgress = (questionId: string) => {
    return topicProgress?.questions[questionId];
  };

  const renderQuestion = ({ item, index }: { item: TOEFLQuestion; index: number }) => {
    const qp = getQuestionProgress(item.id);
    const isCompleted = qp?.completed ?? false;

    return (
      <Pressable
        style={styles.questionCard}
        onPress={() => router.push(`/question/${topic.id}/${item.id}`)}
      >
        <View style={[styles.questionBadge, { backgroundColor: topic.color }]}>
          <Text style={styles.questionNumber}>Q{index + 1}</Text>
        </View>
        <View style={styles.questionContent}>
          <View style={styles.titleRow}>
            <Text style={styles.questionLabel}>Question {index + 1}</Text>
            {isCompleted && <Text style={styles.completedBadge}>✓ Done</Text>}
          </View>
          <Text style={styles.questionText} numberOfLines={3}>
            {item.questionText}
          </Text>
          <View style={styles.metaRow}>
            <Text style={styles.duration}>⏱ {item.targetDuration}s target</Text>
            {qp?.attempts ? (
              <Text style={styles.attempts}>{qp.attempts} attempt{qp.attempts !== 1 ? 's' : ''}</Text>
            ) : null}
          </View>
        </View>
      </Pressable>
    );
  };

  const completedCount = topic.questions.filter(q => getQuestionProgress(q.id)?.completed).length;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={[styles.topicBanner, { backgroundColor: topic.color }]}>
        <Text style={styles.topicEmojis}>{topic.emojis}</Text>
        <Text style={styles.topicTitle}>{topic.title}</Text>
        <Text style={styles.topicSubtitle}>
          {completedCount}/{topic.questions.length} questions completed
        </Text>
      </View>
      <FlatList
        data={topic.questions}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={renderQuestion}
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
  questionCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  questionBadge: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionNumber: {
    fontSize: FontSizes.md,
    fontWeight: '800',
    color: '#fff',
  },
  questionContent: {
    flex: 1,
    gap: Spacing.xs,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  questionLabel: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  completedBadge: {
    fontSize: FontSizes.xs,
    color: Colors.success,
    fontWeight: '600',
  },
  questionText: {
    fontSize: FontSizes.sm,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  duration: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
  },
  attempts: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
  },
});
