import { Topic, EmojiUnit, TOEFLQuestion } from './types';

// ─── SHARED EMOJI VOCAB ───────────────────────────────────────────────
// The 5 exercise emojis share the same vocab across all questions.
// Phrases and modelSentence vary per question to match the prompt.

const runnerUnit = (id: string, phrases: EmojiUnit['phrases'], modelSentence: string): EmojiUnit => ({
  id,
  emoji: '🏃‍♀️',
  scene: 'A person running outdoors',
  vocab: [
    { word: 'run', level: 'basic' },
    { word: 'jog', level: 'basic' },
    { word: 'walk', level: 'basic' },
    { word: 'exercise', level: 'intermediate' },
    { word: 'workout', level: 'intermediate' },
    { word: 'cardio', level: 'intermediate' },
    { word: 'aerobic activity', level: 'advanced' },
    { word: 'physical endurance', level: 'advanced' },
    { word: 'fitness routine', level: 'advanced' },
  ],
  phrases,
  modelSentence,
});

const clockUnit = (id: string, phrases: EmojiUnit['phrases'], modelSentence: string): EmojiUnit => ({
  id,
  emoji: '⏰',
  scene: 'An alarm clock set for early morning',
  vocab: [
    { word: 'morning', level: 'basic' },
    { word: 'early', level: 'basic' },
    { word: 'wake up', level: 'basic' },
    { word: 'alarm', level: 'intermediate' },
    { word: 'schedule', level: 'intermediate' },
    { word: 'routine', level: 'intermediate' },
    { word: 'disciplined schedule', level: 'advanced' },
    { word: 'consistent habit', level: 'advanced' },
    { word: 'time management', level: 'advanced' },
  ],
  phrases,
  modelSentence,
});

const sunriseUnit = (id: string, phrases: EmojiUnit['phrases'], modelSentence: string): EmojiUnit => ({
  id,
  emoji: '🌅',
  scene: 'Sunrise over the horizon',
  vocab: [
    { word: 'sunrise', level: 'basic' },
    { word: 'morning', level: 'basic' },
    { word: 'bright', level: 'basic' },
    { word: 'fresh air', level: 'intermediate' },
    { word: 'peaceful', level: 'intermediate' },
    { word: 'energizing', level: 'intermediate' },
    { word: 'invigorating atmosphere', level: 'advanced' },
    { word: 'tranquil environment', level: 'advanced' },
    { word: 'rejuvenating', level: 'advanced' },
  ],
  phrases,
  modelSentence,
});

const muscleUnit = (id: string, phrases: EmojiUnit['phrases'], modelSentence: string): EmojiUnit => ({
  id,
  emoji: '💪',
  scene: 'Strong muscle flex after exercise',
  vocab: [
    { word: 'strong', level: 'basic' },
    { word: 'fit', level: 'basic' },
    { word: 'healthy', level: 'basic' },
    { word: 'strength', level: 'intermediate' },
    { word: 'muscle', level: 'intermediate' },
    { word: 'stamina', level: 'intermediate' },
    { word: 'physical conditioning', level: 'advanced' },
    { word: 'muscular endurance', level: 'advanced' },
    { word: 'athletic performance', level: 'advanced' },
  ],
  phrases,
  modelSentence,
});

const shakeUnit = (id: string, phrases: EmojiUnit['phrases'], modelSentence: string): EmojiUnit => ({
  id,
  emoji: '🥤',
  scene: 'A protein shake or sports drink',
  vocab: [
    { word: 'drink', level: 'basic' },
    { word: 'water', level: 'basic' },
    { word: 'juice', level: 'basic' },
    { word: 'hydration', level: 'intermediate' },
    { word: 'protein shake', level: 'intermediate' },
    { word: 'nutrition', level: 'intermediate' },
    { word: 'post-workout recovery', level: 'advanced' },
    { word: 'nutritional supplement', level: 'advanced' },
    { word: 'replenishment', level: 'advanced' },
  ],
  phrases,
  modelSentence,
});

