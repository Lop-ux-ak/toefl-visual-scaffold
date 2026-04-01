import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { useProgress } from '@/context/ProgressContext';
import { TOPICS } from '@/data/topics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type FeedbackTier = 'excellent' | 'good' | 'keep_practicing';

function getMockFeedback(duration: number, target: number): { tier: FeedbackTier; message: string; tips: string[] } {
  const ratio = duration / target;

  if (ratio >= 0.85 && ratio <= 1.3) {
    return {
      tier: 'excellent',
      message: 'Excellent response! Great timing and pacing.',
      tips: [
        'Your response length was close to ideal.',
        'Keep practicing to improve fluency.',
        'Try reducing filler words like "um" and "uh".',
      ],
    };
  } else if (ratio < 0.85) {
    return {
      tier: 'keep_practicing',
      message: 'Try to expand your answer — aim for the full target duration.',
      tips: [
        'Add more details and examples.',
        'Use the sentence frames to extend your response.',
        'Try connecting your ideas with transition words.',
      ],
    };
  } else {
    return {
      tier: 'good',
      message: 'Good effort! Try to be a bit more concise.',
      tips: [
        'Focus on quality over quantity.',
        'Aim to stay within the target time.',
        'Organize your thoughts before speaking.',
      ],
    };
  }
}

const tierConfig: Record<FeedbackTier, { emoji: string; color: string; label: string }> = {
  excellent: { emoji: '🌟', color: Colors.success, label: 'Excellent' },
  good: { emoji: '👍', color: Colors.warning, label: 'Good' },
  keep_practicing: { emoji: '💪', color: Colors.primary, label: 'Keep Practicing' },
};

export default function ResultsScreen() {
  const { topicId, level, duration, target } = useLocalSearchParams<{
    topicId: string;
    level: string;
    duration: string;
    target: string;
  }>();
  const router = useRouter();
  const { completeLevel } = useProgress();

  const durationNum = parseInt(duration ?? '0', 10);
  const targetNum = parseInt(target ?? '30', 10);
  const levelNum = parseInt(level ?? '1', 10);

  const topic = TOPICS.find(t => t.id === topicId);
  const levelData = topic?.levels.find(l => l.level === levelNum);

  const feedback = getMockFeedback(durationNum, targetNum);
  const config = tierConfig[feedback.tier];

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  const handleComplete = () => {
    if (topicId && levelNum) {
      completeLevel(topicId, levelNum);
    }
    router.push(`/topic/${topicId}`);
  };

  const handleRetry = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Score banner */}
        <View style={[styles.banner, { backgroundColor: config.color + '15', borderColor: config.color + '40' }]}>
          <Text style={styles.bannerEmoji}>{config.emoji}</Text>
          <Text style={[styles.bannerLabel, { color: config.color }]}>{config.label}</Text>
          <Text style={styles.bannerMessage}>{feedback.message}</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{formatTime(durationNum)}</Text>
            <Text style={styles.statLabel}>Your Time</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{formatTime(targetNum)}</Text>
            <Text style={styles.statLabel}>Target</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={[styles.statValue, { color: config.color }]}>
              {Math.round((durationNum / targetNum) * 100)}%
            </Text>
            <Text style={styles.statLabel}>Coverage</Text>
          </View>
        </View>

        {/* Tips */}
        <View style={styles.tipsSection}>
          <Text style={styles.tipsTitle}>Coaching Tips</Text>
          {feedback.tips.map((tip, i) => (
            <View key={i} style={styles.tipRow}>
              <Text style={styles.tipBullet}>→</Text>
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>

        {/* Model response */}
        {levelData && (
          <View style={styles.modelSection}>
            <Text style={styles.modelTitle}>Model Response</Text>
            <Text style={styles.modelText}>{levelData.studyContent.fullModelResponse}</Text>
          </View>
        )}

        {/* Actions */}
        <View style={styles.actions}>
          <Pressable style={styles.completeBtn} onPress={handleComplete}>
            <Text style={styles.completeBtnText}>✓ Mark Complete & Continue</Text>
          </Pressable>
          <Pressable style={styles.retryBtn} onPress={handleRetry}>
            <Text style={styles.retryBtnText}>↺ Try Again</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    padding: Spacing.md,
    gap: Spacing.lg,
  },
  banner: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    gap: Spacing.sm,
    borderWidth: 1,
  },
  bannerEmoji: {
    fontSize: 52,
  },
  bannerLabel: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
  },
  bannerMessage: {
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    textAlign: 'center',
    lineHeight: 22,
  },
  statsRow: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.xs,
  },
  statValue: {
    fontSize: FontSizes.xl,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  statLabel: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: Colors.border,
  },
  tipsSection: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    gap: Spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  tipsTitle: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  tipRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    alignItems: 'flex-start',
  },
  tipBullet: {
    fontSize: FontSizes.sm,
    color: Colors.primary,
    fontWeight: '700',
  },
  tipText: {
    flex: 1,
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  modelSection: {
    backgroundColor: Colors.primary + '10',
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    gap: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.primary + '30',
  },
  modelTitle: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    color: Colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  modelText: {
    fontSize: FontSizes.sm,
    color: Colors.textPrimary,
    lineHeight: 22,
  },
  actions: {
    gap: Spacing.sm,
  },
  completeBtn: {
    backgroundColor: Colors.success,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    alignItems: 'center',
  },
  completeBtnText: {
    fontSize: FontSizes.md,
    color: '#fff',
    fontWeight: '700',
  },
  retryBtn: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  retryBtnText: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
  },
});
