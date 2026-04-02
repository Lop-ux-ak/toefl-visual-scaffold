import { Topic, StudyContent, TOEFLQuestion, EmojiCard } from './types';

// Helper to build vocabulary cards from compact definitions
const makeCards = (
  defs: { emoji: string; scene: string; vocab: { basic: string[]; intermediate: string[]; advanced: string[] } }[],
): EmojiCard[] =>
  defs.map((c, i) => ({
    id: `card-${i}`,
    emoji: c.emoji,
    scene: c.scene,
    vocabHints: [
      ...c.vocab.basic.map(w => ({ word: w, level: 'basic' as const })),
      ...c.vocab.intermediate.map(w => ({ word: w, level: 'intermediate' as const })),
      ...c.vocab.advanced.map(w => ({ word: w, level: 'advanced' as const })),
    ],
  }));

// ─── EXERCISE & HEALTH ───────────────────────────────────────────────
const exerciseCards = makeCards([
  {
    emoji: '🏃‍♀️', scene: 'A person running outdoors',
    vocab: { basic: ['run', 'jog', 'walk'], intermediate: ['exercise', 'workout', 'cardio'], advanced: ['aerobic activity', 'physical endurance', 'fitness routine'] },
  },
  {
    emoji: '⏰', scene: 'An alarm clock set for early morning',
    vocab: { basic: ['morning', 'early', 'wake up'], intermediate: ['alarm', 'schedule', 'routine'], advanced: ['disciplined schedule', 'consistent habit', 'time management'] },
  },
  {
    emoji: '🌅', scene: 'Sunrise over the horizon',
    vocab: { basic: ['sunrise', 'morning', 'bright'], intermediate: ['fresh air', 'peaceful', 'energizing'], advanced: ['invigorating atmosphere', 'tranquil environment', 'rejuvenating'] },
  },
  {
    emoji: '💪', scene: 'Strong muscle flex after exercise',
    vocab: { basic: ['strong', 'fit', 'healthy'], intermediate: ['strength', 'muscle', 'stamina'], advanced: ['physical conditioning', 'muscular endurance', 'athletic performance'] },
  },
  {
    emoji: '🥤', scene: 'A protein shake or sports drink',
    vocab: { basic: ['drink', 'water', 'juice'], intermediate: ['hydration', 'protein shake', 'nutrition'], advanced: ['post-workout recovery', 'nutritional supplement', 'replenishment'] },
  },
]);

