export type VocabLevel = 'basic' | 'intermediate' | 'advanced';

export interface VocabHint {
  word: string;
  level: VocabLevel;
}

export interface EmojiCard {
  id: string;
  emoji: string;
  scene: string;
  vocabHints: VocabHint[];
}

export interface PhraseFrame {
  template: string; // e.g. "I usually _____ in the _____"
  example: string;
}

export interface StudyContent {
  vocabularyCards: EmojiCard[];
  phraseFrames: PhraseFrame[];
  modelSentences: string[];       // one per card for level 1-3
  transitionWords: string[];
  openingStatement: string;
  closingStatement: string;
  fullModelResponse: string;      // ~120 words / 45 seconds
}

export interface LevelData {
  level: 1 | 2 | 3 | 4 | 5;
  title: string;
  description: string;
  targetDuration: number;         // seconds
  studyContent: StudyContent;
  tofelQuestion?: string;         // Level 5 only
}

export interface Topic {
  id: string;
  title: string;
  emojis: string;                 // display string e.g. "🏃‍♀️⏰🌅💪🥤"
  color: string;                  // theme color hex
  levels: LevelData[];
}

export interface LevelProgress {
  completed: boolean;
  attempts: number;
  bestScore?: number;
}

export interface TopicProgress {
  topicId: string;
  levels: Record<number, LevelProgress>;
}

export interface AppProgress {
  topics: Record<string, TopicProgress>;
}
