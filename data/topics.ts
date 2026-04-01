import { Topic } from './types';

const makeLevels = (
  cards: { emoji: string; scene: string; vocab: { basic: string[]; intermediate: string[]; advanced: string[] } }[],
  phrases: { template: string; example: string }[],
  sentences: string[],
  transitions: string[],
  opening: string,
  closing: string,
  fullResponse: string,
  toeflQuestion: string,
) => {
  const emojiCards = cards.map((c, i) => ({
    id: `card-${i}`,
    emoji: c.emoji,
    scene: c.scene,
    vocabHints: [
      ...c.vocab.basic.map(w => ({ word: w, level: 'basic' as const })),
      ...c.vocab.intermediate.map(w => ({ word: w, level: 'intermediate' as const })),
      ...c.vocab.advanced.map(w => ({ word: w, level: 'advanced' as const })),
    ],
  }));

  const studyContent = {
    vocabularyCards: emojiCards,
    phraseFrames: phrases,
    modelSentences: sentences,
    transitionWords: transitions,
    openingStatement: opening,
    closingStatement: closing,
    fullModelResponse: fullResponse,
  };

  return [1, 2, 3, 4, 5].map(level => ({
    level: level as 1 | 2 | 3 | 4 | 5,
    title: ['Word Retrieval', 'Phrase Building', 'Single Sentence', 'Sentence Chaining', 'Full TOEFL Response'][level - 1],
    description: [
      'Look at each emoji and say the word it represents.',
      'Use emojis to build short descriptive phrases.',
      'Combine all emojis into one complete sentence.',
      'Create one sentence per emoji card, chaining them into a paragraph.',
      'Deliver a full 45-second TOEFL response using sentence frames.',
    ][level - 1],
    targetDuration: [10, 15, 20, 30, 45][level - 1],
    studyContent,
    ...(level === 5 ? { tofelQuestion: toeflQuestion } : {}),
  }));
};

