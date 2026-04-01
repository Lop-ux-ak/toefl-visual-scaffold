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
  emoji: string;              // visual representation for the phrase
  template: string;           // e.g. "I usually _____ in the _____"
  sentences: string[];        // multiple example sentences
}

export interface ModelSentenceGroup {
  emoji: string;
  scene: string;
  sentences: string[];        // 3+ model sentences per emoji
}

export interface StudyContent {
  vocabularyCards: EmojiCard[];
  phraseFrames: PhraseFrame[];
  modelSentences: ModelSentenceGroup[];
  transitionWords: string[];
  openingStatement: string;
  closingStatement: string;
  fullModelResponse: string;      // ~120 words / 45 seconds
}

export interface TOEFLQuestion {
  id: string;
  questionText: string;
  studyContent: StudyContent;
  targetDuration: number;         // 45 seconds
}

export interface Topic {
  id: string;
  title: string;
  emojis: string;                 // display string e.g. "🏃‍♀️⏰🌅💪🥤"
  color: string;                  // theme color hex
  questions: TOEFLQuestion[];     // 4 questions per topic
}

export interface QuestionProgress {
  completed: boolean;
  attempts: number;
  bestScore?: number;
}

export interface TopicProgress {
  topicId: string;
  questions: Record<string, QuestionProgress>;
}

export interface AppProgress {
  topics: Record<string, TopicProgress>;
}
