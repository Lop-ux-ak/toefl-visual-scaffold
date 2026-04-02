import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { EmojiUnit, VocabLevel, VocabWord } from '@/data/types';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LEVEL_LABEL: Record<VocabLevel, string> = {
  basic: 'Basic',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const LEVEL_COLOR: Record<VocabLevel, string> = {
  basic: Colors.basic,
  intermediate: Colors.intermediate,
  advanced: Colors.advanced,
};

function VocabChip({ word }: { word: VocabWord }) {
  return (
    <View style={[chip.container, { borderColor: LEVEL_COLOR[word.level] }]}>
      <Text style={[chip.word, { color: LEVEL_COLOR[word.level] }]}>{word.word}</Text>
      <Text style={[chip.level, { color: LEVEL_COLOR[word.level] }]}>{LEVEL_LABEL[word.level]}</Text>
    </View>
  );
}

const chip = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    alignItems: 'center',
    minWidth: 90,
  },
  word: {
    fontSize: FontSizes.md,
    fontWeight: '700',
  },
  level: {
    fontSize: FontSizes.xs,
    fontWeight: '500',
    marginTop: 2,
    opacity: 0.8,
  },
});

interface Props {
  unit: EmojiUnit;
  onNext: () => void;
}

export default function VocabStep({ unit, onNext }: Props) {
  const [revealed, setRevealed] = useState(false);

  const basicWords = unit.vocab.filter((w) => w.level === 'basic');
  const intermediateWords = unit.vocab.filter((w) => w.level === 'intermediate');
  const advancedWords = unit.vocab.filter((w) => w.level === 'advanced');

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Emoji hero */}
      <Text style={styles.emoji}>{unit.emoji}</Text>
      <Text style={styles.scene}>{unit.scene}</Text>

      {/* Prompt */}
      <View style={styles.promptBox}>
        <Text style={styles.promptText}>What words come to mind?</Text>
        <Text style={styles.promptHint}>Think for a moment before revealing.</Text>
      </View>

      {/* Reveal button or vocab groups */}
      {!revealed ? (
        <TouchableOpacity style={styles.revealButton} onPress={() => setRevealed(true)} activeOpacity={0.8}>
          <Text style={styles.revealButtonText}>Reveal Vocabulary</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.vocabSection}>
          {basicWords.length > 0 && (
            <VocabGroup label="Basic" words={basicWords} color={Colors.basic} />
          )}
          {intermediateWords.length > 0 && (
            <VocabGroup label="Intermediate" words={intermediateWords} color={Colors.intermediate} />
          )}
          {advancedWords.length > 0 && (
            <VocabGroup label="Advanced" words={advancedWords} color={Colors.advanced} />
          )}
        </View>
      )}

      {/* Next button — only shown after reveal */}
      {revealed && (
        <TouchableOpacity style={styles.nextButton} onPress={onNext} activeOpacity={0.8}>
          <Text style={styles.nextButtonText}>Build a Phrase →</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

function VocabGroup({ label, words, color }: { label: string; words: VocabWord[]; color: string }) {
  return (
    <View style={group.container}>
      <View style={[group.labelRow, { borderLeftColor: color }]}>
        <Text style={[group.label, { color }]}>{label}</Text>
      </View>
      <View style={group.chips}>
        {words.map((w) => (
          <VocabChip key={w.word} word={w} />
        ))}
      </View>
    </View>
  );
}

const group = StyleSheet.create({
  container: {
    gap: Spacing.xs,
  },
  labelRow: {
    borderLeftWidth: 3,
    paddingLeft: Spacing.sm,
  },
  label: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    paddingLeft: Spacing.sm,
  },
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: Spacing.lg,
    gap: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  emoji: {
    fontSize: FontSizes.emoji * 1.5,
    textAlign: 'center',
  },
  scene: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: FontSizes.md * 1.5,
  },
  promptBox: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    alignItems: 'center',
    gap: Spacing.xs,
    width: '100%',
  },
  promptText: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  promptHint: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  revealButton: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
  },
  revealButtonText: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.surface,
  },
  vocabSection: {
    width: '100%',
    gap: Spacing.lg,
  },
  nextButton: {
    backgroundColor: Colors.success,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.surface,
  },
});
