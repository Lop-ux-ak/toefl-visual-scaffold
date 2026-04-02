export type VocabLevel = 'basic' | 'intermediate' | 'advanced';

export interface VocabWord {
  word: string;
  level: VocabLevel;
}

export interface Phrase {
  template: string;       // e.g. "I usually _____ in the _____"
  example: string;        // e.g. "I usually jog in the morning."
  vocabUsed: string[];    // links back to VocabWord.word values used in example
}

export interface EmojiUnit {
  id: string;
  emoji: string;
  scene: string;
  vocab: VocabWord[];       // ordered basic → advanced
  phrases: Phrase[];        // each phrase references vocab words used
  modelSentence: string;    // uses phrasing from the phrases above
}

export interface StudyContent {
  emojiUnits: EmojiUnit[];  // replaces vocabularyCards + phraseFrames + modelSentences
  transitionWords: string[];
  openingStatement: string;
  closingStatement: string;
  fullModelResponse: string;
}

export interface TOEFLQuestion {
  id: string;
  questionText: string;
  studyContent: StudyContent;
  targetDuration: number;   // 45 seconds
}

export interface Topic {
  id: string;
  title: string;
  emojis: string;           // display string e.g. "🏃‍♀️⏰🌅💪🥤"
  color: string;            // theme color hex
  questions: TOEFLQuestion[];
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
