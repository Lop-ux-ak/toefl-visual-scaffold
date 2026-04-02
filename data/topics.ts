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


;




  { emoji: '🏫', scene: 'A school building with students', vocab: { basic: ['school', 'class', 'teacher'], intermediate: ['education', 'curriculum', 'instruction'], advanced: ['academic institution', 'pedagogical approach', 'educational framework'] } },
  { emoji: '📖', scene: 'An open textbook on a desk', vocab: { basic: ['book', 'read', 'study'], intermediate: ['textbook', 'knowledge', 'academic'], advanced: ['scholarly resource', 'intellectual development', 'educational material'] } },
  { emoji: '👩‍🏫', scene: 'A teacher explaining at a whiteboard', vocab: { basic: ['teacher', 'learn', 'help'], intermediate: ['instructor', 'mentor', 'guidance'], advanced: ['pedagogical expertise', 'academic mentorship', 'instructional leadership'] } },
  { emoji: '🎓', scene: 'A graduation cap and diploma', vocab: { basic: ['graduate', 'finish', 'proud'], intermediate: ['achievement', 'degree', 'milestone'], advanced: ['academic accomplishment', 'commencement', 'scholarly distinction'] } },
  { emoji: '💻', scene: 'A laptop used for online learning', vocab: { basic: ['computer', 'internet', 'online'], intermediate: ['e-learning', 'digital classroom', 'virtual'], advanced: ['distance education', 'digital literacy', 'technology-enhanced learning'] } },
;


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
;

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