export const TOPICS: Topic[] = [
  {
    id: 'exercise',
    title: 'Exercise & Health',
    emojis: '🏃‍♀️⏰🌅💪🥤',
    color: '#FF6B6B',
    levels: makeLevels(
      [
        {
          emoji: '🏃‍♀️',
          scene: 'A person running outdoors',
          vocab: {
            basic: ['run', 'jog', 'walk'],
            intermediate: ['exercise', 'workout', 'cardio'],
            advanced: ['aerobic activity', 'physical endurance', 'fitness routine'],
          },
        },
        {
          emoji: '⏰',
          scene: 'An alarm clock set for early morning',
          vocab: {
            basic: ['morning', 'early', 'wake up'],
            intermediate: ['alarm', 'schedule', 'routine'],
            advanced: ['disciplined schedule', 'consistent habit', 'time management'],
          },
        },
        {
          emoji: '🌅',
          scene: 'Sunrise over the horizon',
          vocab: {
            basic: ['sunrise', 'morning', 'bright'],
            intermediate: ['fresh air', 'peaceful', 'energizing'],
            advanced: ['invigorating atmosphere', 'tranquil environment', 'rejuvenating'],
          },
        },
        {
          emoji: '💪',
          scene: 'Strong muscle flex after exercise',
          vocab: {
            basic: ['strong', 'fit', 'healthy'],
            intermediate: ['strength', 'muscle', 'stamina'],
            advanced: ['physical conditioning', 'muscular endurance', 'athletic performance'],
          },
        },
        {
          emoji: '🥤',
          scene: 'A protein shake or sports drink',
          vocab: {
            basic: ['drink', 'water', 'juice'],
            intermediate: ['hydration', 'protein shake', 'nutrition'],
            advanced: ['post-workout recovery', 'nutritional supplement', 'replenishment'],
          },
        },
      ],
      [
        { template: 'I usually _____ in the _____', example: 'I usually jog in the morning' },
        { template: 'Every day I wake up at _____ to _____', example: 'Every day I wake up at 6am to exercise' },
        { template: 'After working out, I feel _____', example: 'After working out, I feel energized' },
        { template: 'I drink _____ to _____', example: 'I drink water to stay hydrated' },
      ],
      [
        'I go for a morning jog every day.',
        'I set my alarm for 6 AM to start my routine early.',
        'The fresh sunrise air makes my workout feel refreshing.',
        'Regular exercise has made me noticeably stronger.',
        'I always drink a protein shake after working out.',
      ],
      ['First', 'Then', 'After that', 'Finally', 'As a result'],
      'I try to stay healthy by following a consistent morning exercise routine.',
      'This habit has greatly improved both my physical health and daily energy levels.',
      'I try to stay healthy by following a consistent morning exercise routine. First, I wake up at six AM when my alarm goes off. Then I head outside to jog as the sun rises — the fresh air is incredibly invigorating. After a thirty-minute run, I do some strength training to build muscle. Finally, I drink a protein shake to help my body recover. As a result of this routine, I feel stronger and more energetic throughout the day. I believe regular exercise is essential for managing stress and maintaining good health, especially as a student.',
      'Describe a healthy habit you have. Why is it important to you?',
    ),
  },
  {
    id: 'reading',
    title: 'Reading & Learning',
    emojis: '📚☕🪑💡🎓',
    color: '#4ECDC4',
    levels: makeLevels(
      [
        {
          emoji: '📚',
          scene: 'A stack of books on a shelf',
          vocab: {
            basic: ['book', 'read', 'story'],
            intermediate: ['literature', 'novel', 'knowledge'],
            advanced: ['intellectual enrichment', 'academic resource', 'literary work'],
          },
        },
        {
          emoji: '☕',
          scene: 'A warm cup of coffee or tea',
          vocab: {
            basic: ['coffee', 'drink', 'warm'],
            intermediate: ['relaxing', 'cozy', 'comfortable'],
            advanced: ['conducive atmosphere', 'ambient comfort', 'serene setting'],
          },
        },
        {
          emoji: '🪑',
          scene: 'A comfortable reading chair',
          vocab: {
            basic: ['chair', 'sit', 'relax'],
            intermediate: ['comfortable', 'quiet spot', 'reading nook'],
            advanced: ['designated study space', 'ergonomic environment', 'focused retreat'],
          },
        },
        {
          emoji: '💡',
          scene: 'A light bulb representing an idea',
          vocab: {
            basic: ['idea', 'think', 'learn'],
            intermediate: ['insight', 'understand', 'discover'],
            advanced: ['intellectual revelation', 'conceptual breakthrough', 'cognitive stimulation'],
          },
        },
        {
          emoji: '🎓',
          scene: 'A graduation cap representing achievement',
          vocab: {
            basic: ['school', 'study', 'smart'],
            intermediate: ['education', 'achievement', 'degree'],
            advanced: ['academic accomplishment', 'scholarly pursuit', 'lifelong learning'],
          },
        },
      ],
      [
        { template: 'I love reading _____ because _____', example: 'I love reading novels because they expand my imagination' },
        { template: 'My favorite place to read is _____ with a cup of _____', example: 'My favorite place to read is my armchair with a cup of tea' },
        { template: 'Reading helps me _____', example: 'Reading helps me improve my vocabulary' },
        { template: 'Every time I finish a book, I feel _____', example: 'Every time I finish a book, I feel accomplished' },
      ],
      [
        'I enjoy reading a variety of books in my free time.',
        'I like to settle into my armchair with a hot cup of tea.',
        'My cozy reading corner helps me focus and stay relaxed.',
        'Reading regularly gives me new ideas and perspectives.',
        'Books have helped shape my academic goals and future plans.',
      ],
      ['To begin with', 'In addition', 'Moreover', 'As a result', 'Overall'],
      'Reading is one of my favorite hobbies and a key part of how I learn.',
      'I believe that developing a reading habit is one of the best investments in your future.',
      'Reading is one of my favorite hobbies and a key part of how I learn. To begin with, I try to read for at least thirty minutes every evening. I usually sit in my comfortable chair with a hot cup of tea, which helps me concentrate. In addition, I read a wide range of books — from fiction to academic texts. Moreover, reading has dramatically improved my vocabulary and critical thinking skills. As a result, I perform better in my studies and feel more confident expressing ideas. Overall, I believe reading is one of the most valuable habits a student can develop for both academic and personal growth.',
      'Talk about a hobby or activity that has helped you in your studies.',
    ),
  },
  {
    id: 'technology',
    title: 'Technology & Social Media',
    emojis: '📱💻🌐👥🔔',
    color: '#45B7D1',
    levels: makeLevels(
      [
        {
          emoji: '📱',
          scene: 'A smartphone with various apps',
          vocab: {
            basic: ['phone', 'app', 'screen'],
            intermediate: ['smartphone', 'social media', 'notification'],
            advanced: ['digital device', 'mobile technology', 'user interface'],
          },
        },
        {
          emoji: '💻',
          scene: 'A laptop open on a desk',
          vocab: {
            basic: ['computer', 'work', 'type'],
            intermediate: ['laptop', 'online', 'research'],
            advanced: ['digital workspace', 'remote productivity', 'computing device'],
          },
        },
        {
          emoji: '🌐',
          scene: 'A globe representing the internet',
          vocab: {
            basic: ['internet', 'web', 'connect'],
            intermediate: ['global network', 'information', 'browse'],
            advanced: ['digital connectivity', 'information ecosystem', 'worldwide web'],
          },
        },
        {
          emoji: '👥',
          scene: 'Two people representing online friends',
          vocab: {
            basic: ['friends', 'people', 'share'],
            intermediate: ['community', 'network', 'communicate'],
            advanced: ['virtual community', 'social interaction', 'online collaboration'],
          },
        },
        {
          emoji: '🔔',
          scene: 'A notification bell',
          vocab: {
            basic: ['alert', 'message', 'update'],
            intermediate: ['notification', 'distraction', 'attention'],
            advanced: ['digital interruption', 'information overload', 'constant connectivity'],
          },
        },
      ],
      [
        { template: 'I use my phone to _____ every _____', example: 'I use my phone to check social media every morning' },
        { template: 'Technology helps me _____ but can also _____', example: 'Technology helps me stay connected but can also be distracting' },
        { template: 'I spend about _____ hours online each _____', example: 'I spend about three hours online each day' },
        { template: 'Too many notifications make me feel _____', example: 'Too many notifications make me feel overwhelmed' },
      ],
      [
        'I use my smartphone for studying and staying connected.',
        'My laptop is essential for doing research and completing assignments.',
        'The internet gives me access to information from around the world.',
        'Social media helps me connect with friends and classmates online.',
        'I try to manage notifications to avoid constant distractions.',
      ],
      ['Firstly', 'On the other hand', 'However', 'For example', 'In conclusion'],
      'Technology plays a huge role in both my daily life and my studies.',
      'I think it is important to use technology wisely to maximize its benefits while minimizing distractions.',
      'Technology plays a huge role in both my daily life and my studies. Firstly, I use my smartphone and laptop every day to research topics, take notes, and communicate with classmates. On the other hand, social media can be a significant distraction — I sometimes spend too much time scrolling through notifications. However, I have learned to set screen time limits to stay focused. For example, I turn off non-essential notifications during study hours. In conclusion, while technology is an invaluable tool for modern students, I believe it is essential to use it mindfully and maintain a healthy balance between online and offline activities.',
      'What is the impact of social media on students? Discuss the advantages and disadvantages.',
    ),
  },
  {
    id: 'food',
    title: 'Food & Cooking',
    emojis: '🍳🥗🍽️👨‍🍳🛒',
    color: '#FFA07A',
    levels: makeLevels(
      [
        {
          emoji: '🍳',
          scene: 'A frying pan cooking eggs',
          vocab: {
            basic: ['cook', 'egg', 'hot'],
            intermediate: ['fry', 'prepare', 'breakfast'],
            advanced: ['culinary technique', 'sauté', 'gastronomy'],
          },
        },
        {
          emoji: '🥗',
          scene: 'A colorful vegetable salad',
          vocab: {
            basic: ['salad', 'vegetables', 'healthy'],
            intermediate: ['nutritious', 'fresh ingredients', 'balanced meal'],
            advanced: ['nutrient-rich', 'wholesome diet', 'dietary balance'],
          },
        },
        {
          emoji: '🍽️',
          scene: 'A plate ready for a meal',
          vocab: {
            basic: ['plate', 'eat', 'meal'],
            intermediate: ['dinner', 'serve', 'portion'],
            advanced: ['dining experience', 'culinary presentation', 'meal preparation'],
          },
        },
        {
          emoji: '👨‍🍳',
          scene: 'A chef preparing food',
          vocab: {
            basic: ['chef', 'cook', 'kitchen'],
            intermediate: ['recipe', 'skill', 'technique'],
            advanced: ['culinary expertise', 'gastronomic art', 'professional chef'],
          },
        },
        {
          emoji: '🛒',
          scene: 'A shopping cart at the grocery store',
          vocab: {
            basic: ['shop', 'buy', 'food'],
            intermediate: ['grocery', 'ingredients', 'market'],
            advanced: ['sourcing ingredients', 'meal planning', 'food procurement'],
          },
        },
      ],
      [
        { template: 'I enjoy cooking _____ because _____', example: 'I enjoy cooking stir-fry because it is quick and healthy' },
        { template: 'My favorite meal is _____ made with _____', example: 'My favorite meal is salad made with fresh vegetables' },
        { template: 'I go grocery shopping _____ to buy _____', example: 'I go grocery shopping weekly to buy fresh ingredients' },
        { template: 'Learning to cook has taught me _____', example: 'Learning to cook has taught me patience and creativity' },
      ],
      [
        'I like to cook simple but nutritious meals at home.',
        'A fresh salad is my go-to healthy meal during busy days.',
        'I enjoy setting the table and making meals feel special.',
        'Cooking has taught me important life skills and creativity.',
        'I plan my meals ahead by shopping for fresh ingredients weekly.',
      ],
      ['To start with', 'Additionally', 'Furthermore', 'As a result', 'In summary'],
      'Cooking is a hobby I truly enjoy, and it helps me maintain a healthy lifestyle.',
      'I believe cooking your own meals is one of the best ways to take control of your health.',
      'Cooking is a hobby I truly enjoy, and it helps me maintain a healthy lifestyle. To start with, I try to prepare most of my meals at home using fresh ingredients. I usually make simple dishes like stir-fry, salads, and soups that are both nutritious and easy to make. Additionally, cooking has taught me valuable skills like planning and patience. Furthermore, preparing my own meals saves money compared to eating out every day. As a result, I feel healthier and more in control of what I eat. In summary, I believe that knowing how to cook is an essential life skill that benefits both your health and your budget.',
      'Describe a meal you enjoy preparing. Why do you like making it?',
    ),
  },
  {
    id: 'travel',
    title: 'Travel & Adventure',
    emojis: '✈️🗺️📸🏔️🌊',
    color: '#98D8C8',
    levels: makeLevels(
      [
        {
          emoji: '✈️',
          scene: 'An airplane flying through the sky',
          vocab: {
            basic: ['fly', 'plane', 'trip'],
            intermediate: ['travel', 'flight', 'destination'],
            advanced: ['international travel', 'air transportation', 'journey abroad'],
          },
        },
        {
          emoji: '🗺️',
          scene: 'A map for navigation and exploration',
          vocab: {
            basic: ['map', 'find', 'go'],
            intermediate: ['navigate', 'explore', 'route'],
            advanced: ['geographical exploration', 'navigate unfamiliar terrain', 'itinerary planning'],
          },
        },
        {
          emoji: '📸',
          scene: 'A camera capturing memories',
          vocab: {
            basic: ['photo', 'camera', 'picture'],
            intermediate: ['capture memories', 'photography', 'document'],
            advanced: ['visual documentation', 'preserve memories', 'photographic record'],
          },
        },
        {
          emoji: '🏔️',
          scene: 'A mountain peak in the distance',
          vocab: {
            basic: ['mountain', 'high', 'climb'],
            intermediate: ['hiking', 'summit', 'adventure'],
            advanced: ['mountaineering', 'rugged terrain', 'breathtaking vista'],
          },
        },
        {
          emoji: '🌊',
          scene: 'Ocean waves on a beach',
          vocab: {
            basic: ['ocean', 'wave', 'beach'],
            intermediate: ['coastal', 'serene', 'tropical'],
            advanced: ['marine environment', 'coastal landscape', 'oceanic expanse'],
          },
        },
      ],
      [
        { template: 'My dream destination is _____ because _____', example: 'My dream destination is Japan because of its rich culture' },
        { template: 'When I travel, I always bring _____ to _____', example: 'When I travel, I always bring a camera to capture memories' },
        { template: 'Traveling has taught me _____', example: 'Traveling has taught me to appreciate different cultures' },
        { template: 'I prefer _____ over _____ when I travel', example: 'I prefer mountains over beaches when I travel' },
      ],
      [
        'I love traveling to new places and experiencing different cultures.',
        'Whenever I travel, I use a map to plan my route carefully.',
        'Photography is my favorite way to capture travel memories.',
        'Hiking in the mountains is one of my favorite travel activities.',
        'I dream of someday visiting tropical beaches around the world.',
      ],
      ['First of all', 'Not only that', 'In particular', 'Most importantly', 'To conclude'],
      'Traveling is one of my greatest passions because it broadens my worldview.',
      'Every journey has taught me something new about the world and about myself.',
      'Traveling is one of my greatest passions because it broadens my worldview. First of all, I love the excitement of boarding a plane to a new destination. Not only that, but exploring unfamiliar places by map helps me develop independence and problem-solving skills. In particular, I enjoy photographing landscapes and local culture as a way to preserve memories. I have always dreamed of hiking to a mountain summit and then relaxing by the ocean in the same trip. Most importantly, travel has taught me to appreciate different perspectives and ways of life. To conclude, I believe that every person should experience traveling — it changes how you see the world.',
      'Describe a place you would like to visit. Why does it appeal to you?',
    ),
  },
  {
    id: 'friends',
    title: 'Friends & Social Life',
    emojis: '👫🎉🎮💬🏠',
    color: '#DDA0DD',
    levels: makeLevels(
      [
        {
          emoji: '👫',
          scene: 'Two friends walking together',
          vocab: {
            basic: ['friend', 'together', 'happy'],
            intermediate: ['friendship', 'companion', 'bond'],
            advanced: ['social connection', 'interpersonal relationship', 'meaningful bond'],
          },
        },
        {
          emoji: '🎉',
          scene: 'A party or celebration',
          vocab: {
            basic: ['party', 'fun', 'celebrate'],
            intermediate: ['gathering', 'event', 'occasion'],
            advanced: ['social gathering', 'celebratory event', 'festive occasion'],
          },
        },
        {
          emoji: '🎮',
          scene: 'A game controller for video gaming',
          vocab: {
            basic: ['game', 'play', 'fun'],
            intermediate: ['video game', 'online gaming', 'entertainment'],
            advanced: ['interactive entertainment', 'competitive gaming', 'virtual recreation'],
          },
        },
        {
          emoji: '💬',
          scene: 'Chat bubbles representing conversation',
          vocab: {
            basic: ['talk', 'chat', 'message'],
            intermediate: ['conversation', 'communicate', 'discuss'],
            advanced: ['meaningful dialogue', 'interpersonal communication', 'discourse'],
          },
        },
        {
          emoji: '🏠',
          scene: 'A home where friends gather',
          vocab: {
            basic: ['home', 'house', 'visit'],
            intermediate: ['hangout', 'host', 'gathering'],
            advanced: ['social environment', 'communal space', 'welcoming atmosphere'],
          },
        },
      ],
      [
        { template: 'My best friend and I always _____', example: 'My best friend and I always talk about everything' },
        { template: 'On weekends, my friends and I like to _____', example: 'On weekends, my friends and I like to play games at home' },
        { template: 'Good friends make me feel _____ because _____', example: 'Good friends make me feel supported because they listen' },
        { template: 'We usually celebrate _____ by _____', example: 'We usually celebrate birthdays by having dinner together' },
      ],
      [
        'Having good friends is one of the most important parts of my life.',
        'My friends and I love celebrating special occasions together.',
        'We often spend evenings playing video games and relaxing.',
        'Meaningful conversations help deepen our friendship.',
        'Hanging out at someone\'s home is my favorite way to spend time.',
      ],
      ['Above all', 'In addition', 'For instance', 'Because of this', 'In the end'],
      'Friendship is incredibly important to me, and I cherish the time I spend with close friends.',
      'True friendships are built on trust, communication, and shared experiences.',
      'Friendship is incredibly important to me, and I cherish the time I spend with close friends. Above all, I value friends who I can talk to openly and honestly about anything. In addition, my friends and I enjoy spending time together — whether celebrating special events or simply playing games at home. For instance, last month we organized a small party at my place that was really memorable. Because of these shared experiences, our bonds have grown much stronger over time. We also stay in touch through regular chats and messages when we cannot meet in person. In the end, I believe that close friendships are one of the greatest sources of happiness in life.',
      'Describe someone who has been an important friend in your life. What makes them special?',
    ),
  },
  {
    id: 'environment',
    title: 'Environment & Nature',
    emojis: '🌳♻️🚲🏭🌍',
    color: '#90EE90',
    levels: makeLevels(
      [
        {
          emoji: '🌳',
          scene: 'A tall green tree in a park',
          vocab: {
            basic: ['tree', 'green', 'nature'],
            intermediate: ['forest', 'ecosystem', 'wildlife'],
            advanced: ['biodiversity', 'natural habitat', 'ecological system'],
          },
        },
        {
          emoji: '♻️',
          scene: 'Recycling symbol representing sustainability',
          vocab: {
            basic: ['recycle', 'reuse', 'clean'],
            intermediate: ['sustainability', 'environment', 'reduce waste'],
            advanced: ['sustainable practice', 'circular economy', 'environmental stewardship'],
          },
        },
        {
          emoji: '🚲',
          scene: 'A bicycle as eco-friendly transport',
          vocab: {
            basic: ['bike', 'ride', 'clean'],
            intermediate: ['eco-friendly', 'transportation', 'emissions'],
            advanced: ['carbon-neutral transport', 'sustainable commuting', 'low-emission vehicle'],
          },
        },
        {
          emoji: '🏭',
          scene: 'A factory with smoke representing pollution',
          vocab: {
            basic: ['factory', 'smoke', 'pollution'],
            intermediate: ['industry', 'emissions', 'carbon footprint'],
            advanced: ['industrial pollution', 'greenhouse gas emissions', 'environmental degradation'],
          },
        },
        {
          emoji: '🌍',
          scene: 'The Earth from space',
          vocab: {
            basic: ['earth', 'planet', 'world'],
            intermediate: ['environment', 'climate', 'global'],
            advanced: ['climate change', 'global ecosystem', 'planetary health'],
          },
        },
      ],
      [
        { template: 'I try to protect the environment by _____', example: 'I try to protect the environment by recycling regularly' },
        { template: 'Riding a bike instead of driving helps _____', example: 'Riding a bike instead of driving helps reduce pollution' },
        { template: 'I am concerned about _____ because _____', example: 'I am concerned about climate change because it affects everyone' },
        { template: 'Small changes like _____ can make a big difference', example: 'Small changes like turning off lights can make a big difference' },
      ],
      [
        'I care deeply about protecting the natural environment.',
        'I recycle and reduce waste as part of my daily habits.',
        'I ride my bicycle to reduce my personal carbon footprint.',
        'Industrial pollution is a serious threat to our planet.',
        'Every individual has a responsibility to protect the Earth.',
      ],
      ['First and foremost', 'Additionally', 'On the other hand', 'For this reason', 'Ultimately'],
      'Environmental protection is something I feel strongly about, and I try to live sustainably.',
      'I believe that every small action adds up, and together we can make a real difference for our planet.',
      'Environmental protection is something I feel strongly about, and I try to live sustainably. First and foremost, I recycle regularly and try to minimize the amount of waste I produce each day. Additionally, I ride my bicycle whenever possible rather than taking a car, which significantly reduces my carbon emissions. On the other hand, I am aware that individual action alone is not enough — industrial pollution remains one of the biggest threats to our planet. For this reason, I think governments and corporations must also take responsibility for reducing harmful emissions. Ultimately, protecting the Earth requires cooperation at every level of society, and I am committed to doing my part.',
      'What do you do to help protect the environment? Why is environmental action important?',
    ),
  },
  {
    id: 'school',
    title: 'School & Study Habits',
    emojis: '📝⏰📖🏫🎯',
    color: '#FFD700',
    levels: makeLevels(
      [
        {
          emoji: '📝',
          scene: 'A notebook with notes and a pen',
          vocab: {
            basic: ['notes', 'write', 'study'],
            intermediate: ['note-taking', 'organize', 'review'],
            advanced: ['academic note-taking', 'systematic review', 'information synthesis'],
          },
        },
        {
          emoji: '⏰',
          scene: 'A clock representing study time management',
          vocab: {
            basic: ['time', 'clock', 'schedule'],
            intermediate: ['time management', 'deadline', 'plan'],
            advanced: ['prioritization', 'efficient scheduling', 'time optimization'],
          },
        },
        {
          emoji: '📖',
          scene: 'An open textbook being studied',
          vocab: {
            basic: ['book', 'read', 'learn'],
            intermediate: ['textbook', 'review', 'comprehend'],
            advanced: ['academic study', 'critical reading', 'deep comprehension'],
          },
        },
        {
          emoji: '🏫',
          scene: 'A school building',
          vocab: {
            basic: ['school', 'class', 'teacher'],
            intermediate: ['classroom', 'lecture', 'campus'],
            advanced: ['academic institution', 'educational environment', 'scholastic community'],
          },
        },
        {
          emoji: '🎯',
          scene: 'A target representing academic goals',
          vocab: {
            basic: ['goal', 'target', 'success'],
            intermediate: ['achievement', 'objective', 'focus'],
            advanced: ['academic objective', 'goal-oriented', 'strategic planning'],
          },
        },
      ],
      [
        { template: 'My study routine involves _____ every _____', example: 'My study routine involves taking notes every class' },
        { template: 'I manage my time by _____ before _____', example: 'I manage my time by planning my week before Monday' },
        { template: 'My academic goal is _____ because _____', example: 'My academic goal is to pass the TOEFL because I want to study abroad' },
        { template: 'The most effective study strategy for me is _____', example: 'The most effective study strategy for me is active recall' },
      ],
      [
        'Taking clear, organized notes is a key part of my study routine.',
        'I always manage my time carefully to meet academic deadlines.',
        'Reviewing my textbook regularly helps me retain information.',
        'I love the atmosphere of studying at school with my classmates.',
        'I set clear academic goals to stay motivated and focused.',
      ],
      ['To begin', 'Furthermore', 'In particular', 'As a consequence', 'Looking ahead'],
      'I have developed strong study habits that help me succeed academically.',
      'I am always looking for ways to improve my learning strategies and reach my academic goals.',
      'I have developed strong study habits that help me succeed academically. To begin, I always take detailed notes during lectures and review them the same evening. Furthermore, I manage my time carefully by creating a weekly study schedule every Sunday. In particular, I dedicate extra time to subjects I find challenging, such as math and English writing. As a consequence, my grades have improved significantly over the past year. I also make it a point to ask teachers questions when I do not understand something. Looking ahead, my main academic goal is to earn a high TOEFL score so I can pursue higher education abroad. I am always looking for new strategies to learn more effectively.',
      'Describe your study habits. How do you stay organized and motivated as a student?',
    ),
  },
];
