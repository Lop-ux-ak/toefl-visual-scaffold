import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { StudyContent } from '@/data/types';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface Props {
  content: StudyContent;
}

function speak(text: string) {
  // TODO: integrate expo-speech
}

export default function PhrasePhase({ content }: Props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.instruction}>Tap each phrase card to see example sentences. Tap a sentence to hear it.</Text>
      {content.phraseFrames.map((frame, i) => {
        const isExpanded = expandedIndex === i;
        return (
          <Pressable
            key={i}
            style={styles.frameCard}
            onPress={() => setExpandedIndex(isExpanded ? null : i)}
          >
            <View style={styles.templateRow}>
              <Text style={styles.emoji}>{frame.emoji}</Text>
              <Text style={styles.template}>{frame.template}</Text>
            </View>
            {isExpanded && (
              <View style={styles.sentencesContainer}>
                {frame.sentences.map((sentence, j) => (
                  <Pressable key={j} onPress={() => speak(sentence)} style={styles.sentenceRow}>
                    <Text style={styles.sentenceBullet}>•</Text>
                    <Text style={styles.sentenceText}>{sentence}</Text>
                  </Pressable>
                ))}
              </View>
            )}
            {!isExpanded && (
              <Text style={styles.tapHint}>Tap to see examples</Text>
            )}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
    gap: Spacing.md,
  },
  instruction: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  frameCard: {
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
  templateRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.sm,
  },
  emoji: {
    fontSize: 24,
  },
  template: {
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    fontWeight: '600',
    flex: 1,
    lineHeight: 22,
  },
  sentencesContainer: {
    paddingLeft: 36,
    gap: Spacing.xs,
  },
  sentenceRow: {
    flexDirection: 'row',
    gap: Spacing.xs,
    alignItems: 'flex-start',
  },
  sentenceBullet: {
    fontSize: FontSizes.sm,
    color: Colors.primary,
    fontWeight: '700',
  },
  sentenceText: {
    fontSize: FontSizes.sm,
    color: Colors.primary,
    flex: 1,
    lineHeight: 20,
  },
  tapHint: {
    fontSize: FontSizes.xs,
    color: Colors.textLight,
    fontStyle: 'italic',
    paddingLeft: 36,
  },
});
