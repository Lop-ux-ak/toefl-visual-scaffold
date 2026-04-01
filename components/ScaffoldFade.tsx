import EmojiCard from '@/components/EmojiCard';
import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { LevelData } from '@/data/types';
import { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface Props {
  levelData: LevelData;
  onComplete: (duration: number) => void;
}

const FADE_STAGES = [
  { label: 'Full', opacity: 1.0, description: 'Full emoji visibility' },
  { label: 'Partial', opacity: 0.4, description: 'Emojis fading out' },
  { label: 'Icons only', opacity: 0.15, description: 'Just outlines remain' },
  { label: 'No scaffold', opacity: 0, description: 'Speak from memory' },
];

const SENTENCE_FRAMES = [
  'I prefer _____ because _____',
  'In my opinion, _____ is important because _____',
  'One reason I _____ is that _____',
  'This has helped me _____ by _____',
  'As a result, I have learned that _____',
];

type RecordingState = 'idle' | 'recording' | 'done';

export default function ScaffoldFade({ levelData, onComplete }: Props) {
  const [fadeStage, setFadeStage] = useState(0);
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const currentOpacity = FADE_STAGES[fadeStage].opacity;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: currentOpacity,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [fadeStage]);

  useEffect(() => {
    if (recordingState === 'recording') {
      intervalRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 1.12, duration: 600, useNativeDriver: true }),
          Animated.timing(pulseAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
        ]),
      ).start();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      pulseAnim.setValue(1);
      pulseAnim.stopAnimation();
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [recordingState]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* TOEFL Question */}
      {levelData.tofelQuestion && (
        <View style={styles.questionBox}>
          <Text style={styles.questionLabel}>TOEFL Question</Text>
          <Text style={styles.questionText}>{levelData.tofelQuestion}</Text>
        </View>
      )}

      {/* Scaffold fade controls */}
      <View style={styles.fadeControls}>
        <Text style={styles.fadeLabel}>Scaffold Level</Text>
        <View style={styles.fadeStages}>
          {FADE_STAGES.map((stage, i) => (
            <Pressable
              key={i}
              style={[styles.fadeStageBtn, fadeStage === i && styles.activeFadeStage]}
              onPress={() => setFadeStage(i)}
            >
              <Text style={[styles.fadeStageBtnText, fadeStage === i && styles.activeFadeStageBtnText]}>
                {stage.label}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.fadeDescription}>{FADE_STAGES[fadeStage].description}</Text>
      </View>

      {/* Animated emoji cards */}
      <Animated.View style={[styles.emojiRow, { opacity: opacityAnim }]}>
        {levelData.studyContent.vocabularyCards.map(card => (
          <EmojiCard key={card.id} card={card} showVocab={false} />
        ))}
      </Animated.View>

      {/* Sentence frames */}
      <View style={styles.framesSection}>
        <Text style={styles.framesLabel}>Sentence Frames</Text>
        {SENTENCE_FRAMES.map((frame, i) => (
          <View key={i} style={styles.frameChip}>
            <Text style={styles.frameText}>{frame}</Text>
          </View>
        ))}
      </View>

      {/* Timer */}
      <View style={styles.timerContainer}>
        <Text style={[styles.timer, elapsed > 45 && styles.timerOver]}>{formatTime(elapsed)}</Text>
        <Text style={styles.targetText}>Target: 0:45</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${Math.min(elapsed / 45, 1) * 100}%` }]} />
        </View>
      </View>

      {/* Record button */}
      {recordingState !== 'done' && (
        <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
          <Pressable
            style={[styles.recordBtn, recordingState === 'recording' && styles.recordingBtn]}
            onPress={() => {
              if (recordingState === 'idle') { setElapsed(0); setRecordingState('recording'); }
              else setRecordingState('done');
            }}
          >
            <Text style={styles.recordIcon}>{recordingState === 'idle' ? '🎙️' : '⏹️'}</Text>
            <Text style={styles.recordBtnText}>
              {recordingState === 'idle' ? 'Start 45s Response' : 'Stop Recording'}
            </Text>
          </Pressable>
        </Animated.View>
      )}

      {recordingState === 'done' && (
        <View style={styles.doneContainer}>
          <Text style={styles.doneText}>✅ {formatTime(elapsed)} recorded</Text>
          <Pressable style={styles.submitBtn} onPress={() => onComplete(elapsed)}>
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
  questionBox: {
    backgroundColor: Colors.secondary + '15',
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.secondary + '40',
  },
  questionLabel: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    color: Colors.secondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: Spacing.xs,
  },
  questionText: {
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    lineHeight: 22,
    fontStyle: 'italic',
  },
  fadeControls: {
    alignItems: 'center',
    gap: Spacing.sm,
    width: '100%',
  },
  fadeLabel: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  fadeStages: {
    flexDirection: 'row',
    gap: Spacing.xs,
  },
  fadeStageBtn: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  activeFadeStage: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  fadeStageBtnText: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  activeFadeStageBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
  fadeDescription: {
    fontSize: FontSizes.xs,
    color: Colors.textLight,
    fontStyle: 'italic',
  },
  emojiRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    justifyContent: 'center',
  },
  framesSection: {
    width: '100%',
    gap: Spacing.xs,
  },
  framesLabel: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  frameChip: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  frameText: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    fontStyle: 'italic',
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
    backgroundColor: Colors.secondary,
    borderRadius: 3,
  },
  recordBtn: {
    backgroundColor: Colors.secondary,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    gap: Spacing.xs,
    shadowColor: Colors.secondary,
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
