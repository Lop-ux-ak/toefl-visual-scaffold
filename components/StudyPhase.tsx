import ParagraphPhase from '@/components/ParagraphPhase';
import PhrasePhase from '@/components/PhrasePhase';
import SentencePhase from '@/components/SentencePhase';
import VocabularyPhase from '@/components/VocabularyPhase';
import { Colors, FontSizes, Spacing } from '@/constants/theme';
import { TOEFLQuestion } from '@/data/types';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  question: TOEFLQuestion;
  currentPhase: number;
  onPhaseChange: (phase: number) => void;
}

const PHASES = ['Vocabulary', 'Phrases', 'Sentences', 'Paragraph'];

export default function StudyPhase({ question, currentPhase, onPhaseChange }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {PHASES.map((label, i) => (
          <Pressable
            key={i}
            style={[styles.tab, currentPhase === i && styles.activeTab]}
            onPress={() => onPhaseChange(i)}
          >
            <Text style={[styles.tabText, currentPhase === i && styles.activeTabText]}>
              {label}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.phaseContent}>
        {currentPhase === 0 && <VocabularyPhase content={question.studyContent} />}
        {currentPhase === 1 && <PhrasePhase content={question.studyContent} />}
        {currentPhase === 2 && <SentencePhase content={question.studyContent} />}
        {currentPhase === 3 && <ParagraphPhase content={question.studyContent} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  activeTabText: {
    color: Colors.primary,
    fontWeight: '700',
  },
  phaseContent: {
    flex: 1,
  },
});
