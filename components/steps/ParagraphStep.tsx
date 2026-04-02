import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { EmojiUnit, StudyContent } from '@/data/types';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// One row per emoji showing its sentence
function EmojiSentenceRow({ unit }: { unit: EmojiUnit }) {
  return (
    <View style={row.container}>
      <Text style={row.emoji}>{unit.emoji}</Text>
      <Text style={row.sentence}>{unit.modelSentence}</Text>
    </View>
  );
}

const row = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.sm,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    width: '100%',
  },
  emoji: {
    fontSize: FontSizes.lg,
    lineHeight: FontSizes.lg * 1.5,
  },
  sentence: {
    flex: 1,
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    lineHeight: FontSizes.md * 1.6,
  },
});

// Transition word chips
function TransitionChips({ words }: { words: string[] }) {
  return (
    <View style={trans.container}>
      <Text style={trans.label}>Transition Words</Text>
      <View style={trans.row}>
        {words.map((w, i) => (
          <View key={i} style={trans.chip}>
            <Text style={trans.chipText}>{w}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const trans = StyleSheet.create({
  container: {
    width: '100%',
    gap: Spacing.xs,
  },
  label: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  chip: {
    borderWidth: 1.5,
    borderRadius: BorderRadius.full,
    borderColor: Colors.warning,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
  },
  chipText: {
    fontSize: FontSizes.sm,
    color: Colors.warning,
    fontWeight: '600',
  },
});

// Opening / closing statement display
function StatementRow({ label, text }: { label: string; text: string }) {
  return (
    <View style={stmt.container}>
      <Text style={stmt.label}>{label}</Text>
      <Text style={stmt.text}>{text}</Text>
    </View>
  );
}

const stmt = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    gap: Spacing.xs,
  },
  label: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  text: {
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    lineHeight: FontSizes.md * 1.6,
  },
});

interface Props {
  studyContent: StudyContent;
  onGoToPractice: () => void;
}

export default function ParagraphStep({ studyContent, onGoToPractice }: Props) {
  const [revealed, setRevealed] = useState(false);
  const { emojiUnits, openingStatement, closingStatement, transitionWords, fullModelResponse } =
    studyContent;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text style={styles.headerEmoji}>📝</Text>
      <Text style={styles.header}>Assemble Your Response</Text>
      <Text style={styles.subheader}>Here are all your sentences — put them together.</Text>

      {/* Opening statement */}
      <StatementRow label="Opening" text={openingStatement} />

      {/* Emoji sentences */}
      <View style={styles.sentencesSection}>
        <Text style={styles.sectionLabel}>Your Sentences</Text>
        {emojiUnits.map((unit) => (
          <EmojiSentenceRow key={unit.id} unit={unit} />
        ))}
      </View>

      {/* Closing statement */}
      <StatementRow label="Closing" text={closingStatement} />

      {/* Transition words */}
      <TransitionChips words={transitionWords} />

      {/* Reveal full response */}
      {!revealed ? (
        <TouchableOpacity
          style={styles.revealButton}
          onPress={() => setRevealed(true)}
          activeOpacity={0.8}
        >
          <Text style={styles.revealButtonText}>Reveal Full Response</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.fullResponseBox}>
          <Text style={styles.fullResponseLabel}>Full Model Response</Text>
          <Text style={styles.fullResponseText}>{fullModelResponse}</Text>
        </View>
      )}

      {/* Go to practice CTA */}
      <TouchableOpacity
        style={styles.practiceButton}
        onPress={onGoToPractice}
        activeOpacity={0.8}
      >
        <Text style={styles.practiceButtonText}>🎤  Go to Practice</Text>
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
  headerEmoji: {
    fontSize: FontSizes.emoji,
    textAlign: 'center',
  },
  header: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  subheader: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: FontSizes.sm * 1.5,
  },
  sentencesSection: {
    width: '100%',
    gap: Spacing.sm,
  },
  sectionLabel: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
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
  fullResponseBox: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    borderWidth: 2,
    borderColor: Colors.success,
    padding: Spacing.md,
    gap: Spacing.sm,
    width: '100%',
  },
  fullResponseLabel: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    color: Colors.success,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  fullResponseText: {
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    lineHeight: FontSizes.md * 1.7,
  },
  practiceButton: {
    backgroundColor: Colors.success,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  practiceButtonText: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.surface,
  },
});
