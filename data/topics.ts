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

// ─── READING & LEARNING ─────────────────────────────────────────────
const readingCards = makeCards([
  {
    emoji: '📚', scene: 'A stack of books on a shelf',
    vocab: { basic: ['book', 'read', 'story'], intermediate: ['literature', 'novel', 'knowledge'], advanced: ['intellectual enrichment', 'academic resource', 'literary work'] },
  },
  {
    emoji: '☕', scene: 'A warm cup of coffee or tea',
    vocab: { basic: ['coffee', 'drink', 'warm'], intermediate: ['relaxing', 'cozy', 'comfortable'], advanced: ['conducive atmosphere', 'ambient comfort', 'serene setting'] },
  },
  {
    emoji: '🪑', scene: 'A comfortable reading chair',
    vocab: { basic: ['chair', 'sit', 'relax'], intermediate: ['comfortable', 'quiet spot', 'reading nook'], advanced: ['designated study space', 'ergonomic environment', 'focused retreat'] },
  },
  {
    emoji: '💡', scene: 'A light bulb representing an idea',
    vocab: { basic: ['idea', 'think', 'learn'], intermediate: ['insight', 'understand', 'discover'], advanced: ['intellectual revelation', 'conceptual breakthrough', 'cognitive stimulation'] },
  },
  {
    emoji: '🎓', scene: 'A graduation cap representing achievement',
    vocab: { basic: ['school', 'study', 'smart'], intermediate: ['education', 'achievement', 'degree'], advanced: ['academic accomplishment', 'scholarly pursuit', 'lifelong learning'] },
  },
]);

const readingQuestions: TOEFLQuestion[] = [
  {
    id: 'reading-q1',
    questionText: 'Thank you for speaking with me. I\'d like to ask you about your reading habits. What kind of books or materials do you or your friends like to read? For example, do you prefer novels, textbooks, news articles, or other types?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: readingCards,
      phraseFrames: [
        { emoji: '📖', template: 'I enjoy reading _____ because _____', sentences: ['I enjoy reading novels because they expand my imagination.', 'I enjoy reading science articles because I learn new facts.', 'I enjoy reading manga because the stories are exciting.'] },
        { emoji: '📰', template: 'My friends usually read _____ such as _____', sentences: ['My friends usually read online content such as blogs and news.', 'My friends usually read fiction such as mystery and fantasy novels.', 'My friends usually read academic materials such as research papers.'] },
        { emoji: '📱', template: 'I prefer reading on _____ rather than _____', sentences: ['I prefer reading on my tablet rather than paper books.', 'I prefer reading physical books rather than e-books.', 'I prefer reading on my phone rather than a computer.'] },
        { emoji: '🌟', template: 'Reading _____ has helped me _____', sentences: ['Reading widely has helped me improve my vocabulary.', 'Reading novels has helped me understand different cultures.', 'Reading news has helped me stay informed about the world.'] },
      ],
      modelSentences: [
        { emoji: '📚', scene: 'A stack of books on a shelf', sentences: ['I enjoy reading a variety of books in my free time.', 'My bookshelf is filled with novels, textbooks, and poetry collections.', 'I try to read at least one new book every month.'] },
        { emoji: '☕', scene: 'A warm cup of coffee or tea', sentences: ['I like to settle into my armchair with a hot cup of tea.', 'Drinking coffee while reading makes the experience more enjoyable.', 'A warm drink helps me relax and focus on what I am reading.'] },
        { emoji: '🪑', scene: 'A comfortable reading chair', sentences: ['My cozy reading corner helps me focus and stay relaxed.', 'I have a favorite chair by the window where I always read.', 'A comfortable reading space makes a big difference in concentration.'] },
        { emoji: '💡', scene: 'A light bulb representing an idea', sentences: ['Reading regularly gives me new ideas and perspectives.', 'Books have sparked many creative ideas in my mind.', 'I often get inspired after reading about new topics.'] },
        { emoji: '🎓', scene: 'A graduation cap representing achievement', sentences: ['Books have helped shape my academic goals and future plans.', 'Reading has been key to my success in school.', 'I believe reading is the foundation of lifelong learning.'] },
      ],
      transitionWords: ['To begin with', 'In addition', 'Moreover', 'As a result', 'Overall'],
      openingStatement: 'Reading is one of my favorite hobbies and a key part of how I learn.',
      closingStatement: 'I believe that developing a reading habit is one of the best investments in your future.',
      fullModelResponse: 'Reading is one of my favorite hobbies and a key part of how I learn. To begin with, I try to read for at least thirty minutes every evening. I usually sit in my comfortable chair with a hot cup of tea, which helps me concentrate. In addition, I read a wide range of books — from fiction to academic texts. Moreover, reading has dramatically improved my vocabulary and critical thinking skills. As a result, I perform better in my studies and feel more confident expressing ideas. Overall, I believe reading is one of the most valuable habits a student can develop for both academic and personal growth.',
    },
  },
  {
    id: 'reading-q2',
    questionText: 'I see. Do you prefer reading physical books or digital content like e-books and online articles? Why?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: readingCards,
      phraseFrames: [
        { emoji: '📕', template: 'I prefer _____ books because _____', sentences: ['I prefer physical books because I like the feel of turning pages.', 'I prefer digital books because I can carry many on one device.', 'I prefer audiobooks because I can listen while commuting.'] },
        { emoji: '💻', template: 'Digital reading is convenient because _____', sentences: ['Digital reading is convenient because I can read anywhere on my phone.', 'Digital reading is convenient because I can search for words instantly.', 'Digital reading is convenient because e-books are often cheaper.'] },
        { emoji: '✋', template: 'Physical books offer _____ that digital cannot', sentences: ['Physical books offer a tactile experience that digital cannot.', 'Physical books offer fewer distractions that digital cannot.', 'Physical books offer a sense of ownership that digital cannot.'] },
        { emoji: '🔄', template: 'I sometimes switch between _____ and _____', sentences: ['I sometimes switch between e-books and paperbacks depending on the situation.', 'I sometimes switch between reading on my phone and reading print.', 'I sometimes switch between audiobooks for travel and print books at home.'] },
      ],
      modelSentences: [
        { emoji: '📚', scene: 'A stack of books on a shelf', sentences: ['I own many physical books and I treasure my collection.', 'There is something special about holding a real book in your hands.', 'I enjoy browsing bookstores and discovering new titles.'] },
        { emoji: '☕', scene: 'A warm cup of coffee or tea', sentences: ['Reading a physical book with coffee feels like a perfect afternoon.', 'The simple pleasure of a book and a warm drink never gets old.', 'I find it easier to relax with a physical book than a screen.'] },
        { emoji: '🪑', scene: 'A comfortable reading chair', sentences: ['I prefer reading printed books in my reading corner at home.', 'Sitting in my chair with a paperback helps me disconnect from screens.', 'My reading nook is designed for physical books, not devices.'] },
        { emoji: '💡', scene: 'A light bulb representing an idea', sentences: ['I remember information better when I read from a physical page.', 'Highlighting and writing notes in the margins helps me learn.', 'Studies show that reading on paper improves comprehension.'] },
        { emoji: '🎓', scene: 'A graduation cap representing achievement', sentences: ['For studying, I prefer printed textbooks over digital ones.', 'Physical books helped me build strong study habits early on.', 'My education has been supported by years of reading real books.'] },
      ],
      transitionWords: ['Honestly', 'The main reason is', 'Additionally', 'However', 'All in all'],
      openingStatement: 'I personally prefer physical books, although I recognize the convenience of digital reading.',
      closingStatement: 'Both formats have their place, but nothing quite matches the experience of a real book.',
      fullModelResponse: 'I personally prefer physical books, although I recognize the convenience of digital reading. Honestly, there is something special about holding a book and turning the pages. The main reason is that I find it easier to focus when reading from paper — screens can be distracting with notifications. Additionally, I enjoy the experience of visiting bookstores and building my personal collection. However, I do use e-books when traveling because carrying multiple physical books is impractical. I also appreciate that digital texts allow instant word lookups. All in all, while digital reading offers undeniable convenience, I believe physical books provide a deeper and more enjoyable reading experience that helps me learn better.',
    },
  },
  {
    id: 'reading-q3',
    questionText: 'Interesting. Next, I\'d like to get your opinion. With the rise of social media and short-form content, some people say that young people are reading less. Do you think this is a problem? Why or why not?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: readingCards,
      phraseFrames: [
        { emoji: '📉', template: 'Young people read less because _____', sentences: ['Young people read less because social media takes up their time.', 'Young people read less because short videos are more entertaining.', 'Young people read less because they prefer visual content.'] },
        { emoji: '⚠️', template: 'This is a problem because _____', sentences: ['This is a problem because reading builds critical thinking skills.', 'This is a problem because books develop concentration and focus.', 'This is a problem because reading expands vocabulary significantly.'] },
        { emoji: '🤔', template: 'On the other hand, some argue _____', sentences: ['On the other hand, some argue that online content is also educational.', 'On the other hand, some argue that reading formats are just changing.', 'On the other hand, some argue that podcasts provide similar benefits.'] },
        { emoji: '💡', template: 'I believe the solution is _____', sentences: ['I believe the solution is encouraging reading from a young age.', 'I believe the solution is making reading more accessible and fun.', 'I believe the solution is finding a balance between screens and books.'] },
      ],
      modelSentences: [
        { emoji: '📚', scene: 'A stack of books on a shelf', sentences: ['Fewer young people visit libraries compared to previous generations.', 'Bookstores report that younger customers are declining in number.', 'The habit of reading long texts is becoming less common.'] },
        { emoji: '☕', scene: 'A warm cup of coffee or tea', sentences: ['The calm focus needed for reading is harder to develop with constant notifications.', 'Sitting quietly with a book requires patience that social media does not.', 'Reading culture is being replaced by a culture of scrolling.'] },
        { emoji: '🪑', scene: 'A comfortable reading chair', sentences: ['Dedicated reading time is being replaced by screen time.', 'Young people rarely set aside specific time to read books.', 'Creating a reading habit requires an intentional effort today.'] },
        { emoji: '💡', scene: 'A light bulb representing an idea', sentences: ['Reading develops deep thinking that short content cannot provide.', 'Books challenge us to think critically about complex topics.', 'Without reading, young people may miss important intellectual growth.'] },
        { emoji: '🎓', scene: 'A graduation cap representing achievement', sentences: ['Students who read regularly tend to perform better academically.', 'Reading is closely linked to success in higher education.', 'Strong reading habits are a predictor of career success.'] },
      ],
      transitionWords: ['I do think', 'Primarily', 'In addition', 'Nonetheless', 'In summary'],
      openingStatement: 'I believe the decline in reading among young people is indeed a concern worth addressing.',
      closingStatement: 'While technology is not inherently bad, we need to ensure reading remains a valued habit.',
      fullModelResponse: 'I believe the decline in reading among young people is indeed a concern worth addressing. I do think social media and short-form content have significantly reduced the time young people spend reading books. Primarily, this matters because reading builds skills that other media cannot — such as deep focus, critical thinking, and extensive vocabulary. In addition, books expose us to complex ideas and diverse perspectives in a way that short videos simply cannot match. Nonetheless, I also recognize that digital content has educational value, and not all screen time is wasted. In summary, while technology is not inherently bad, I think schools and parents should actively encourage reading to ensure young people develop the intellectual skills they need for the future.',
    },
  },
  {
    id: 'reading-q4',
    questionText: 'Good points. I just have one more question. Some people believe that reading fiction is just entertainment and not as valuable as reading non-fiction. Do you agree or disagree? Explain your answer.',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: readingCards,
      phraseFrames: [
        { emoji: '📗', template: 'Fiction is valuable because _____', sentences: ['Fiction is valuable because it develops empathy and imagination.', 'Fiction is valuable because it helps us understand human emotions.', 'Fiction is valuable because it teaches us about different cultures.'] },
        { emoji: '📘', template: 'Non-fiction is important because _____', sentences: ['Non-fiction is important because it teaches us real-world knowledge.', 'Non-fiction is important because it provides factual information.', 'Non-fiction is important because it helps us solve practical problems.'] },
        { emoji: '⚖️', template: 'Both fiction and non-fiction _____', sentences: ['Both fiction and non-fiction contribute to personal growth.', 'Both fiction and non-fiction improve reading and writing skills.', 'Both fiction and non-fiction can inspire people to take action.'] },
        { emoji: '❤️', template: 'I personally value _____ because _____', sentences: ['I personally value fiction because it brings me joy and relaxation.', 'I personally value both genres because they serve different purposes.', 'I personally value non-fiction because I love learning new facts.'] },
      ],
      modelSentences: [
        { emoji: '📚', scene: 'A stack of books on a shelf', sentences: ['My bookshelf includes both fiction and non-fiction titles.', 'I choose what to read based on my mood and needs.', 'A well-rounded reader explores many different genres.'] },
        { emoji: '☕', scene: 'A warm cup of coffee or tea', sentences: ['Reading a novel with tea is one of my favorite relaxation activities.', 'Fiction helps me unwind after a stressful day of studying.', 'Entertainment through reading is still a form of intellectual engagement.'] },
        { emoji: '🪑', scene: 'A comfortable reading chair', sentences: ['I spend hours in my reading chair lost in fictional worlds.', 'Good fiction transports you to another place entirely.', 'The immersive nature of fiction develops focus and patience.'] },
        { emoji: '💡', scene: 'A light bulb representing an idea', sentences: ['Fiction often contains deep insights about human nature.', 'Many great ideas in history were inspired by fictional stories.', 'Novels can teach moral lessons as effectively as any textbook.'] },
        { emoji: '🎓', scene: 'A graduation cap representing achievement', sentences: ['Literature courses at universities prove fiction has academic value.', 'Studying fiction improves analytical and writing skills.', 'Many successful people credit fiction for shaping their worldview.'] },
      ],
      transitionWords: ['I disagree with', 'First', 'Second', 'For example', 'Therefore'],
      openingStatement: 'I strongly disagree with the idea that fiction is merely entertainment without real value.',
      closingStatement: 'Fiction and non-fiction are both essential, and neither should be dismissed as less valuable.',
      fullModelResponse: 'I strongly disagree with the idea that fiction is merely entertainment without real value. I disagree with the notion because fiction teaches us so much about the human experience. First, reading novels and short stories develops empathy — when we read about characters in difficult situations, we learn to understand others\' feelings. Second, fiction sparks creativity and imagination, which are essential skills in any career. For example, many scientists and entrepreneurs credit fictional stories for inspiring their innovations. Therefore, while non-fiction is certainly valuable for factual knowledge, fiction provides equally important benefits such as emotional intelligence, creativity, and cultural understanding. Fiction and non-fiction are both essential, and neither should be dismissed as less valuable.',
    },
  },
];