// ─── QUESTION 1 — What exercise do you or your friends like? ──────────
const q1Units: EmojiUnit[] = [
  runnerUnit('q1-runner', [
    { template: 'I usually _____ to stay healthy', example: 'I usually jog to stay healthy.', vocabUsed: ['jog'] },
    { template: 'My favorite _____ is _____', example: 'My favorite workout is cardio.', vocabUsed: ['workout', 'cardio'] },
  ], 'I go for a morning jog every day to stay healthy.'),

  clockUnit('q1-clock', [
    { template: 'I wake up _____ to exercise', example: 'I wake up early to exercise.', vocabUsed: ['early'] },
    { template: 'Having a _____ keeps me on track', example: 'Having a routine keeps me on track.', vocabUsed: ['routine'] },
  ], 'I set my alarm for 6 AM to start my routine early.'),

  sunriseUnit('q1-sunrise', [
    { template: 'Exercising in the _____ feels _____', example: 'Exercising in the morning feels energizing.', vocabUsed: ['morning', 'energizing'] },
    { template: 'The _____ makes my workout _____', example: 'The fresh air makes my workout refreshing.', vocabUsed: ['fresh air'] },
  ], 'The fresh sunrise air makes my workout feel refreshing.'),

  muscleUnit('q1-muscle', [
    { template: 'Regular exercise makes me feel _____', example: 'Regular exercise makes me feel strong.', vocabUsed: ['strong'] },
    { template: 'I want to build _____ and _____', example: 'I want to build strength and stamina.', vocabUsed: ['strength', 'stamina'] },
  ], 'Regular exercise has made me noticeably stronger.'),

  shakeUnit('q1-shake', [
    { template: 'After exercising, I always _____', example: 'After exercising, I always drink water.', vocabUsed: ['drink', 'water'] },
    { template: 'A _____ helps with _____', example: 'A protein shake helps with post-workout recovery.', vocabUsed: ['protein shake', 'post-workout recovery'] },
  ], 'I always drink a protein shake after working out.'),
];

// ─── QUESTION 2 — Do you prefer exercising alone or with others? ──────
const q2Units: EmojiUnit[] = [
  runnerUnit('q2-runner', [
    { template: 'I prefer to _____ alone because _____', example: 'I prefer to jog alone because I can focus.', vocabUsed: ['jog'] },
    { template: 'Solo _____ lets me set my own pace', example: 'Solo cardio lets me set my own pace.', vocabUsed: ['cardio'] },
  ], 'I usually run alone because I enjoy the peace and quiet.'),

  clockUnit('q2-clock', [
    { template: 'My _____ is flexible when I exercise alone', example: 'My schedule is flexible when I exercise alone.', vocabUsed: ['schedule'] },
    { template: 'I follow a _____ that fits my own needs', example: 'I follow a routine that fits my own needs.', vocabUsed: ['routine'] },
  ], 'My schedule is flexible when I exercise by myself.'),

  sunriseUnit('q2-sunrise', [
    { template: 'Solo runs in the _____ feel _____', example: 'Solo runs in the morning feel peaceful.', vocabUsed: ['morning', 'peaceful'] },
    { template: 'The _____ helps me think clearly', example: 'The fresh air helps me think clearly.', vocabUsed: ['fresh air'] },
  ], 'Early morning solo runs feel peaceful and meditative.'),

  muscleUnit('q2-muscle', [
    { template: 'Working out with a partner keeps me _____', example: 'Working out with a partner keeps me fit.', vocabUsed: ['fit'] },
    { template: 'Group workouts build _____ through competition', example: 'Group workouts build stamina through competition.', vocabUsed: ['stamina'] },
  ], 'I push myself harder when I have a workout partner.'),

  shakeUnit('q2-shake', [
    { template: 'After group workouts we share _____', example: 'After group workouts we share drinks.', vocabUsed: ['drink'] },
    { template: 'Exercising together encourages better _____', example: 'Exercising together encourages better nutrition.', vocabUsed: ['nutrition'] },
  ], 'After group workouts, my friends and I share healthy drinks.'),
];

