import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { EmojiUnit, VocabLevel, VocabWord } from '@/data/types';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LEVEL_COLOR: Record<VocabLevel, string> = {
  basic: Colors.basic,
  intermediate: Colors.intermediate,
  advanced: Colors.advanced,
};

// Compact vocab chip for the reference row at top
function VocabChip({ word }: { word: VocabWord }) {
  const color = LEVEL_COLOR[word.level];
  return (
    <View style={[chip.container, { borderColor: color }]}>
      <Text style={[chip.word, { color }]}>{word.word}</Text>
    </View>
  );
}

const chip = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
  },
  word: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
  },
});

// Renders example text with vocabUsed words highlighted inline
function HighlightedExample({ example, vocabUsed }: { example: string; vocabUsed: string[] }) {
  if (vocabUsed.length === 0) {
    return <Text style={highlight.base}>{example}</Text>;
  }

  // Build a regex that matches any of the vocabUsed words (word-boundary, case-insensitive)
  const escaped = vocabUsed.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = example.split(pattern);

  const lowerUsed = new Set(vocabUsed.map((w) => w.toLowerCase()));

  return (
    <Text style={highlight.base}>
      {parts.map((part, i) =>
        lowerUsed.has(part.toLowerCase()) ? (
          <Text key={i} style={highlight.word}>
            {part}
          </Text>
        ) : (
          <Text key={i}>{part}</Text>
        )
      )}
    </Text>
  );
}

const highlight = StyleSheet.create({
  base: {
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    lineHeight: FontSizes.md * 1.6,
  },
  word: {
    fontWeight: '800',
    color: Colors.secondary,
  },
});

// A single phrase card — tap to expand the example
function PhraseCard({
  template,
  example,
  vocabUsed,
}: {
  template: string;
  example: string;
  vocabUsed: string[];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={[card.container, expanded && card.expanded]}
      onPress={() => setExpanded((v) => !v)}
      activeOpacity={0.85}
    >
      {/* Template line */}
      <View style={card.templateRow}>
        <Text style={card.template}>{template}</Text>
        <Text style={card.caret}>{expanded ? '▲' : '▼'}</Text>
      </View>

      {/* Example — revealed on expand */}
      {expanded && (
        <View style={card.exampleBox}>
          <Text style={card.exampleLabel}>Example</Text>
          <HighlightedExample example={example} vocabUsed={vocabUsed} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const card = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    gap: Spacing.sm,
  },
  expanded: {
    borderColor: Colors.secondary,
  },
  templateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
  template: {
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    fontWeight: '600',
    flex: 1,
  },
  caret: {
    fontSize: FontSizes.xs,
    color: Colors.textLight,
  },
  exampleBox: {
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.sm,
    padding: Spacing.sm,
    gap: 4,
  },
  exampleLabel: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    color: Colors.secondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
});

interface Props {
  unit: EmojiUnit;
  onNext: () => void;
}

export default function PhraseStep({ unit, onNext }: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text style={styles.emoji}>{unit.emoji}</Text>
      <Text style={styles.header}>Build a Phrase</Text>

      {/* Vocab reference chips */}
      <View style={styles.vocabSection}>
        <Text style={styles.vocabLabel}>Vocabulary from last step</Text>
        <View style={styles.chipRow}>
          {unit.vocab.map((w) => (
            <VocabChip key={w.word} word={w} />
          ))}
        </View>
      </View>

      {/* Phrase cards */}
      <View style={styles.cards}>
        <Text style={styles.cardsLabel}>Tap a card to see the example</Text>
        {unit.phrases.map((phrase, i) => (
          <PhraseCard
            key={i}
            template={phrase.template}
            example={phrase.example}
            vocabUsed={phrase.vocabUsed}
          />
        ))}
      </View>

      {/* Next */}
      <TouchableOpacity style={styles.nextButton} onPress={onNext} activeOpacity={0.8}>
        <Text style={styles.nextButtonText}>Build a Sentence →</Text>
      </TouchableOpacity>
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
  vocabSection: {
    width: '100%',
    gap: Spacing.xs,
  },
  vocabLabel: {
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
  cards: {
    width: '100%',
    gap: Spacing.sm,
  },
  cardsLabel: {
    fontSize: FontSizes.xs,
    color: Colors.textLight,
    textAlign: 'center',
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
