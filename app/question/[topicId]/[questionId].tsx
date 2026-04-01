import PracticeMode from '@/components/PracticeMode';
import StudyPhase from '@/components/StudyPhase';
import { Colors, FontSizes, Spacing, BorderRadius } from '@/constants/theme';
import { useProgress } from '@/context/ProgressContext';
import { TOPICS } from '@/data/topics';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Mode = 'study' | 'practice';

export default function QuestionScreen() {
  const { topicId, questionId } = useLocalSearchParams<{ topicId: string; questionId: string }>();
  const router = useRouter();
  const navigation = useNavigation();
  const { recordAttempt } = useProgress();

  const [mode, setMode] = useState<Mode>('study');
  const [studyPhase, setStudyPhase] = useState(0);

  const topic = TOPICS.find(t => t.id === topicId);
  const question = topic?.questions.find(q => q.id === questionId);

  useEffect(() => {
    if (question) {
      navigation.setOptions({ title: topic?.title ?? 'Question' });
    }
  }, [question]);

  if (!topic || !question) {
    return (
      <View style={styles.center}>
        <Text>Question not found.</Text>
      </View>
    );
  }

  const handlePracticeComplete = (duration: number) => {
    recordAttempt(topic.id, question.id);
    router.push({
      pathname: '/results',
      params: {
        topicId: topic.id,
        questionId: question.id,
        duration: String(duration),
        target: String(question.targetDuration),
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      {/* Mode toggle */}
      <View style={styles.modeToggle}>
        <Pressable
          style={[styles.modeBtn, mode === 'study' && styles.activeModeBtn]}
          onPress={() => setMode('study')}
        >
          <Text style={[styles.modeBtnText, mode === 'study' && styles.activeModeBtnText]}>
            📖 Study Mode
          </Text>
        </Pressable>
        <Pressable
          style={[styles.modeBtn, mode === 'practice' && styles.activeModeBtn]}
          onPress={() => setMode('practice')}
        >
          <Text style={[styles.modeBtnText, mode === 'practice' && styles.activeModeBtnText]}>
            🎤 Practice Mode
          </Text>
        </Pressable>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {mode === 'study' && (
          <StudyPhase
            question={question}
            currentPhase={studyPhase}
            onPhaseChange={setStudyPhase}
          />
        )}
        {mode === 'practice' && (
          <PracticeMode question={question} onComplete={handlePracticeComplete} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeToggle: {
    flexDirection: 'row',
    margin: Spacing.md,
    backgroundColor: Colors.border,
    borderRadius: BorderRadius.lg,
    padding: 4,
  },
  modeBtn: {
    flex: 1,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
    borderRadius: BorderRadius.md,
  },
  activeModeBtn: {
    backgroundColor: Colors.surface,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  modeBtnText: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  activeModeBtnText: {
    color: Colors.primary,
    fontWeight: '700',
  },
  content: {
    flex: 1,
  },
});