// ─── TECHNOLOGY & SOCIAL MEDIA ───────────────────────────────────────
const technologyCards = makeCards([
  { emoji: '📱', scene: 'A smartphone with various apps', vocab: { basic: ['phone', 'app', 'screen'], intermediate: ['smartphone', 'social media', 'notification'], advanced: ['digital device', 'mobile technology', 'user interface'] } },
  { emoji: '💻', scene: 'A laptop open on a desk', vocab: { basic: ['computer', 'work', 'type'], intermediate: ['laptop', 'online', 'research'], advanced: ['digital workspace', 'remote productivity', 'computing device'] } },
  { emoji: '🌐', scene: 'A globe representing the internet', vocab: { basic: ['internet', 'web', 'connect'], intermediate: ['global network', 'information', 'browse'], advanced: ['digital connectivity', 'information ecosystem', 'worldwide web'] } },
  { emoji: '👥', scene: 'Two people representing online friends', vocab: { basic: ['friends', 'people', 'share'], intermediate: ['community', 'network', 'communicate'], advanced: ['virtual community', 'social interaction', 'online collaboration'] } },
  { emoji: '🔔', scene: 'A notification bell', vocab: { basic: ['alert', 'message', 'update'], intermediate: ['notification', 'distraction', 'attention'], advanced: ['digital interruption', 'information overload', 'constant connectivity'] } },
]);

const technologyQuestions: TOEFLQuestion[] = [
  {
    id: 'technology-q1',
    questionText: 'Thank you for speaking with me. I\'d like to ask about technology in your life. How do you or your friends use technology in your daily life? For example, do you use it mainly for studying, socializing, entertainment, or other purposes?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: technologyCards,
      phraseFrames: [
        { emoji: '📱', template: 'I use my phone mainly for _____', sentences: ['I use my phone mainly for checking social media and messaging friends.', 'I use my phone mainly for studying with educational apps.', 'I use my phone mainly for watching videos and listening to music.'] },
        { emoji: '💻', template: 'Technology helps me _____ every day', sentences: ['Technology helps me complete homework assignments every day.', 'Technology helps me stay connected with friends every day.', 'Technology helps me access information quickly every day.'] },
        { emoji: '🎮', template: 'My friends use technology to _____', sentences: ['My friends use technology to play online games together.', 'My friends use technology to share photos on social media.', 'My friends use technology to study and prepare for exams.'] },
        { emoji: '⚡', template: 'The most useful technology for me is _____', sentences: ['The most useful technology for me is my laptop for schoolwork.', 'The most useful technology for me is translation apps for learning English.', 'The most useful technology for me is video calling to stay in touch with family.'] },
      ],
      modelSentences: [
        { emoji: '📱', scene: 'A smartphone with various apps', sentences: ['I use my smartphone for studying and staying connected.', 'My phone has apps for language learning, note-taking, and communication.', 'I check my phone first thing every morning for messages and news.'] },
        { emoji: '💻', scene: 'A laptop open on a desk', sentences: ['My laptop is essential for doing research and completing assignments.', 'I spend several hours on my computer every day for school.', 'Online resources on my laptop help me learn things I cannot find in textbooks.'] },
        { emoji: '🌐', scene: 'A globe representing the internet', sentences: ['The internet gives me access to information from around the world.', 'I use the internet to watch educational videos and read articles.', 'Global connectivity has changed how I study and communicate.'] },
        { emoji: '👥', scene: 'Two people representing online friends', sentences: ['Social media helps me connect with friends and classmates online.', 'I have made friends from other countries through online communities.', 'Technology makes it easy to collaborate on group projects remotely.'] },
        { emoji: '🔔', scene: 'A notification bell', sentences: ['I try to manage notifications to avoid constant distractions.', 'Too many alerts can make it hard to focus on important tasks.', 'I turn off notifications during study time to stay productive.'] },
      ],
      transitionWords: ['Firstly', 'On the other hand', 'However', 'For example', 'In conclusion'],
      openingStatement: 'Technology plays a huge role in both my daily life and my studies.',
      closingStatement: 'I think it is important to use technology wisely to maximize its benefits while minimizing distractions.',
      fullModelResponse: 'Technology plays a huge role in both my daily life and my studies. Firstly, I use my smartphone and laptop every day to research topics, take notes, and communicate with classmates. On the other hand, social media can be a significant distraction — I sometimes spend too much time scrolling through notifications. However, I have learned to set screen time limits to stay focused. For example, I turn off non-essential notifications during study hours. In conclusion, while technology is an invaluable tool for modern students, I believe it is essential to use it mindfully and maintain a healthy balance between online and offline activities.',
    },
  },
  {
    id: 'technology-q2',
    questionText: 'I see. Do you think social media has more positive effects or more negative effects on young people? Why?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: technologyCards,
      phraseFrames: [
        { emoji: '👍', template: 'A positive effect of social media is _____', sentences: ['A positive effect of social media is staying connected with friends easily.', 'A positive effect of social media is accessing educational content for free.', 'A positive effect of social media is raising awareness about important issues.'] },
        { emoji: '👎', template: 'A negative effect of social media is _____', sentences: ['A negative effect of social media is addiction and wasted time.', 'A negative effect of social media is cyberbullying and online harassment.', 'A negative effect of social media is unrealistic beauty standards.'] },
        { emoji: '⚖️', template: 'The key is to _____', sentences: ['The key is to use social media in moderation.', 'The key is to follow accounts that inspire and educate you.', 'The key is to limit screen time and prioritize real-life interactions.'] },
        { emoji: '🧠', template: 'Social media affects _____ by _____', sentences: ['Social media affects mental health by creating comparison anxiety.', 'Social media affects learning by providing access to global resources.', 'Social media affects relationships by changing how we communicate.'] },
      ],
      modelSentences: [
        { emoji: '📱', scene: 'A smartphone with various apps', sentences: ['Social media apps consume a huge amount of young people\'s time.', 'Many students check social media every few minutes without realizing it.', 'The addictive design of apps makes it hard to put the phone down.'] },
        { emoji: '💻', scene: 'A laptop open on a desk', sentences: ['Online platforms provide free educational resources to millions.', 'Students can learn almost anything through YouTube tutorials.', 'Technology has democratized access to knowledge globally.'] },
        { emoji: '🌐', scene: 'A globe representing the internet', sentences: ['Social media connects people across different countries and cultures.', 'Young people can share their ideas with a global audience.', 'Online communities help people find others with similar interests.'] },
        { emoji: '👥', scene: 'Two people representing online friends', sentences: ['Social media has changed how young people form friendships.', 'Some friendships exist entirely online and are still meaningful.', 'However, online interactions cannot fully replace face-to-face connection.'] },
        { emoji: '🔔', scene: 'A notification bell', sentences: ['Constant notifications create anxiety and reduce attention spans.', 'The pressure to always be available online is stressful for teens.', 'Digital wellness requires intentionally disconnecting sometimes.'] },
      ],
      transitionWords: ['In my view', 'On the positive side', 'Unfortunately', 'Despite this', 'To conclude'],
      openingStatement: 'I think social media has both significant benefits and serious drawbacks for young people.',
      closingStatement: 'The impact of social media depends largely on how responsibly it is used.',
      fullModelResponse: 'I think social media has both significant benefits and serious drawbacks for young people. In my view, the effects depend on how it is used. On the positive side, social media helps young people stay connected with friends, access educational content, and learn about global events. Unfortunately, it also has negative effects such as addiction, cyberbullying, and unrealistic comparisons that harm mental health. Despite this, I believe the positives can outweigh the negatives if young people learn to use social media responsibly. Setting time limits and following inspiring accounts can make a big difference. To conclude, social media is a powerful tool, and the key is teaching young people to use it wisely rather than banning it completely.',
    },
  },
  {
    id: 'technology-q3',
    questionText: 'Interesting. Some people predict that artificial intelligence will replace many jobs in the future. Do you think this is something to worry about? Why or why not?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: technologyCards,
      phraseFrames: [
        { emoji: '🤖', template: 'AI might replace jobs like _____', sentences: ['AI might replace jobs like factory workers and data entry clerks.', 'AI might replace jobs like customer service representatives.', 'AI might replace jobs like drivers and delivery workers.'] },
        { emoji: '🛡️', template: 'Jobs that are safe from AI include _____', sentences: ['Jobs that are safe from AI include creative professions like art and writing.', 'Jobs that are safe from AI include teaching and counseling.', 'Jobs that are safe from AI include healthcare roles requiring human empathy.'] },
        { emoji: '📈', template: 'AI will also create new jobs such as _____', sentences: ['AI will also create new jobs such as AI trainers and data scientists.', 'AI will also create new jobs such as robot maintenance technicians.', 'AI will also create new jobs such as AI ethics consultants.'] },
        { emoji: '🎓', template: 'To prepare for the future, we should _____', sentences: ['To prepare for the future, we should learn skills AI cannot replicate.', 'To prepare for the future, we should embrace lifelong learning.', 'To prepare for the future, we should study technology and its applications.'] },
      ],
      modelSentences: [
        { emoji: '📱', scene: 'A smartphone with various apps', sentences: ['AI assistants on our phones already handle many tasks for us.', 'Voice assistants like Siri show how AI is becoming part of daily life.', 'Smart technology is advancing faster than most people realize.'] },
        { emoji: '💻', scene: 'A laptop open on a desk', sentences: ['AI software can now write essays, create images, and analyze data.', 'Many office tasks are already being automated by AI programs.', 'Workers who use AI tools are more productive than those who do not.'] },
        { emoji: '🌐', scene: 'A globe representing the internet', sentences: ['AI is transforming industries across the entire global economy.', 'Companies worldwide are investing heavily in artificial intelligence.', 'The impact of AI will be felt in every country and every profession.'] },
        { emoji: '👥', scene: 'Two people representing online friends', sentences: ['Human skills like teamwork and empathy cannot be replaced by AI.', 'Jobs that require emotional intelligence will remain in demand.', 'The best approach combines human creativity with AI efficiency.'] },
        { emoji: '🔔', scene: 'A notification bell', sentences: ['We should pay attention to how AI is changing our work and education.', 'Staying informed about AI developments helps us prepare for change.', 'Ignoring the AI revolution could leave people unprepared.'] },
      ],
      transitionWords: ['I believe', 'While it is true', 'At the same time', 'More importantly', 'In the end'],
      openingStatement: 'I think AI replacing jobs is a real possibility, but I believe it is manageable if we prepare properly.',
      closingStatement: 'Rather than fearing AI, we should focus on adapting and developing uniquely human skills.',
      fullModelResponse: 'I think AI replacing jobs is a real possibility, but I believe it is manageable if we prepare properly. I believe technology has always changed the job market throughout history. While it is true that AI will automate many routine tasks like data entry and driving, it will also create new jobs that we cannot even imagine today. At the same time, certain human skills like creativity, empathy, and critical thinking are very difficult for AI to replicate. More importantly, education systems need to evolve so students learn skills that complement AI rather than compete with it. In the end, rather than fearing AI, we should focus on adapting our skills and embracing lifelong learning to stay relevant in the changing economy.',
    },
  },
  {
    id: 'technology-q4',
    questionText: 'Good points. One more question. Some people argue that schools should ban smartphones in classrooms. Do you agree or disagree? Explain your reasoning.',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: technologyCards,
      phraseFrames: [
        { emoji: '🚫', template: 'Banning phones would help because _____', sentences: ['Banning phones would help because students would pay more attention.', 'Banning phones would help because cheating would be reduced.', 'Banning phones would help because students would interact more in person.'] },
        { emoji: '✅', template: 'Phones in class can be useful for _____', sentences: ['Phones in class can be useful for looking up information quickly.', 'Phones in class can be useful for using educational apps.', 'Phones in class can be useful for taking photos of notes.'] },
        { emoji: '🤝', template: 'A better solution would be _____', sentences: ['A better solution would be teaching students responsible phone use.', 'A better solution would be allowing phones only during certain activities.', 'A better solution would be using school-provided devices instead.'] },
        { emoji: '📵', template: 'The biggest problem with phones in class is _____', sentences: ['The biggest problem with phones in class is social media distraction.', 'The biggest problem with phones in class is that they interrupt lessons.', 'The biggest problem with phones in class is cyberbullying during school.'] },
      ],
      modelSentences: [
        { emoji: '📱', scene: 'A smartphone with various apps', sentences: ['Smartphones can be both helpful tools and major distractions.', 'Many students secretly use their phones during class for social media.', 'Educational apps on phones can enhance the learning experience.'] },
        { emoji: '💻', scene: 'A laptop open on a desk', sentences: ['Schools could provide laptops instead of relying on personal phones.', 'Controlled devices eliminate the distraction problem while keeping technology.', 'Many schools have already transitioned to school-issued devices.'] },
        { emoji: '🌐', scene: 'A globe representing the internet', sentences: ['Access to the internet is valuable for classroom research and learning.', 'Students can fact-check information in real-time during discussions.', 'The internet provides resources that textbooks alone cannot offer.'] },
        { emoji: '👥', scene: 'Two people representing online friends', sentences: ['Phone-free classrooms may encourage better face-to-face interaction.', 'Students might actually talk to each other more without phones.', 'Building social skills requires real conversations, not just texting.'] },
        { emoji: '🔔', scene: 'A notification bell', sentences: ['Even silent notifications pull students\' attention away from lessons.', 'The urge to check messages is hard to resist for most students.', 'A phone-free environment helps everyone focus better.'] },
      ],
      transitionWords: ['I partially agree', 'On one hand', 'On the other hand', 'Instead', 'Ultimately'],
      openingStatement: 'I think a complete phone ban is too extreme, but some restrictions are definitely needed.',
      closingStatement: 'The goal should be teaching responsible use rather than simply prohibiting technology.',
      fullModelResponse: 'I think a complete phone ban is too extreme, but some restrictions are definitely needed. I partially agree with the idea because phones are clearly distracting in classrooms. On one hand, students often check social media during lessons, which hurts their learning. On the other hand, smartphones can be powerful learning tools when used properly — they allow quick research and access to educational apps. Instead of banning phones entirely, I think schools should establish clear rules about when phones can be used. For example, phones could be collected at the start of class and returned during designated activity time. Ultimately, the goal should be teaching students responsible technology use rather than simply prohibiting it, because they will need these self-regulation skills throughout life.',
    },
  },
];

