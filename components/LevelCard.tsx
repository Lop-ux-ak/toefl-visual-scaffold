import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { LevelData, LevelProgress } from '@/data/types';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ProgressBar from './ProgressBar';

interface Props {
  levelData: LevelData;
  unlocked: boolean;
  levelProgress?: LevelProgress;
  color: string;
  onPress: () => void;
}

const levelIcons = ['🔤', '💬', '📝', '🔗', '🎤'];

export default function LevelCard({ levelData, unlocked, levelProgress, color, onPress }: Props) {
  const isCompleted = levelProgress?.completed ?? false;

  return (
    <Pressable
      style={[styles.card, !unlocked && styles.locked]}
      onPress={onPress}
      disabled={!unlocked}
    >
      <View style={[styles.levelBadge, { backgroundColor: unlocked ? color : Colors.border }]}>
        <Text style={styles.levelIcon}>{unlocked ? levelIcons[levelData.level - 1] : '🔒'}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={[styles.levelNum, { color: unlocked ? color : Colors.textLight }]}>
            Level {levelData.level}
          </Text>
          {isCompleted && <Text style={styles.completedBadge}>✓ Done</Text>}
        </View>
        <Text style={[styles.title, !unlocked && styles.lockedText]}>{levelData.title}</Text>
        <Text style={[styles.description, !unlocked && styles.lockedText]} numberOfLines={2}>
          {levelData.description}
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.duration}>⏱ {levelData.targetDuration}s target</Text>
          {levelProgress?.attempts ? (
            <Text style={styles.attempts}>{levelProgress.attempts} attempt{levelProgress.attempts !== 1 ? 's' : ''}</Text>
          ) : null}
        </View>
        {isCompleted && (
          <ProgressBar progress={1} color={color} height={4} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
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
  locked: {
    opacity: 0.6,
  },
  levelBadge: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelIcon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    gap: Spacing.xs,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  levelNum: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  completedBadge: {
    fontSize: FontSizes.xs,
    color: Colors.success,
    fontWeight: '600',
  },
  title: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  description: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
  },
  lockedText: {
    color: Colors.textLight,
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
