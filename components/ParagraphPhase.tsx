import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { StudyContent } from '@/data/types';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface Props {
  content: StudyContent;
}

export default function ParagraphPhase({ content }: Props) {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.instruction}>
        Assemble the parts below into a full paragraph. Then reveal the complete model response.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Opening</Text>
        <Text style={styles.statementText}>{content.openingStatement}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Supporting Sentences</Text>
        {content.modelSentences.map((group, i) => (
          <View key={i} style={styles.sentenceRow}>
            <Text style={styles.bullet}>{group.emoji}</Text>
            <Text style={styles.sentenceText}>{group.sentences[0]}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Transition Words</Text>
        <View style={styles.transitionRow}>
          {content.transitionWords.map((word, i) => (
            <View key={i} style={styles.chip}>
              <Text style={styles.chipText}>{word}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Closing</Text>
        <Text style={styles.statementText}>{content.closingStatement}</Text>
      </View>

      <Pressable
        style={[styles.revealBtn, showResponse && styles.revealedBtn]}
        onPress={() => setShowResponse(prev => !prev)}
      >
        <Text style={[styles.revealBtnText, showResponse && styles.revealedBtnText]}>
          {showResponse ? 'Hide Full Response' : '🎤 Reveal Full Model Response (~45s)'}
        </Text>
      </Pressable>

      {showResponse && (
        <View style={styles.fullResponse}>
          <Text style={styles.fullResponseText}>{content.fullModelResponse}</Text>
        </View>
      )}
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
  section: {
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
  sectionLabel: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    color: Colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statementText: {
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    lineHeight: 22,
  },
  sentenceRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 18,
  },
  sentenceText: {
    flex: 1,
    fontSize: FontSizes.sm,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  transitionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,
  },
  chip: {
    backgroundColor: Colors.primary + '15',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.primary + '30',
  },
  chipText: {
    fontSize: FontSizes.xs,
    color: Colors.primary,
    fontWeight: '600',
  },
  revealBtn: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    alignItems: 'center',
  },
  revealedBtn: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  revealBtnText: {
    fontSize: FontSizes.md,
    color: '#fff',
    fontWeight: '700',
  },
  revealedBtnText: {
    color: Colors.textSecondary,
  },
  fullResponse: {
    backgroundColor: Colors.primary + '10',
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.primary + '30',
  },
  fullResponseText: {
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    lineHeight: 24,
  },
});
