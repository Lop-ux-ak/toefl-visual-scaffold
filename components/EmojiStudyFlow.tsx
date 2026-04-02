import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { TOEFLQuestion } from '@/data/types';
import VocabStep from '@/components/steps/VocabStep';
import PhraseStep from '@/components/steps/PhraseStep';
import SentenceStep from '@/components/steps/SentenceStep';
import ParagraphStep from '@/components/steps/ParagraphStep';
import { View, Text, StyleSheet } from 'react-native';

type Step = 'vocab' | 'phrase' | 'sentence' | 'paragraph';

interface FlowState {
  emojiIndex: number;
  step: Step;
}

interface Props {
  question: TOEFLQuestion;
  flowState: FlowState;
  onAdvance: () => void;
  onGoToPractice: () => void;
}

export function initialFlowState(): FlowState {
  return { emojiIndex: 0, step: 'vocab' };
}

export function advanceFlowState(state: FlowState, totalEmojis: number): FlowState {
  const { emojiIndex, step } = state;
  if (step === 'vocab') return { emojiIndex, step: 'phrase' };
  if (step === 'phrase') return { emojiIndex, step: 'sentence' };
  if (step === 'sentence') {
    if (emojiIndex < totalEmojis - 1) return { emojiIndex: emojiIndex + 1, step: 'vocab' };
    return { emojiIndex, step: 'paragraph' };
  }
  return state; // paragraph — caller handles practice navigation
}

const STEP_LABELS: Record<Step, string> = {
  vocab: 'Vocabulary',
  phrase: 'Phrases',
  sentence: 'Sentence',
  paragraph: 'Full Response',
};

function ProgressBar({ flowState, totalEmojis }: { flowState: FlowState; totalEmojis: number }) {
  const { emojiIndex, step } = flowState;

  const stepLabel = STEP_LABELS[step];
  const progressLabel =
    step === 'paragraph'
      ? 'Final Assembly'
      : `Emoji ${emojiIndex + 1} of ${totalEmojis} · ${stepLabel}`;

  // Calculate overall progress: each emoji has 3 steps, paragraph is last
  const totalSteps = totalEmojis * 3 + 1;
  const stepWeights: Record<Step, number> = { vocab: 0, phrase: 1, sentence: 2, paragraph: 0 };
  const completedSteps =
    step === 'paragraph'
      ? totalEmojis * 3
      : emojiIndex * 3 + stepWeights[step];
  const progress = completedSteps / totalSteps;

  return (
    <View style={barStyles.container}>
      <Text style={barStyles.label}>{progressLabel}</Text>
      <View style={barStyles.track}>
        <View style={[barStyles.fill, { width: `${progress * 100}%` }]} />
      </View>
    </View>
  );
}

const barStyles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.xs,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    gap: Spacing.xs,
  },
  label: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  track: {
    height: 4,
    backgroundColor: Colors.border,
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.full,
  },
});

export default function EmojiStudyFlow({ question, flowState, onAdvance, onGoToPractice }: Props) {
  const { emojiUnits } = question.studyContent;
  const currentUnit = emojiUnits[flowState.emojiIndex];

  return (
    <View style={styles.container}>
      <ProgressBar flowState={flowState} totalEmojis={emojiUnits.length} />

      <View style={styles.stepContent}>
        {flowState.step === 'vocab' && currentUnit ? (
          <VocabStep unit={currentUnit} onNext={onAdvance} />
        ) : flowState.step === 'phrase' && currentUnit ? (
          <PhraseStep unit={currentUnit} onNext={onAdvance} />
        ) : flowState.step === 'sentence' && currentUnit ? (
          <SentenceStep
            unit={currentUnit}
            isLastEmoji={flowState.emojiIndex === emojiUnits.length - 1}
            onNext={onAdvance}
          />
        ) : (
          <ParagraphStep studyContent={question.studyContent} onGoToPractice={onGoToPractice} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepContent: {
    flex: 1,
  },
});