// ─── QUESTION 3 — Will indoor gyms become more popular? ───────────────
const q3Units: EmojiUnit[] = [
  runnerUnit('q3-runner', [
    { template: 'Outdoor _____ is still popular because _____', example: 'Outdoor jogging is still popular because it is free.', vocabUsed: ['jog'] },
    { template: 'Parks offer _____ that gyms cannot', example: 'Parks offer aerobic activity that gyms cannot replicate.', vocabUsed: ['aerobic activity'] },
  ], 'Outdoor running is still popular because it is free and enjoyable.'),

  clockUnit('q3-clock', [
    { template: 'Gyms offer _____ that fit busy people', example: 'Gyms offer schedules that fit busy people.', vocabUsed: ['schedule'] },
    { template: 'This suits people who need _____', example: 'This suits people who need time management.', vocabUsed: ['time management'] },
  ], 'Gyms offer flexible hours that fit busy modern schedules.'),

  sunriseUnit('q3-sunrise', [
    { template: 'Nothing replaces exercising in a _____ environment', example: 'Nothing replaces exercising in a tranquil environment.', vocabUsed: ['tranquil environment'] },
    { template: 'Outdoor workouts have an _____ that gyms lack', example: 'Outdoor workouts have an invigorating atmosphere that gyms lack.', vocabUsed: ['invigorating atmosphere'] },
  ], 'Nothing can replace the beauty of exercising during sunrise outdoors.'),

  muscleUnit('q3-muscle', [
    { template: 'Gym equipment helps target specific _____', example: 'Gym equipment helps target specific muscles.', vocabUsed: ['muscle'] },
    { template: 'Professional guidance leads to better _____', example: 'Professional guidance leads to better athletic performance.', vocabUsed: ['athletic performance'] },
  ], 'Gym equipment helps people target specific muscle groups effectively.'),

  shakeUnit('q3-shake', [
    { template: 'Many gyms offer _____ advice', example: 'Many gyms offer nutrition advice.', vocabUsed: ['nutrition'] },
    { template: 'Fitness centers help with _____', example: 'Fitness centers help with post-workout recovery.', vocabUsed: ['post-workout recovery'] },
  ], 'Many gyms now offer smoothie bars and nutrition advice.'),
];

// ─── QUESTION 4 — Does exercise build self-discipline? ────────────────
const q4Units: EmojiUnit[] = [
  runnerUnit('q4-runner', [
    { template: 'Running every day requires _____ and _____', example: 'Running every day requires exercise and dedication.', vocabUsed: ['exercise'] },
    { template: 'Sticking to a _____ schedule builds willpower', example: 'Sticking to a fitness routine schedule builds willpower.', vocabUsed: ['fitness routine'] },
  ], 'Running every day requires strong willpower and commitment.'),

  clockUnit('q4-clock', [
    { template: 'Waking up _____ to exercise is itself discipline', example: 'Waking up early to exercise is itself discipline.', vocabUsed: ['early'] },
    { template: 'A _____ turns effort into habit', example: 'A consistent habit turns effort into habit.', vocabUsed: ['consistent habit'] },
  ], 'Waking up early to exercise is itself an act of self-discipline.'),

  sunriseUnit('q4-sunrise', [
    { template: 'Choosing to exercise at _____ shows dedication', example: 'Choosing to exercise at sunrise shows dedication.', vocabUsed: ['sunrise'] },
    { template: 'The _____ proves that discipline brings rewards', example: 'The energizing feeling proves that discipline brings rewards.', vocabUsed: ['energizing'] },
  ], 'Choosing to exercise at sunrise shows dedication and discipline.'),

  muscleUnit('q4-muscle', [
    { template: 'Seeing improvements in _____ motivates consistency', example: 'Seeing improvements in strength motivates consistency.', vocabUsed: ['strength'] },
    { template: 'Discipline in exercise transfers to other areas of _____', example: 'Discipline in exercise transfers to other areas of physical conditioning.', vocabUsed: ['physical conditioning'] },
  ], 'Seeing physical improvements motivates you to stay disciplined.'),

  shakeUnit('q4-shake', [
    { template: 'Maintaining a healthy diet requires _____', example: 'Maintaining a healthy diet requires nutrition awareness.', vocabUsed: ['nutrition'] },
    { template: 'Choosing healthy _____ over junk food is discipline', example: 'Choosing healthy drinks over junk food is discipline.', vocabUsed: ['drink'] },
  ], 'Maintaining a healthy diet alongside exercise requires extra discipline.'),
];

