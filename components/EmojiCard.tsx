import { Colors, BorderRadius, Spacing, FontSizes } from '@/constants/theme';
import { EmojiCard as EmojiCardType, VocabHint } from '@/data/types';
import { useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  card: EmojiCardType;
  showVocab?: boolean;
  opacity?: number;
}

const vocabColor: Record<string, string> = {
  basic: Colors.basic,
  intermediate: Colors.intermediate,
  advanced: Colors.advanced,
};

export default function EmojiCard({ card, showVocab = false, opacity = 1 }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Pressable
      onPress={() => setExpanded(prev => !prev)}
      style={[styles.card, { opacity }]}
    >
      <Text style={styles.emoji}>{card.emoji}</Text>
      <Text style={styles.scene}>{card.scene}</Text>
      {showVocab && expanded && (
        <View style={styles.vocabContainer}>
          {card.vocabHints.map((hint, i) => (
            <View
              key={i}
              style={[styles.vocabChip, { backgroundColor: vocabColor[hint.level] + '20', borderColor: vocabColor[hint.level] }]}
            >
              <Text style={[styles.vocabText, { color: vocabColor[hint.level] }]}>{hint.word}</Text>
            </View>
          ))}
        </View>
      )}
      {showVocab && !expanded && (
        <Text style={styles.tapHint}>Tap to reveal words</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    minWidth: 120,
  },
  emoji: {
    fontSize: FontSizes.emoji,
    marginBottom: Spacing.xs,
  },
  scene: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  vocabContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: Spacing.xs,
    marginTop: Spacing.sm,
  },
  vocabChip: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs / 2,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
  },
  vocabText: {
    fontSize: FontSizes.xs,
    fontWeight: '600',
  },
  tapHint: {
    fontSize: FontSizes.xs,
    color: Colors.textLight,
    marginTop: Spacing.xs,
    fontStyle: 'italic',
  },
});