// ─── FOOD & COOKING (DIETARY HABITS) ────────────────────────────────
const foodCards = makeCards([
  { emoji: '🍳', scene: 'A frying pan cooking eggs', vocab: { basic: ['cook', 'egg', 'hot'], intermediate: ['fry', 'prepare', 'breakfast'], advanced: ['culinary technique', 'sauté', 'gastronomy'] } },
  { emoji: '🥗', scene: 'A colorful vegetable salad', vocab: { basic: ['salad', 'vegetables', 'healthy'], intermediate: ['nutritious', 'fresh ingredients', 'balanced meal'], advanced: ['nutrient-rich', 'wholesome diet', 'dietary balance'] } },
  { emoji: '🍽️', scene: 'A plate ready for a meal', vocab: { basic: ['plate', 'eat', 'meal'], intermediate: ['dinner', 'serve', 'portion'], advanced: ['dining experience', 'culinary presentation', 'meal preparation'] } },
  { emoji: '👨‍🍳', scene: 'A chef preparing food', vocab: { basic: ['chef', 'cook', 'kitchen'], intermediate: ['recipe', 'skill', 'technique'], advanced: ['culinary expertise', 'gastronomic art', 'professional chef'] } },
  { emoji: '🛒', scene: 'A shopping cart at the grocery store', vocab: { basic: ['shop', 'buy', 'food'], intermediate: ['grocery', 'ingredients', 'market'], advanced: ['sourcing ingredients', 'meal planning', 'food procurement'] } },
]);

const foodQuestions: TOEFLQuestion[] = [
  {
    id: 'food-q1',
    questionText: 'Thank you for your participation. Today I\'d like to ask you some questions about your dietary habits. When you have a meal at school or work, do you prefer to eat alone or do you like to eat with friends or co-workers? Why?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: foodCards,
      phraseFrames: [
        { emoji: '👫', template: 'I prefer eating _____ because _____', sentences: ['I prefer eating with friends because it makes meals more enjoyable.', 'I prefer eating alone because I can relax and think quietly.', 'I prefer eating with co-workers because we can socialize.'] },
        { emoji: '🍽️', template: 'Eating together is nice because _____', sentences: ['Eating together is nice because we can share food and try new dishes.', 'Eating together is nice because it strengthens our friendships.', 'Eating together is nice because conversations make the meal more fun.'] },
        { emoji: '🧘', template: 'Sometimes I eat alone to _____', sentences: ['Sometimes I eat alone to take a break from socializing.', 'Sometimes I eat alone to catch up on reading or work.', 'Sometimes I eat alone to enjoy my meal at my own pace.'] },
        { emoji: '⏰', template: 'During _____, I usually eat _____', sentences: ['During lunch break, I usually eat with my classmates.', 'During busy weekdays, I usually eat alone to save time.', 'During weekends, I usually eat with my family at home.'] },
      ],
      modelSentences: [
        { emoji: '🍳', scene: 'A frying pan cooking eggs', sentences: ['I like to cook simple meals and share them with friends.', 'Making breakfast together with my roommate is part of our daily routine.', 'Cooking for others makes the meal more meaningful.'] },
        { emoji: '🥗', scene: 'A colorful vegetable salad', sentences: ['My friends and I often share salads and healthy dishes at lunch.', 'We encourage each other to eat healthier when we eat together.', 'Eating with others inspires me to try more nutritious options.'] },
        { emoji: '🍽️', scene: 'A plate ready for a meal', sentences: ['I enjoy setting the table and making meals feel special.', 'Shared meals feel more like an occasion than just eating.', 'The dining experience is better when you have good company.'] },
        { emoji: '👨‍🍳', scene: 'A chef preparing food', sentences: ['My friend is a great cook and often prepares meals for our group.', 'Taking turns cooking for each other is something we enjoy.', 'Cooking together is both fun and efficient.'] },
        { emoji: '🛒', scene: 'A shopping cart at the grocery store', sentences: ['We sometimes go grocery shopping together before cooking a meal.', 'Splitting the cost of ingredients makes eating together affordable.', 'Planning meals together helps us eat healthier and save money.'] },
      ],
      transitionWords: ['Generally speaking', 'The main reason is', 'Also', 'For instance', 'In short'],
      openingStatement: 'I usually prefer eating with friends because it makes meals more enjoyable and social.',
      closingStatement: 'Sharing a meal with others is about more than just food — it is about connection.',
      fullModelResponse: 'I usually prefer eating with friends because it makes meals more enjoyable and social. Generally speaking, mealtimes are one of the best opportunities to relax and catch up with friends during a busy school day. The main reason is that eating together turns a simple meal into a social experience — we talk about our classes, share stories, and even try each other\'s food. Also, eating with friends helps me take a real break from studying, which is important for managing stress. For instance, my classmates and I always eat lunch together in the cafeteria and it has become a daily highlight. In short, while I occasionally eat alone when I need quiet time, I believe sharing meals with friends is one of the simplest ways to maintain strong relationships.',
    },
  },
  {
    id: 'food-q2',
    questionText: 'Thank you, and what kind of meals do your family or friends generally like to eat? For example, do they prefer traditional home-cooked dishes, fast food, or other types?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: foodCards,
      phraseFrames: [
        { emoji: '🏠', template: 'My family usually eats _____ at home', sentences: ['My family usually eats home-cooked Chinese dishes at home.', 'My family usually eats simple but nutritious meals at home.', 'My family usually eats traditional recipes passed down from grandparents.'] },
        { emoji: '🍔', template: 'My friends prefer _____ because _____', sentences: ['My friends prefer fast food because it is quick and convenient.', 'My friends prefer home-cooked meals because they are healthier.', 'My friends prefer trying new restaurants because they enjoy variety.'] },
        { emoji: '👵', template: 'Traditional dishes are important because _____', sentences: ['Traditional dishes are important because they connect us to our culture.', 'Traditional dishes are important because they remind us of family.', 'Traditional dishes are important because they use fresh, local ingredients.'] },
        { emoji: '🌍', template: 'Nowadays, many people eat _____ instead of _____', sentences: ['Nowadays, many people eat fast food instead of cooking at home.', 'Nowadays, many people eat international cuisine instead of only local food.', 'Nowadays, many people eat delivery food instead of dining out.'] },
      ],
      modelSentences: [
        { emoji: '🍳', scene: 'A frying pan cooking eggs', sentences: ['My mother makes delicious home-cooked meals every evening.', 'Homemade food tastes better than anything from a restaurant.', 'I learned to cook simple dishes by watching my parents in the kitchen.'] },
        { emoji: '🥗', scene: 'A colorful vegetable salad', sentences: ['My family values eating fresh vegetables with every meal.', 'We always try to include something green on our dinner plates.', 'Healthy eating habits were taught to me by my parents from a young age.'] },
        { emoji: '🍽️', scene: 'A plate ready for a meal', sentences: ['Family dinners are an important tradition in my household.', 'We sit together at the table every evening and share our day.', 'Mealtimes at home are about family bonding as much as eating.'] },
        { emoji: '👨‍🍳', scene: 'A chef preparing food', sentences: ['My grandmother is an excellent cook who makes traditional recipes.', 'Her cooking skills have been passed down through three generations.', 'I hope to learn all her recipes before I move away for university.'] },
        { emoji: '🛒', scene: 'A shopping cart at the grocery store', sentences: ['My mother goes to the market every weekend for fresh ingredients.', 'Buying seasonal produce makes our home-cooked meals taste better.', 'We plan our meals for the week when we go grocery shopping.'] },
      ],
      transitionWords: ['In my family', 'Specifically', 'At the same time', 'For example', 'All in all'],
      openingStatement: 'My family strongly prefers home-cooked meals, though my friends have more varied tastes.',
      closingStatement: 'Food is a big part of our culture, and sharing traditional meals keeps us connected to our roots.',
      fullModelResponse: 'My family strongly prefers home-cooked meals, though my friends have more varied tastes. In my family, we eat traditional dishes almost every day because my parents believe homemade food is healthier and more delicious. Specifically, my mother cooks fresh vegetables and rice dishes that have been in our family for generations. At the same time, my friends tend to enjoy fast food and trendy restaurants because they value convenience and variety. For example, we often go out for pizza or noodles after school, which is fun but not very nutritious. All in all, I appreciate both home-cooked meals and eating out with friends, but I think traditional family cooking is the most meaningful because it connects us to our culture and brings the family together.',
    },
  },
  {
    id: 'food-q3',
    questionText: 'Interesting. Next I\'d like to get your opinion. In recent years, many people have argued that plant-based diets are better for individual health and for the planet. Do you think that in the future more people will adopt plant-based diets? Why or why not?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: foodCards,
      phraseFrames: [
        { emoji: '🥬', template: 'Plant-based diets are growing because _____', sentences: ['Plant-based diets are growing because people are more health-conscious.', 'Plant-based diets are growing because of environmental concerns.', 'Plant-based diets are growing because of improved meat alternatives.'] },
        { emoji: '🌍', template: 'Eating less meat helps the planet by _____', sentences: ['Eating less meat helps the planet by reducing greenhouse gas emissions.', 'Eating less meat helps the planet by using less water and land.', 'Eating less meat helps the planet by decreasing deforestation.'] },
        { emoji: '🥩', template: 'However, many people still prefer meat because _____', sentences: ['However, many people still prefer meat because of taste and tradition.', 'However, many people still prefer meat because it is a major protein source.', 'However, many people still prefer meat because cultural dishes require it.'] },
        { emoji: '🔮', template: 'In the future, I think _____', sentences: ['In the future, I think more people will try plant-based options.', 'In the future, I think lab-grown meat may replace traditional meat.', 'In the future, I think balanced diets with less meat will become normal.'] },
      ],
      modelSentences: [
        { emoji: '🍳', scene: 'A frying pan cooking eggs', sentences: ['Many restaurants now offer plant-based versions of popular dishes.', 'Cooking vegetarian meals at home is easier than ever before.', 'New cooking techniques make vegetables taste just as satisfying as meat.'] },
        { emoji: '🥗', scene: 'A colorful vegetable salad', sentences: ['Plant-based meals can be just as nutritious as meat-based ones.', 'More people are choosing salads and grain bowls over burgers.', 'Vegetable-focused diets have been linked to longer, healthier lives.'] },
        { emoji: '🍽️', scene: 'A plate ready for a meal', sentences: ['A balanced plate should include lots of colorful vegetables.', 'Portion sizes and variety matter more than eliminating meat entirely.', 'The ideal diet probably includes mostly plants with some animal products.'] },
        { emoji: '👨‍🍳', scene: 'A chef preparing food', sentences: ['Top chefs around the world are embracing plant-based cooking.', 'Creative chefs make plant-based food that rivals any meat dish.', 'Culinary innovation is making vegetarian food more exciting.'] },
        { emoji: '🛒', scene: 'A shopping cart at the grocery store', sentences: ['Grocery stores now have entire sections dedicated to plant-based products.', 'The variety of meat alternatives has exploded in recent years.', 'Plant-based milk and cheese are now mainstream grocery items.'] },
      ],
      transitionWords: ['I do believe', 'The reason is', 'Furthermore', 'That being said', 'Overall'],
      openingStatement: 'I believe more people will gradually shift toward plant-based diets, though it will be a slow process.',
      closingStatement: 'The future of food will likely be a balance between plant-based and traditional options.',
      fullModelResponse: 'I believe more people will gradually shift toward plant-based diets, though it will be a slow process. I do believe this trend will continue because health awareness and environmental concerns are growing rapidly. The reason is that research clearly shows plant-based diets are better for both personal health and the planet. Furthermore, food technology is making plant-based alternatives taste much better than before — products like plant-based burgers are now almost indistinguishable from real meat. That being said, I do not think meat will disappear completely because it is deeply tied to many cultural traditions and cuisines. Overall, I predict that in the future most people will eat significantly less meat, but complete adoption of plant-based diets will remain a personal choice rather than a universal standard.',
    },
  },
  {
    id: 'food-q4',
    questionText: 'Good points. I just have one more question. Some people believe that having regular meal times contributes to better health and financial well-being. Do you agree or disagree with this idea? Explain your answer.',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: foodCards,
      phraseFrames: [
        { emoji: '⏰', template: 'Regular meal times help because _____', sentences: ['Regular meal times help because your body develops a healthy rhythm.', 'Regular meal times help because you are less likely to overeat.', 'Regular meal times help because you can plan and budget for groceries.'] },
        { emoji: '💰', template: 'Eating on a schedule saves money because _____', sentences: ['Eating on a schedule saves money because you buy only what you need.', 'Eating on a schedule saves money because you avoid expensive impulse snacks.', 'Eating on a schedule saves money because you cook at home more often.'] },
        { emoji: '❤️', template: 'Regular meals improve health by _____', sentences: ['Regular meals improve health by maintaining stable blood sugar levels.', 'Regular meals improve health by preventing unhealthy snacking.', 'Regular meals improve health by ensuring you get proper nutrition.'] },
        { emoji: '🤔', template: 'Some people disagree because _____', sentences: ['Some people disagree because their work schedule is unpredictable.', 'Some people disagree because they prefer eating when hungry.', 'Some people disagree because rigid schedules feel restrictive.'] },
      ],
      modelSentences: [
        { emoji: '🍳', scene: 'A frying pan cooking eggs', sentences: ['Having breakfast at the same time every day gives me steady morning energy.', 'A regular breakfast routine prevents me from buying expensive coffee and snacks.', 'I feel better on days when I eat a proper, scheduled breakfast.'] },
        { emoji: '🥗', scene: 'A colorful vegetable salad', sentences: ['Planned lunches are healthier than whatever I grab when I am already hungry.', 'When I eat lunch at a set time, I make better food choices.', 'Meal prep for regular lunch times saves me money every week.'] },
        { emoji: '🍽️', scene: 'A plate ready for a meal', sentences: ['Regular dinner times bring my family together every evening.', 'Eating dinner at the same time helps me sleep better at night.', 'Scheduled meals give structure to my day and reduce stress.'] },
        { emoji: '👨‍🍳', scene: 'A chef preparing food', sentences: ['Planning meals in advance means I cook at home more and spend less.', 'Meal planning is easier when you have a consistent eating schedule.', 'Regular cooking routines make me a better and more efficient cook.'] },
        { emoji: '🛒', scene: 'A shopping cart at the grocery store', sentences: ['I waste less food when I plan meals around a regular schedule.', 'Grocery bills are lower when I know exactly what meals I need to prepare.', 'Impulse buying decreases when I shop with a meal plan in mind.'] },
      ],
      transitionWords: ['I agree with', 'First', 'Second', 'In my experience', 'To summarize'],
      openingStatement: 'I agree that regular meal times contribute to both better health and smarter financial habits.',
      closingStatement: 'A consistent eating routine is a simple but powerful habit for overall well-being.',
      fullModelResponse: 'I agree that regular meal times contribute to both better health and smarter financial habits. I agree with this idea strongly based on my own experience. First, when I eat meals at consistent times, my body maintains steady energy levels throughout the day, and I avoid the temptation to snack on unhealthy food between meals. Second, having a regular eating schedule makes meal planning and grocery shopping much more efficient, which definitely saves money. In my experience, the weeks when I eat on a regular schedule, I spend significantly less on food because I cook at home and avoid impulse purchases. To summarize, regular meal times create a positive cycle — they lead to healthier eating choices, better physical well-being, and reduced food expenses, making them a simple but valuable habit to develop.',
    },
  },
];