// ─── QUESTIONS ────────────────────────────────────────────────────────
const exerciseQuestions: TOEFLQuestion[] = [
  {
    id: 'exercise-q1',
    questionText: "Thank you for taking the time to speak with me. I'd like to ask you some questions about your exercise habits. What kind of exercise do you or your friends like? For example, do you like running, swimming, yoga, or other types?",
    targetDuration: 45,
    studyContent: {
      emojiUnits: q1Units,
      transitionWords: ['First', 'Then', 'After that', 'Finally', 'As a result'],
      openingStatement: 'I try to stay healthy by following a consistent morning exercise routine.',
      closingStatement: 'This habit has greatly improved both my physical health and daily energy levels.',
      fullModelResponse: 'I try to stay healthy by following a consistent morning exercise routine. First, I wake up at six AM when my alarm goes off. Then I head outside to jog as the sun rises — the fresh air is incredibly invigorating. After a thirty-minute run, I do some strength training to build muscle. Finally, I drink a protein shake to help my body recover. As a result of this routine, I feel stronger and more energetic throughout the day. I believe regular exercise is essential for managing stress and maintaining good health, especially as a student.',
    },
  },
  {
    id: 'exercise-q2',
    questionText: 'I see. When you exercise, do you prefer to do it alone or do you like to exercise with other people? Why?',
    targetDuration: 45,
    studyContent: {
      emojiUnits: q2Units,
      transitionWords: ['Personally', 'For one thing', 'Moreover', 'On the other hand', 'Overall'],
      openingStatement: 'I generally prefer exercising alone, although I enjoy group workouts occasionally.',
      closingStatement: 'Whether alone or with friends, the most important thing is staying active consistently.',
      fullModelResponse: 'I generally prefer exercising alone, although I enjoy group workouts occasionally. Personally, I find solo workouts more flexible since I can train whenever I want. For one thing, I do not have to coordinate schedules with anyone else. Moreover, running alone in the morning feels peaceful and helps me think clearly. On the other hand, I do enjoy joining my friends for basketball on weekends because the social aspect is really fun. Group activities also push me to try harder through friendly competition. Overall, I think both solo and group exercise have their benefits, but I lean toward individual workouts for their convenience and the personal space they provide.',
    },
  },
  {
    id: 'exercise-q3',
    questionText: "Interesting. Next, I'd like to get your opinion. In the past, most people exercised outdoors. But now many people prefer indoor gyms and fitness centers. Do you think that in the future, indoor gyms will become even more popular? Why or why not?",
    targetDuration: 45,
    studyContent: {
      emojiUnits: q3Units,
      transitionWords: ['In my opinion', 'First of all', 'In addition', 'Nevertheless', 'To sum up'],
      openingStatement: 'I believe indoor gyms will continue to grow in popularity, but outdoor exercise will never disappear.',
      closingStatement: 'Both indoor and outdoor exercise have unique advantages, and people will continue to use both.',
      fullModelResponse: 'I believe indoor gyms will continue to grow in popularity, but outdoor exercise will never disappear. In my opinion, technology and convenience are driving more people indoors. First of all, modern gyms offer specialized equipment and professional trainers that help people exercise more effectively. In addition, indoor facilities are not affected by weather, which makes them reliable year-round. Nevertheless, I think many people will always prefer outdoor activities like running and hiking because of the fresh air and natural scenery. To sum up, while indoor gyms will certainly become more popular due to technology and convenience, outdoor exercise will remain important because of the unique benefits nature provides.',
    },
  },
  {
    id: 'exercise-q4',
    questionText: 'Good points. I just have one more question. Some people believe that exercising regularly is essential for developing self-discipline. Do you agree with this idea? Or do you think there are other activities that can also help build discipline? Explain your answer.',
    targetDuration: 45,
    studyContent: {
      emojiUnits: q4Units,
      transitionWords: ['I strongly believe', 'To begin with', 'Furthermore', 'That said', 'In conclusion'],
      openingStatement: 'I agree that exercise is an excellent way to develop self-discipline, but it is not the only way.',
      closingStatement: 'Any activity that requires consistent effort and commitment can help build self-discipline.',
      fullModelResponse: 'I agree that exercise is an excellent way to develop self-discipline, but it is not the only way. I strongly believe that any regular commitment can build discipline. To begin with, exercise requires you to show up consistently, even when you feel tired or unmotivated. This repeated effort trains your willpower over time. Furthermore, setting fitness goals and working toward them teaches you the value of patience and persistence. That said, other activities can also develop discipline effectively. For example, studying daily, practicing a musical instrument, or learning a new language all require the same kind of consistent effort. In conclusion, while exercise is a powerful tool for building discipline, the key ingredient is simply committing to any activity regularly.',
    },
  },
];

// ─── TOPICS EXPORT ────────────────────────────────────────────────────
export const TOPICS: Topic[] = [
  {
    id: 'exercise',
    title: 'Exercise & Health',
    emojis: '🏃‍♀️⏰🌅💪🥤',
    color: '#4CAF50',
    questions: exerciseQuestions,
  },
];
