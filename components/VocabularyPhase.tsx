import EmojiCard from '@/components/EmojiCard';
import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { StudyContent } from '@/data/types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface Props {
  content: StudyContent;
}

export default function VocabularyPhase({ content }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.instruction}>Tap each emoji card to reveal vocabulary words</Text>
      <View style={styles.legend}>
        {[
          { label: 'Basic', color: Colors.basic },
          { label: 'Intermediate', color: Colors.intermediate },
          { label: 'Advanced', color: Colors.advanced },
        ].map(item => (
          <View key={item.label} style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.cardsGrid}>
        {content.vocabularyCards.map(card => (
          <EmojiCard key={card.id} card={card} showVocab={true} />
        ))}
      </View>
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
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.lg,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    justifyContent: 'center',
  },
});