// ─── TRAVEL & ADVENTURE ─────────────────────────────────────────────
const travelCards = makeCards([
  { emoji: '✈️', scene: 'An airplane flying through the sky', vocab: { basic: ['fly', 'plane', 'trip'], intermediate: ['travel', 'flight', 'destination'], advanced: ['international travel', 'air transportation', 'journey abroad'] } },
  { emoji: '🗺️', scene: 'A map for navigation and exploration', vocab: { basic: ['map', 'find', 'go'], intermediate: ['navigate', 'explore', 'route'], advanced: ['geographical exploration', 'navigate unfamiliar terrain', 'itinerary planning'] } },
  { emoji: '📸', scene: 'A camera capturing memories', vocab: { basic: ['photo', 'camera', 'picture'], intermediate: ['capture memories', 'photography', 'document'], advanced: ['visual documentation', 'preserve memories', 'photographic record'] } },
  { emoji: '🏔️', scene: 'A mountain peak in the distance', vocab: { basic: ['mountain', 'high', 'climb'], intermediate: ['hiking', 'summit', 'adventure'], advanced: ['mountaineering', 'rugged terrain', 'breathtaking vista'] } },
  { emoji: '🌊', scene: 'Ocean waves on a beach', vocab: { basic: ['ocean', 'wave', 'beach'], intermediate: ['coastal', 'serene', 'tropical'], advanced: ['marine environment', 'coastal landscape', 'oceanic expanse'] } },
]);