const exerciseQuestions: TOEFLQuestion[] = [
  {
    id: 'exercise-q1',
    questionText: 'Thank you for taking the time to speak with me. I\'d like to ask you some questions about your exercise habits. What kind of exercise do you or your friends like? For example, do you like running, swimming, yoga, or other types?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: exerciseCards,
      phraseFrames: [
        { emoji: '🏃‍♀️', template: 'I usually _____ in the _____', sentences: ['I usually jog in the morning.', 'I usually do yoga in the evening.', 'I usually swim in the afternoon.'] },
        { emoji: '🏊', template: 'My favorite exercise is _____ because _____', sentences: ['My favorite exercise is swimming because it works the whole body.', 'My favorite exercise is running because it clears my mind.', 'My favorite exercise is basketball because I enjoy team sports.'] },
        { emoji: '🧘', template: 'My friends prefer _____ over _____', sentences: ['My friends prefer yoga over weightlifting.', 'My friends prefer outdoor running over the gym.', 'My friends prefer group classes over solo workouts.'] },
        { emoji: '⚽', template: '_____ is popular because _____', sentences: ['Soccer is popular because it is easy to play anywhere.', 'Swimming is popular because it is a low-impact exercise.', 'Cycling is popular because it is both fun and practical.'] },
      ],
      modelSentences: [
        { emoji: '🏃‍♀️', scene: 'A person running outdoors', sentences: ['I go for a morning jog every day to stay healthy.', 'Running outdoors helps me clear my mind before school.', 'I started jogging last year and now I can run five kilometers.'] },
        { emoji: '⏰', scene: 'An alarm clock set for early morning', sentences: ['I set my alarm for 6 AM to start my routine early.', 'Waking up early gives me enough time to exercise before class.', 'My alarm reminds me to stay disciplined with my fitness goals.'] },
        { emoji: '🌅', scene: 'Sunrise over the horizon', sentences: ['The fresh sunrise air makes my workout feel refreshing.', 'Exercising at sunrise gives me energy for the whole day.', 'I love watching the sunrise while I stretch before my run.'] },
        { emoji: '💪', scene: 'Strong muscle flex after exercise', sentences: ['Regular exercise has made me noticeably stronger.', 'I feel more confident now that I exercise consistently.', 'Building strength has helped me perform better in sports.'] },
        { emoji: '🥤', scene: 'A protein shake or sports drink', sentences: ['I always drink a protein shake after working out.', 'Staying hydrated is an important part of my exercise routine.', 'A healthy smoothie helps my muscles recover faster.'] },
      ],
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
      vocabularyCards: exerciseCards,
      phraseFrames: [
        { emoji: '🧑‍🤝‍🧑', template: 'I prefer exercising _____ because _____', sentences: ['I prefer exercising with friends because it is more motivating.', 'I prefer exercising alone because I can focus on my own pace.', 'I prefer exercising in a group because it makes the time pass quickly.'] },
        { emoji: '🎧', template: 'When I exercise alone, I _____', sentences: ['When I exercise alone, I listen to music to stay motivated.', 'When I exercise alone, I can set my own schedule freely.', 'When I exercise alone, I focus better on my technique.'] },
        { emoji: '🤝', template: 'Exercising with others helps me _____', sentences: ['Exercising with others helps me push myself harder.', 'Exercising with others helps me stay accountable.', 'Exercising with others helps me have more fun.'] },
        { emoji: '💬', template: 'The main reason I _____ is that _____', sentences: ['The main reason I prefer group exercise is that it feels social.', 'The main reason I run alone is that I enjoy the quiet time.', 'The main reason I join classes is that the instructor motivates me.'] },
      ],
      modelSentences: [
        { emoji: '🏃‍♀️', scene: 'A person running outdoors', sentences: ['I usually run alone because I enjoy the peace and quiet.', 'Sometimes I join a running club on weekends for a change.', 'Running solo lets me go at my own pace without pressure.'] },
        { emoji: '⏰', scene: 'An alarm clock set for early morning', sentences: ['My schedule is flexible when I exercise by myself.', 'I do not have to wait for anyone when I work out alone.', 'Exercising solo means I can train whenever I have free time.'] },
        { emoji: '🌅', scene: 'Sunrise over the horizon', sentences: ['Early morning solo runs feel peaceful and meditative.', 'I appreciate the quiet solitude of exercising at dawn.', 'The calm morning atmosphere helps me reflect while I exercise.'] },
        { emoji: '💪', scene: 'Strong muscle flex after exercise', sentences: ['I push myself harder when I have a workout partner.', 'Having a friend at the gym keeps me accountable.', 'Group workouts create a sense of friendly competition.'] },
        { emoji: '🥤', scene: 'A protein shake or sports drink', sentences: ['After group workouts, my friends and I share healthy drinks.', 'We motivate each other to eat well and stay hydrated.', 'Socializing after exercise is one of my favorite parts.'] },
      ],
      transitionWords: ['Personally', 'For one thing', 'Moreover', 'On the other hand', 'Overall'],
      openingStatement: 'I generally prefer exercising alone, although I enjoy group workouts occasionally.',
      closingStatement: 'Whether alone or with friends, the most important thing is staying active consistently.',
      fullModelResponse: 'I generally prefer exercising alone, although I enjoy group workouts occasionally. Personally, I find solo workouts more flexible since I can train whenever I want. For one thing, I do not have to coordinate schedules with anyone else. Moreover, running alone in the morning feels peaceful and helps me think clearly. On the other hand, I do enjoy joining my friends for basketball on weekends because the social aspect is really fun. Group activities also push me to try harder through friendly competition. Overall, I think both solo and group exercise have their benefits, but I lean toward individual workouts for their convenience and the personal space they provide.',
    },
  },
  {
    id: 'exercise-q3',
    questionText: 'Interesting. Next, I\'d like to get your opinion. In the past, most people exercised outdoors. But now many people prefer indoor gyms and fitness centers. Do you think that in the future, indoor gyms will become even more popular? Why or why not?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: exerciseCards,
      phraseFrames: [
        { emoji: '🏋️', template: 'I think indoor gyms will _____ because _____', sentences: ['I think indoor gyms will grow more popular because of advanced equipment.', 'I think indoor gyms will attract more people because of air conditioning.', 'I think indoor gyms will expand because people want convenience.'] },
        { emoji: '🌧️', template: 'One advantage of indoor exercise is _____', sentences: ['One advantage of indoor exercise is that weather does not matter.', 'One advantage of indoor exercise is access to professional trainers.', 'One advantage of indoor exercise is the variety of machines available.'] },
        { emoji: '🌳', template: 'However, outdoor exercise _____', sentences: ['However, outdoor exercise provides fresh air and natural scenery.', 'However, outdoor exercise is free and accessible to everyone.', 'However, outdoor exercise connects people with nature.'] },
        { emoji: '🔮', template: 'In the future, I believe _____', sentences: ['In the future, I believe more people will use home gym equipment.', 'In the future, I believe virtual fitness classes will be common.', 'In the future, I believe gyms will use more technology.'] },
      ],
      modelSentences: [
        { emoji: '🏃‍♀️', scene: 'A person running outdoors', sentences: ['Outdoor running is still popular because it is free and enjoyable.', 'Many people prefer running outside for the fresh air.', 'Parks and trails offer a natural setting that gyms cannot replicate.'] },
        { emoji: '⏰', scene: 'An alarm clock set for early morning', sentences: ['Gyms offer flexible hours that fit busy modern schedules.', '24-hour gyms allow people to exercise at any time.', 'The convenience of gym hours attracts working professionals.'] },
        { emoji: '🌅', scene: 'Sunrise over the horizon', sentences: ['Nothing can replace the beauty of exercising during sunrise outdoors.', 'Indoor gyms try to create calming environments but nature is unmatched.', 'Some gyms now have large windows to bring in natural light.'] },
        { emoji: '💪', scene: 'Strong muscle flex after exercise', sentences: ['Gym equipment helps people target specific muscle groups effectively.', 'Professional guidance at gyms leads to better workout results.', 'Weight machines and free weights are hard to replicate at home.'] },
        { emoji: '🥤', scene: 'A protein shake or sports drink', sentences: ['Many gyms now offer smoothie bars and nutrition advice.', 'The social atmosphere of gyms encourages healthier lifestyle choices.', 'Fitness centers have become wellness hubs with many services.'] },
      ],
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
      vocabularyCards: exerciseCards,
      phraseFrames: [
        { emoji: '🎯', template: 'I agree that exercise builds discipline because _____', sentences: ['I agree that exercise builds discipline because it requires consistency.', 'I agree that exercise builds discipline because you must push through discomfort.', 'I agree that exercise builds discipline because it teaches goal-setting.'] },
        { emoji: '📚', template: 'Other activities like _____ also build discipline', sentences: ['Other activities like studying regularly also build discipline.', 'Other activities like learning a musical instrument also build discipline.', 'Other activities like practicing a sport also build discipline.'] },
        { emoji: '🧠', template: 'Self-discipline means _____', sentences: ['Self-discipline means doing something even when you do not feel like it.', 'Self-discipline means setting goals and working toward them consistently.', 'Self-discipline means managing your time and priorities effectively.'] },
        { emoji: '⚖️', template: 'The key to building discipline is _____', sentences: ['The key to building discipline is practicing something consistently.', 'The key to building discipline is starting with small achievable goals.', 'The key to building discipline is having a clear motivation.'] },
      ],
      modelSentences: [
        { emoji: '🏃‍♀️', scene: 'A person running outdoors', sentences: ['Running every day requires strong willpower and commitment.', 'Sticking to a running schedule has taught me to be more disciplined.', 'Even on tired days, going for a run builds mental toughness.'] },
        { emoji: '⏰', scene: 'An alarm clock set for early morning', sentences: ['Waking up early to exercise is itself an act of self-discipline.', 'Following a strict morning routine strengthens your willpower over time.', 'Discipline starts with small habits like setting and obeying an alarm.'] },
        { emoji: '🌅', scene: 'Sunrise over the horizon', sentences: ['Choosing to exercise at sunrise shows dedication and discipline.', 'The effort to start early eventually becomes a rewarding habit.', 'Morning exercise proves that discipline leads to positive results.'] },
        { emoji: '💪', scene: 'Strong muscle flex after exercise', sentences: ['Seeing physical improvements motivates you to stay disciplined.', 'The discipline from exercise transfers to other areas of life.', 'Consistent training shows the power of long-term commitment.'] },
        { emoji: '🥤', scene: 'A protein shake or sports drink', sentences: ['Maintaining a healthy diet alongside exercise requires extra discipline.', 'Choosing nutritious food over junk food is also a form of self-discipline.', 'A complete fitness lifestyle demands discipline in multiple areas.'] },
      ],
      transitionWords: ['I strongly believe', 'To begin with', 'Furthermore', 'That said', 'In conclusion'],
      openingStatement: 'I agree that exercise is an excellent way to develop self-discipline, but it is not the only way.',
      closingStatement: 'Any activity that requires consistent effort and commitment can help build self-discipline.',
      fullModelResponse: 'I agree that exercise is an excellent way to develop self-discipline, but it is not the only way. I strongly believe that any regular commitment can build discipline. To begin with, exercise requires you to show up consistently, even when you feel tired or unmotivated. This repeated effort trains your willpower over time. Furthermore, setting fitness goals and working toward them teaches you the value of patience and persistence. That said, other activities can also develop discipline effectively. For example, studying daily, practicing a musical instrument, or learning a new language all require the same kind of consistent effort. In conclusion, while exercise is a powerful tool for building discipline, the key ingredient is simply committing to any activity regularly.',
    },
  },

     
   

];

// ─── TOPICS EXPORT ───────────────────────────────────────────────────
export const TOPICS: Topic[] = [
  {
    id: 'exercise',
    title: 'Exercise & Health',
    emojis: '🏃‍♀️⏰🌅💪🥤',
    color: '#4CAF50',
    questions: exerciseQuestions,
  }
  
  ,
];
