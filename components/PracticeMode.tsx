import EmojiCard from '@/components/EmojiCard';
import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { LevelData } from '@/data/types';
import { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface Props {
  levelData: LevelData;
  onComplete: (duration: number) => void;
}

type RecordingState = 'idle' | 'recording' | 'done';

export default function PracticeMode({ levelData, onComplete }: Props) {
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (recordingState === 'recording') {
      intervalRef.current = setInterval(() => {
        setElapsed(e => e + 1);
      }, 1000);
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 1.15, duration: 600, useNativeDriver: true }),
          Animated.timing(pulseAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
        ]),
      ).start();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      pulseAnim.setValue(1);
      pulseAnim.stopAnimation();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [recordingState]);

  const handlePress = () => {
    if (recordingState === 'idle') {
      setElapsed(0);
      setRecordingState('recording');
    } else if (recordingState === 'recording') {
      setRecordingState('done');
    }
  };

  const handleSubmit = () => {
    onComplete(elapsed);
  };

  const formatTime = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const target = levelData.targetDuration;
  const progressRatio = Math.min(elapsed / target, 1);

  const levelHints: Record<number, string> = {
    1: 'Say the word each emoji represents',
    2: 'Build a short phrase for each emoji',
    3: 'Make one complete sentence using all emojis',
    4: 'Make one sentence per emoji, then chain them',
    5: 'Deliver your full 45-second TOEFL response',
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.hint}>{levelHints[levelData.level]}</Text>

      {/* Emoji prompt cards */}
      <View style={styles.emojiRow}>
        {levelData.studyContent.vocabularyCards.map(card => (
          <EmojiCard key={card.id} card={card} showVocab={false} />
        ))}
      </View>

      {/* Timer display */}
      <View style={styles.timerContainer}>
        <Text style={[styles.timer, elapsed > target && styles.timerOver]}>
          {formatTime(elapsed)}
        </Text>
        <Text style={styles.targetText}>Target: {formatTime(target)}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progressRatio * 100}%` }]} />
        </View>
      </View>

      {/* Record button */}
      {recordingState !== 'done' && (
        <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
          <Pressable
            style={[styles.recordBtn, recordingState === 'recording' && styles.recordingBtn]}
            onPress={handlePress}
          >
            <Text style={styles.recordIcon}>
              {recordingState === 'idle' ? '🎙️' : '⏹️'}
            </Text>
            <Text style={styles.recordBtnText}>
              {recordingState === 'idle' ? 'Start Speaking' : 'Stop Recording'}
            </Text>
          </Pressable>
        </Animated.View>
      )}

      {recordingState === 'done' && (
        <View style={styles.doneContainer}>
          <Text style={styles.doneText}>✅ Recording complete — {formatTime(elapsed)}</Text>
          <Pressable style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.submitBtnText}>Submit & See Feedback</Text>
          </Pressable>
          <Pressable style={styles.retryBtn} onPress={() => { setRecordingState('idle'); setElapsed(0); }}>
            <Text style={styles.retryBtnText}>Try Again</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
    alignItems: 'center',
    gap: Spacing.lg,
  },
  hint: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  emojiRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    justifyContent: 'center',
  },
  timerContainer: {
    alignItems: 'center',
    gap: Spacing.xs,
    width: '100%',
  },
  timer: {
    fontSize: 52,
    fontWeight: '700',
    color: Colors.textPrimary,
    fontVariant: ['tabular-nums'],
  },
  timerOver: {
    color: Colors.warning,
  },
  targetText: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
  },
  progressTrack: {
    height: 6,
    width: '80%',
    backgroundColor: Colors.border,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: 6,
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },
  recordBtn: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    gap: Spacing.xs,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  recordingBtn: {
    backgroundColor: Colors.danger,
    shadowColor: Colors.danger,
  },
  recordIcon: {
    fontSize: 32,
  },
  recordBtnText: {
    fontSize: FontSizes.md,
    color: '#fff',
    fontWeight: '700',
  },
  doneContainer: {
    alignItems: 'center',
    gap: Spacing.md,
    width: '100%',
  },
  doneText: {
    fontSize: FontSizes.md,
    color: Colors.success,
    fontWeight: '600',
  },
  submitBtn: {
    backgroundColor: Colors.success,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    width: '100%',
    alignItems: 'center',
  },
  submitBtnText: {
    fontSize: FontSizes.md,
    color: '#fff',
    fontWeight: '700',
  },
  retryBtn: {
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    width: '100%',
    alignItems: 'center',
  },
  retryBtnText: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
  },
});