const travelQuestions: TOEFLQuestion[] = [
  {
    id: 'travel-q1',
    questionText: 'Thank you for speaking with me about your travel habits. First, have your family or friends ever traveled to see a sporting event? For example, have they traveled to see a football game, basketball game, or other types of sports? Why or why not?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: travelCards,
      phraseFrames: [
        { emoji: '⚽', template: 'My family traveled to see _____ because _____', sentences: ['My family traveled to see a soccer match because we are big fans.', 'My family traveled to see the Olympics because it was a once-in-a-lifetime event.', 'My family traveled to see a basketball game because my brother loves the sport.'] },
        { emoji: '🎟️', template: 'Traveling for sports events is _____ because _____', sentences: ['Traveling for sports events is exciting because the atmosphere is electric.', 'Traveling for sports events is memorable because you share the experience with thousands.', 'Traveling for sports events is worth it because you see your favorite athletes live.'] },
        { emoji: '🏟️', template: 'The best part of attending a live game is _____', sentences: ['The best part of attending a live game is the energy of the crowd.', 'The best part of attending a live game is seeing the players up close.', 'The best part of attending a live game is cheering together with other fans.'] },
        { emoji: '🚗', template: 'Some people don\'t travel for sports because _____', sentences: ['Some people don\'t travel for sports because tickets and travel are expensive.', 'Some people don\'t travel for sports because they prefer watching on TV.', 'Some people don\'t travel for sports because they live too far from venues.'] },
      ],
      modelSentences: [
        { emoji: '✈️', scene: 'An airplane flying through the sky', sentences: ['My family once flew to another city to watch a professional soccer match.', 'Traveling by plane to see a sporting event felt like a real adventure.', 'We planned the entire trip around the game schedule.'] },
        { emoji: '🗺️', scene: 'A map for navigation and exploration', sentences: ['We explored the host city before and after the game.', 'Planning the route to the stadium was part of the excitement.', 'Sports travel gives you a reason to visit places you might never see otherwise.'] },
        { emoji: '📸', scene: 'A camera capturing memories', sentences: ['I took hundreds of photos at the stadium to remember the experience.', 'Photographing the atmosphere of a live game captures the excitement perfectly.', 'Those travel photos are still some of my favorite memories.'] },
        { emoji: '🏔️', scene: 'A mountain peak in the distance', sentences: ['Some sporting events take place in beautiful mountain settings.', 'Winter sports competitions in the mountains combine travel and excitement.', 'The scenery around the venue added to the overall experience.'] },
        { emoji: '🌊', scene: 'Ocean waves on a beach', sentences: ['We combined the sports trip with a beach vacation nearby.', 'Coastal cities often host major international sporting events.', 'After the game, we relaxed by the ocean for the rest of the trip.'] },
      ],
      transitionWords: ['Yes, actually', 'In fact', 'What made it special', 'Beyond the game', 'Looking back'],
      openingStatement: 'My family has traveled to see sporting events, and those trips created some of our best memories.',
      closingStatement: 'Traveling for sports is about more than the game — it brings families together and creates lasting experiences.',
      fullModelResponse: 'My family has traveled to see sporting events, and those trips created some of our best memories. Yes, actually, two years ago we flew to Beijing to watch a professional basketball game. In fact, it was the first time my father and I attended a live game together, which made it even more special. What made it special was the incredible energy of the crowd — thousands of fans cheering together created an unforgettable atmosphere. Beyond the game itself, we explored the city, tried local food, and took photos at famous landmarks. Looking back, that trip strengthened my bond with my family and gave us stories we still talk about today. I believe traveling for sporting events is a wonderful way to combine adventure, family bonding, and shared passion.',
    },
  },
  {
    id: 'travel-q2',
    questionText: 'I see. When you travel, do you prefer to plan the details of your trip in advance, or do you prefer to be spontaneous and explore your destination without sticking to a plan? Why?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: travelCards,
      phraseFrames: [
        { emoji: '📋', template: 'I prefer to _____ my trips because _____', sentences: ['I prefer to plan my trips because it reduces stress and saves time.', 'I prefer to be spontaneous because unexpected discoveries are the best.', 'I prefer a mix of planning and spontaneity because it offers balance.'] },
        { emoji: '🎲', template: 'Being spontaneous while traveling means _____', sentences: ['Being spontaneous while traveling means you can follow your mood.', 'Being spontaneous while traveling means you discover hidden gems.', 'Being spontaneous while traveling means every day is a surprise.'] },
        { emoji: '📅', template: 'Planning ahead helps because _____', sentences: ['Planning ahead helps because you don\'t miss must-see attractions.', 'Planning ahead helps because you can budget your money better.', 'Planning ahead helps because popular places require reservations.'] },
        { emoji: '⚖️', template: 'The ideal approach is _____', sentences: ['The ideal approach is planning the big things and leaving room for surprises.', 'The ideal approach is having a rough outline but staying flexible.', 'The ideal approach is researching the destination but not scheduling every hour.'] },
      ],
      modelSentences: [
        { emoji: '✈️', scene: 'An airplane flying through the sky', sentences: ['I always book flights and hotels in advance to get better prices.', 'Planning transportation saves money and reduces travel stress.', 'Having confirmed reservations gives me peace of mind.'] },
        { emoji: '🗺️', scene: 'A map for navigation and exploration', sentences: ['I like to study the map of a new city before I arrive.', 'Knowing the general layout helps me navigate more confidently.', 'I mark interesting places on my map but don\'t force a strict schedule.'] },
        { emoji: '📸', scene: 'A camera capturing memories', sentences: ['Some of my best photos came from unplanned detours and discoveries.', 'Spontaneous moments often create the most memorable photographs.', 'I capture both planned attractions and unexpected finds.'] },
        { emoji: '🏔️', scene: 'A mountain peak in the distance', sentences: ['Hiking trips definitely need advance planning for safety reasons.', 'I research trails and weather conditions before any mountain trip.', 'Even adventurous activities require basic preparation.'] },
        { emoji: '🌊', scene: 'Ocean waves on a beach', sentences: ['Beach vacations are perfect for spontaneous, relaxed exploration.', 'I don\'t need a schedule when I\'m just enjoying the ocean.', 'Some destinations are best enjoyed without a rigid itinerary.'] },
      ],
      transitionWords: ['Personally', 'The reason is', 'At the same time', 'For example', 'In the end'],
      openingStatement: 'I prefer a balanced approach — planning the essentials while leaving room for spontaneity.',
      closingStatement: 'The best trips have a solid foundation of planning with plenty of space for unexpected adventures.',
      fullModelResponse: 'I prefer a balanced approach — planning the essentials while leaving room for spontaneity. Personally, I think having a basic plan is important because it ensures you don\'t miss key experiences. The reason is that popular restaurants and attractions often require advance reservations. At the same time, I believe some of the best travel memories come from unplanned moments — a random street market, a local\'s recommendation, or a scenic detour. For example, on my last trip, I had planned visits to major landmarks, but my favorite memory was discovering a tiny café that a local taxi driver suggested. In the end, I think the key is to plan enough to feel prepared but stay open enough to embrace surprises. That balance creates the most rewarding travel experiences.',
    },
  },
  {
    id: 'travel-q3',
    questionText: 'Interesting. Next I\'d like to get your opinion. In recent years, there has been a trend towards eco-friendly travel where people try to minimize their environmental impact while traveling like using public transportation instead of taking a taxi. Do you think that in the future more people will adopt eco-friendly travel habits? Why or why not?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: travelCards,
      phraseFrames: [
        { emoji: '🌿', template: 'Eco-friendly travel includes _____', sentences: ['Eco-friendly travel includes using public transportation instead of taxis.', 'Eco-friendly travel includes staying at environmentally conscious hotels.', 'Eco-friendly travel includes reducing plastic waste while on trips.'] },
        { emoji: '🚆', template: 'More people will travel green because _____', sentences: ['More people will travel green because awareness of climate change is growing.', 'More people will travel green because eco-friendly options are becoming cheaper.', 'More people will travel green because younger generations care about the environment.'] },
        { emoji: '💰', template: 'However, eco-friendly travel can be difficult because _____', sentences: ['However, eco-friendly travel can be difficult because it is sometimes less convenient.', 'However, eco-friendly travel can be difficult because green options cost more in some places.', 'However, eco-friendly travel can be difficult because infrastructure is limited in some countries.'] },
        { emoji: '🔮', template: 'In the future, I expect _____', sentences: ['In the future, I expect electric transportation to make green travel easier.', 'In the future, I expect governments to offer incentives for eco-friendly tourism.', 'In the future, I expect travelers to demand more sustainable options.'] },
      ],
      modelSentences: [
        { emoji: '✈️', scene: 'An airplane flying through the sky', sentences: ['Air travel is one of the biggest contributors to carbon emissions.', 'Airlines are investing in more fuel-efficient aircraft for the future.', 'Some travelers choose trains over planes for shorter distances.'] },
        { emoji: '🗺️', scene: 'A map for navigation and exploration', sentences: ['Eco-conscious travelers plan routes that minimize their carbon footprint.', 'Choosing local destinations reduces the environmental cost of travel.', 'Digital maps help travelers find public transportation options easily.'] },
        { emoji: '📸', scene: 'A camera capturing memories', sentences: ['Eco-tourism destinations attract visitors who appreciate nature.', 'Photographing beautiful natural places reminds us why we should protect them.', 'Sustainable travel helps preserve the places we love to visit.'] },
        { emoji: '🏔️', scene: 'A mountain peak in the distance', sentences: ['Mountain ecosystems are fragile and need responsible tourism practices.', 'Hikers are increasingly following leave-no-trace principles.', 'National parks have introduced limits to protect natural environments.'] },
        { emoji: '🌊', scene: 'Ocean waves on a beach', sentences: ['Beach cleanups have become a common part of coastal tourism.', 'Ocean pollution from tourism is a growing concern worldwide.', 'Responsible beach tourism protects marine life and coastal beauty.'] },
      ],
      transitionWords: ['I think so', 'One reason is', 'Additionally', 'Of course', 'All things considered'],
      openingStatement: 'I believe eco-friendly travel will become much more common in the future.',
      closingStatement: 'As awareness grows and green options improve, sustainable travel will become the norm rather than the exception.',
      fullModelResponse: 'I believe eco-friendly travel will become much more common in the future. I think so because environmental awareness is increasing rapidly, especially among younger generations. One reason is that people are becoming more educated about how their travel choices affect the planet — from carbon emissions to plastic waste. Additionally, governments and companies are investing in green infrastructure like electric buses, high-speed trains, and eco-friendly hotels, which makes sustainable travel more accessible. Of course, there are still challenges — eco-friendly options can be less convenient or more expensive in some areas. All things considered, however, I am optimistic that as technology improves and prices decrease, more people will naturally choose eco-friendly travel options because it will be both the responsible and the practical choice.',
    },
  },
  {
    id: 'travel-q4',
    questionText: 'Good points. I just have one more question. Some people believe that traveling is essential for building confidence and independence. Do you agree with this idea? Or do you think there are other ways to develop these qualities? Explain why you think so.',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: travelCards,
      phraseFrames: [
        { emoji: '💪', template: 'Travel builds confidence because _____', sentences: ['Travel builds confidence because you learn to handle unexpected situations.', 'Travel builds confidence because you navigate unfamiliar environments.', 'Travel builds confidence because you interact with strangers from different cultures.'] },
        { emoji: '🧭', template: 'Traveling independently teaches you _____', sentences: ['Traveling independently teaches you problem-solving skills.', 'Traveling independently teaches you to rely on yourself.', 'Traveling independently teaches you to adapt to new situations quickly.'] },
        { emoji: '🏠', template: 'Other ways to build confidence include _____', sentences: ['Other ways to build confidence include taking on leadership roles at school.', 'Other ways to build confidence include learning a new skill or language.', 'Other ways to build confidence include volunteering in your community.'] },
        { emoji: '🌟', template: 'The most important thing is _____', sentences: ['The most important thing is stepping outside your comfort zone regularly.', 'The most important thing is facing challenges and learning from them.', 'The most important thing is trying new things regardless of the specific activity.'] },
      ],
      modelSentences: [
        { emoji: '✈️', scene: 'An airplane flying through the sky', sentences: ['My first solo flight was terrifying but it made me much more independent.', 'Navigating airports alone taught me to trust my own judgment.', 'Traveling to a new country forced me to become more self-reliant.'] },
        { emoji: '🗺️', scene: 'A map for navigation and exploration', sentences: ['Finding my way in a foreign city boosted my confidence enormously.', 'Getting lost and finding my way back taught me problem-solving.', 'Reading maps and asking for directions in another language was challenging but rewarding.'] },
        { emoji: '📸', scene: 'A camera capturing memories', sentences: ['Documenting my solo travel journey showed me how much I had grown.', 'Looking at old travel photos reminds me of challenges I overcame.', 'Each trip represents a step in my personal development.'] },
        { emoji: '🏔️', scene: 'A mountain peak in the distance', sentences: ['Climbing a mountain alone was the ultimate test of my independence.', 'Reaching the summit gave me confidence I could achieve anything.', 'Outdoor adventures push you to discover inner strength you didn\'t know you had.'] },
        { emoji: '🌊', scene: 'Ocean waves on a beach', sentences: ['Swimming in the open ocean taught me to face my fears.', 'Travel puts you in situations that challenge your comfort zone.', 'Every new experience abroad makes you a stronger, more confident person.'] },
      ],
      transitionWords: ['I mostly agree', 'For one', 'In addition', 'However', 'To wrap up'],
      openingStatement: 'I agree that travel is excellent for building confidence, but it is not the only path to independence.',
      closingStatement: 'Any experience that pushes you beyond your comfort zone — whether travel or otherwise — helps build confidence and independence.',
      fullModelResponse: 'I agree that travel is excellent for building confidence, but it is not the only path to independence. I mostly agree because traveling forces you to solve problems, make decisions, and navigate unfamiliar situations on your own. For one, when you travel alone, you must communicate with strangers, find your way in new cities, and handle unexpected challenges. In addition, experiencing different cultures broadens your perspective and makes you more adaptable. However, I also believe there are other effective ways to develop these qualities. For example, taking on leadership roles, learning new skills, or even living independently for the first time all build similar confidence. To wrap up, while travel is one of the most powerful ways to develop independence, the key is consistently stepping outside your comfort zone in any area of life.',
    },
  },
];
const friendsCards = makeCards([
  { emoji: '👫', scene: 'Two friends walking together', vocab: { basic: ['friend', 'together', 'happy'], intermediate: ['friendship', 'companion', 'bond'], advanced: ['social connection', 'interpersonal relationship', 'meaningful bond'] } },
  { emoji: '🎉', scene: 'A party or celebration', vocab: { basic: ['party', 'fun', 'celebrate'], intermediate: ['gathering', 'event', 'occasion'], advanced: ['social gathering', 'celebratory event', 'festive occasion'] } },
  { emoji: '🎮', scene: 'A game controller for video gaming', vocab: { basic: ['game', 'play', 'fun'], intermediate: ['video game', 'online gaming', 'entertainment'], advanced: ['interactive entertainment', 'competitive gaming', 'virtual recreation'] } },
  { emoji: '💬', scene: 'Chat bubbles representing conversation', vocab: { basic: ['talk', 'chat', 'message'], intermediate: ['conversation', 'communicate', 'discuss'], advanced: ['meaningful dialogue', 'interpersonal communication', 'discourse'] } },
  { emoji: '🏠', scene: 'A home where friends gather', vocab: { basic: ['home', 'house', 'visit'], intermediate: ['hangout', 'host', 'gathering'], advanced: ['social environment', 'communal space', 'welcoming atmosphere'] } },
]);

