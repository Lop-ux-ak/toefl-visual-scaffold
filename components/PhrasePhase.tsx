import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { StudyContent } from '@/data/types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface Props {
  content: StudyContent;
}

export default function PhrasePhase({ content }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.instruction}>Practice these phrase templates out loud. Fill in the blanks with your own words.</Text>
      {content.phraseFrames.map((frame, i) => (
        <View key={i} style={styles.frameCard}>
          <View style={styles.templateRow}>
            <Text style={styles.number}>{i + 1}</Text>
            <Text style={styles.template}>{frame.template}</Text>
          </View>
          <View style={styles.exampleRow}>
            <Text style={styles.exampleLabel}>Example: </Text>
            <Text style={styles.example}>{frame.example}</Text>
          </View>
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
  number: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.primary,
    minWidth: 20,
  },
  template: {
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    fontWeight: '600',
    flex: 1,
    lineHeight: 22,
  },
  exampleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 28,
  },
  exampleLabel: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    fontStyle: 'italic',
  },
  example: {
    fontSize: FontSizes.sm,
    color: Colors.primary,
    fontStyle: 'italic',
    flex: 1,
  },
});
