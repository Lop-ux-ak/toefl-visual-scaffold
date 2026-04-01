import { AppProgress, TopicProgress, QuestionProgress } from '@/data/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = '@toefl_progress_v2';

interface ProgressContextValue {
  progress: AppProgress;
  completeQuestion: (topicId: string, questionId: string) => void;
  recordAttempt: (topicId: string, questionId: string) => void;
  resetProgress: () => void;
}

const defaultProgress: AppProgress = { topics: {} };

export const ProgressContext = createContext<ProgressContextValue>({
  progress: defaultProgress,
  completeQuestion: () => {},
  recordAttempt: () => {},
  resetProgress: () => {},
});

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<AppProgress>(defaultProgress);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(stored => {
      if (stored) {
        try {
          setProgress(JSON.parse(stored));
        } catch {
          // ignore parse errors
        }
      }
    });
  }, []);

  const save = (next: AppProgress) => {
    setProgress(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const ensureTopic = (p: AppProgress, topicId: string): AppProgress => {
    if (p.topics[topicId]) return p;
    return { ...p, topics: { ...p.topics, [topicId]: { topicId, questions: {} } } };
  };

  const completeQuestion = (topicId: string, questionId: string) => {
    setProgress(prev => {
      let next = ensureTopic(prev, topicId);
      const tp = next.topics[topicId];
      const existing = tp.questions[questionId] ?? { completed: false, attempts: 0 };
      const updated: AppProgress = {
        ...next,
        topics: {
          ...next.topics,
          [topicId]: {
            ...tp,
            questions: {
              ...tp.questions,
              [questionId]: { ...existing, completed: true, attempts: existing.attempts + 1 },
            },
          },
        },
      };
      save(updated);
      return updated;
    });
  };

  const recordAttempt = (topicId: string, questionId: string) => {
    setProgress(prev => {
      let next = ensureTopic(prev, topicId);
      const tp = next.topics[topicId];
      const existing = tp.questions[questionId] ?? { completed: false, attempts: 0 };
      const updated: AppProgress = {
        ...next,
        topics: {
          ...next.topics,
          [topicId]: {
            ...tp,
            questions: {
              ...tp.questions,
              [questionId]: { ...existing, attempts: existing.attempts + 1 },
            },
          },
        },
      };
      save(updated);
      return updated;
    });
  };

  const resetProgress = () => {
    const cleared = defaultProgress;
    setProgress(cleared);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cleared));
  };

  return (
    <ProgressContext.Provider value={{ progress, completeQuestion, recordAttempt, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