const friendsQuestions: TOEFLQuestion[] = [
  {
    id: 'friends-q1',
    questionText: 'Thank you for speaking with me. I\'d like to ask about your social life. How do you usually spend time with your friends? For example, do you prefer going out, staying in, or doing activities together?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: friendsCards,
      phraseFrames: [
        { emoji: '🏠', template: 'My friends and I usually _____ together', sentences: ['My friends and I usually hang out at home together.', 'My friends and I usually play video games together.', 'My friends and I usually go to cafés together.'] },
        { emoji: '🎮', template: 'Our favorite activity is _____ because _____', sentences: ['Our favorite activity is playing games because it is competitive and fun.', 'Our favorite activity is watching movies because we all love films.', 'Our favorite activity is cooking together because we enjoy eating.'] },
        { emoji: '🎉', template: 'On special occasions, we like to _____', sentences: ['On special occasions, we like to throw a party at someone\'s house.', 'On special occasions, we like to go out for dinner together.', 'On special occasions, we like to plan a day trip somewhere new.'] },
        { emoji: '💬', template: 'What I value most about hanging out is _____', sentences: ['What I value most about hanging out is the deep conversations we have.', 'What I value most about hanging out is laughing and being ourselves.', 'What I value most about hanging out is the sense of belonging.'] },
      ],
      modelSentences: [
        { emoji: '👫', scene: 'Two friends walking together', sentences: ['Having good friends is one of the most important parts of my life.', 'I spend most of my free time with my two closest friends.', 'Walking and talking with friends is simple but deeply satisfying.'] },
        { emoji: '🎉', scene: 'A party or celebration', sentences: ['My friends and I love celebrating special occasions together.', 'Birthday parties at home are always the most fun and memorable.', 'We don\'t need expensive plans — just being together is enough.'] },
        { emoji: '🎮', scene: 'A game controller for video gaming', sentences: ['We often spend evenings playing video games and relaxing.', 'Gaming together online keeps us connected even when we\'re apart.', 'Friendly competition in games brings out the best in our group.'] },
        { emoji: '💬', scene: 'Chat bubbles representing conversation', sentences: ['Meaningful conversations help deepen our friendship.', 'We talk about everything from school to our future dreams.', 'Good friends are the ones you can talk to about anything.'] },
        { emoji: '🏠', scene: 'A home where friends gather', sentences: ['Hanging out at someone\'s home is my favorite way to spend time.', 'My house has become the regular meeting spot for our friend group.', 'A cozy home environment makes our gatherings feel special.'] },
      ],
      transitionWords: ['Usually', 'For example', 'In addition', 'What I enjoy most', 'Overall'],
      openingStatement: 'I love spending time with my friends, and we have many ways we enjoy hanging out together.',
      closingStatement: 'The activity matters less than the company — being with good friends is always the best part.',
      fullModelResponse: 'I love spending time with my friends, and we have many ways we enjoy hanging out together. Usually, we prefer staying in at someone\'s house rather than going out because it is more relaxed and affordable. For example, we often play video games, watch movies, or just cook a meal together on weekend evenings. In addition, we enjoy having deep conversations about our goals, school life, and interests. What I enjoy most is that we can be completely ourselves around each other without any pressure. We also celebrate birthdays and holidays together, which creates wonderful memories. Overall, I think the specific activity matters less than the quality of time we spend together — true friendship is about being comfortable and having fun in each other\'s company.',
    },
  },
  {
    id: 'friends-q2',
    questionText: 'I see. Do you think it is better to have a few close friends or many casual friends? Why?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: friendsCards,
      phraseFrames: [
        { emoji: '❤️', template: 'Close friends are better because _____', sentences: ['Close friends are better because they truly understand you.', 'Close friends are better because you can trust them completely.', 'Close friends are better because the bond is deeper and more meaningful.'] },
        { emoji: '👥', template: 'Having many friends is good because _____', sentences: ['Having many friends is good because you have a wider social network.', 'Having many friends is good because you can learn from different people.', 'Having many friends is good because you always have someone to hang out with.'] },
        { emoji: '🤝', template: 'A true friend is someone who _____', sentences: ['A true friend is someone who supports you during difficult times.', 'A true friend is someone who accepts you as you are.', 'A true friend is someone who is honest even when it is hard.'] },
        { emoji: '⚖️', template: 'I think the best approach is _____', sentences: ['I think the best approach is having a small circle you can rely on.', 'I think the best approach is quality over quantity in friendships.', 'I think the best approach is being open to new people but investing deeply in a few.'] },
      ],
      modelSentences: [
        { emoji: '👫', scene: 'Two friends walking together', sentences: ['I have two best friends I have known since elementary school.', 'Our friendship has lasted because we invest time in each other.', 'Close friendships require effort but the rewards are immense.'] },
        { emoji: '🎉', scene: 'A party or celebration', sentences: ['Small celebrations with close friends feel more special than big parties.', 'I prefer intimate gatherings where everyone knows each other well.', 'The best memories come from quality time with people who matter.'] },
        { emoji: '🎮', scene: 'A game controller for video gaming', sentences: ['I prefer gaming with my close friends because we know each other\'s style.', 'Shared interests strengthen the bond between close friends.', 'We have years of inside jokes from playing games together.'] },
        { emoji: '💬', scene: 'Chat bubbles representing conversation', sentences: ['You can only have truly deep conversations with close friends.', 'I share my problems and fears only with people I trust completely.', 'Casual friends rarely know what you are really thinking or feeling.'] },
        { emoji: '🏠', scene: 'A home where friends gather', sentences: ['Only close friends are invited to my home for hangouts.', 'Opening your home to someone shows a high level of trust.', 'My home is where my closest friendships are nurtured.'] },
      ],
      transitionWords: ['I strongly believe', 'The main reason', 'Furthermore', 'Of course', 'In conclusion'],
      openingStatement: 'I believe having a few close friends is more valuable than having many casual acquaintances.',
      closingStatement: 'Quality friendships bring deeper happiness, trust, and support than a large number of surface-level connections.',
      fullModelResponse: 'I believe having a few close friends is more valuable than having many casual acquaintances. I strongly believe this because deep friendships provide emotional support that casual ones simply cannot. The main reason is that close friends truly understand you — they know your strengths, weaknesses, and dreams, and they support you through both good and bad times. Furthermore, maintaining many friendships is exhausting and often leads to shallow relationships where nobody really knows you well. Of course, being friendly and open to new people is important, but I think investing deeply in a few relationships is more rewarding. In conclusion, I prefer quality over quantity in friendships because a small group of trusted friends brings more genuine happiness and support than a large network of casual acquaintances.',
    },
  },
  {
    id: 'friends-q3',
    questionText: 'Interesting. With social media and messaging apps, some people say that young people today have weaker friendships than in the past. Do you agree or disagree? Why?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: friendsCards,
      phraseFrames: [
        { emoji: '📱', template: 'Social media has changed friendships by _____', sentences: ['Social media has changed friendships by making communication instant.', 'Social media has changed friendships by replacing face-to-face interaction.', 'Social media has changed friendships by creating new ways to connect.'] },
        { emoji: '👎', template: 'Online friendships can be weaker because _____', sentences: ['Online friendships can be weaker because they lack physical presence.', 'Online friendships can be weaker because communication is often superficial.', 'Online friendships can be weaker because people present a fake image online.'] },
        { emoji: '👍', template: 'Technology strengthens friendships by _____', sentences: ['Technology strengthens friendships by keeping people connected across distances.', 'Technology strengthens friendships by making it easy to share daily moments.', 'Technology strengthens friendships by enabling group chats and video calls.'] },
        { emoji: '🤔', template: 'The real issue is _____', sentences: ['The real issue is how we use technology, not technology itself.', 'The real issue is that people substitute online interaction for real connection.', 'The real issue is finding a balance between digital and in-person socializing.'] },
      ],
      modelSentences: [
        { emoji: '👫', scene: 'Two friends walking together', sentences: ['My closest friendships are maintained through both online and in-person interaction.', 'Nothing can fully replace spending time together face-to-face.', 'The strongest friendships I know include regular real-world contact.'] },
        { emoji: '🎉', scene: 'A party or celebration', sentences: ['We plan our get-togethers through group chats, which actually helps.', 'Social media helps us organize events more easily than before.', 'Technology can enhance social life when used as a planning tool.'] },
        { emoji: '🎮', scene: 'A game controller for video gaming', sentences: ['Online gaming lets me bond with friends I can\'t see in person often.', 'Multiplayer games create shared experiences despite physical distance.', 'Some of my friendships were strengthened through online gaming.'] },
        { emoji: '💬', scene: 'Chat bubbles representing conversation', sentences: ['Messaging apps let me stay in touch with friends who moved away.', 'Quick daily messages keep friendships alive between meetups.', 'However, text messages cannot convey emotions as well as real conversation.'] },
        { emoji: '🏠', scene: 'A home where friends gather', sentences: ['The best friendships still involve meeting at each other\'s homes.', 'In-person visits create memories that texting never can.', 'I make sure to see my friends in person regularly, not just online.'] },
      ],
      transitionWords: ['I partially disagree', 'While it\'s true', 'On the positive side', 'The key is', 'Therefore'],
      openingStatement: 'I partially disagree — I think technology has changed friendships but not necessarily weakened them.',
      closingStatement: 'Friendships today are different, not necessarily weaker, as long as people maintain real-world connections too.',
      fullModelResponse: 'I partially disagree — I think technology has changed friendships but not necessarily weakened them. While it\'s true that some young people rely too heavily on social media for social interaction, which can feel shallow, technology also provides powerful tools for maintaining friendships. On the positive side, messaging apps let us stay connected with friends daily, and video calls bridge geographical distances. I can maintain friendships with people who moved to other cities because of technology. The key is balance — using technology to complement real-world relationships rather than replace them. For example, my friends and I text every day, but we also make sure to meet in person at least once a week. Therefore, I believe that friendships today are simply different from the past — and they can be just as strong if people prioritize genuine, face-to-face connection alongside digital communication.',
    },
  },
  {
    id: 'friends-q4',
    questionText: 'Good points. One more question. Some people believe that having friends from different backgrounds and cultures makes you a better person. Do you agree? Explain your answer.',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: friendsCards,
      phraseFrames: [
        { emoji: '🌍', template: 'Diverse friendships help you _____', sentences: ['Diverse friendships help you understand different perspectives.', 'Diverse friendships help you become more open-minded and tolerant.', 'Diverse friendships help you learn about other cultures firsthand.'] },
        { emoji: '🧠', template: 'Meeting people from different backgrounds teaches _____', sentences: ['Meeting people from different backgrounds teaches you to appreciate differences.', 'Meeting people from different backgrounds teaches you about the wider world.', 'Meeting people from different backgrounds teaches you to challenge your assumptions.'] },
        { emoji: '❤️', template: 'I have learned _____ from friends of different cultures', sentences: ['I have learned new ways of thinking from friends of different cultures.', 'I have learned about delicious food from friends of different cultures.', 'I have learned to be more empathetic from friends of different cultures.'] },
        { emoji: '🤝', template: 'Cross-cultural friendship is important because _____', sentences: ['Cross-cultural friendship is important because it breaks down stereotypes.', 'Cross-cultural friendship is important because it builds empathy and respect.', 'Cross-cultural friendship is important because the world is increasingly connected.'] },
      ],
      modelSentences: [
        { emoji: '👫', scene: 'Two friends walking together', sentences: ['My friend group includes people from several different cultural backgrounds.', 'Having diverse friends has broadened my perspective on life.', 'I value the unique viewpoints that each of my friends brings.'] },
        { emoji: '🎉', scene: 'A party or celebration', sentences: ['We celebrate each other\'s cultural holidays and learn new traditions.', 'Our multicultural gatherings are always full of interesting food and stories.', 'Learning about different celebrations has enriched my understanding of the world.'] },
        { emoji: '🎮', scene: 'A game controller for video gaming', sentences: ['Online gaming introduced me to friends from countries I have never visited.', 'Playing with international friends improved my English and cultural awareness.', 'Shared hobbies connect people regardless of their background.'] },
        { emoji: '💬', scene: 'Chat bubbles representing conversation', sentences: ['Conversations with diverse friends challenge me to think differently.', 'I have reconsidered many of my assumptions thanks to these discussions.', 'Different perspectives lead to richer and more interesting conversations.'] },
        { emoji: '🏠', scene: 'A home where friends gather', sentences: ['Hosting friends from different backgrounds makes my home feel more global.', 'Sharing meals from different cultures is a wonderful bonding experience.', 'My home has become a place where different cultures come together.'] },
      ],
      transitionWords: ['I completely agree', 'First', 'Moreover', 'For instance', 'In summary'],
      openingStatement: 'I strongly agree that having friends from diverse backgrounds makes you a better and more well-rounded person.',
      closingStatement: 'Diverse friendships expand your worldview and help you become a more empathetic, understanding individual.',
      fullModelResponse: 'I strongly agree that having friends from diverse backgrounds makes you a better and more well-rounded person. I completely agree because exposure to different cultures and perspectives is one of the best ways to grow as a human being. First, diverse friendships challenge your assumptions and help you see the world from viewpoints you would never consider on your own. Moreover, learning about different traditions, values, and ways of life develops empathy and tolerance — qualities that are essential in our increasingly connected world. For instance, my friend from another country introduced me to completely different approaches to family, education, and social life, which changed how I think about my own culture. In summary, diverse friendships are invaluable because they break down stereotypes, foster mutual respect, and ultimately make us more compassionate and open-minded people.',
    },
  },
];

// ─── ENVIRONMENT & NATURE ────────────────────────────────────────────
const environmentCards = makeCards([
  { emoji: '🌳', scene: 'A tall tree in a green park', vocab: { basic: ['tree', 'park', 'green'], intermediate: ['nature', 'environment', 'ecosystem'], advanced: ['biodiversity', 'sustainable habitat', 'ecological balance'] } },
  { emoji: '🏭', scene: 'A factory releasing smoke', vocab: { basic: ['factory', 'smoke', 'dirty'], intermediate: ['pollution', 'emission', 'industrial'], advanced: ['carbon footprint', 'environmental degradation', 'greenhouse gases'] } },
  { emoji: '♻️', scene: 'A recycling symbol on a bin', vocab: { basic: ['recycle', 'trash', 'clean'], intermediate: ['waste reduction', 'reuse', 'conservation'], advanced: ['sustainable practice', 'circular economy', 'environmental stewardship'] } },
  { emoji: '🌊', scene: 'Ocean waves on a beach', vocab: { basic: ['water', 'ocean', 'beach'], intermediate: ['marine life', 'coastal', 'tide'], advanced: ['marine ecosystem', 'oceanic preservation', 'aquatic biodiversity'] } },
  { emoji: '☀️', scene: 'Bright sun and solar panels', vocab: { basic: ['sun', 'hot', 'light'], intermediate: ['solar energy', 'renewable', 'climate'], advanced: ['renewable energy source', 'climate mitigation', 'sustainable infrastructure'] } },
]);

