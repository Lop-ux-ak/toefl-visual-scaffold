import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { Topic } from '@/data/types';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ProgressBar from './ProgressBar';

interface Props {
  topic: Topic;
  progress: number; // 0 to 1
  onPress: () => void;
}

export default function TopicCard({ topic, progress, onPress }: Props) {
  const completedQuestions = Math.round(progress * topic.questions.length);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={[styles.emojiBox, { backgroundColor: topic.color + '20' }]}>
        <Text style={styles.emojis}>{topic.emojis.split('').slice(0, 3).join('')}</Text>
      </View>
      <Text style={styles.title} numberOfLines={2}>{topic.title}</Text>
      <Text style={styles.levelText}>{completedQuestions}/{topic.questions.length} questions</Text>
      <ProgressBar progress={progress} color={topic.color} height={4} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    flex: 1,
    margin: Spacing.xs,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    maxWidth: '48%',
  },
  emojiBox: {
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  emojis: {
    fontSize: 28,
  },
  title: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
    minHeight: 36,
  },
  levelText: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
});
