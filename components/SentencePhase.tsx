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

export default function SentencePhase({ content }: Props) {
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());

  const toggleReveal = (i: number) => {
    setRevealedIndices(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.instruction}>Look at each emoji and say complete sentences. Then tap to reveal model sentences.</Text>
      {content.modelSentences.map((group, i) => (
        <View key={i} style={styles.sentenceCard}>
          <View style={styles.emojiRow}>
            <Text style={styles.emoji}>{group.emoji}</Text>
            <Text style={styles.scene}>{group.scene}</Text>
          </View>
          <Pressable
            style={[styles.revealBtn, revealedIndices.has(i) && styles.revealedBtn]}
            onPress={() => toggleReveal(i)}
          >
            {revealedIndices.has(i) ? (
              <View style={styles.sentencesList}>
                {group.sentences.map((sentence, j) => (
                  <Pressable key={j} onPress={() => speak(sentence)} style={styles.sentenceRow}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.modelSentence}>{sentence}</Text>
                  </Pressable>
                ))}
              </View>
            ) : (
              <Text style={styles.revealHint}>Tap to reveal model sentences</Text>
            )}
          </Pressable>
        </View>
      ))}
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
  sentenceCard: {
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
  emojiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  emoji: {
    fontSize: 32,
  },
  scene: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    flex: 1,
  },
  revealBtn: {
    backgroundColor: Colors.border,
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
  },
  revealedBtn: {
    backgroundColor: Colors.primary + '15',
    borderWidth: 1,
    borderColor: Colors.primary + '40',
  },
  sentencesList: {
    gap: Spacing.xs,
  },
  sentenceRow: {
    flexDirection: 'row',
    gap: Spacing.xs,
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: FontSizes.sm,
    color: Colors.primary,
    fontWeight: '700',
  },
  revealHint: {
    fontSize: FontSizes.sm,
    color: Colors.textLight,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  modelSentence: {
    fontSize: FontSizes.md,
    color: Colors.primary,
    fontWeight: '500',
    lineHeight: 22,
    flex: 1,
  },
});