const environmentQuestions: TOEFLQuestion[] = [
  {
    id: 'environment-q1',
    questionText: 'Thank you for joining me. I\'d like to discuss the environment with you. What do you think is the biggest environmental problem in your area? For example, air pollution, water pollution, or deforestation?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: environmentCards,
      phraseFrames: [
        { emoji: '🏭', template: 'The biggest environmental problem in my area is _____', sentences: ['The biggest environmental problem in my area is air pollution from factories.', 'The biggest environmental problem in my area is plastic waste in rivers.', 'The biggest environmental problem in my area is deforestation for construction.'] },
        { emoji: '🌳', template: 'This problem affects _____ because _____', sentences: ['This problem affects our health because the air quality is very poor.', 'This problem affects wildlife because their habitat is being destroyed.', 'This problem affects our water supply because rivers are contaminated.'] },
        { emoji: '♻️', template: 'One way to help is _____', sentences: ['One way to help is to reduce our use of plastic bags.', 'One way to help is to plant more trees in urban areas.', 'One way to help is to use public transportation more often.'] },
        { emoji: '☀️', template: 'If we don\'t act now, _____', sentences: ['If we don\'t act now, the pollution will get much worse.', 'If we don\'t act now, many species could disappear.', 'If we don\'t act now, future generations will suffer the consequences.'] },
      ],
      modelSentences: [
        { emoji: '🌳', scene: 'A tall tree in a green park', sentences: ['Our city used to have many beautiful parks with tall trees.', 'Unfortunately, many green areas have been replaced by buildings.', 'Protecting our remaining natural spaces is extremely important.'] },
        { emoji: '🏭', scene: 'A factory releasing smoke', sentences: ['Several factories near my city release harmful smoke every day.', 'Air pollution has become a serious health concern for local residents.', 'Stricter regulations on factory emissions are urgently needed.'] },
        { emoji: '♻️', scene: 'A recycling symbol on a bin', sentences: ['Recycling programs in my area have made a positive difference.', 'More people are separating their trash and reusing materials.', 'Small actions like recycling add up to significant environmental impact.'] },
        { emoji: '🌊', scene: 'Ocean waves on a beach', sentences: ['Our local beaches have suffered from plastic pollution.', 'Community cleanup events have helped restore some coastal areas.', 'Protecting our oceans is essential for the health of the planet.'] },
        { emoji: '☀️', scene: 'Bright sun and solar panels', sentences: ['Solar panels are becoming more common on rooftops in my neighborhood.', 'Switching to renewable energy can reduce pollution significantly.', 'I believe clean energy is the key to a healthier environment.'] },
      ],
      transitionWords: ['In my opinion', 'The main issue', 'As a result', 'For example', 'To sum up'],
      openingStatement: 'I believe air pollution from factories is the most serious environmental problem in my area.',
      closingStatement: 'By taking both individual and collective action, we can significantly improve the environmental situation in our community.',
      fullModelResponse: 'I believe air pollution from factories is the most serious environmental problem in my area. In my opinion, this issue has gotten worse over the past few years as more industrial facilities have been built nearby. The main issue is that these factories release harmful gases into the air, which affects the health of everyone in the community. As a result, many people suffer from respiratory problems, and the sky is often hazy. For example, my grandmother developed breathing difficulties that her doctor linked to poor air quality. However, there are some positive changes happening — more solar panels are appearing on buildings, and recycling programs are growing. To sum up, while air pollution remains our biggest challenge, I am hopeful that increased awareness and cleaner energy solutions will help improve the situation.',
    },
  },
  {
    id: 'environment-q2',
    questionText: 'I see. Do you think individuals or governments are more responsible for protecting the environment? Why?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: environmentCards,
      phraseFrames: [
        { emoji: '🏛️', template: 'Governments should _____ because _____', sentences: ['Governments should pass stricter laws because companies won\'t change voluntarily.', 'Governments should invest in clean energy because it requires large-scale funding.', 'Governments should educate the public because awareness drives change.'] },
        { emoji: '🧑', template: 'Individuals can make a difference by _____', sentences: ['Individuals can make a difference by reducing their energy consumption.', 'Individuals can make a difference by choosing eco-friendly products.', 'Individuals can make a difference by spreading environmental awareness.'] },
        { emoji: '🤝', template: 'Both sides need to _____ because _____', sentences: ['Both sides need to cooperate because environmental problems are too big for one group alone.', 'Both sides need to take responsibility because the planet belongs to everyone.', 'Both sides need to act quickly because climate change is accelerating.'] },
        { emoji: '⚖️', template: 'The most effective approach is _____', sentences: ['The most effective approach is combining government policy with individual action.', 'The most effective approach is holding corporations accountable through regulations.', 'The most effective approach is creating incentives for sustainable behavior.'] },
      ],
      modelSentences: [
        { emoji: '🌳', scene: 'A tall tree in a green park', sentences: ['I plant trees in my neighborhood whenever I can.', 'Individual efforts like gardening contribute to a greener environment.', 'Small personal actions create a culture of environmental care.'] },
        { emoji: '🏭', scene: 'A factory releasing smoke', sentences: ['Only governments have the power to regulate factory emissions.', 'Without legal enforcement, many companies will continue polluting.', 'Government regulations have successfully reduced pollution in many countries.'] },
        { emoji: '♻️', scene: 'A recycling symbol on a bin', sentences: ['I recycle every day, but government infrastructure makes it possible.', 'Recycling programs require both citizen participation and government funding.', 'This is a perfect example of individual and government cooperation.'] },
        { emoji: '🌊', scene: 'Ocean waves on a beach', sentences: ['Government bans on single-use plastics have reduced ocean pollution.', 'Individuals choosing reusable bags and bottles also helps significantly.', 'Cleaning up our oceans requires effort from everyone in society.'] },
        { emoji: '☀️', scene: 'Bright sun and solar panels', sentences: ['Government subsidies make solar panels affordable for families.', 'Individuals choosing solar energy drive demand for clean technology.', 'The transition to renewable energy needs both policy support and personal commitment.'] },
      ],
      transitionWords: ['I believe', 'On one hand', 'On the other hand', 'That said', 'Ultimately'],
      openingStatement: 'I believe both individuals and governments share responsibility, but governments have a greater role to play.',
      closingStatement: 'Real environmental progress requires government leadership supported by responsible individual choices.',
      fullModelResponse: 'I believe both individuals and governments share responsibility, but governments have a greater role to play. On one hand, individuals can contribute by recycling, conserving energy, and making eco-friendly choices in their daily lives. These small actions do add up and create a culture of environmental awareness. On the other hand, governments have the power to create and enforce laws that regulate pollution, fund renewable energy projects, and hold corporations accountable. That said, even the best government policies will fail without public support and participation. For example, recycling programs need both government investment in infrastructure and individual willingness to sort waste properly. Ultimately, protecting the environment is a shared responsibility, but I think governments must lead by setting ambitious policies and creating the conditions that make sustainable living easier for everyone.',
    },
  },
  {
    id: 'environment-q3',
    questionText: 'Interesting. Some universities now require all students to take an environmental science course. Do you think this is a good idea? Why or why not?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: environmentCards,
      phraseFrames: [
        { emoji: '📚', template: 'Requiring environmental courses is good because _____', sentences: ['Requiring environmental courses is good because every student should understand these issues.', 'Requiring environmental courses is good because it creates more informed citizens.', 'Requiring environmental courses is good because the environment affects all career fields.'] },
        { emoji: '🤔', template: 'Some might argue against it because _____', sentences: ['Some might argue against it because students should choose their own courses.', 'Some might argue against it because it takes time from major-specific studies.', 'Some might argue against it because not everyone is interested in science.'] },
        { emoji: '🌍', template: 'Understanding the environment helps students _____', sentences: ['Understanding the environment helps students make better decisions as consumers.', 'Understanding the environment helps students become responsible community members.', 'Understanding the environment helps students in many unexpected career paths.'] },
        { emoji: '💡', template: 'A better approach might be _____', sentences: ['A better approach might be integrating environmental topics into existing courses.', 'A better approach might be offering engaging workshops instead of formal classes.', 'A better approach might be making it a required course only in the first year.'] },
      ],
      modelSentences: [
        { emoji: '🌳', scene: 'A tall tree in a green park', sentences: ['Learning about ecosystems helped me appreciate the nature around me.', 'Environmental education changes how people interact with natural spaces.', 'Students who learn about nature are more likely to protect it.'] },
        { emoji: '🏭', scene: 'A factory releasing smoke', sentences: ['Understanding pollution sources helps students make informed career choices.', 'Environmental courses teach critical thinking about industrial practices.', 'Future business leaders need to understand their environmental impact.'] },
        { emoji: '♻️', scene: 'A recycling symbol on a bin', sentences: ['Environmental courses teach practical skills like waste reduction.', 'Students learn actionable habits they can apply immediately.', 'Education is the foundation of lasting environmental change.'] },
        { emoji: '🌊', scene: 'Ocean waves on a beach', sentences: ['Many students don\'t realize how their choices affect oceans and rivers.', 'Environmental science reveals the hidden connections in our world.', 'This knowledge is relevant regardless of your major or career.'] },
        { emoji: '☀️', scene: 'Bright sun and solar panels', sentences: ['Clean energy topics inspire innovation and entrepreneurship among students.', 'Environmental courses can spark interest in sustainable technology careers.', 'Understanding energy systems is valuable knowledge for any educated person.'] },
      ],
      transitionWords: ['I strongly support', 'First of all', 'Additionally', 'While some disagree', 'In conclusion'],
      openingStatement: 'I think requiring an environmental science course for all university students is an excellent idea.',
      closingStatement: 'Environmental literacy is too important to be optional — it should be a fundamental part of every student\'s education.',
      fullModelResponse: 'I think requiring an environmental science course for all university students is an excellent idea. I strongly support this because environmental issues affect everyone, regardless of their major or career plans. First of all, understanding topics like pollution, climate change, and sustainability helps students become more responsible citizens who make better daily choices. Additionally, many industries now require environmental awareness — from business and engineering to healthcare and education. While some disagree, arguing that students should have complete freedom in course selection, I believe environmental literacy is as fundamental as writing or mathematics. The environmental challenges we face are so urgent that we cannot afford to have graduates who are uninformed about these issues. In conclusion, a required environmental course would create a generation of knowledgeable, responsible citizens prepared to address one of the greatest challenges of our time.',
    },
  },
  {
    id: 'environment-q4',
    questionText: 'Good points. Last question. Do you think technology will solve most environmental problems in the future, or do we need to change our lifestyles? Explain your reasoning.',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: environmentCards,
      phraseFrames: [
        { emoji: '🔬', template: 'Technology can help by _____', sentences: ['Technology can help by creating cleaner energy sources.', 'Technology can help by making recycling more efficient.', 'Technology can help by monitoring pollution levels in real time.'] },
        { emoji: '🚶', template: 'Changing our lifestyle means _____', sentences: ['Changing our lifestyle means consuming less and wasting less.', 'Changing our lifestyle means choosing public transport over private cars.', 'Changing our lifestyle means being more mindful of our environmental footprint.'] },
        { emoji: '⚖️', template: 'We need both because _____', sentences: ['We need both because technology alone cannot change human behavior.', 'We need both because lifestyle changes without technology are insufficient.', 'We need both because the problem is too complex for a single solution.'] },
        { emoji: '🔮', template: 'In the future, I think _____', sentences: ['In the future, I think we will rely on a combination of innovation and simpler living.', 'In the future, I think technology will make sustainable living much easier.', 'In the future, I think people will naturally adopt greener habits.'] },
      ],
      modelSentences: [
        { emoji: '🌳', scene: 'A tall tree in a green park', sentences: ['No technology can replace the value of preserving natural forests.', 'We need to protect existing nature while developing new solutions.', 'Lifestyle choices like reducing paper use directly protect trees.'] },
        { emoji: '🏭', scene: 'A factory releasing smoke', sentences: ['Cleaner technology can dramatically reduce factory emissions.', 'However, reducing overconsumption is equally important.', 'Technology and lifestyle changes must work together against pollution.'] },
        { emoji: '♻️', scene: 'A recycling symbol on a bin', sentences: ['Advanced recycling technology can recover materials more efficiently.', 'But choosing to buy less in the first place is even more effective.', 'The best approach combines smarter technology with conscious consumption.'] },
        { emoji: '🌊', scene: 'Ocean waves on a beach', sentences: ['Ocean cleanup technology shows promise but cannot keep up with new pollution.', 'Reducing plastic use at the source is essential.', 'Saving our oceans requires both innovation and personal responsibility.'] },
        { emoji: '☀️', scene: 'Bright sun and solar panels', sentences: ['Solar and wind technology can replace fossil fuels over time.', 'But we also need to reduce our overall energy consumption.', 'A sustainable future depends on both cleaner energy and simpler living.'] },
      ],
      transitionWords: ['I think', 'Certainly', 'However', 'At the same time', 'All things considered'],
      openingStatement: 'I believe we need both technological innovation and lifestyle changes to solve environmental problems.',
      closingStatement: 'The most realistic path forward combines the power of technology with a willingness to live more sustainably.',
      fullModelResponse: 'I believe we need both technological innovation and lifestyle changes to solve environmental problems. Certainly, technology offers incredible solutions — solar panels, electric vehicles, and advanced recycling systems are already making a difference. However, technology alone is not enough if we continue to overconsume and waste resources. At the same time, even dramatic lifestyle changes cannot fully solve problems like industrial pollution without technological alternatives. I think the key is finding the right balance. For example, we can use technology to create clean energy while also choosing to reduce unnecessary consumption. We can develop better recycling systems while also buying fewer disposable products. All things considered, I am optimistic about the future, but only if we pursue both paths simultaneously — investing in green technology while also embracing simpler, more sustainable ways of living.',
    },
  },
];

// ─── SCHOOL & EDUCATION ──────────────────────────────────────────────
const schoolCards = makeCards([
  { emoji: '🏫', scene: 'A school building with students', vocab: { basic: ['school', 'class', 'teacher'], intermediate: ['education', 'curriculum', 'instruction'], advanced: ['academic institution', 'pedagogical approach', 'educational framework'] } },
  { emoji: '📖', scene: 'An open textbook on a desk', vocab: { basic: ['book', 'read', 'study'], intermediate: ['textbook', 'knowledge', 'academic'], advanced: ['scholarly resource', 'intellectual development', 'educational material'] } },
  { emoji: '👩‍🏫', scene: 'A teacher explaining at a whiteboard', vocab: { basic: ['teacher', 'learn', 'help'], intermediate: ['instructor', 'mentor', 'guidance'], advanced: ['pedagogical expertise', 'academic mentorship', 'instructional leadership'] } },
  { emoji: '🎓', scene: 'A graduation cap and diploma', vocab: { basic: ['graduate', 'finish', 'proud'], intermediate: ['achievement', 'degree', 'milestone'], advanced: ['academic accomplishment', 'commencement', 'scholarly distinction'] } },
  { emoji: '💻', scene: 'A laptop used for online learning', vocab: { basic: ['computer', 'internet', 'online'], intermediate: ['e-learning', 'digital classroom', 'virtual'], advanced: ['distance education', 'digital literacy', 'technology-enhanced learning'] } },
]);

