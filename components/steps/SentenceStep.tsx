import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { EmojiUnit, Phrase } from '@/data/types';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Compact phrase chip for the reference row
function PhraseChip({ phrase }: { phrase: Phrase }) {
  return (
    <View style={chip.container}>
      <Text style={chip.text} numberOfLines={1}>{phrase.example}</Text>
    </View>
  );
}

const chip = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderRadius: BorderRadius.full,
    borderColor: Colors.secondary,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    maxWidth: 260,
  },
  text: {
    fontSize: FontSizes.sm,
    color: Colors.secondary,
    fontWeight: '600',
  },
});

// Renders the model sentence with phrase examples highlighted inline
function HighlightedSentence({
  sentence,
  phrases,
}: {
  sentence: string;
  phrases: Phrase[];
}) {
  // Collect all unique words from every phrase's vocabUsed list
  const allVocabUsed = Array.from(
    new Set(phrases.flatMap((p) => p.vocabUsed))
  );

  if (allVocabUsed.length === 0) {
    return <Text style={hl.base}>{sentence}</Text>;
  }

  const escaped = allVocabUsed.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = sentence.split(pattern);
  const lowerUsed = new Set(allVocabUsed.map((w) => w.toLowerCase()));

  return (
    <Text style={hl.base}>
      {parts.map((part, i) =>
        lowerUsed.has(part.toLowerCase()) ? (
          <Text key={i} style={hl.word}>{part}</Text>
        ) : (
          <Text key={i}>{part}</Text>
        )
      )}
    </Text>
  );
}

const hl = StyleSheet.create({
  base: {
    fontSize: FontSizes.lg,
    color: Colors.textPrimary,
    lineHeight: FontSizes.lg * 1.6,
    textAlign: 'center',
  },
  word: {
    fontWeight: '800',
    color: Colors.secondary,
  },
});

interface Props {
  unit: EmojiUnit;
  isLastEmoji: boolean;
  onNext: () => void;
}

export default function SentenceStep({ unit, isLastEmoji, onNext }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text style={styles.emoji}>{unit.emoji}</Text>
      <Text style={styles.header}>Build a Sentence</Text>

      {/* Phrase reference chips */}
      <View style={styles.phraseSection}>
        <Text style={styles.phraseLabel}>Phrases from last step</Text>
        <View style={styles.chipRow}>
          {unit.phrases.map((phrase, i) => (
            <PhraseChip key={i} phrase={phrase} />
          ))}
        </View>
      </View>

      {/* Prompt */}
      <View style={styles.promptBox}>
        <Text style={styles.promptText}>Try saying a sentence</Text>
        <Text style={styles.promptHint}>
          Combine a phrase and add details — then check the model below.
        </Text>
      </View>

      {/* Reveal button or model sentence */}
      {!revealed ? (
        <TouchableOpacity
          style={styles.revealButton}
          onPress={() => setRevealed(true)}
          activeOpacity={0.8}
        >
          <Text style={styles.revealButtonText}>Reveal Model Sentence</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.sentenceBox}>
          <Text style={styles.sentenceLabel}>Model Sentence</Text>
          <HighlightedSentence sentence={unit.modelSentence} phrases={unit.phrases} />
        </View>
      )}

      {/* Next — only shown after reveal */}
      {revealed && (
        <TouchableOpacity style={styles.nextButton} onPress={onNext} activeOpacity={0.8}>
          <Text style={styles.nextButtonText}>
            {isLastEmoji ? 'Assemble Paragraph →' : 'Next Emoji →'}
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: Spacing.lg,
    gap: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  emoji: {
    fontSize: FontSizes.emoji,
    textAlign: 'center',
  },
  header: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  phraseSection: {
    width: '100%',
    gap: Spacing.xs,
  },
  phraseLabel: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
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
    lineHeight: FontSizes.sm * 1.5,
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
  sentenceBox: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    borderColor: Colors.secondary,
    padding: Spacing.md,
    alignItems: 'center',
    gap: Spacing.sm,
    width: '100%',
  },
  sentenceLabel: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    color: Colors.secondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
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