const schoolQuestions: TOEFLQuestion[] = [
  {
    id: 'school-q1',
    questionText: 'Thank you for being here. Let\'s talk about education. What is your favorite subject in school, and why do you enjoy it?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: schoolCards,
      phraseFrames: [
        { emoji: '⭐', template: 'My favorite subject is _____ because _____', sentences: ['My favorite subject is history because I love learning about the past.', 'My favorite subject is science because experiments are exciting.', 'My favorite subject is English because it helps me communicate globally.'] },
        { emoji: '👩‍🏫', template: 'My teacher makes it interesting by _____', sentences: ['My teacher makes it interesting by using real-world examples.', 'My teacher makes it interesting by encouraging class discussions.', 'My teacher makes it interesting by connecting lessons to current events.'] },
        { emoji: '📖', template: 'I have learned _____ from studying this subject', sentences: ['I have learned critical thinking skills from studying this subject.', 'I have learned to appreciate different perspectives from studying this subject.', 'I have learned practical problem-solving from studying this subject.'] },
        { emoji: '🎯', template: 'This subject is useful for my future because _____', sentences: ['This subject is useful for my future because it develops analytical skills.', 'This subject is useful for my future because it relates to my dream career.', 'This subject is useful for my future because it teaches me how to think clearly.'] },
      ],
      modelSentences: [
        { emoji: '🏫', scene: 'A school building with students', sentences: ['I look forward to going to school especially on days with my favorite class.', 'The classroom environment makes learning this subject enjoyable.', 'My school offers excellent resources for this subject area.'] },
        { emoji: '📖', scene: 'An open textbook on a desk', sentences: ['Reading the textbook for this class never feels boring to me.', 'I often read extra chapters because the content is so fascinating.', 'The study materials are well-designed and easy to understand.'] },
        { emoji: '👩‍🏫', scene: 'A teacher explaining at a whiteboard', sentences: ['My teacher\'s passion for the subject is truly inspiring.', 'She always finds creative ways to explain difficult concepts.', 'A great teacher can make any subject come alive.'] },
        { emoji: '🎓', scene: 'A graduation cap and diploma', sentences: ['This subject has prepared me well for my future studies.', 'The skills I learn here will benefit me long after graduation.', 'I hope to continue studying this field at university.'] },
        { emoji: '💻', scene: 'A laptop used for online learning', sentences: ['Online resources have helped me explore this subject even deeper.', 'I watch educational videos to supplement what I learn in class.', 'Technology has made studying this subject more interactive and engaging.'] },
      ],
      transitionWords: ['To begin with', 'The reason is', 'What I enjoy most', 'Furthermore', 'In short'],
      openingStatement: 'My favorite subject in school is history because it fascinates me to learn how past events have shaped our world.',
      closingStatement: 'History has taught me to think critically and appreciate the complexity of human experience.',
      fullModelResponse: 'My favorite subject in school is history because it fascinates me to learn how past events have shaped our world. To begin with, I have always been curious about why things are the way they are, and history provides those answers. The reason is that every historical event connects to something happening today, which makes the subject feel relevant and alive. What I enjoy most is when my teacher uses stories and primary sources to bring historical figures to life — it feels like time travel. Furthermore, studying history has improved my critical thinking and writing skills because I have to analyze evidence and form arguments. I also use online documentaries and articles to explore topics beyond what we cover in class. In short, history is my favorite subject because it satisfies my curiosity, develops important skills, and helps me understand the world around me.',
    },
  },
  {
    id: 'school-q2',
    questionText: 'Good. Do you prefer learning in a traditional classroom or through online classes? Why?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: schoolCards,
      phraseFrames: [
        { emoji: '🏫', template: 'Traditional classrooms are better because _____', sentences: ['Traditional classrooms are better because you can interact with classmates directly.', 'Traditional classrooms are better because the teacher can give immediate feedback.', 'Traditional classrooms are better because there are fewer distractions.'] },
        { emoji: '💻', template: 'Online learning is convenient because _____', sentences: ['Online learning is convenient because you can study from anywhere.', 'Online learning is convenient because you can replay recorded lectures.', 'Online learning is convenient because you can learn at your own pace.'] },
        { emoji: '🤔', template: 'The main challenge with _____ is _____', sentences: ['The main challenge with online learning is staying motivated.', 'The main challenge with traditional classes is the fixed schedule.', 'The main challenge with both formats is maintaining focus.'] },
        { emoji: '👍', template: 'I prefer _____ because it helps me _____', sentences: ['I prefer classroom learning because it helps me stay disciplined.', 'I prefer online learning because it helps me manage my time better.', 'I prefer a mix because it helps me get the best of both approaches.'] },
      ],
      modelSentences: [
        { emoji: '🏫', scene: 'A school building with students', sentences: ['Being physically present in school keeps me focused and engaged.', 'The social aspect of school is just as important as the academic side.', 'I learn best when I can raise my hand and ask questions immediately.'] },
        { emoji: '📖', scene: 'An open textbook on a desk', sentences: ['In a classroom, I can study with friends and share notes easily.', 'Group study sessions after class have been very helpful for me.', 'Physical textbooks and materials feel more natural for my learning style.'] },
        { emoji: '👩‍🏫', scene: 'A teacher explaining at a whiteboard', sentences: ['Face-to-face instruction is more personal and engaging for me.', 'Teachers can read our expressions and adjust their teaching accordingly.', 'The bond between teacher and student is stronger in person.'] },
        { emoji: '🎓', scene: 'A graduation cap and diploma', sentences: ['Traditional education provides a structured path toward graduation.', 'The discipline of attending classes in person prepares you for work.', 'Classroom habits build skills that are valuable throughout your career.'] },
        { emoji: '💻', scene: 'A laptop used for online learning', sentences: ['I appreciate having online resources available alongside my classes.', 'Recorded lectures are helpful when I need to review difficult material.', 'The ideal format combines in-person teaching with digital tools.'] },
      ],
      transitionWords: ['Personally', 'The main reason', 'In addition', 'Although', 'All in all'],
      openingStatement: 'I prefer learning in a traditional classroom, although I appreciate some benefits of online education.',
      closingStatement: 'For me, the personal interaction and structure of a physical classroom create the best learning environment.',
      fullModelResponse: 'I prefer learning in a traditional classroom, although I appreciate some benefits of online education. Personally, I find that being physically present in a classroom helps me stay focused and engaged with the material. The main reason is that I can interact directly with my teacher and classmates, which makes learning more dynamic and social. In addition, the structured schedule of attending classes in person helps me stay disciplined and organized. Although online learning offers great flexibility — like being able to replay lectures or study at your own pace — I find it harder to stay motivated when learning from home with so many distractions. All in all, while I think online tools are excellent supplements to traditional education, I believe the in-person classroom experience is more effective for deep learning and personal growth.',
    },
  },
  {
    id: 'school-q3',
    questionText: 'Interesting. Now I\'d like to hear your opinion. Some people think students should specialize in one subject early, while others believe a broad education is better. Which view do you support?',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: schoolCards,
      phraseFrames: [
        { emoji: '🎯', template: 'Specializing early is good because _____', sentences: ['Specializing early is good because students can develop deep expertise.', 'Specializing early is good because it prepares students for specific careers.', 'Specializing early is good because it allows students to discover their passion sooner.'] },
        { emoji: '🌐', template: 'A broad education is valuable because _____', sentences: ['A broad education is valuable because it develops well-rounded thinkers.', 'A broad education is valuable because students discover unexpected interests.', 'A broad education is valuable because many jobs require diverse skills.'] },
        { emoji: '📊', template: 'The risk of specializing too early is _____', sentences: ['The risk of specializing too early is that students may miss other talents.', 'The risk of specializing too early is that career interests may change.', 'The risk of specializing too early is a narrow worldview.'] },
        { emoji: '💡', template: 'The ideal approach would be _____', sentences: ['The ideal approach would be a broad foundation followed by gradual specialization.', 'The ideal approach would be letting students explore before choosing a focus.', 'The ideal approach would be combining core subjects with elective depth.'] },
      ],
      modelSentences: [
        { emoji: '🏫', scene: 'A school building with students', sentences: ['My school offers both required courses and electives, which I think works well.', 'Having exposure to many subjects helped me discover my true interests.', 'A good school gives students room to explore before specializing.'] },
        { emoji: '📖', scene: 'An open textbook on a desk', sentences: ['Reading widely across subjects has given me a broader perspective.', 'Knowledge from different fields often connects in surprising ways.', 'I use skills from multiple subjects in my daily life.'] },
        { emoji: '👩‍🏫', scene: 'A teacher explaining at a whiteboard', sentences: ['My teachers encourage us to be curious about all subjects.', 'The best teachers show how different disciplines connect to each other.', 'A broad education helps students appreciate every teacher\'s expertise.'] },
        { emoji: '🎓', scene: 'A graduation cap and diploma', sentences: ['Universities increasingly value students with diverse knowledge.', 'Graduates who can think across disciplines are highly sought after.', 'A broad education prepares students for a rapidly changing job market.'] },
        { emoji: '💻', scene: 'A laptop used for online learning', sentences: ['Technology careers increasingly require knowledge from many fields.', 'Online learning makes it easy to explore subjects outside your specialty.', 'Digital tools help students combine interests from different areas.'] },
      ],
      transitionWords: ['I support', 'To start', 'Moreover', 'Critics may say', 'Therefore'],
      openingStatement: 'I believe a broad education is more beneficial than early specialization for most students.',
      closingStatement: 'A broad educational foundation gives students the flexibility and knowledge they need to succeed in an unpredictable future.',
      fullModelResponse: 'I believe a broad education is more beneficial than early specialization for most students. I support this view because young people are still discovering their interests and abilities, and narrowing their focus too soon could cause them to miss their true calling. To start, a broad education develops critical thinking, creativity, and communication skills that are valuable in any career. Moreover, the modern job market changes rapidly, and workers who can adapt and draw on diverse knowledge have a significant advantage. Critics may say that specialization leads to deeper expertise, which is true, but I think that depth should come after students have explored enough to make an informed choice. Many successful people changed their career direction after being exposed to unexpected subjects. Therefore, I believe schools should provide a strong general foundation first, then gradually allow students to specialize based on genuine interest and informed decision-making.',
    },
  },
  {
    id: 'school-q4',
    questionText: 'Great thoughts. Final question. Do you think homework is necessary for learning, or should students have more free time after school? Give reasons for your answer.',
    targetDuration: 45,
    studyContent: {
      vocabularyCards: schoolCards,
      phraseFrames: [
        { emoji: '📝', template: 'Homework is important because _____', sentences: ['Homework is important because it reinforces what was taught in class.', 'Homework is important because it builds independent study habits.', 'Homework is important because it helps teachers assess understanding.'] },
        { emoji: '⚽', template: 'Free time after school is valuable because _____', sentences: ['Free time after school is valuable because students need rest and recreation.', 'Free time after school is valuable because it allows for creative exploration.', 'Free time after school is valuable because it reduces stress and prevents burnout.'] },
        { emoji: '⚖️', template: 'The right balance is _____', sentences: ['The right balance is a small amount of meaningful homework each day.', 'The right balance is homework that is purposeful, not just busywork.', 'The right balance is leaving enough time for hobbies and relaxation.'] },
        { emoji: '🧠', template: 'Students learn best when _____', sentences: ['Students learn best when they have time to process information.', 'Students learn best when homework is engaging and relevant.', 'Students learn best when they are not overwhelmed by assignments.'] },
      ],
      modelSentences: [
        { emoji: '🏫', scene: 'A school building with students', sentences: ['My school assigns a moderate amount of homework each night.', 'Some assignments are very helpful, while others feel like busywork.', 'The best homework connects directly to what we learned that day.'] },
        { emoji: '📖', scene: 'An open textbook on a desk', sentences: ['Reviewing my textbook at home helps me remember key concepts.', 'Practice problems are the most useful type of homework for me.', 'I retain information better when I study it again after class.'] },
        { emoji: '👩‍🏫', scene: 'A teacher explaining at a whiteboard', sentences: ['Good teachers assign homework that genuinely supports learning.', 'Some teachers give too much homework without considering students\' well-being.', 'The most effective homework is purposeful and takes a reasonable amount of time.'] },
        { emoji: '🎓', scene: 'A graduation cap and diploma', sentences: ['Developing good study habits now will help me succeed in university.', 'Learning to manage homework teaches important time management skills.', 'However, burnout from excessive homework can harm long-term academic motivation.'] },
        { emoji: '💻', scene: 'A laptop used for online learning', sentences: ['Online homework platforms can make assignments more interactive.', 'Technology allows for personalized homework that targets individual weaknesses.', 'Digital tools can make homework more efficient and less time-consuming.'] },
      ],
      transitionWords: ['I believe', 'On one hand', 'On the other hand', 'The key point is', 'To conclude'],
      openingStatement: 'I believe homework is necessary but should be limited to allow students adequate free time.',
      closingStatement: 'The goal should be quality over quantity — meaningful homework that supports learning without overwhelming students.',
      fullModelResponse: 'I believe homework is necessary but should be limited to allow students adequate free time. On one hand, homework helps reinforce what we learn in class and builds important study habits. For example, practicing math problems at home helps me truly understand the concepts rather than just memorizing them during the lesson. On the other hand, too much homework leaves students exhausted, stressed, and without time for physical activities, hobbies, or socializing — all of which are essential for healthy development. The key point is that homework should be meaningful and purposeful, not just given to fill time. A short, focused review of the day\'s lesson is far more effective than hours of repetitive exercises. Teachers should consider the total workload across all subjects before assigning additional work. To conclude, I support a balanced approach where moderate, high-quality homework complements sufficient free time for students to rest, play, and pursue their own interests.',
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
  },
  {
    id: 'reading',
    title: 'Reading & Learning',
    emojis: '📚🔍🧠✍️🌙',
    color: '#2196F3',
    questions: readingQuestions,
  },
  {
    id: 'technology',
    title: 'Technology & Social Media',
    emojis: '📱💻🤖🔔🌐',
    color: '#9C27B0',
    questions: technologyQuestions,
  },
  {
    id: 'food',
    title: 'Food & Cooking',
    emojis: '🍳🥗🏪👨‍🍳🍽️',
    color: '#FF9800',
    questions: foodQuestions,
  },
  {
    id: 'travel',
    title: 'Travel & Adventure',
    emojis: '✈️🗺️📸🏨🌍',
    color: '#00BCD4',
    questions: travelQuestions,
  },
  {
    id: 'friends',
    title: 'Friends & Social Life',
    emojis: '👫🎉🎮💬🏠',
    color: '#E91E63',
    questions: friendsQuestions,
  },
  {
    id: 'environment',
    title: 'Environment & Nature',
    emojis: '🌳🏭♻️🌊☀️',
    color: '#388E3C',
    questions: environmentQuestions,
  },
  
  ,
];
